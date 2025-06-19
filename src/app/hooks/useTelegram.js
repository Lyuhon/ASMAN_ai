// // // // // hooks/useTelegram.ts
// // // // import { useEffect, useState } from 'react';

// // // // interface TelegramUser {
// // // //     id: number;
// // // //     username?: string;
// // // //     first_name?: string;
// // // //     last_name?: string;
// // // // }

// // // // interface TelegramWebApp {
// // // //     initData: string;
// // // //     initDataUnsafe: {
// // // //         user?: TelegramUser;
// // // //     };
// // // //     ready: () => void;
// // // //     close: () => void;
// // // //     expand: () => void;
// // // // }

// // // // declare global {
// // // //     interface Window {
// // // //         Telegram: {
// // // //             WebApp: TelegramWebApp;
// // // //         };
// // // //     }
// // // // }

// // // // export const useTelegram = () => {
// // // //     const [user, setUser] = useState<TelegramUser | null>(null);
// // // //     const [isLoading, setIsLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         const tg = window.Telegram?.WebApp;

// // // //         if (tg) {
// // // //             tg.ready();
// // // //             tg.expand();

// // // //             // Отправляем данные на сервер для валидации
// // // //             fetch('/api/validate', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json',
// // // //                 },
// // // //                 body: JSON.stringify({ initData: tg.initData }),
// // // //             })
// // // //                 .then(res => res.json())
// // // //                 .then(data => {
// // // //                     if (data.success) {
// // // //                         setUser(data.user);
// // // //                     }
// // // //                     setIsLoading(false);
// // // //                 })
// // // //                 .catch(() => {
// // // //                     setIsLoading(false);
// // // //                 });
// // // //         } else {
// // // //             setIsLoading(false);
// // // //         }
// // // //     }, []);

// // // //     return { user, isLoading, tg: window.Telegram?.WebApp };
// // // // };


// // // // hooks/useTelegram.ts
// // // import { useEffect, useState } from 'react';

// // // interface TelegramUser {
// // //     id: number;
// // //     username?: string;
// // //     first_name?: string;
// // //     last_name?: string;
// // // }

// // // interface TelegramWebApp {
// // //     initData: string;
// // //     initDataUnsafe: {
// // //         user?: TelegramUser;
// // //     };
// // //     ready: () => void;
// // //     close: () => void;
// // //     expand: () => void;
// // // }

// // // declare global {
// // //     interface Window {
// // //         Telegram: {
// // //             WebApp: TelegramWebApp;
// // //         };
// // //     }
// // // }

// // // export const useTelegram = () => {
// // //     const [user, setUser] = useState<TelegramUser | null>(null);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [tg, setTg] = useState<TelegramWebApp | null>(null);

// // //     useEffect(() => {
// // //         // ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: проверяем что мы в браузере
// // //         if (typeof window === 'undefined') {
// // //             setIsLoading(false);
// // //             return;
// // //         }

// // //         const telegramApp = window.Telegram?.WebApp;

// // //         if (telegramApp) {
// // //             setTg(telegramApp);
// // //             telegramApp.ready();
// // //             telegramApp.expand();

// // //             // Отправляем данные на сервер для валидации
// // //             fetch('/api/validate', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify({ initData: telegramApp.initData }),
// // //             })
// // //                 .then(res => res.json())
// // //                 .then(data => {
// // //                     if (data.success) {
// // //                         setUser(data.user);
// // //                     }
// // //                     setIsLoading(false);
// // //                 })
// // //                 .catch(() => {
// // //                     setIsLoading(false);
// // //                 });
// // //         } else {
// // //             // Для разработки - можно установить mock пользователя
// // //             if (process.env.NODE_ENV === 'development') {
// // //                 console.log('🔧 Development mode: using mock Telegram user');
// // //                 setUser({
// // //                     id: 123456789,
// // //                     username: 'dev_user',
// // //                     first_name: 'Dev',
// // //                     last_name: 'User'
// // //                 });
// // //             }
// // //             setIsLoading(false);
// // //         }
// // //     }, []);

