// // // // // app/history/page.js
// // // // 'use client'
// // // // import { useState, useEffect } from 'react'
// // // // import Link from 'next/link'

// // // // export default function HistoryPage() {
// // // //     const [filter, setFilter] = useState('all')
// // // //     const [reports, setReports] = useState([])
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [pagination, setPagination] = useState({
// // // //         page: 1,
// // // //         per_page: 10,
// // // //         total: 0,
// // // //         total_pages: 0
// // // //     })
// // // //     const [error, setError] = useState(null)

// // // //     // Загрузка отчетов с API
// // // //     const fetchReports = async (page = 1, reportType = null) => {
// // // //         try {
// // // //             setLoading(true)
// // // //             setError(null)

// // // //             console.log('📋 Загрузка отчетов из API')
// // // //             console.log('  Страница:', page)
// // // //             console.log('  Тип фильтра:', reportType)

// // // //             const params = new URLSearchParams({
// // // //                 page: page.toString(),
// // // //                 per_page: '10'
// // // //             })

// // // //             if (reportType && reportType !== 'all') {
// // // //                 // Преобразуем фильтры для API
// // // //                 if (reportType === 'completed') {
// // // //                     console.log('  Фильтр: только готовые отчеты (будет обработано локально)')
// // // //                 } else if (reportType === 'processing') {
// // // //                     console.log('  Фильтр: только обрабатывающиеся отчеты (будет обработано локально)')
// // // //                 } else {
// // // //                     params.append('report_type', reportType)
// // // //                     console.log('  API фильтр по типу:', reportType)
// // // //                 }
// // // //             }

// // // //             // Добавляем telegram_user_id если есть
// // // //             const telegramUserId = localStorage.getItem('telegram_user_id')
// // // //             if (telegramUserId) {
// // // //                 params.append('telegram_user_id', telegramUserId)
// // // //                 console.log('  Telegram User ID:', telegramUserId)
// // // //             } else {
// // // //                 console.log('  Telegram User ID: не установлен')
// // // //             }

// // // //             const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports?${params}`
// // // //             console.log('🌐 API URL:', apiUrl)
// // // //             console.log('⏱️ Время запроса:', new Date().toISOString())

// // // //             const response = await fetch(apiUrl)

// // // //             console.log('📥 Ответ от API:')
// // // //             console.log('  Status:', response.status)
// // // //             console.log('  StatusText:', response.statusText)
// // // //             console.log('  OK:', response.ok)
// // // //             console.log('  Headers:', Object.fromEntries(response.headers.entries()))

// // // //             const result = await response.json()
// // // //             console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))

// // // //             if (result.success) {
// // // //                 console.log('✅ Отчеты успешно загружены')
// // // //                 console.log('  Количество отчетов:', result.reports?.length || 0)
// // // //                 console.log('  Пагинация:', result.pagination)

// // // //                 setReports(result.reports || [])
// // // //                 setPagination(result.pagination || {
// // // //                     page: 1,
// // // //                     per_page: 10,
// // // //                     total: 0,
// // // //                     total_pages: 0
// // // //                 })
// // // //             } else {
// // // //                 console.log('❌ API вернул ошибку:', result.message)
// // // //                 setError(result.message || 'Ошибка загрузки отчетов')
// // // //             }
// // // //         } catch (err) {
// // // //             console.error('💥 Ошибка при загрузке отчетов:', err)
// // // //             console.error('  Тип ошибки:', err.constructor.name)
// // // //             console.error('  Сообщение:', err.message)
// // // //             console.error('  Stack trace:', err.stack)

// // // //             setError('Ошибка соединения с сервером')

// // // //             // Показываем mock данные в случае ошибки
// // // //             console.log('🔄 Используем mock данные')
// // // //             setReports(mockReports)
// // // //             setPagination({
// // // //                 page: 1,
// // // //                 per_page: 10,
// // // //                 total: mockReports.length,
// // // //                 total_pages: 1
// // // //             })
// // // //         } finally {
// // // //             console.log('🏁 Завершение загрузки отчетов')
// // // //             setLoading(false)
// // // //         }
// // // //     }

// // // //     // Mock данные для демонстрации
// // // //     const mockReports = [
// // // //         {
// // // //             id: 1,
// // // //             telegram_user_id: "123456789",
// // // //             report_type: "qogi",
// // // //             language: "ru",
// // // //             cubic_metr: true,
// // // //             created_at: "2024-06-08 15:30:00",
// // // //             download_url: "#",
// // // //             has_file: true
// // // //         },
// // // //         {
// // // //             id: 2,
// // // //             telegram_user_id: "123456789",
// // // //             report_type: "qogi",
// // // //             language: "en",
// // // //             cubic_metr: false,
// // // //             created_at: "2024-06-07 12:45:00",
// // // //             download_url: "#",
// // // //             has_file: true
// // // //         },
// // // //         {
// // // //             id: 3,
// // // //             telegram_user_id: "123456789",
// // // //             report_type: "qogi",
// // // //             language: "ru",
// // // //             cubic_metr: true,
// // // //             created_at: "2024-06-06 09:15:00",
// // // //             download_url: null,
// // // //             has_file: false
// // // //         }
// // // //     ]

// // // //     useEffect(() => {
// // // //         fetchReports(1, filter)
// // // //     }, [filter])

// // // //     // Фильтрация отчетов
// // // //     const filteredReports = reports.filter(report => {
// // // //         if (filter === 'all') return true
// // // //         if (filter === 'completed') return report.has_file
// // // //         if (filter === 'processing') return !report.has_file
// // // //         if (filter === 'qogi' || filter === 'opgal') return report.report_type === filter
// // // //         if (filter === 'eyecsite' || filter === 'opgal') return report.report_type === filter

// // // //         return true
// // // //     })

// // // //     const downloadReport = async (reportId) => {
// // // //         console.log('📥 Начинаем скачивание отчета:', reportId)

// // // //         try {
// // // //             const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`
// // // //             console.log('🌐 URL скачивания:', downloadUrl)
// // // //             console.log('⏱️ Время начала скачивания:', new Date().toISOString())

// // // //             const response = await fetch(downloadUrl)

// // // //             console.log('📥 Ответ сервера:')
// // // //             console.log('  Status:', response.status)
// // // //             console.log('  StatusText:', response.statusText)
// // // //             console.log('  OK:', response.ok)
// // // //             console.log('  Headers:', Object.fromEntries(response.headers.entries()))

// // // //             if (response.ok) {
// // // //                 const contentType = response.headers.get('content-type')
// // // //                 const contentLength = response.headers.get('content-length')
// // // //                 const filename = response.headers.get('content-disposition')

// // // //                 console.log('📄 Информация о файле:')
// // // //                 console.log('  Content-Type:', contentType)
// // // //                 console.log('  Content-Length:', contentLength)
// // // //                 console.log('  Content-Disposition:', filename)

// // // //                 const blob = await response.blob()
// // // //                 console.log('📦 Blob создан:', {
// // // //                     size: blob.size,
// // // //                     type: blob.type
// // // //                 })

// // // //                 const url = window.URL.createObjectURL(blob)
// // // //                 const link = document.createElement('a')
// // // //                 link.href = url
// // // //                 link.download = `report_${reportId}.pdf`
// // // //                 link.click()
// // // //                 window.URL.revokeObjectURL(url)

// // // //                 console.log('✅ Файл успешно скачан')
// // // //             } else {
// // // //                 console.log('❌ Ошибка скачивания:', response.status, response.statusText)

// // // //                 const errorText = await response.text()
// // // //                 console.log('📋 Текст ошибки:', errorText)

// // // //                 alert('Ошибка скачивания файла')
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('💥 Ошибка при скачивании:', error)
// // // //             console.error('  Тип ошибки:', error.constructor.name)
// // // //             console.error('  Сообщение:', error.message)
// // // //             alert('Ошибка скачивания файла')
// // // //         }
// // // //     }

// // // //     const shareReport = async (reportId) => {
// // // //         console.log('📤 Попытка поделиться отчетом:', reportId)

// // // //         try {
// // // //             const report = reports.find(r => r.id === reportId)
// // // //             console.log('📋 Найденный отчет:', report)

// // // //             if (report?.download_url) {
// // // //                 console.log('🔗 URL для отправки:', report.download_url)

// // // //                 if (navigator.share) {
// // // //                     console.log('📱 Используем нативный Web Share API')
// // // //                     await navigator.share({
// // // //                         title: `Отчет ${report.report_type.toUpperCase()} #${reportId}`,
// // // //                         url: report.download_url
// // // //                     })
// // // //                     console.log('✅ Поделились через Web Share API')
// // // //                 } else {
// // // //                     console.log('📋 Web Share API недоступен, копируем в буфер обмена')

// // // //                     if (navigator.clipboard) {
// // // //                         await navigator.clipboard.writeText(report.download_url)
// // // //                         console.log('✅ Ссылка скопирована в буфер обмена')
// // // //                         alert('Ссылка скопирована в буфер обмена')
// // // //                     } else {
// // // //                         console.log('❌ Clipboard API недоступен')
// // // //                         alert('Невозможно скопировать ссылку')
// // // //                     }
// // // //                 }
// // // //             } else {
// // // //                 console.log('❌ URL для скачивания недоступен')
// // // //                 alert('Ссылка недоступна')
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('💥 Ошибка при отправке:', error)
// // // //             console.error('  Тип ошибки:', error.constructor.name)
// // // //             console.error('  Сообщение:', error.message)
// // // //             alert('Ошибка при отправке')
// // // //         }
// // // //     }

// // // //     const getStatusText = (report) => {
// // // //         return report.has_file ? 'Готов' : 'В работе'
// // // //     }

// // // //     const getStatusColor = (report) => {
// // // //         return report.has_file
// // // //             ? 'bg-emerald-100 text-emerald-800'
// // // //             : 'bg-yellow-100 text-yellow-800'
// // // //     }

// // // //     const formatDate = (dateString) => {
// // // //         return new Date(dateString).toLocaleDateString('ru-RU', {
// // // //             day: '2-digit',
// // // //             month: '2-digit',
// // // //             year: 'numeric',
// // // //             hour: '2-digit',
// // // //             minute: '2-digit'
// // // //         })
// // // //     }

// // // //     const getLanguageName = (code) => {
// // // //         const languages = {
// // // //             'ru': 'Русский',
// // // //             'en': 'English',
// // // //             'uz': 'O\'zbek'
// // // //         }
// // // //         return languages[code] || code
// // // //     }

// // // //     return (
// // // //         <div className="p-6 pb-24">
// // // //             {/* Header */}
// // // //             <div className="flex items-center justify-between mb-8">
// // // //                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
// // // //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// // // //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// // // //                     </svg>
// // // //                 </Link>
// // // //                 <h1 className="text-xl font-semibold text-gray-900">История отчетов</h1>
// // // //                 <button
// // // //                     onClick={() => fetchReports(pagination.page, filter)}
// // // //                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
// // // //                 >
// // // //                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // // //                     </svg>
// // // //                 </button>
// // // //             </div>

// // // //             {/* Filter Tabs */}
// // // //             <div className="flex bg-gray-100 rounded-xl p-1 mb-6 overflow-x-auto">
// // // //                 <button
// // // //                     onClick={() => setFilter('all')}
// // // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // // //                         }`}
// // // //                 >
// // // //                     Все
// // // //                 </button>
// // // //                 <button
// // // //                     onClick={() => setFilter('completed')}
// // // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'completed' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // // //                         }`}
// // // //                 >
// // // //                     Готовые
// // // //                 </button>
// // // //                 <button
// // // //                     onClick={() => setFilter('processing')}
// // // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'processing' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // // //                         }`}
// // // //                 >
// // // //                     В работе
// // // //                 </button>
// // // //                 <button
// // // //                     onClick={() => setFilter('qogi')}
// // // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'qogi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // // //                         }`}
// // // //                 >
// // // //                     QOGI  {/* ← ПРАВИЛЬНО! */}
// // // //                 </button>
// // // //                 <button
// // // //                     onClick={() => setFilter('eyecsite')}
// // // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'eyecsite' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // // //                         }`}
// // // //                 >
// // // //                     EYECSITE  {/* ← ПРАВИЛЬНО! */}
// // // //                 </button>
// // // //             </div>

// // // //             {/* Loading State */}
// // // //             {loading && (
// // // //                 <div className="flex items-center justify-center py-12">
// // // //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// // // //                 </div>
// // // //             )}

// // // //             {/* Error State */}
// // // //             {error && (
// // // //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
// // // //                     <div className="flex items-center">
// // // //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // // //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // //                         </svg>
// // // //                         <span className="text-red-800 text-sm">{error}</span>
// // // //                     </div>
// // // //                 </div>
// // // //             )}

// // // //             {/* Reports List */}
// // // //             {!loading && (
// // // //                 <div className="space-y-4">
// // // //                     {filteredReports.map((report) => (
// // // //                         <div key={report.id} className="card">
// // // //                             <div className="flex items-start justify-between mb-3">
// // // //                                 <div className="flex-1">
// // // //                                     <div className="flex items-center gap-2 mb-2">
// // // //                                         <h3 className="font-semibold text-gray-900">
// // // //                                             {report.report_type?.toUpperCase() || 'QOGI'} #{report.id}  {/* ← ПРАВИЛЬНО! */}
// // // //                                         </h3>
// // // //                                         <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report)}`}>
// // // //                                             {getStatusText(report)}
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="space-y-1 text-sm text-gray-600">
// // // //                                         <div>📅 {formatDate(report.created_at)}</div>
// // // //                                         <div>🌐 {getLanguageName(report.language)}</div>
// // // //                                         {report.cubic_metr && <div>📊 Кубические метры</div>}
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>

// // // //                             {report.has_file ? (
// // // //                                 <div className="flex gap-2">
// // // //                                     <button
// // // //                                         onClick={() => downloadReport(report.id)}
// // // //                                         className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// // // //                                     >
// // // //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // //                                         </svg>
// // // //                                         Скачать
// // // //                                     </button>
// // // //                                     <button
// // // //                                         onClick={() => shareReport(report.id)}
// // // //                                         className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// // // //                                     >
// // // //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
// // // //                                         </svg>
// // // //                                         Поделиться
// // // //                                     </button>
// // // //                                 </div>
// // // //                             ) : (
// // // //                                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
// // // //                                     <div className="flex items-center gap-2 text-yellow-800 text-sm">
// // // //                                         <div className="w-4 h-4 border-2 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
// // // //                                         Отчет генерируется
// // // //                                     </div>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     ))}
// // // //                 </div>
// // // //             )}

// // // //             {/* Empty State */}
// // // //             {!loading && filteredReports.length === 0 && (
// // // //                 <div className="text-center py-12">
// // // //                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //                         <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // //                         </svg>
// // // //                     </div>
// // // //                     <h3 className="text-lg font-medium text-gray-900 mb-2">Отчетов не найдено</h3>
// // // //                     <p className="text-gray-600 mb-6">
// // // //                         {filter === 'all'
// // // //                             ? 'Создайте первый отчет, чтобы увидеть его здесь'
// // // //                             : `Нет отчетов с фильтром "${filter}"`
// // // //                         }
// // // //                     </p>
// // // //                     <Link href="/create-report" className="btn-primary inline-block">
// // // //                         Создать отчет
// // // //                     </Link>
// // // //                 </div>
// // // //             )}

// // // //             {/* Pagination */}
// // // //             {pagination.total_pages > 1 && (
// // // //                 <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
// // // //                     <button
// // // //                         onClick={() => fetchReports(pagination.page - 1, filter)}
// // // //                         disabled={pagination.page <= 1}
// // // //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                     >
// // // //                         Назад
// // // //                     </button>
// // // //                     <span className="text-sm text-gray-600">
// // // //                         Страница {pagination.page} из {pagination.total_pages}
// // // //                     </span>
// // // //                     <button
// // // //                         onClick={() => fetchReports(pagination.page + 1, filter)}
// // // //                         disabled={pagination.page >= pagination.total_pages}
// // // //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                     >
// // // //                         Далее
// // // //                     </button>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     )
// // // // }

// // // // app/history/page.js
// // // 'use client'
// // // import { useState, useEffect } from 'react'
// // // import Link from 'next/link'

// // // export default function HistoryPage() {
// // //     const [filter, setFilter] = useState('all')
// // //     const [reports, setReports] = useState([])
// // //     const [loading, setLoading] = useState(true)
// // //     const [pagination, setPagination] = useState({
// // //         page: 1,
// // //         per_page: 10,
// // //         total: 0,
// // //         total_pages: 0
// // //     })
// // //     const [error, setError] = useState(null)

// // //     // Загрузка отчетов с API
// // //     const fetchReports = async (page = 1, reportType = null) => {
// // //         try {
// // //             setLoading(true)
// // //             setError(null)

// // //             console.log('📋 Загрузка отчетов из API')
// // //             console.log('  Страница:', page)
// // //             console.log('  Тип фильтра:', reportType)

// // //             const params = new URLSearchParams({
// // //                 page: page.toString(),
// // //                 per_page: '10'
// // //             })

// // //             // Только для API фильтров (report_type)
// // //             if (reportType && reportType !== 'all' && (reportType === 'qogi' || reportType === 'eyecsite')) {
// // //                 params.append('report_type', reportType)
// // //                 console.log('  API фильтр по типу:', reportType)
// // //             }

// // //             // Добавляем telegram_user_id если есть
// // //             const telegramUserId = localStorage.getItem('telegram_user_id')
// // //             if (telegramUserId) {
// // //                 params.append('telegram_user_id', telegramUserId)
// // //                 console.log('  Telegram User ID:', telegramUserId)
// // //             } else {
// // //                 console.log('  Telegram User ID: не установлен')
// // //             }

// // //             const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports?${params}`
// // //             console.log('🌐 API URL:', apiUrl)
// // //             console.log('⏱️ Время запроса:', new Date().toISOString())

// // //             const response = await fetch(apiUrl)

// // //             console.log('📥 Ответ от API:')
// // //             console.log('  Status:', response.status)
// // //             console.log('  StatusText:', response.statusText)
// // //             console.log('  OK:', response.ok)
// // //             console.log('  Headers:', Object.fromEntries(response.headers.entries()))

// // //             const result = await response.json()
// // //             console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))

// // //             if (result.success) {
// // //                 console.log('✅ Отчеты успешно загружены')
// // //                 console.log('  Количество отчетов:', result.reports?.length || 0)
// // //                 console.log('  Пагинация:', result.pagination)

// // //                 setReports(result.reports || [])
// // //                 setPagination(result.pagination || {
// // //                     page: 1,
// // //                     per_page: 10,
// // //                     total: 0,
// // //                     total_pages: 0
// // //                 })
// // //             } else {
// // //                 console.log('❌ API вернул ошибку:', result.message)
// // //                 setError(result.message || 'Ошибка загрузки отчетов')
// // //             }
// // //         } catch (err) {
// // //             console.error('💥 Ошибка при загрузке отчетов:', err)
// // //             console.error('  Тип ошибки:', err.constructor.name)
// // //             console.error('  Сообщение:', err.message)
// // //             console.error('  Stack trace:', err.stack)

// // //             setError('Ошибка соединения с сервером')

// // //             // Показываем mock данные в случае ошибки
// // //             console.log('🔄 Используем mock данные')
// // //             setReports(mockReports)
// // //             setPagination({
// // //                 page: 1,
// // //                 per_page: 10,
// // //                 total: mockReports.length,
// // //                 total_pages: 1
// // //             })
// // //         } finally {
// // //             console.log('🏁 Завершение загрузки отчетов')
// // //             setLoading(false)
// // //         }
// // //     }

// // //     // Mock данные для демонстрации
// // //     const mockReports = [
// // //         {
// // //             id: 1,
// // //             telegram_user_id: "123456789",
// // //             report_type: "qogi",
// // //             language: "ru",
// // //             cubic_metr: true,
// // //             created_at: "2024-06-08 15:30:00",
// // //             download_url: "#",
// // //             has_file: true
// // //         },
// // //         {
// // //             id: 2,
// // //             telegram_user_id: "123456789",
// // //             report_type: "qogi",
// // //             language: "en",
// // //             cubic_metr: false,
// // //             created_at: "2024-06-07 12:45:00",
// // //             download_url: "#",
// // //             has_file: true
// // //         },
// // //         {
// // //             id: 3,
// // //             telegram_user_id: "123456789",
// // //             report_type: "qogi",
// // //             language: "ru",
// // //             cubic_metr: true,
// // //             created_at: "2024-06-06 09:15:00",
// // //             download_url: null,
// // //             has_file: false
// // //         }
// // //     ]

// // //     useEffect(() => {
// // //         fetchReports(1, filter)
// // //     }, [filter])

// // //     // Фильтрация отчетов (только для типов отчетов)
// // //     const filteredReports = reports.filter(report => {
// // //         if (filter === 'all') return true
// // //         if (filter === 'qogi' || filter === 'eyecsite') return report.report_type === filter
// // //         return true
// // //     })

// // //     const downloadReport = async (reportId) => {
// // //         console.log('📥 Начинаем скачивание отчета:', reportId)

// // //         try {
// // //             const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`
// // //             console.log('🌐 URL скачивания:', downloadUrl)
// // //             console.log('⏱️ Время начала скачивания:', new Date().toISOString())

// // //             // Используем window.open для скачивания файла
// // //             const link = document.createElement('a')
// // //             link.href = downloadUrl
// // //             link.target = '_blank'
// // //             link.download = `report_${reportId}.pdf`

// // //             // Добавляем в DOM, кликаем и удаляем
// // //             document.body.appendChild(link)
// // //             link.click()
// // //             document.body.removeChild(link)

// // //             console.log('✅ Скачивание инициировано')

// // //         } catch (error) {
// // //             console.error('💥 Ошибка при скачивании:', error)
// // //             console.error('  Тип ошибки:', error.constructor.name)
// // //             console.error('  Сообщение:', error.message)
// // //             alert('Ошибка скачивания файла')
// // //         }
// // //     }

// // //     const shareReport = async (reportId) => {
// // //         console.log('📤 Попытка поделиться отчетом:', reportId)

// // //         try {
// // //             const report = reports.find(r => r.id === reportId)
// // //             console.log('📋 Найденный отчет:', report)

// // //             if (report?.download_url) {
// // //                 console.log('🔗 URL для отправки:', report.download_url)

// // //                 if (navigator.share) {
// // //                     console.log('📱 Используем нативный Web Share API')
// // //                     await navigator.share({
// // //                         title: `Отчет ${report.report_type.toUpperCase()} #${reportId}`,
// // //                         url: report.download_url
// // //                     })
// // //                     console.log('✅ Поделились через Web Share API')
// // //                 } else {
// // //                     console.log('📋 Web Share API недоступен, копируем в буфер обмена')

// // //                     if (navigator.clipboard) {
// // //                         await navigator.clipboard.writeText(report.download_url)
// // //                         console.log('✅ Ссылка скопирована в буфер обмена')
// // //                         alert('Ссылка скопирована в буфер обмена')
// // //                     } else {
// // //                         console.log('❌ Clipboard API недоступен')
// // //                         alert('Невозможно скопировать ссылку')
// // //                     }
// // //                 }
// // //             } else {
// // //                 console.log('❌ URL для скачивания недоступен')
// // //                 alert('Ссылка недоступна')
// // //             }
// // //         } catch (error) {
// // //             console.error('💥 Ошибка при отправке:', error)
// // //             console.error('  Тип ошибки:', error.constructor.name)
// // //             console.error('  Сообщение:', error.message)
// // //             alert('Ошибка при отправке')
// // //         }
// // //     }

// // //     const getStatusText = (report) => {
// // //         return report.has_file ? 'Готов' : 'В работе'
// // //     }

// // //     const getStatusColor = (report) => {
// // //         return report.has_file
// // //             ? 'bg-emerald-100 text-emerald-800'
// // //             : 'bg-yellow-100 text-yellow-800'
// // //     }

// // //     const formatDate = (dateString) => {
// // //         return new Date(dateString).toLocaleDateString('ru-RU', {
// // //             day: '2-digit',
// // //             month: '2-digit',
// // //             year: 'numeric',
// // //             hour: '2-digit',
// // //             minute: '2-digit'
// // //         })
// // //     }

// // //     const getLanguageName = (code) => {
// // //         const languages = {
// // //             'ru': 'Русский',
// // //             'en': 'English',
// // //             'uz': 'O\'zbek'
// // //         }
// // //         return languages[code] || code
// // //     }

// // //     return (
// // //         <div className="p-6 pb-24">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between mb-8">
// // //                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
// // //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                     </svg>
// // //                 </Link>
// // //                 <h1 className="text-xl font-semibold text-gray-900">История отчетов</h1>
// // //                 <button
// // //                     onClick={() => fetchReports(pagination.page, filter)}
// // //                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
// // //                 >
// // //                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // //                     </svg>
// // //                 </button>
// // //             </div>

// // //             {/* Filter Tabs - Убрали фильтры "Готовые" и "В работе" */}
// // //             <div className="flex bg-gray-100 rounded-xl p-1 mb-6 overflow-x-auto">
// // //                 <button
// // //                     onClick={() => setFilter('all')}
// // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // //                         }`}
// // //                 >
// // //                     Все
// // //                 </button>
// // //                 <button
// // //                     onClick={() => setFilter('qogi')}
// // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'qogi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // //                         }`}
// // //                 >
// // //                     QOGI
// // //                 </button>
// // //                 <button
// // //                     onClick={() => setFilter('eyecsite')}
// // //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'eyecsite' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// // //                         }`}
// // //                 >
// // //                     EYECSITE
// // //                 </button>
// // //             </div>

// // //             {/* Loading State */}
// // //             {loading && (
// // //                 <div className="flex items-center justify-center py-12">
// // //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// // //                 </div>
// // //             )}

// // //             {/* Error State */}
// // //             {error && (
// // //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
// // //                     <div className="flex items-center">
// // //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // //                         </svg>
// // //                         <span className="text-red-800 text-sm">{error}</span>
// // //                     </div>
// // //                 </div>
// // //             )}

// // //             {/* Reports List */}
// // //             {!loading && (
// // //                 <div className="space-y-4">
// // //                     {filteredReports.map((report) => (
// // //                         <div key={report.id} className="card">
// // //                             <div className="flex items-start justify-between mb-3">
// // //                                 <div className="flex-1">
// // //                                     <div className="flex items-center gap-2 mb-2">
// // //                                         <h3 className="font-semibold text-gray-900">
// // //                                             {report.report_type?.toUpperCase() || 'QOGI'} #{report.id}
// // //                                         </h3>
// // //                                         <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report)}`}>
// // //                                             {getStatusText(report)}
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="space-y-1 text-sm text-gray-600">
// // //                                         <div>📅 {formatDate(report.created_at)}</div>
// // //                                         <div>🌐 {getLanguageName(report.language)}</div>
// // //                                         {report.cubic_metr && <div>📊 Кубические метры</div>}
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             {report.has_file ? (
// // //                                 <div className="flex gap-2">
// // //                                     <button
// // //                                         onClick={() => downloadReport(report.id)}
// // //                                         className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// // //                                     >
// // //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                                         </svg>
// // //                                         Скачать
// // //                                     </button>
// // //                                     <button
// // //                                         onClick={() => shareReport(report.id)}
// // //                                         className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// // //                                     >
// // //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
// // //                                         </svg>
// // //                                         Поделиться
// // //                                     </button>
// // //                                 </div>
// // //                             ) : (
// // //                                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
// // //                                     <div className="flex items-center gap-2 text-yellow-800 text-sm">
// // //                                         <div className="w-4 h-4 border-2 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
// // //                                         Отчет генерируется
// // //                                     </div>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}

// // //             {/* Empty State */}
// // //             {!loading && filteredReports.length === 0 && (
// // //                 <div className="text-center py-12">
// // //                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                         <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                         </svg>
// // //                     </div>
// // //                     <h3 className="text-lg font-medium text-gray-900 mb-2">Отчетов не найдено</h3>
// // //                     <p className="text-gray-600 mb-6">
// // //                         {filter === 'all'
// // //                             ? 'Создайте первый отчет, чтобы увидеть его здесь'
// // //                             : `Нет отчетов с типом "${filter}"`
// // //                         }
// // //                     </p>
// // //                     <Link href="/create-report" className="btn-primary inline-block">
// // //                         Создать отчет
// // //                     </Link>
// // //                 </div>
// // //             )}

// // //             {/* Pagination */}
// // //             {pagination.total_pages > 1 && (
// // //                 <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
// // //                     <button
// // //                         onClick={() => fetchReports(pagination.page - 1, filter)}
// // //                         disabled={pagination.page <= 1}
// // //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// // //                     >
// // //                         Назад
// // //                     </button>
// // //                     <span className="text-sm text-gray-600">
// // //                         Страница {pagination.page} из {pagination.total_pages}
// // //                     </span>
// // //                     <button
// // //                         onClick={() => fetchReports(pagination.page + 1, filter)}
// // //                         disabled={pagination.page >= pagination.total_pages}
// // //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// // //                     >
// // //                         Далее
// // //                     </button>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     )
// // // }



// // // app/history/page.js
// // 'use client'
// // import { useState, useEffect } from 'react'
// // import Link from 'next/link'
// // import { useTelegramContext } from '../contexts/TelegramContext'

// // export default function HistoryPage() {
// //     const { user, tg, isLoading: userLoading } = useTelegramContext()
// //     const [filter, setFilter] = useState('all')
// //     const [reports, setReports] = useState([])
// //     const [loading, setLoading] = useState(true)
// //     const [pagination, setPagination] = useState({
// //         page: 1,
// //         per_page: 10,
// //         total: 0,
// //         total_pages: 0
// //     })
// //     const [error, setError] = useState(null)

// //     // Загрузка отчетов с API
// //     const fetchReports = async (page = 1, reportType = null) => {
// //         // Ждем загрузки пользователя
// //         if (userLoading || !user) {
// //             console.log('⏳ Ожидание загрузки пользователя...')
// //             return
// //         }

// //         try {
// //             setLoading(true)
// //             setError(null)

// //             console.log('📋 Загрузка отчетов из API')
// //             console.log('  Страница:', page)
// //             console.log('  Тип фильтра:', reportType)
// //             console.log('  Пользователь:', user.id)

// //             const params = new URLSearchParams({
// //                 page: page.toString(),
// //                 per_page: '10'
// //             })

// //             // Только для API фильтров (report_type)
// //             if (reportType && reportType !== 'all' && (reportType === 'qogi' || reportType === 'eyecsite')) {
// //                 params.append('report_type', reportType)
// //                 console.log('  API фильтр по типу:', reportType)
// //             }

// //             const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports?${params}`
// //             console.log('🌐 API URL:', apiUrl)

// //             // Подготавливаем заголовки с Telegram данными
// //             const headers = {
// //                 'Content-Type': 'application/json'
// //             }

// //             // Добавляем Telegram init data для аутентификации
// //             if (tg?.initData) {
// //                 headers['X-Telegram-Init-Data'] = tg.initData
// //                 console.log('🔐 Добавлены Telegram данные для аутентификации')
// //                 console.log('🔐 initData preview:', tg.initData.substring(0, 50) + '...')
// //             } else {
// //                 console.warn('⚠️ Telegram initData недоступны')
// //                 console.warn('⚠️ tg object:', tg)
// //             }

// //             console.log('📤 Отправляем заголовки:', Object.keys(headers))
// //             console.log('⏱️ Время запроса:', new Date().toISOString())

// //             const response = await fetch(apiUrl, {
// //                 method: 'GET',
// //                 headers: headers
// //             })

// //             console.log('📥 Ответ от API:')
// //             console.log('  Status:', response.status)
// //             console.log('  StatusText:', response.statusText)
// //             console.log('  OK:', response.ok)
// //             console.log('  Response headers:', Object.fromEntries(response.headers.entries()))

// //             if (response.status === 401) {
// //                 console.log('🔒 Ошибка аутентификации - проверяем initData')
// //                 console.log('🔒 Current initData:', tg?.initData)
// //                 setError('Необходима авторизация через Telegram')
// //                 return
// //             }

// //             if (response.status === 403) {
// //                 console.log('🚫 Доступ запрещен')
// //                 setError('Доступ запрещен')
// //                 return
// //             }

// //             const result = await response.json()
// //             console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))

// //             if (result.success) {
// //                 console.log('✅ Отчеты успешно загружены')
// //                 console.log('  Количество отчетов:', result.reports?.length || 0)
// //                 console.log('  Пагинация:', result.pagination)

// //                 setReports(result.reports || [])
// //                 setPagination(result.pagination || {
// //                     page: 1,
// //                     per_page: 10,
// //                     total: 0,
// //                     total_pages: 0
// //                 })
// //             } else {
// //                 console.log('❌ API вернул ошибку:', result.message)
// //                 setError(result.message || 'Ошибка загрузки отчетов')
// //             }
// //         } catch (err) {
// //             console.error('💥 Ошибка при загрузке отчетов:', err)
// //             console.error('  Тип ошибки:', err.constructor.name)
// //             console.error('  Сообщение:', err.message)

// //             setError('Ошибка соединения с сервером')

// //             // В разработке показываем mock данные
// //             if (process.env.NODE_ENV === 'development') {
// //                 console.log('🔄 Используем mock данные для разработки')
// //                 setReports(mockReports)
// //                 setPagination({
// //                     page: 1,
// //                     per_page: 10,
// //                     total: mockReports.length,
// //                     total_pages: 1
// //                 })
// //             }
// //         } finally {
// //             console.log('🏁 Завершение загрузки отчетов')
// //             setLoading(false)
// //         }
// //     }

// //     // Mock данные для разработки
// //     const mockReports = [
// //         {
// //             id: 1,
// //             telegram_user_id: user?.id?.toString() || "123456789",
// //             report_type: "qogi",
// //             language: "ru",
// //             cubic_metr: true,
// //             created_at: "2024-06-08 15:30:00",
// //             download_url: "#",
// //             has_file: true
// //         },
// //         {
// //             id: 2,
// //             telegram_user_id: user?.id?.toString() || "123456789",
// //             report_type: "qogi",
// //             language: "en",
// //             cubic_metr: false,
// //             created_at: "2024-06-07 12:45:00",
// //             download_url: "#",
// //             has_file: true
// //         }
// //     ]

// //     useEffect(() => {
// //         // Загружаем отчеты только после загрузки пользователя
// //         if (!userLoading && user) {
// //             fetchReports(1, filter)
// //         }
// //     }, [filter, userLoading, user])

// //     // Фильтрация отчетов
// //     const filteredReports = reports.filter(report => {
// //         if (filter === 'all') return true
// //         if (filter === 'qogi' || filter === 'eyecsite') return report.report_type === filter
// //         return true
// //     })

// //     const downloadReport = async (reportId) => {
// //         console.log('📥 Начинаем скачивание отчета:', reportId)

// //         if (!user || !tg?.initData) {
// //             console.error('❌ Пользователь не авторизован')
// //             alert('Ошибка авторизации')
// //             return
// //         }

// //         try {
// //             const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`
// //             console.log('🌐 URL скачивания:', downloadUrl)

// //             console.log('🔐 Отправляем с initData:', tg.initData.substring(0, 50) + '...')

// //             // Используем безопасное скачивание с аутентификацией
// //             const response = await fetch(downloadUrl, {
// //                 method: 'GET',
// //                 headers: {
// //                     'X-Telegram-Init-Data': tg.initData
// //                 }
// //             })

// //             console.log('📥 Ответ на скачивание:')
// //             console.log('  Status:', response.status)
// //             console.log('  StatusText:', response.statusText)

// //             if (response.status === 401) {
// //                 throw new Error('Необходима авторизация')
// //             }

// //             if (response.status === 403) {
// //                 throw new Error('Доступ к отчету запрещен')
// //             }

// //             if (!response.ok) {
// //                 throw new Error(`Ошибка сервера: ${response.status}`)
// //             }

// //             // Получаем файл как blob
// //             const blob = await response.blob()
// //             console.log('📁 Blob получен, размер:', blob.size)

// //             // Создаем ссылку для скачивания
// //             const link = document.createElement('a')
// //             link.href = URL.createObjectURL(blob)
// //             link.download = `report_${reportId}.pdf`

// //             document.body.appendChild(link)
// //             link.click()
// //             document.body.removeChild(link)

// //             // Освобождаем память
// //             URL.revokeObjectURL(link.href)

// //             console.log('✅ Скачивание завершено')

// //         } catch (error) {
// //             console.error('💥 Ошибка при скачивании:', error)
// //             alert(`Ошибка скачивания: ${error.message}`)
// //         }
// //     }

// //     const shareReport = async (reportId) => {
// //         console.log('📤 Попытка поделиться отчетом:', reportId)

// //         try {
// //             const report = reports.find(r => r.id === reportId)
// //             console.log('📋 Найденный отчет:', report)

// //             if (report?.download_url) {
// //                 // Создаем защищенную ссылку для отправки
// //                 const shareUrl = `${window.location.origin}/report/${reportId}`
// //                 console.log('🔗 Безопасная ссылка для отправки:', shareUrl)

// //                 if (navigator.share) {
// //                     console.log('📱 Используем нативный Web Share API')
// //                     await navigator.share({
// //                         title: `Отчет ${report.report_type.toUpperCase()} #${reportId}`,
// //                         url: shareUrl
// //                     })
// //                     console.log('✅ Поделились через Web Share API')
// //                 } else {
// //                     console.log('📋 Web Share API недоступен, копируем в буфер обмена')

// //                     if (navigator.clipboard) {
// //                         await navigator.clipboard.writeText(shareUrl)
// //                         console.log('✅ Ссылка скопирована в буфер обмена')
// //                         alert('Ссылка скопирована в буфер обмена')
// //                     } else {
// //                         console.log('❌ Clipboard API недоступен')
// //                         alert('Невозможно скопировать ссылку')
// //                     }
// //                 }
// //             } else {
// //                 console.log('❌ Отчет недоступен для отправки')
// //                 alert('Отчет недоступен')
// //             }
// //         } catch (error) {
// //             console.error('💥 Ошибка при отправке:', error)
// //             alert('Ошибка при отправке')
// //         }
// //     }

// //     const getStatusText = (report) => {
// //         return report.has_file ? 'Готов' : 'В работе'
// //     }

// //     const getStatusColor = (report) => {
// //         return report.has_file
// //             ? 'bg-emerald-100 text-emerald-800'
// //             : 'bg-yellow-100 text-yellow-800'
// //     }

// //     const formatDate = (dateString) => {
// //         return new Date(dateString).toLocaleDateString('ru-RU', {
// //             day: '2-digit',
// //             month: '2-digit',
// //             year: 'numeric',
// //             hour: '2-digit',
// //             minute: '2-digit'
// //         })
// //     }

// //     const getLanguageName = (code) => {
// //         const languages = {
// //             'ru': 'Русский',
// //             'en': 'English',
// //             'uz': 'O\'zbek'
// //         }
// //         return languages[code] || code
// //     }

// //     // Показываем загрузку если пользователь еще не загружен
// //     if (userLoading) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="flex items-center justify-center py-12">
// //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     // Показываем ошибку если пользователь не авторизован
// //     if (!user) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4">
// //                     <div className="flex items-center">
// //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                         </svg>
// //                         <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     return (
// //         <div className="p-6 pb-24">
// //             {/* Header */}
// //             <div className="flex items-center justify-between mb-8">
// //                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
// //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// //                     </svg>
// //                 </Link>
// //                 <h1 className="text-xl font-semibold text-gray-900">История отчетов</h1>
// //                 <button
// //                     onClick={() => fetchReports(pagination.page, filter)}
// //                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
// //                 >
// //                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// //                     </svg>
// //                 </button>
// //             </div>

// //             {/* User Info */}
// //             {/* <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
// //                 <div className="flex items-center gap-3">
// //                     <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white font-semibold">
// //                         {user.first_name?.[0] || 'U'}
// //                     </div>
// //                     <div>
// //                         <div className="font-medium text-emerald-900">
// //                             {user.first_name} {user.last_name}
// //                         </div>
// //                         <div className="text-sm text-emerald-700">
// //                             ID: {user.id}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div> */}

// //             {/* Filter Tabs */}
// //             <div className="flex bg-gray-100 rounded-xl p-1 mb-6 overflow-x-auto">
// //                 <button
// //                     onClick={() => setFilter('all')}
// //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// //                         }`}
// //                 >
// //                     Все
// //                 </button>
// //                 <button
// //                     onClick={() => setFilter('qogi')}
// //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'qogi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// //                         }`}
// //                 >
// //                     QOGI
// //                 </button>
// //                 <button
// //                     onClick={() => setFilter('eyecsite')}
// //                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'eyecsite' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
// //                         }`}
// //                 >
// //                     EYECSITE
// //                 </button>
// //             </div>

// //             {/* Loading State */}
// //             {loading && (
// //                 <div className="flex items-center justify-center py-12">
// //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// //                 </div>
// //             )}

// //             {/* Error State */}
// //             {error && (
// //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
// //                     <div className="flex items-center">
// //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                         </svg>
// //                         <span className="text-red-800 text-sm">{error}</span>
// //                     </div>
// //                 </div>
// //             )}

// //             {/* Reports List */}
// //             {!loading && (
// //                 <div className="space-y-4">
// //                     {filteredReports.map((report) => (
// //                         <div key={report.id} className="card">
// //                             <div className="flex items-start justify-between mb-3">
// //                                 <div className="flex-1">
// //                                     <div className="flex items-center gap-2 mb-2">
// //                                         <h3 className="font-semibold text-gray-900">
// //                                             {report.report_type?.toUpperCase() || 'QOGI'} #{report.id}
// //                                         </h3>
// //                                         <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report)}`}>
// //                                             {getStatusText(report)}
// //                                         </div>
// //                                     </div>
// //                                     <div className="space-y-1 text-sm text-gray-600">
// //                                         <div>📅 {formatDate(report.created_at)}</div>
// //                                         <div>🌐 {getLanguageName(report.language)}</div>
// //                                         {report.cubic_metr && <div>📊 Кубические метры</div>}
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             {report.has_file ? (
// //                                 <div className="flex gap-2">
// //                                     <button
// //                                         onClick={() => downloadReport(report.id)}
// //                                         className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// //                                     >
// //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                                         </svg>
// //                                         Скачать
// //                                     </button>
// //                                     <button
// //                                         onClick={() => shareReport(report.id)}
// //                                         className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
// //                                     >
// //                                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
// //                                         </svg>
// //                                         Поделиться
// //                                     </button>
// //                                 </div>
// //                             ) : (
// //                                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
// //                                     <div className="flex items-center gap-2 text-yellow-800 text-sm">
// //                                         <div className="w-4 h-4 border-2 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
// //                                         Отчет генерируется
// //                                     </div>
// //                                 </div>
// //                             )}
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}

// //             {/* Empty State */}
// //             {!loading && filteredReports.length === 0 && (
// //                 <div className="text-center py-12">
// //                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                         <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                         </svg>
// //                     </div>
// //                     <h3 className="text-lg font-medium text-gray-900 mb-2">Отчетов не найдено</h3>
// //                     <p className="text-gray-600 mb-6">
// //                         {filter === 'all'
// //                             ? 'Создайте первый отчет, чтобы увидеть его здесь'
// //                             : `Нет отчетов с типом "${filter}"`
// //                         }
// //                     </p>
// //                     <Link href="/create-report" className="btn-primary inline-block">
// //                         Создать отчет
// //                     </Link>
// //                 </div>
// //             )}

// //             {/* Pagination */}
// //             {pagination.total_pages > 1 && (
// //                 <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
// //                     <button
// //                         onClick={() => fetchReports(pagination.page - 1, filter)}
// //                         disabled={pagination.page <= 1}
// //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// //                     >
// //                         Назад
// //                     </button>
// //                     <span className="text-sm text-gray-600">
// //                         Страница {pagination.page} из {pagination.total_pages}
// //                     </span>
// //                     <button
// //                         onClick={() => fetchReports(pagination.page + 1, filter)}
// //                         disabled={pagination.page >= pagination.total_pages}
// //                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
// //                     >
// //                         Далее
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     )
// // }


// // app/history/page.js - ОБНОВЛЕННАЯ ВЕРСИЯ
// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useTelegramContext } from '../contexts/TelegramContext'
// import './history.css'

// export default function HistoryPage() {
//     const { user, tg, isLoading: userLoading } = useTelegramContext()
//     const [filter, setFilter] = useState('all')
//     const [reports, setReports] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [pagination, setPagination] = useState({
//         page: 1,
//         per_page: 10,
//         total: 0,
//         total_pages: 0
//     })
//     const [error, setError] = useState(null)
//     const [sendingReports, setSendingReports] = useState(new Set()) // Отслеживание отправляемых отчетов
//     const [notification, setNotification] = useState(null) // Уведомления

//     // Показать уведомление
//     const showNotification = (message, type = 'success') => {
//         setNotification({ message, type })
//         setTimeout(() => setNotification(null), 5000) // Скрыть через 5 секунд
//     }

//     // Загрузка отчетов с API (код остается тот же)
//     const fetchReports = async (page = 1, reportType = null) => {
//         if (userLoading || !user) {
//             console.log('⏳ Ожидание загрузки пользователя...')
//             return
//         }

//         try {
//             setLoading(true)
//             setError(null)

//             console.log('📋 Загрузка отчетов из API')
//             console.log('  Страница:', page)
//             console.log('  Тип фильтра:', reportType)
//             console.log('  Пользователь:', user.id)

//             const params = new URLSearchParams({
//                 page: page.toString(),
//                 per_page: '10'
//             })

//             if (reportType && reportType !== 'all' && (reportType === 'qogi' || reportType === 'eyecsite')) {
//                 params.append('report_type', reportType)
//                 console.log('  API фильтр по типу:', reportType)
//             }

//             const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports?${params}`
//             console.log('🌐 API URL:', apiUrl)

//             const headers = {
//                 'Content-Type': 'application/json'
//             }

//             if (tg?.initData) {
//                 headers['X-Telegram-Init-Data'] = tg.initData
//                 console.log('🔐 Добавлены Telegram данные для аутентификации')
//             } else {
//                 console.warn('⚠️ Telegram initData недоступны')
//             }

//             const response = await fetch(apiUrl, {
//                 method: 'GET',
//                 headers: headers
//             })

//             console.log('📥 Ответ от API:', response.status)

//             if (response.status === 401) {
//                 setError('Необходима авторизация через Telegram')
//                 return
//             }

//             if (response.status === 403) {
//                 setError('Доступ запрещен')
//                 return
//             }

//             const result = await response.json()

//             if (result.success) {
//                 console.log('✅ Отчеты успешно загружены')
//                 setReports(result.reports || [])
//                 setPagination(result.pagination || {
//                     page: 1,
//                     per_page: 10,
//                     total: 0,
//                     total_pages: 0
//                 })
//             } else {
//                 setError(result.message || 'Ошибка загрузки отчетов')
//             }
//         } catch (err) {
//             console.error('💥 Ошибка при загрузке отчетов:', err)
//             setError('Ошибка соединения с сервером')

//             // В разработке показываем mock данные
//             if (process.env.NODE_ENV === 'development') {
//                 console.log('🔄 Используем mock данные для разработки')
//                 setReports(mockReports)
//                 setPagination({
//                     page: 1,
//                     per_page: 10,
//                     total: mockReports.length,
//                     total_pages: 1
//                 })
//             }
//         } finally {
//             setLoading(false)
//         }
//     }

//     // Mock данные для разработки
//     const mockReports = [
//         {
//             id: 1,
//             telegram_user_id: user?.id?.toString() || "123456789",
//             report_type: "qogi",
//             language: "ru",
//             cubic_metr: true,
//             created_at: "2024-06-08 15:30:00",
//             download_url: "#",
//             has_file: true
//         },
//         {
//             id: 2,
//             telegram_user_id: user?.id?.toString() || "123456789",
//             report_type: "qogi",
//             language: "en",
//             cubic_metr: false,
//             created_at: "2024-06-07 12:45:00",
//             download_url: "#",
//             has_file: true
//         }
//     ]

//     useEffect(() => {
//         if (!userLoading && user) {
//             fetchReports(1, filter)
//         }
//     }, [filter, userLoading, user])

//     // НОВЫЙ МЕТОД: Отправка отчета в Telegram
//     const sendReportToTelegram = async (reportId) => {
//         console.log('📤 Отправка отчета в Telegram:', reportId)

//         if (!user || !tg?.initData) {
//             console.error('❌ Пользователь не авторизован')
//             showNotification('Ошибка авторизации', 'error')
//             return
//         }

//         // Проверяем, не отправляется ли уже этот отчет
//         if (sendingReports.has(reportId)) {
//             console.log('⏳ Отчет уже отправляется...')
//             return
//         }

//         try {
//             // Добавляем в список отправляемых
//             setSendingReports(prev => new Set([...prev, reportId]))

//             const sendUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/send-telegram`
//             console.log('🌐 URL отправки:', sendUrl)

//             const response = await fetch(sendUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-Telegram-Init-Data': tg.initData
//                 }
//             })

//             console.log('📥 Ответ на отправку:', response.status)

//             if (response.status === 401) {
//                 throw new Error('Необходима авторизация')
//             }

//             if (response.status === 403) {
//                 throw new Error('Доступ к отчету запрещен')
//             }

//             if (response.status === 404) {
//                 throw new Error('Отчет не найден или недоступен')
//             }

//             if (!response.ok) {
//                 throw new Error(`Ошибка сервера: ${response.status}`)
//             }

//             const result = await response.json()
//             console.log('📋 Результат отправки:', result)

//             if (result.success) {
//                 console.log('✅ Отчет отправлен в Telegram')
//                 showNotification('📱 Отчет отправлен вам в Telegram!', 'success')

//                 // Вибрация для подтверждения (если поддерживается)
//                 if (tg?.HapticFeedback) {
//                     tg.HapticFeedback.notificationOccurred('success')
//                 }
//             } else {
//                 throw new Error(result.message || 'Не удалось отправить отчет')
//             }

//         } catch (error) {
//             console.error('💥 Ошибка при отправке в Telegram:', error)
//             showNotification(`❌ Ошибка отправки: ${error.message}`, 'error')

//             // Вибрация для ошибки
//             if (tg?.HapticFeedback) {
//                 tg.HapticFeedback.notificationOccurred('error')
//             }
//         } finally {
//             // Убираем из списка отправляемых
//             setSendingReports(prev => {
//                 const newSet = new Set(prev)
//                 newSet.delete(reportId)
//                 return newSet
//             })
//         }
//     }

//     // Старый метод скачивания (как fallback)
//     const downloadReport = async (reportId) => {
//         console.log('📥 Начинаем скачивание отчета:', reportId)

//         if (!user || !tg?.initData) {
//             console.error('❌ Пользователь не авторизован')
//             showNotification('Ошибка авторизации', 'error')
//             return
//         }

//         try {
//             const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`
//             console.log('🌐 URL скачивания:', downloadUrl)

//             const response = await fetch(downloadUrl, {
//                 method: 'GET',
//                 headers: {
//                     'X-Telegram-Init-Data': tg.initData
//                 }
//             })

//             if (response.status === 401) {
//                 throw new Error('Необходима авторизация')
//             }

//             if (response.status === 403) {
//                 throw new Error('Доступ к отчету запрещен')
//             }

//             if (!response.ok) {
//                 throw new Error(`Ошибка сервера: ${response.status}`)
//             }

//             const blob = await response.blob()
//             const link = document.createElement('a')
//             link.href = URL.createObjectURL(blob)
//             link.download = `report_${reportId}.pdf`

//             document.body.appendChild(link)
//             link.click()
//             document.body.removeChild(link)
//             URL.revokeObjectURL(link.href)

//             console.log('✅ Скачивание завершено')
//             showNotification('📁 Отчет скачан', 'success')

//         } catch (error) {
//             console.error('💥 Ошибка при скачивании:', error)
//             showNotification(`❌ Ошибка скачивания: ${error.message}`, 'error')
//         }
//     }

//     const shareReport = async (reportId) => {
//         console.log('📤 Попытка поделиться отчетом:', reportId)

//         try {
//             const report = reports.find(r => r.id === reportId)

//             if (report?.download_url) {
//                 const shareUrl = `${window.location.origin}/report/${reportId}`

//                 if (navigator.share) {
//                     await navigator.share({
//                         title: `Отчет ${report.report_type.toUpperCase()} #${reportId}`,
//                         url: shareUrl
//                     })
//                     console.log('✅ Поделились через Web Share API')
//                 } else {
//                     if (navigator.clipboard) {
//                         await navigator.clipboard.writeText(shareUrl)
//                         console.log('✅ Ссылка скопирована в буфер обмена')
//                         showNotification('📋 Ссылка скопирована в буфер обмена', 'success')
//                     } else {
//                         console.log('❌ Clipboard API недоступен')
//                         showNotification('❌ Невозможно скопировать ссылку', 'error')
//                     }
//                 }
//             } else {
//                 showNotification('❌ Отчет недоступен', 'error')
//             }
//         } catch (error) {
//             console.error('💥 Ошибка при отправке:', error)
//             showNotification('❌ Ошибка при отправке', 'error')
//         }
//     }

//     // Вспомогательные функции остаются теми же
//     const getStatusText = (report) => {
//         return report.has_file ? 'Готов' : 'В работе'
//     }

//     const getStatusColor = (report) => {
//         return report.has_file
//             ? 'bg-emerald-100 text-emerald-800'
//             : 'bg-yellow-100 text-yellow-800'
//     }

//     const formatDate = (dateString) => {
//         return new Date(dateString).toLocaleDateString('ru-RU', {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//         })
//     }

//     const getLanguageName = (code) => {
//         const languages = {
//             'ru': 'Русский',
//             'en': 'English',
//             'uz': 'O\'zbek'
//         }
//         return languages[code] || code
//     }

//     // Фильтрация отчетов
//     const filteredReports = reports.filter(report => {
//         if (filter === 'all') return true
//         if (filter === 'qogi' || filter === 'eyecsite') return report.report_type === filter
//         return true
//     })

//     if (userLoading) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="flex items-center justify-center py-12">
//                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
//                 </div>
//             </div>
//         )
//     }

//     if (!user) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//                     <div className="flex items-center">
//                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="p-6 pb-24">
//             {/* Уведомления */}
//             {notification && (
//                 <div className={`fixed top-4 left-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${notification.type === 'success'
//                     ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
//                     : 'bg-red-50 border border-red-200 text-red-800'
//                     }`}>
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                             {notification.type === 'success' ? (
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                             ) : (
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                                 </svg>
//                             )}
//                             <span className="text-sm font-medium">{notification.message}</span>
//                         </div>
//                         <button
//                             onClick={() => setNotification(null)}
//                             className="ml-4 text-current opacity-70 hover:opacity-100"
//                         >
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                 </Link>
//                 <h1 className="text-xl font-semibold text-gray-900">История отчетов</h1>
//                 <button
//                     onClick={() => fetchReports(pagination.page, filter)}
//                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
//                 >
//                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Filter Tabs */}
//             <div className="flex bg-gray-100 rounded-xl p-1 mb-6 overflow-x-auto">
//                 <button
//                     onClick={() => setFilter('all')}
//                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
//                         }`}
//                 >
//                     Все
//                 </button>
//                 <button
//                     onClick={() => setFilter('qogi')}
//                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'qogi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
//                         }`}
//                 >
//                     QOGI
//                 </button>
//                 <button
//                     onClick={() => setFilter('eyecsite')}
//                     className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'eyecsite' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
//                         }`}
//                 >
//                     EYECSITE
//                 </button>
//             </div>

//             {/* Loading State */}
//             {loading && (
//                 <div className="flex items-center justify-center py-12">
//                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
//                 </div>
//             )}

//             {/* Error State */}
//             {error && (
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
//                     <div className="flex items-center">
//                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-red-800 text-sm">{error}</span>
//                     </div>
//                 </div>
//             )}

//             {/* Reports List */}
//             {!loading && (
//                 <div className="space-y-4">
//                     {filteredReports.map((report) => (
//                         <div key={report.id} className="card">
//                             <div className="flex items-start justify-between mb-3">
//                                 <div className="flex-1">
//                                     <div className="flex items-center gap-2 mb-2">
//                                         <h3 className="font-semibold text-gray-900">
//                                             {report.report_type?.toUpperCase() || 'QOGI'} #{report.id}
//                                         </h3>
//                                         <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report)}`}>
//                                             {getStatusText(report)}
//                                         </div>
//                                     </div>
//                                     <div className="space-y-1 text-sm text-gray-600">
//                                         <div>📅 {formatDate(report.created_at)}</div>
//                                         <div>🌐 {getLanguageName(report.language)}</div>
//                                         {report.cubic_metr && <div>📊 Кубические метры</div>}
//                                     </div>
//                                 </div>
//                             </div>

//                             {report.has_file ? (
//                                 <div className="flex gap-2">
//                                     {/* ОСНОВНАЯ КНОПКА - Отправить в Telegram */}
//                                     <button
//                                         onClick={() => sendReportToTelegram(report.id)}
//                                         disabled={sendingReports.has(report.id)}
//                                         className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${sendingReports.has(report.id)
//                                             ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
//                                             : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
//                                             }`}
//                                     >
//                                         {sendingReports.has(report.id) ? (
//                                             <>
//                                                 <div className="w-4 h-4 border-2 border-emerald-800 border-t-transparent rounded-full animate-spin"></div>
//                                                 Отправляем...
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                                                 </svg>
//                                                 Отправить в Telegram
//                                             </>
//                                         )}
//                                     </button>

//                                     {/* Дополнительные действия */}
//                                     <div className="flex gap-2">
//                                         {/* Кнопка скачивания (как fallback) */}
//                                         <button
//                                             onClick={() => downloadReport(report.id)}
//                                             className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
//                                             title="Скачать файл"
//                                         >
//                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                             </svg>
//                                         </button>

//                                         {/* Кнопка поделиться */}
//                                         <button
//                                             onClick={() => shareReport(report.id)}
//                                             className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
//                                             title="Поделиться"
//                                         >
//                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
//                                     <div className="flex items-center gap-2 text-yellow-800 text-sm">
//                                         <div className="w-4 h-4 border-2 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
//                                         Отчет генерируется
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Empty State */}
//             {!loading && filteredReports.length === 0 && (
//                 <div className="text-center py-12">
//                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Отчетов не найдено</h3>
//                     <p className="text-gray-600 mb-6">
//                         {filter === 'all'
//                             ? 'Создайте первый отчет, чтобы увидеть его здесь'
//                             : `Нет отчетов с типом "${filter}"`
//                         }
//                     </p>
//                     <Link href="/create-report" className="btn-primary inline-block">
//                         Создать отчет
//                     </Link>
//                 </div>
//             )}

//             {/* Pagination */}
//             {pagination.total_pages > 1 && (
//                 <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
//                     <button
//                         onClick={() => fetchReports(pagination.page - 1, filter)}
//                         disabled={pagination.page <= 1}
//                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         Назад
//                     </button>
//                     <span className="text-sm text-gray-600">
//                         Страница {pagination.page} из {pagination.total_pages}
//                     </span>
//                     <button
//                         onClick={() => fetchReports(pagination.page + 1, filter)}
//                         disabled={pagination.page >= pagination.total_pages}
//                         className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         Далее
//                     </button>
//                 </div>
//             )}
//         </div>
//     )
// }


// app/history/page.js - ОБНОВЛЕННАЯ ВЕРСИЯ
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTelegramContext } from '../contexts/TelegramContext'

export default function HistoryPage() {
    const { user, tg, isLoading: userLoading } = useTelegramContext()
    const [filter, setFilter] = useState('all')
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        total: 0,
        total_pages: 0
    })
    const [error, setError] = useState(null)
    const [sendingReports, setSendingReports] = useState(new Set()) // Отслеживание отправляемых отчетов
    const [notification, setNotification] = useState(null) // Уведомления

    // Показать уведомление
    const showNotification = (message, type = 'success') => {
        setNotification({ message, type })
        setTimeout(() => setNotification(null), 5000) // Скрыть через 5 секунд
    }

    // Загрузка отчетов с API (код остается тот же)
    const fetchReports = async (page = 1, reportType = null) => {
        if (userLoading || !user) {
            console.log('⏳ Ожидание загрузки пользователя...')
            return
        }

        try {
            setLoading(true)
            setError(null)

            console.log('📋 Загрузка отчетов из API')
            console.log('  Страница:', page)
            console.log('  Тип фильтра:', reportType)
            console.log('  Пользователь:', user.id)

            const params = new URLSearchParams({
                page: page.toString(),
                per_page: '10'
            })

            if (reportType && reportType !== 'all' && (reportType === 'qogi' || reportType === 'eyecsite')) {
                params.append('report_type', reportType)
                console.log('  API фильтр по типу:', reportType)
            }

            const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports?${params}`
            console.log('🌐 API URL:', apiUrl)

            const headers = {
                'Content-Type': 'application/json'
            }

            if (tg?.initData) {
                headers['X-Telegram-Init-Data'] = tg.initData
                console.log('🔐 Добавлены Telegram данные для аутентификации')
            } else {
                console.warn('⚠️ Telegram initData недоступны')
            }

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            })

            console.log('📥 Ответ от API:', response.status)

            if (response.status === 401) {
                setError('Необходима авторизация через Telegram')
                return
            }

            if (response.status === 403) {
                setError('Доступ запрещен')
                return
            }

            const result = await response.json()

            if (result.success) {
                console.log('✅ Отчеты успешно загружены')
                setReports(result.reports || [])
                setPagination(result.pagination || {
                    page: 1,
                    per_page: 10,
                    total: 0,
                    total_pages: 0
                })
            } else {
                setError(result.message || 'Ошибка загрузки отчетов')
            }
        } catch (err) {
            console.error('💥 Ошибка при загрузке отчетов:', err)
            setError('Ошибка соединения с сервером')

            // В разработке показываем mock данные
            if (process.env.NODE_ENV === 'development') {
                console.log('🔄 Используем mock данные для разработки')
                setReports(mockReports)
                setPagination({
                    page: 1,
                    per_page: 10,
                    total: mockReports.length,
                    total_pages: 1
                })
            }
        } finally {
            setLoading(false)
        }
    }

    // Mock данные для разработки
    const mockReports = [
        {
            id: 1,
            telegram_user_id: user?.id?.toString() || "123456789",
            report_type: "qogi",
            language: "ru",
            cubic_metr: true,
            created_at: "2024-06-08 15:30:00",
            download_url: "#",
            has_file: true
        },
        {
            id: 2,
            telegram_user_id: user?.id?.toString() || "123456789",
            report_type: "qogi",
            language: "en",
            cubic_metr: false,
            created_at: "2024-06-07 12:45:00",
            download_url: "#",
            has_file: true
        }
    ]

    useEffect(() => {
        if (!userLoading && user) {
            fetchReports(1, filter)
        }
    }, [filter, userLoading, user])

    // НОВЫЙ МЕТОД: Отправка отчета в Telegram
    const sendReportToTelegram = async (reportId) => {
        console.log('📤 Отправка отчета в Telegram:', reportId)

        if (!user || !tg?.initData) {
            console.error('❌ Пользователь не авторизован')
            showNotification('Ошибка авторизации', 'error')
            return
        }

        // Проверяем, не отправляется ли уже этот отчет
        if (sendingReports.has(reportId)) {
            console.log('⏳ Отчет уже отправляется...')
            return
        }

        try {
            // Добавляем в список отправляемых
            setSendingReports(prev => new Set([...prev, reportId]))

            const sendUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/send-telegram`
            console.log('🌐 URL отправки:', sendUrl)

            const response = await fetch(sendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Telegram-Init-Data': tg.initData
                }
            })

            console.log('📥 Ответ на отправку:', response.status)

            if (response.status === 401) {
                throw new Error('Необходима авторизация')
            }

            if (response.status === 403) {
                throw new Error('Доступ к отчету запрещен')
            }

            if (response.status === 404) {
                throw new Error('Отчет не найден или недоступен')
            }

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`)
            }

            const result = await response.json()
            console.log('📋 Результат отправки:', result)

            if (result.success) {
                console.log('✅ Отчет отправлен в Telegram')
                showNotification('📱 Отчет отправлен вам в Telegram!', 'success')

                // Вибрация для подтверждения (если поддерживается)
                if (tg?.HapticFeedback) {
                    tg.HapticFeedback.notificationOccurred('success')
                }
            } else {
                throw new Error(result.message || 'Не удалось отправить отчет')
            }

        } catch (error) {
            console.error('💥 Ошибка при отправке в Telegram:', error)
            showNotification(`❌ Ошибка отправки: ${error.message}`, 'error')

            // Вибрация для ошибки
            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('error')
            }
        } finally {
            // Убираем из списка отправляемых
            setSendingReports(prev => {
                const newSet = new Set(prev)
                newSet.delete(reportId)
                return newSet
            })
        }
    }

    // Старый метод скачивания (как fallback)
    const downloadReport = async (reportId) => {
        console.log('📥 Начинаем скачивание отчета:', reportId)

        if (!user || !tg?.initData) {
            console.error('❌ Пользователь не авторизован')
            showNotification('Ошибка авторизации', 'error')
            return
        }

        try {
            const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`
            console.log('🌐 URL скачивания:', downloadUrl)
            console.log('🔐 Отправляем с initData:', tg.initData.substring(0, 50) + '...')

            const response = await fetch(downloadUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Telegram-Init-Data': tg.initData
                }
            })

            console.log('📥 Ответ на скачивание:')
            console.log('  Status:', response.status)
            console.log('  StatusText:', response.statusText)
            console.log('  OK:', response.ok)

            if (response.status === 401) {
                console.log('🔒 Ошибка аутентификации - проверяем initData')
                throw new Error('Необходима авторизация')
            }

            if (response.status === 403) {
                console.log('🚫 Доступ запрещен')
                throw new Error('Доступ к отчету запрещен')
            }

            if (response.status === 404) {
                console.log('📄 Отчет не найден')
                throw new Error('Отчет не найден')
            }

            if (!response.ok) {
                const errorText = await response.text()
                console.error('❌ Ошибка сервера:', errorText)
                throw new Error(`Ошибка сервера: ${response.status}`)
            }

            // Получаем файл как blob
            const blob = await response.blob()
            console.log('📁 Blob получен, размер:', blob.size, 'тип:', blob.type)

            // Создаем ссылку для скачивания
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = `report_${reportId}.pdf`

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            // Освобождаем память
            URL.revokeObjectURL(link.href)

            console.log('✅ Скачивание завершено')
            showNotification('📁 Отчет скачан', 'success')

            // Вибрация для подтверждения
            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('success')
            }

        } catch (error) {
            console.error('💥 Ошибка при скачивании:', error)
            console.error('  Тип ошибки:', error.constructor.name)
            console.error('  Сообщение:', error.message)

            showNotification(`❌ Ошибка скачивания: ${error.message}`, 'error')

            // Вибрация для ошибки
            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('error')
            }
        }
    }

    // Альтернативный метод скачивания для обхода CORS
    const downloadReportDirect = async (reportId) => {
        console.log('📥 Прямое скачивание отчета:', reportId)

        if (!user || !tg?.initData) {
            console.error('❌ Пользователь не авторизован')
            showNotification('Ошибка авторизации', 'error')
            return
        }

        try {
            // Создаем URL с параметрами аутентификации
            const downloadUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/download`

            // Формируем URL с init_data как параметр (обход CORS)
            const urlWithAuth = `${downloadUrl}?init_data=${encodeURIComponent(tg.initData)}`

            console.log('🌐 URL для прямого скачивания:', urlWithAuth)

            // Открываем в новом окне для скачивания
            const downloadWindow = window.open(urlWithAuth, '_blank')

            // Закрываем окно через небольшой промежуток времени
            setTimeout(() => {
                if (downloadWindow) {
                    downloadWindow.close()
                }
            }, 3000)

            console.log('✅ Скачивание инициировано')
            showNotification('📁 Скачивание началось', 'success')

            // Вибрация для подтверждения
            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('success')
            }

        } catch (error) {
            console.error('💥 Ошибка при прямом скачивании:', error)
            showNotification(`❌ Ошибка скачивания: ${error.message}`, 'error')

            // Вибрация для ошибки
            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('error')
            }
        }
    }

    const shareReport = async (reportId) => {
        console.log('📤 Попытка поделиться отчетом:', reportId)

        try {
            const report = reports.find(r => r.id === reportId)

            if (report?.download_url) {
                const shareUrl = `${window.location.origin}/report/${reportId}`

                if (navigator.share) {
                    await navigator.share({
                        title: `Отчет ${report.report_type.toUpperCase()} #${reportId}`,
                        url: shareUrl
                    })
                    console.log('✅ Поделились через Web Share API')
                } else {
                    if (navigator.clipboard) {
                        await navigator.clipboard.writeText(shareUrl)
                        console.log('✅ Ссылка скопирована в буфер обмена')
                        showNotification('📋 Ссылка скопирована в буфер обмена', 'success')
                    } else {
                        console.log('❌ Clipboard API недоступен')
                        showNotification('❌ Невозможно скопировать ссылку', 'error')
                    }
                }
            } else {
                showNotification('❌ Отчет недоступен', 'error')
            }
        } catch (error) {
            console.error('💥 Ошибка при отправке:', error)
            showNotification('❌ Ошибка при отправке', 'error')
        }
    }

    // Вспомогательные функции остаются теми же
    const getStatusText = (report) => {
        return report.has_file ? 'Готов' : 'В работе'
    }

    const getStatusColor = (report) => {
        return report.has_file
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-yellow-100 text-yellow-800'
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const getLanguageName = (code) => {
        const languages = {
            'ru': 'Русский',
            'en': 'English',
            'uz': 'O\'zbek'
        }
        return languages[code] || code
    }

    // Фильтрация отчетов
    const filteredReports = reports.filter(report => {
        if (filter === 'all') return true
        if (filter === 'qogi' || filter === 'eyecsite') return report.report_type === filter
        return true
    })

    if (userLoading) {
        return (
            <div className="p-6 pb-24">
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
                </div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="p-6 pb-24">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 pb-24">
            {/* Уведомления */}
            {notification && (
                <div className={`fixed top-4 left-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${notification.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {notification.type === 'success' ? (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                            <span className="text-sm font-medium">{notification.message}</span>
                        </div>
                        <button
                            onClick={() => setNotification(null)}
                            className="ml-4 text-current opacity-70 hover:opacity-100"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">История отчетов</h1>
                <button
                    onClick={() => fetchReports(pagination.page, filter)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6 overflow-x-auto">
                <button
                    onClick={() => setFilter('all')}
                    className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
                        }`}
                >
                    Все
                </button>
                <button
                    onClick={() => setFilter('qogi')}
                    className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'qogi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
                        }`}
                >
                    QOGI
                </button>
                <button
                    onClick={() => setFilter('eyecsite')}
                    className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${filter === 'eyecsite' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-600'
                        }`}
                >
                    EYECSITE
                </button>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">{error}</span>
                    </div>
                </div>
            )}

            {/* Reports List */}
            {!loading && (
                <div className="space-y-4">
                    {filteredReports.map((report) => (
                        <div key={report.id} className="card">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-semibold text-gray-900">
                                            {report.report_type?.toUpperCase() || 'QOGI'} #{report.id}
                                        </h3>
                                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report)}`}>
                                            {getStatusText(report)}
                                        </div>
                                    </div>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <div>📅 {formatDate(report.created_at)}</div>
                                        <div>🌐 {getLanguageName(report.language)}</div>
                                        {report.cubic_metr && <div>📊 Кубические метры</div>}
                                    </div>
                                </div>
                            </div>

                            {report.has_file ? (
                                <div className="flex gap-2">
                                    {/* ОСНОВНАЯ КНОПКА - Отправить в Telegram */}
                                    <button
                                        onClick={() => sendReportToTelegram(report.id)}
                                        disabled={sendingReports.has(report.id)}
                                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${sendingReports.has(report.id)
                                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                                            }`}
                                    >
                                        {sendingReports.has(report.id) ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-emerald-800 border-t-transparent rounded-full animate-spin"></div>
                                                Отправляем...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Отправить в Telegram
                                            </>
                                        )}
                                    </button>

                                    {/* Дополнительные действия */}
                                    <div className="flex gap-2">
                                        {/* Кнопка скачивания (как fallback) */}
                                        <button
                                            onClick={() => downloadReportDirect(report.id)}
                                            className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
                                            title="Скачать файл"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </button>

                                        {/* Кнопка поделиться */}
                                        <button
                                            onClick={() => shareReport(report.id)}
                                            className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
                                            title="Поделиться"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                    <div className="flex items-center gap-2 text-yellow-800 text-sm">
                                        <div className="w-4 h-4 border-2 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
                                        Отчет генерируется
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && filteredReports.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Отчетов не найдено</h3>
                    <p className="text-gray-600 mb-6">
                        {filter === 'all'
                            ? 'Создайте первый отчет, чтобы увидеть его здесь'
                            : `Нет отчетов с типом "${filter}"`
                        }
                    </p>
                    <Link href="/create-report" className="btn-primary inline-block">
                        Создать отчет
                    </Link>
                </div>
            )}

            {/* Pagination */}
            {pagination.total_pages > 1 && (
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => fetchReports(pagination.page - 1, filter)}
                        disabled={pagination.page <= 1}
                        className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Назад
                    </button>
                    <span className="text-sm text-gray-600">
                        Страница {pagination.page} из {pagination.total_pages}
                    </span>
                    <button
                        onClick={() => fetchReports(pagination.page + 1, filter)}
                        disabled={pagination.page >= pagination.total_pages}
                        className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Далее
                    </button>
                </div>
            )}
        </div>
    )
}