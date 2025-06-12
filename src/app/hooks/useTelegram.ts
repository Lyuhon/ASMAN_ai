// // hooks/useTelegram.ts
// import { useEffect, useState } from 'react';

// interface TelegramUser {
//     id: number;
//     username?: string;
//     first_name?: string;
//     last_name?: string;
// }

// interface TelegramWebApp {
//     initData: string;
//     initDataUnsafe: {
//         user?: TelegramUser;
//     };
//     ready: () => void;
//     close: () => void;
//     expand: () => void;
// }

// declare global {
//     interface Window {
//         Telegram: {
//             WebApp: TelegramWebApp;
//         };
//     }
// }

// export const useTelegram = () => {
//     const [user, setUser] = useState<TelegramUser | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const tg = window.Telegram?.WebApp;

//         if (tg) {
//             tg.ready();
//             tg.expand();

//             // Отправляем данные на сервер для валидации
//             fetch('/api/validate', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ initData: tg.initData }),
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.success) {
//                         setUser(data.user);
//                     }
//                     setIsLoading(false);
//                 })
//                 .catch(() => {
//                     setIsLoading(false);
//                 });
//         } else {
//             setIsLoading(false);
//         }
//     }, []);

//     return { user, isLoading, tg: window.Telegram?.WebApp };
// };


// hooks/useTelegram.ts
import { useEffect, useState } from 'react';

interface TelegramUser {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
}

interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
        user?: TelegramUser;
    };
    ready: () => void;
    close: () => void;
    expand: () => void;
}

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}

export const useTelegram = () => {
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tg, setTg] = useState<TelegramWebApp | null>(null);

    useEffect(() => {
        // ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: проверяем что мы в браузере
        if (typeof window === 'undefined') {
            setIsLoading(false);
            return;
        }

        const telegramApp = window.Telegram?.WebApp;

        if (telegramApp) {
            setTg(telegramApp);
            telegramApp.ready();
            telegramApp.expand();

            // Отправляем данные на сервер для валидации
            fetch('/api/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ initData: telegramApp.initData }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setUser(data.user);
                    }
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        } else {
            // Для разработки - можно установить mock пользователя
            if (process.env.NODE_ENV === 'development') {
                console.log('🔧 Development mode: using mock Telegram user');
                setUser({
                    id: 123456789,
                    username: 'dev_user',
                    first_name: 'Dev',
                    last_name: 'User'
                });
            }
            setIsLoading(false);
        }
    }, []);

    // ✅ ИСПРАВЛЕНИЕ: возвращаем безопасную ссылку на tg
    return {
        user,
        isLoading,
        tg: typeof window !== 'undefined' ? tg : null
    };
};