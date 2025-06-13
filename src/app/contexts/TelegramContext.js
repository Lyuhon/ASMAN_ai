// contexts/TelegramContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const TelegramContext = createContext(null)

export function TelegramProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [tg, setTg] = useState(null)

    useEffect(() => {
        // Проверяем что мы в браузере
        if (typeof window === 'undefined') {
            setIsLoading(false)
            return
        }

        const telegramApp = window.Telegram?.WebApp

        if (telegramApp) {
            setTg(telegramApp)
            telegramApp.ready()
            telegramApp.expand()

            console.log('🔍 Telegram Web App data:', {
                initData: telegramApp.initData,
                user: telegramApp.initDataUnsafe?.user,
                platform: telegramApp.platform
            })

            // Отправляем данные на сервер для валидации
            const apiUrl = 'https://asmanenergy.com/wp-json/telegram-bot/v1/validate'

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ initData: telegramApp.initData }),
            })
                .then(res => {
                    console.log('📡 API Response status:', res.status)
                    return res.json()
                })
                .then(data => {
                    console.log('📝 API Response data:', data)
                    if (data.success && data.user) {
                        setUser(data.user)
                        setError(null)
                    } else {
                        console.error('❌ Validation failed:', data.error)
                        setError(data.error || 'Ошибка валидации')
                    }
                    setIsLoading(false)
                })
                .catch(error => {
                    console.error('🚨 API Error:', error)
                    setError('Ошибка соединения с сервером')
                    setIsLoading(false)
                })
        } else {
            console.log('🔍 Telegram Web App not found, checking environment...')

            // Для разработки - используем mock данные
            if (process.env.NODE_ENV === 'development') {
                console.log('🔧 Development mode: using mock Telegram user')
                setTimeout(() => {
                    setUser({
                        id: 123456789,
                        username: 'dev_user',
                        first_name: 'Dev',
                        last_name: 'User',
                        language: 'ru',
                        company_name: 'Test Company',
                        phone_number: '+998901234567',
                        registration_completed: true
                    })
                    setIsLoading(false)
                }, 1000)
            } else {
                console.log('❌ Production: Telegram Web App not available')
                setError('Откройте приложение через Telegram')
                setIsLoading(false)
            }
        }
    }, [])

    // Хелперы для работы с данными пользователя
    const getDisplayName = () => {
        if (!user) return 'Пользователь'

        const parts = []
        if (user.first_name) parts.push(user.first_name)
        if (user.last_name) parts.push(user.last_name)

        return parts.length > 0 ? parts.join(' ') : (user.username || `User ${user.id}`)
    }

    const getInitials = () => {
        if (!user) return 'U'

        if (user.first_name && user.last_name) {
            return `${user.first_name[0]}${user.last_name[0]}`
        } else if (user.first_name) {
            return user.first_name[0]
        } else if (user.username) {
            return user.username[0].toUpperCase()
        }

        return 'U'
    }

    const isRegistrationComplete = () => {
        return user?.registration_completed === true
    }

    const getUserLanguage = () => {
        return user?.language || 'ru'
    }

    // Функции для работы с Telegram UI
    const showMainButton = (text, callback) => {
        if (tg?.MainButton) {
            tg.MainButton.setText(text)
            tg.MainButton.onClick(callback)
            tg.MainButton.show()
        }
    }

    const hideMainButton = () => {
        if (tg?.MainButton) {
            tg.MainButton.hide()
        }
    }

    const closeApp = () => {
        if (tg) {
            tg.close()
        }
    }

    const contextValue = {
        user,
        isLoading,
        error,
        tg: typeof window !== 'undefined' ? tg : null,
        getDisplayName,
        getInitials,
        isRegistrationComplete,
        getUserLanguage,
        showMainButton,
        hideMainButton,
        closeApp,
    }

    return (
        <TelegramContext.Provider value={contextValue}>
            {children}
        </TelegramContext.Provider>
    )
}

// Хук для использования контекста
export const useTelegramContext = () => {
    const context = useContext(TelegramContext)
    if (!context) {
        throw new Error('useTelegramContext must be used within a TelegramProvider')
    }
    return context
}

// Экспортируем также старый хук для обратной совместимости
export const useTelegram = useTelegramContext