// // //     // ✅ ИСПРАВЛЕНИЕ: возвращаем безопасную ссылку на tg
// // //     return {
// // //         user,
// // //         isLoading,
// // //         tg: typeof window !== 'undefined' ? tg : null
// // //     };
// // // };


// // // hooks/useTelegram.ts
// // import { useEffect, useState } from 'react';

// // interface TelegramUser {
// //     id: number;
// //     username?: string;
// //     first_name?: string;
// //     last_name?: string;
// // }

// // interface TelegramWebApp {
// //     initData: string;
// //     initDataUnsafe: {
// //         user?: TelegramUser;
// //     };
// //     ready: () => void;
// //     close: () => void;
// //     expand: () => void;
// // }

// // declare global {
// //     interface Window {
// //         Telegram: {
// //             WebApp: TelegramWebApp;
// //         };
// //     }
// // }

// // export const useTelegram = () => {
// //     const [user, setUser] = useState<TelegramUser | null>(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [tg, setTg] = useState<TelegramWebApp | null>(null);

// //     useEffect(() => {
// //         // Проверяем что мы в браузере
// //         if (typeof window === 'undefined') {
// //             setIsLoading(false);
// //             return;
// //         }

// //         const telegramApp = window.Telegram?.WebApp;

// //         if (telegramApp) {
// //             setTg(telegramApp);
// //             telegramApp.ready();
// //             telegramApp.expand();

// //             console.log('🔍 Telegram Web App data:', {
// //                 initData: telegramApp.initData,
// //                 user: telegramApp.initDataUnsafe.user,
// //                 // platform: telegramApp.platform
// //             });

// //             // ✅ ИСПРАВЛЕНИЕ: используем правильный URL вашего WordPress API
// //             const apiUrl = 'https://asmanenergy.com/wp-json/telegram-bot/v1/validate';

// //             // Отправляем данные на сервер для валидации
// //             fetch(apiUrl, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ initData: telegramApp.initData }),
// //             })
// //                 .then(res => {
// //                     console.log('📡 API Response status:', res.status);
// //                     return res.json();
// //                 })
// //                 .then(data => {
// //                     console.log('📝 API Response data:', data);
// //                     if (data.success) {
// //                         setUser(data.user);
// //                     } else {
// //                         console.error('❌ Validation failed:', data.error);
// //                     }
// //                     setIsLoading(false);
// //                 })
// //                 .catch(error => {
// //                     console.error('🚨 API Error:', error);
// //                     setIsLoading(false);
// //                 });
// //         } else {
// //             console.log('🔍 Telegram Web App not found, checking environment...');

// //             // Для разработки - используем mock данные
// //             if (process.env.NODE_ENV === 'development') {
// //                 console.log('🔧 Development mode: using mock Telegram user');
// //                 setTimeout(() => {
// //                     setUser({
// //                         id: 123456789,
// //                         username: 'dev_user',
// //                         first_name: 'Dev',
// //                         last_name: 'User'
// //                     });
// //                     setIsLoading(false);
// //                 }, 1000); // Имитируем задержку API
// //             } else {
// //                 // В продакшене, если нет Telegram Web App
// //                 console.log('❌ Production: Telegram Web App not available');
// //                 setIsLoading(false);
// //             }
// //         }
// //     }, []);

// //     return {
// //         user,
// //         isLoading,
// //         tg: typeof window !== 'undefined' ? tg : null
// //     };
// // };








// // hooks/useTelegram.js
// import { useEffect, useState } from 'react';

// export const useTelegram = () => {
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [tg, setTg] = useState(null);

//     useEffect(() => {
//         // Проверяем что мы в браузере
//         if (typeof window === 'undefined') {
//             setIsLoading(false);
//             return;
//         }

//         const telegramApp = window.Telegram?.WebApp;

//         if (telegramApp) {
//             setTg(telegramApp);
//             telegramApp.ready();
//             telegramApp.expand();

//             console.log('🔍 Telegram Web App data:', {
//                 initData: telegramApp.initData,
//                 user: telegramApp.initDataUnsafe?.user,
//                 platform: telegramApp.platform
//             });

//             // ✅ ОБНОВЛЕННЫЙ API URL - теперь получаем полные данные пользователя
//             const apiUrl = 'https://asmanenergy.com/wp-json/telegram-bot/v1/validate';

