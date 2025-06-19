// DashboardStats.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DashboardStats({ user, tg, language = 'ru' }) {
    const [dashboardStats, setDashboardStats] = useState(null)
    const [statsLoading, setStatsLoading] = useState(true)
    const [statsError, setStatsError] = useState(null)

    // Тексты для разных языков
    const texts = {
        ru: {
            statistics: 'Статистика',
            totalReports: 'Всего отчетов',
            last30Days: 'За 30 дней',
            last7Days: 'За 7 дней',
            averagePerDay: 'В среднем/день',
            lastReport: 'Последний отчет',
            today: 'Сегодня',
            yesterday: 'Вчера',
            daysAgo: 'дней назад',
            viewReport: 'Посмотреть →',
            byType: 'По типам отчетов',
            tryAgain: 'Попробовать снова',
            statsError: 'Ошибка загрузки статистики',
            serverError: 'Ошибка сервера',
            connectionError: 'Ошибка соединения'
        },
        uz: {
            statistics: 'Statistika',
            totalReports: 'Jami hisobotlar',
            last30Days: '30 kun ichida',
            last7Days: '7 kun ichida',
            averagePerDay: 'O\'rtacha/kun',
            lastReport: 'Oxirgi hisobot',
            today: 'Bugun',
            yesterday: 'Kecha',
            daysAgo: 'kun oldin',
            viewReport: 'Ko\'rish →',
            byType: 'Tur bo\'yicha',
            tryAgain: 'Qayta urinish',
            statsError: 'Statistikani yuklashda xatolik',
            serverError: 'Server xatosi',
            connectionError: 'Ulanish xatosi'
        },
        en: {
            statistics: 'Statistics',
            totalReports: 'Total Reports',
            last30Days: 'Last 30 days',
            last7Days: 'Last 7 days',
            averagePerDay: 'Average/day',
            lastReport: 'Last Report',
            today: 'Today',
            yesterday: 'Yesterday',
            daysAgo: 'days ago',
            viewReport: 'View →',
            byType: 'By Type',
            tryAgain: 'Try Again',
            statsError: 'Error loading statistics',
            serverError: 'Server error',
            connectionError: 'Connection error'
        }
    }

    const currentTexts = texts[language] || texts.ru

    // Функция загрузки статистики
    const fetchDashboardStats = async () => {
        if (!user || !tg?.initData) {
            setStatsLoading(false)
            return
        }

        try {
            setStatsLoading(true)
            setStatsError(null)

            console.log('📊 Loading dashboard stats...')

            const apiUrl = 'https://asmanenergy.com/wp-json/qogi/v1/dashboard/stats'

            const headers = {
                'Content-Type': 'application/json'
            }

            if (tg?.initData) {
                headers['X-Telegram-Init-Data'] = tg.initData
            }

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            })

            if (response.ok) {
                const result = await response.json()
                if (result.success) {
                    setDashboardStats(result.stats)
                    console.log('✅ Dashboard stats loaded:', result.stats)
                } else {
                    setStatsError(currentTexts.statsError)
                }
            } else if (response.status === 401) {
                setStatsError('Необходима авторизация')
            } else {
                setStatsError(currentTexts.serverError)
            }

        } catch (error) {
            console.error('💥 Stats fetch error:', error)
            setStatsError(currentTexts.connectionError)
        } finally {
            setStatsLoading(false)
        }
    }

    // Загружаем статистику при монтировании компонента
    useEffect(() => {
        if (user && tg?.initData) {
            fetchDashboardStats()
        }
    }, [user, tg?.initData])

    // Если нет пользователя, не показываем компонент
    if (!user) {
        return null
    }

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    {currentTexts.statistics}
                </h2>

                {/* Кнопка обновления */}
                <button
                    onClick={fetchDashboardStats}
                    disabled={statsLoading}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
                    title="Обновить статистику"
                >
                    <svg
                        className={`w-4 h-4 text-gray-600 ${statsLoading ? 'animate-spin' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>

            {statsLoading ? (
                // Loading состояние
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4 animate-pulse">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-6 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            ) : statsError ? (
                // Error состояние
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">{statsError}</span>
                    </div>
                    <button
                        onClick={fetchDashboardStats}
                        className="mt-2 text-red-600 text-sm underline hover:text-red-700"
                    >
                        {currentTexts.tryAgain}
                    </button>
                </div>
            ) : dashboardStats ? (
                // Основной контент
                <div className="space-y-4">
                    {/* Основная статистика в карточках */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Всего отчетов */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6v-2h8v2H6z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-blue-800 font-semibold text-lg">{dashboardStats.total_reports}</p>
                                    <p className="text-blue-600 text-xs">{currentTexts.totalReports}</p>
                                </div>
                            </div>
                        </div>

                        {/* За 30 дней */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-green-800 font-semibold text-lg">{dashboardStats.reports_last_30_days}</p>
                                    <p className="text-green-600 text-xs">{currentTexts.last30Days}</p>
                                </div>
                            </div>
                        </div>

                        {/* За 7 дней */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-purple-800 font-semibold text-lg">{dashboardStats.reports_last_7_days}</p>
                                    <p className="text-purple-600 text-xs">{currentTexts.last7Days}</p>
                                </div>
                            </div>
                        </div>

                        {/* Среднее в день */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-orange-800 font-semibold text-lg">{dashboardStats.average_per_day}</p>
                                    <p className="text-orange-600 text-xs">{currentTexts.averagePerDay}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Последний отчет */}
                    {dashboardStats.last_report && (
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h3 className="font-medium text-gray-900 mb-2">{currentTexts.lastReport}</h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        {dashboardStats.last_report.type?.toUpperCase()} #{dashboardStats.last_report.id}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {dashboardStats.last_report.days_ago === 0 ? currentTexts.today :
                                            dashboardStats.last_report.days_ago === 1 ? currentTexts.yesterday :
                                                `${dashboardStats.last_report.days_ago} ${currentTexts.daysAgo}`}
                                    </p>
                                </div>
                                <Link
                                    href={`/history/${dashboardStats.last_report.id}`}
                                    className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors"
                                >
                                    {currentTexts.viewReport}
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Статистика по типам отчетов */}
                    {dashboardStats.by_type && dashboardStats.by_type.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h3 className="font-medium text-gray-900 mb-3">{currentTexts.byType}</h3>
                            <div className="space-y-2">
                                {dashboardStats.by_type.map((typeStats, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">
                                            {typeStats.type?.toUpperCase()}
                                        </span>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-900 mr-2">{typeStats.count}</span>
                                            <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${(typeStats.count / dashboardStats.total_reports) * 100}%`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                // Состояние "нет данных"
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Нет данных</h3>
                    <p className="text-gray-600">Создайте первый отчет, чтобы увидеть статистику</p>
                </div>
            )}
        </div>
    )
}