// app/components/TelegramProvider.js
'use client'
import { useEffect } from 'react'

export default function TelegramProvider({ children }) {
    useEffect(() => {
        // Проверяем, загружен ли Telegram Web App
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp

            // Инициализируем Web App
            tg.ready()

            // Расширяем на весь экран
            tg.expand()

            // Включаем закрытие по свайпу вниз
            tg.enableClosingConfirmation()

            // Настраиваем цвета под тему пользователя
            if (tg.colorScheme === 'dark') {
                document.body.classList.add('dark-theme')
            }

            // Добавляем класс для определения что мы в Telegram
            document.body.classList.add('telegram-mode')

            // Скрываем главную кнопку по умолчанию
            tg.MainButton.hide()

            // Слушаем изменения темы
            tg.onEvent('themeChanged', () => {
                if (tg.colorScheme === 'dark') {
                    document.body.classList.add('dark-theme')
                } else {
                    document.body.classList.remove('dark-theme')
                }
            })

            console.log('Telegram Web App initialized:', {
                user: tg.initDataUnsafe.user,
                colorScheme: tg.colorScheme,
                version: tg.version
            })
        }

        return () => {
            // Очистка при размонтировании
            if (typeof window !== 'undefined' && document.body) {
                document.body.classList.remove('telegram-mode', 'dark-theme')
            }
        }
    }, [])

    return <>{children}</>
}