//             fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ initData: telegramApp.initData }),
//             })
//                 .then(res => {
//                     console.log('📡 API Response status:', res.status);
//                     return res.json();
//                 })
//                 .then(data => {
//                     console.log('📝 API Response data:', data);
//                     if (data.success && data.user) {
//                         setUser(data.user);
//                     } else {
//                         console.error('❌ Validation failed:', data.error);
//                     }
//                     setIsLoading(false);
//                 })
//                 .catch(error => {
//                     console.error('🚨 API Error:', error);
//                     setIsLoading(false);
//                 });
//         } else {
//             console.log('🔍 Telegram Web App not found, checking environment...');

//             // Для разработки - используем mock данные с новыми полями
//             if (process.env.NODE_ENV === 'development') {
//                 console.log('🔧 Development mode: using mock Telegram user');
//                 setTimeout(() => {
//                     setUser({
//                         id: 123456789,
//                         username: 'dev_user',
//                         first_name: 'Dev',
//                         last_name: 'User',
//                         language: 'ru',
//                         company_name: 'Test Company',
//                         phone_number: '+998901234567',
//                         registration_completed: true
//                     });
//                     setIsLoading(false);
//                 }, 1000);
//             } else {
//                 console.log('❌ Production: Telegram Web App not available');
//                 setIsLoading(false);
//             }
//         }
//     }, []);

//     // ✅ НОВЫЕ ХЕЛПЕРЫ - добавляем в существующий хук
//     const getDisplayName = () => {
//         if (!user) return 'Пользователь';

//         const parts = [];
//         if (user.first_name) parts.push(user.first_name);
//         if (user.last_name) parts.push(user.last_name);

//         return parts.length > 0 ? parts.join(' ') : (user.username || `User ${user.id}`);
//     };

//     const getInitials = () => {
//         if (!user) return 'U';

//         if (user.first_name && user.last_name) {
//             return `${user.first_name[0]}${user.last_name[0]}`;
//         } else if (user.first_name) {
//             return user.first_name[0];
//         } else if (user.username) {
//             return user.username[0].toUpperCase();
//         }

//         return 'U';
//     };

//     const isRegistrationComplete = () => {
//         return user?.registration_completed === true;
//     };

//     const getUserLanguage = () => {
//         return user?.language || 'ru';
//     };

//     const showMainButton = (text, callback) => {
//         if (tg?.MainButton) {
//             tg.MainButton.setText(text);
//             tg.MainButton.onClick(callback);
//             tg.MainButton.show();
//         }
//     };

//     const hideMainButton = () => {
//         if (tg?.MainButton) {
//             tg.MainButton.hide();
//         }
//     };

//     const closeApp = () => {
//         if (tg) {
//             tg.close();
//         }
//     };

//     return {
//         user,
//         isLoading,
//         tg: typeof window !== 'undefined' ? tg : null,
//         // ✅ НОВЫЕ МЕТОДЫ
//         getDisplayName,
//         getInitials,
//         isRegistrationComplete,
//         getUserLanguage,
//         showMainButton,
//         hideMainButton,
//         closeApp
//     };
// };


// hooks/useTelegram.js
import { useEffect, useState } from 'react';

