'use client'
import { useState, useEffect } from 'react'
import { useTelegramContext } from '../contexts/TelegramContext'

export default function LanguageDebugger() {
    const { user, isLoading } = useTelegramContext()
    const [isOpen, setIsOpen] = useState(false)

    // Проверяем тест режим
    const isTestMode = typeof window !== 'undefined' &&
        new URLSearchParams(window.location.search).get('test') === 'true'

    // Показываем только в тест режиме
    if (!isTestMode || isLoading) {
        return null
    }

    // Функция смены языка
    const changeLanguage = (lang) => {
        console.log(`🌍 LanguageDebugger: Changing language to ${lang}`)

        if (window.switchLanguage) {
            window.switchLanguage(lang)
        } else {
            console.warn('⚠️ window.switchLanguage не найдена')
        }
    }

    // Текущий язык
    const currentLang = user?.language || 'ru'

    const languages = [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
        { code: 'en', name: 'English', flag: '🇺🇸' }
    ]

    return (
        <>
            {/* Кнопка-тоггл */}
            <div className="fixed bottom-20 right-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
                    title="Language Debugger"
                >
                    <span className="text-lg">🌍</span>
                </button>
            </div>

            {/* Панель выбора языка */}
            {isOpen && (
                <div className="fixed bottom-36 right-4 z-50 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-48">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 text-sm">🌍 Language Test</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                        Текущий: <span className="font-medium">{currentLang.toUpperCase()}</span>
                    </div>

                    <div className="space-y-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${currentLang === lang.code
                                        ? 'bg-purple-100 text-purple-800 border border-purple-200'
                                        : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                <span className="flex-1 text-left">{lang.name}</span>
                                {currentLang === lang.code && (
                                    <span className="text-purple-600 text-xs">✓</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-500 text-center">
                            Или в консоли: <br />
                            <code className="bg-gray-100 px-1 rounded">setRussian()</code>
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}