export const useTelegram = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tg, setTg] = useState(null);

    useEffect(() => {
        console.log('🚀 useTelegram hook called');

        // Проверяем что мы в браузере
        if (typeof window === 'undefined') {
            setIsLoading(false);
            return;
        }

        // 🔧 ДОБАВЛЯЕМ ПРОВЕРКУ НА ТЕСТ РЕЖИМ
        const urlParams = new URLSearchParams(window.location.search);
        const isTestMode = urlParams.get('test') === 'true';

        console.log('🔍 useTelegram hook - Test mode check:', {
            search: window.location.search,
            testParam: urlParams.get('test'),
            isTestMode
        });

        if (isTestMode) {
            console.log('🔧 useTelegram HOOK: Test mode enabled, setting test user');

            // Создаем фейковый tg объект для тест режима
            const mockTg = {
                initData: 'test_init_data',
                initDataUnsafe: {
                    user: {
                        id: 52327753,
                        first_name: 'Test',
                        last_name: 'User',
                        username: 'test_user'
                    }
                },
                platform: 'web',
                ready: () => console.log('Mock TG ready'),
                expand: () => console.log('Mock TG expand'),
                MainButton: {
                    show: () => console.log('Mock MainButton show'),
                    hide: () => console.log('Mock MainButton hide'),
                    setText: (text) => console.log('Mock MainButton setText:', text),
                    onClick: (callback) => console.log('Mock MainButton onClick')
                }
            };

            setTg(mockTg);

            setTimeout(() => {
                setUser({
                    id: 52327753,
                    username: 'test_user',
                    first_name: 'Test',
                    last_name: 'User',
                    language: 'ru',
                    company_name: 'Test Company',
                    phone_number: '+998901234567',
                    registration_completed: true
                });
                setIsLoading(false);
                console.log('🔧 useTelegram HOOK: Test user set successfully');
            }, 100);

            return; // НЕ идем дальше в тест режиме
        }

        // Обычная логика для продакшна/реального Telegram
        const telegramApp = window.Telegram?.WebApp;

        if (telegramApp) {
            setTg(telegramApp);
            telegramApp.ready();
            telegramApp.expand();

            console.log('🔍 Telegram Web App data:', {
                initData: telegramApp.initData,
                user: telegramApp.initDataUnsafe?.user,
                platform: telegramApp.platform
            });

            // ✅ ОБНОВЛЕННЫЙ API URL - теперь получаем полные данные пользователя
            const apiUrl = 'https://asmanenergy.com/wp-json/telegram-bot/v1/validate';

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ initData: telegramApp.initData }),
            })
                .then(res => {
                    console.log('📡 API Response status:', res.status);
                    return res.json();
                })
                .then(data => {
                    console.log('📝 API Response data:', data);
                    if (data.success && data.user) {
                        setUser(data.user);
                    } else {
                        console.error('❌ Validation failed:', data.error);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('🚨 API Error:', error);
                    setIsLoading(false);
                });
        } else {
            console.log('🔍 Telegram Web App not found, checking environment...');

            // Для разработки - используем mock данные с новыми полями
            if (process.env.NODE_ENV === 'development') {
                console.log('🔧 Development mode: using mock Telegram user');
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
                    });
                    setIsLoading(false);
                }, 1000);
            } else {
                console.log('❌ Production: Telegram Web App not available');
                setIsLoading(false);
            }
        }
    }, []);

    // ✅ НОВЫЕ ХЕЛПЕРЫ - добавляем в существующий хук
    const getDisplayName = () => {
        if (!user) return 'Пользователь';

        const parts = [];
        if (user.first_name) parts.push(user.first_name);
        if (user.last_name) parts.push(user.last_name);

        return parts.length > 0 ? parts.join(' ') : (user.username || `User ${user.id}`);
    };

    const getInitials = () => {
        if (!user) return 'U';

        if (user.first_name && user.last_name) {
            return `${user.first_name[0]}${user.last_name[0]}`;
        } else if (user.first_name) {
            return user.first_name[0];
        } else if (user.username) {
            return user.username[0].toUpperCase();
        }

        return 'U';
    };

    const isRegistrationComplete = () => {
        return user?.registration_completed === true;
    };

    const getUserLanguage = () => {
        return user?.language || 'ru';
    };

    const showMainButton = (text, callback) => {
        if (tg?.MainButton) {
            tg.MainButton.setText(text);
            tg.MainButton.onClick(callback);
            tg.MainButton.show();
        }
    };

    const hideMainButton = () => {
        if (tg?.MainButton) {
            tg.MainButton.hide();
        }
    };

    const closeApp = () => {
        if (tg) {
            tg.close();
        }
    };

    return {
        user,
        isLoading,
        tg: typeof window !== 'undefined' ? tg : null,
        // ✅ НОВЫЕ МЕТОДЫ
        getDisplayName,
        getInitials,
        isRegistrationComplete,
        getUserLanguage,
        showMainButton,
        hideMainButton,
        closeApp
    };
};