// // // // app/profile/page.js
// // // 'use client'
// // // import { useState } from 'react'
// // // import Link from 'next/link'

// // // export default function ProfilePage() {
// // //     const [formData, setFormData] = useState({
// // //         firstName: 'Иван',
// // //         lastName: 'Петров',
// // //         company: 'ООО "Компания"',
// // //         phone: '+7 (999) 123-45-67'
// // //     })

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault()
// // //         // Здесь будет логика сохранения
// // //         alert('Профиль обновлен!')
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
// // //                 <h1 className="text-xl font-semibold text-gray-900">Профиль</h1>
// // //                 <div className="w-10"></div>
// // //             </div>

// // //             {/* Avatar */}
// // //             <div className="text-center mb-8">
// // //                 <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                     <span className="text-emerald-800 font-semibold text-2xl">
// // //                         {formData.firstName[0]}{formData.lastName[0]}
// // //                     </span>
// // //                 </div>
// // //                 <button className="text-emerald-800 font-medium">Изменить фото</button>
// // //             </div>

// // //             {/* Form */}
// // //             <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Имя
// // //                     </label>
// // //                     <input
// // //                         type="text"
// // //                         value={formData.firstName}
// // //                         onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
// // //                         className="input-field"
// // //                     />
// // //                 </div>

// // //                 <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Фамилия
// // //                     </label>
// // //                     <input
// // //                         type="text"
// // //                         value={formData.lastName}
// // //                         onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
// // //                         className="input-field"
// // //                     />
// // //                 </div>

// // //                 <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Компания
// // //                     </label>
// // //                     <input
// // //                         type="text"
// // //                         value={formData.company}
// // //                         onChange={(e) => setFormData({ ...formData, company: e.target.value })}
// // //                         className="input-field"
// // //                     />
// // //                 </div>

// // //                 <div>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                         Телефон
// // //                     </label>
// // //                     <input
// // //                         type="tel"
// // //                         value={formData.phone}
// // //                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// // //                         className="input-field"
// // //                     />
// // //                 </div>

// // //                 <button type="submit" className="btn-primary w-full">
// // //                     Сохранить изменения
// // //                 </button>
// // //             </form>
// // //         </div>
// // //     )
// // // }


// // // app/profile/page.js
// // 'use client'
// // import Link from 'next/link'
// // import { useTelegram } from '../hooks/useTelegram'

// // export default function ProfilePage() {
// //     const {
// //         user: telegramUser,
// //         isLoading,
// //         getDisplayName,
// //         getInitials,
// //         getUserLanguage,
// //         isRegistrationComplete,
// //         closeApp
// //     } = useTelegram()

// //     // Тексты на разных языках
// //     const texts = {
// //         ru: {
// //             profile: 'Профиль',
// //             personalInfo: 'Личная информация',
// //             contactInfo: 'Контактная информация',
// //             preferences: 'Настройки',
// //             firstName: 'Имя',
// //             lastName: 'Фамилия',
// //             username: 'Username',
// //             company: 'Компания',
// //             phone: 'Телефон',
// //             language: 'Язык интерфейса',
// //             registrationStatus: 'Статус регистрации',
// //             completed: 'Завершена',
// //             incomplete: 'Не завершена',
// //             editInTelegram: 'Для изменения данных вернитесь в Telegram',
// //             noData: 'Не указано',
// //             loading: 'Загрузка...',
// //             russian: 'Русский',
// //             uzbek: 'Узбекский',
// //             english: 'Английский',
// //             closeApp: 'Закрыть приложение'
// //         },
// //         uz: {
// //             profile: 'Profil',
// //             personalInfo: 'Shaxsiy ma\'lumotlar',
// //             contactInfo: 'Aloqa ma\'lumotlari',
// //             preferences: 'Sozlamalar',
// //             firstName: 'Ism',
// //             lastName: 'Familiya',
// //             username: 'Username',
// //             company: 'Kompaniya',
// //             phone: 'Telefon',
// //             language: 'Interfeys tili',
// //             registrationStatus: 'Ro\'yxatdan o\'tish holati',
// //             completed: 'Tugallangan',
// //             incomplete: 'Tugallanmagan',
// //             editInTelegram: 'Ma\'lumotlarni o\'zgartirish uchun Telegram ga qayting',
// //             noData: 'Ko\'rsatilmagan',
// //             loading: 'Yuklanmoqda...',
// //             russian: 'Rus tili',
// //             uzbek: 'O\'zbek tili',
// //             english: 'Ingliz tili',
// //             closeApp: 'Ilovani yopish'
// //         },
// //         en: {
// //             profile: 'Profile',
// //             personalInfo: 'Personal Information',
// //             contactInfo: 'Contact Information',
// //             preferences: 'Preferences',
// //             firstName: 'First Name',
// //             lastName: 'Last Name',
// //             username: 'Username',
// //             company: 'Company',
// //             phone: 'Phone',
// //             language: 'Interface Language',
// //             registrationStatus: 'Registration Status',
// //             completed: 'Completed',
// //             incomplete: 'Incomplete',
// //             editInTelegram: 'Return to Telegram to edit data',
// //             noData: 'Not specified',
// //             loading: 'Loading...',
// //             russian: 'Russian',
// //             uzbek: 'Uzbek',
// //             english: 'English',
// //             closeApp: 'Close App'
// //         }
// //     }

// //     const currentTexts = texts[getUserLanguage()] || texts.ru

// //     const getLanguageName = (lang) => {
// //         const names = {
// //             ru: currentTexts.russian,
// //             uz: currentTexts.uzbek,
// //             en: currentTexts.english
// //         }
// //         return names[lang] || lang
// //     }

// //     if (isLoading) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="flex items-center justify-center h-64">
// //                     <div className="text-center">
// //                         <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
// //                         <p className="text-gray-600">{currentTexts.loading}</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     if (!telegramUser) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="flex items-center justify-center h-64">
// //                     <div className="text-center">
// //                         <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                             <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
// //                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                             </svg>
// //                         </div>
// //                         <p className="text-red-600 font-medium">Ошибка загрузки профиля</p>
// //                         <p className="text-gray-600 text-sm mt-1">Пожалуйста, откройте приложение через Telegram</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     return (
// //         <div className="p-6 pb-24">
// //             {/* Header */}
// //             <div className="flex items-center justify-between mb-8">
// //                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
// //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// //                     </svg>
// //                 </Link>
// //                 <h1 className="text-xl font-semibold text-gray-900">{currentTexts.profile}</h1>
// //                 <div className="w-10"></div>
// //             </div>

// //             {/* Avatar */}
// //             <div className="text-center mb-8">
// //                 <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                     <span className="text-emerald-800 font-semibold text-2xl">
// //                         {getInitials()}
// //                     </span>
// //                 </div>
// //                 <h2 className="text-xl font-semibold text-gray-900 mb-1">{getDisplayName()}</h2>
// //                 {telegramUser.username && (
// //                     <p className="text-gray-500">@{telegramUser.username}</p>
// //                 )}
// //             </div>

// //             {/* Registration Status */}
// //             {/* <div className="mb-6 p-4 rounded-xl border">
// //                 <div className={`flex items-center ${isRegistrationComplete() ? 'text-emerald-800 bg-emerald-50 border-emerald-200' : 'text-amber-800 bg-amber-50 border-amber-200'}`}>
// //                     <div className={`w-3 h-3 rounded-full mr-3 ${isRegistrationComplete() ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
// //                     <div>
// //                         <p className="font-medium">{currentTexts.registrationStatus}</p>
// //                         <p className="text-sm">{isRegistrationComplete() ? currentTexts.completed : currentTexts.incomplete}</p>
// //                     </div>
// //                 </div>
// //             </div> */}

// //             {/* Personal Information */}
// //             <div className="space-y-6">
// //                 <div>
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.personalInfo}</h3>
// //                     <div className="space-y-4">
// //                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                             <span className="text-gray-600">{currentTexts.firstName}</span>
// //                             <span className="text-gray-900 font-medium">{telegramUser.first_name || currentTexts.noData}</span>
// //                         </div>
// //                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                             <span className="text-gray-600">{currentTexts.lastName}</span>
// //                             <span className="text-gray-900 font-medium">{telegramUser.last_name || currentTexts.noData}</span>
// //                         </div>
// //                         {telegramUser.username && (
// //                             <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                                 <span className="text-gray-600">{currentTexts.username}</span>
// //                                 <span className="text-gray-900 font-medium">@{telegramUser.username}</span>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>

// //                 {/* Contact Information */}
// //                 <div>
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.contactInfo}</h3>
// //                     <div className="space-y-4">
// //                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                             <span className="text-gray-600">{currentTexts.company}</span>
// //                             <span className="text-gray-900 font-medium">{telegramUser.company_name || currentTexts.noData}</span>
// //                         </div>
// //                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                             <span className="text-gray-600">{currentTexts.phone}</span>
// //                             <span className="text-gray-900 font-medium">{telegramUser.phone_number || currentTexts.noData}</span>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Preferences */}
// //                 <div>
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.preferences}</h3>
// //                     <div className="space-y-4">
// //                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
// //                             <span className="text-gray-600">{currentTexts.language}</span>
// //                             <span className="text-emerald-800 font-medium">{getLanguageName(getUserLanguage())}</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Info Message */}
// //             <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
// //                 <div className="flex items-start">
// //                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
// //                         <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
// //                         </svg>
// //                     </div>
// //                     <p className="text-blue-800 text-sm">{currentTexts.editInTelegram}</p>
// //                 </div>
// //             </div>

// //             {/* Close App Button */}
// //             {isRegistrationComplete() && (
// //                 <div className="mt-8 pt-6 border-t border-gray-200">
// //                     <button
// //                         onClick={closeApp}
// //                         className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
// //                     >
// //                         {currentTexts.closeApp}
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     )
// // }



// // app/profile/page.js
// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import { useTelegram } from '../hooks/useTelegram'

// export default function ProfilePage() {
//     const {
//         user: telegramUser,
//         isLoading,
//         getDisplayName,
//         getInitials,
//         getUserLanguage,
//         isRegistrationComplete,
//         closeApp,
//         showMainButton
//     } = useTelegram()

//     const [selectedLanguage, setSelectedLanguage] = useState(getUserLanguage())

//     // Тексты на разных языках
//     const texts = {
//         ru: {
//             profile: 'Профиль',
//             personalInfo: 'Личная информация',
//             contactInfo: 'Контактная информация',
//             preferences: 'Настройки',
//             firstName: 'Имя',
//             lastName: 'Фамилия',
//             username: 'Username',
//             company: 'Компания',
//             phone: 'Телефон',
//             language: 'Язык интерфейса',
//             registrationStatus: 'Статус регистрации',
//             completed: 'Завершена',
//             incomplete: 'Не завершена',
//             editInTelegram: 'Для изменения данных вернитесь в Telegram',
//             noData: 'Не указано',
//             loading: 'Загрузка...',
//             russian: 'Русский',
//             uzbek: 'Узбекский',
//             english: 'Английский',
//             closeApp: 'Закрыть приложение',
//             languageChanged: 'Язык изменен! Перезапустите приложение для применения изменений.',
//             changingLanguage: 'Изменяем язык...'
//         },
//         uz: {
//             profile: 'Profil',
//             personalInfo: 'Shaxsiy ma\'lumotlar',
//             contactInfo: 'Aloqa ma\'lumotlari',
//             preferences: 'Sozlamalar',
//             firstName: 'Ism',
//             lastName: 'Familiya',
//             username: 'Username',
//             company: 'Kompaniya',
//             phone: 'Telefon',
//             language: 'Interfeys tili',
//             registrationStatus: 'Ro\'yxatdan o\'tish holati',
//             completed: 'Tugallangan',
//             incomplete: 'Tugallanmagan',
//             editInTelegram: 'Ma\'lumotlarni o\'zgartirish uchun Telegram ga qayting',
//             noData: 'Ko\'rsatilmagan',
//             loading: 'Yuklanmoqda...',
//             russian: 'Rus tili',
//             uzbek: 'O\'zbek tili',
//             english: 'Ingliz tili',
//             closeApp: 'Ilovani yopish',
//             languageChanged: 'Til o\'zgartirildi! O\'zgarishlarni qo\'llash uchun ilovani qayta ishga tushiring.',
//             changingLanguage: 'Tilni o\'zgartiryapmiz...'
//         },
//         en: {
//             profile: 'Profile',
//             personalInfo: 'Personal Information',
//             contactInfo: 'Contact Information',
//             preferences: 'Preferences',
//             firstName: 'First Name',
//             lastName: 'Last Name',
//             username: 'Username',
//             company: 'Company',
//             phone: 'Phone',
//             language: 'Interface Language',
//             registrationStatus: 'Registration Status',
//             completed: 'Completed',
//             incomplete: 'Incomplete',
//             editInTelegram: 'Return to Telegram to edit data',
//             noData: 'Not specified',
//             loading: 'Loading...',
//             russian: 'Russian',
//             uzbek: 'Uzbek',
//             english: 'English',
//             closeApp: 'Close App',
//             languageChanged: 'Language changed! Restart the app to apply changes.',
//             changingLanguage: 'Changing language...'
//         }
//     }

//     const currentTexts = texts[getUserLanguage()] || texts.ru

//     const getLanguageName = (lang) => {
//         const names = {
//             ru: currentTexts.russian,
//             uz: currentTexts.uzbek,
//             en: currentTexts.english
//         }
//         return names[lang] || lang
//     }

//     const languages = [
//         { code: 'ru', name: '🇷🇺 Русский', flag: '🇷🇺' },
//         { code: 'uz', name: '🇺🇿 O\'zbekcha', flag: '🇺🇿' },
//         { code: 'en', name: '🇺🇸 English', flag: '🇺🇸' }
//     ]

//     const handleLanguageChange = async (langCode) => {
//         if (langCode === getUserLanguage()) return

//         setSelectedLanguage(langCode)

//         try {
//             // Показываем главную кнопку Telegram с индикацией загрузки
//             showMainButton(currentTexts.changingLanguage, () => { })

//             // Отправляем запрос на изменение языка
//             const response = await fetch('https://asmanenergy.com/wp-json/telegram-bot/v1/change-language', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     user_id: telegramUser.id,
//                     language: langCode
//                 }),
//             })

//             if (response.ok) {
//                 // Показываем сообщение об успехе
//                 showMainButton(currentTexts.languageChanged, () => {
//                     // Закрываем приложение через 2 секунды
//                     setTimeout(() => {
//                         closeApp()
//                     }, 2000)
//                 })
//             } else {
//                 console.error('Failed to change language')
//                 setSelectedLanguage(getUserLanguage()) // Возвращаем назад
//             }
//         } catch (error) {
//             console.error('Error changing language:', error)
//             setSelectedLanguage(getUserLanguage()) // Возвращаем назад
//         }
//     }

//     if (isLoading) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="flex items-center justify-center h-64">
//                     <div className="text-center">
//                         <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
//                         <p className="text-gray-600">{currentTexts.loading}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     if (!telegramUser) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="flex items-center justify-center h-64">
//                     <div className="text-center">
//                         <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <p className="text-red-600 font-medium">Ошибка загрузки профиля</p>
//                         <p className="text-gray-600 text-sm mt-1">Пожалуйста, откройте приложение через Telegram</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="p-6 pb-24">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                 </Link>
//                 <h1 className="text-xl font-semibold text-gray-900">{currentTexts.profile}</h1>
//                 <div className="w-10"></div>
//             </div>

//             {/* Avatar */}
//             <div className="text-center mb-8">
//                 <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-emerald-800 font-semibold text-2xl">
//                         {getInitials()}
//                     </span>
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-1">{getDisplayName()}</h2>
//                 {telegramUser.username && (
//                     <p className="text-gray-500">@{telegramUser.username}</p>
//                 )}
//             </div>

//             {/* Language Preferences - ПЕРЕМЕЩЕНО СЮДА */}
//             <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.preferences}</h3>
//                 <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//                     <div className="p-4 border-b border-gray-100">
//                         <span className="text-gray-600 font-medium">{currentTexts.language}</span>
//                     </div>
//                     <div className="divide-y divide-gray-100">
//                         {languages.map((lang) => (
//                             <button
//                                 key={lang.code}
//                                 onClick={() => handleLanguageChange(lang.code)}
//                                 className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${selectedLanguage === lang.code ? 'bg-emerald-50' : ''
//                                     }`}
//                             >
//                                 <span className="flex items-center">
//                                     <span className="text-2xl mr-3">{lang.flag}</span>
//                                     <span className="text-gray-900">{lang.name.replace(lang.flag + ' ', '')}</span>
//                                 </span>
//                                 {selectedLanguage === lang.code && (
//                                     <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                 )}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Registration Status */}
//             {/* <div className="mb-6 p-4 rounded-xl border">
//                 <div className={`flex items-center ${isRegistrationComplete() ? 'text-emerald-800 bg-emerald-50 border-emerald-200' : 'text-amber-800 bg-amber-50 border-amber-200'}`}>
//                     <div className={`w-3 h-3 rounded-full mr-3 ${isRegistrationComplete() ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
//                     <div>
//                         <p className="font-medium">{currentTexts.registrationStatus}</p>
//                         <p className="text-sm">{isRegistrationComplete() ? currentTexts.completed : currentTexts.incomplete}</p>
//                     </div>
//                 </div>
//             </div> */}

//             {/* Personal Information */}
//             <div className="space-y-6">
//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.personalInfo}</h3>
//                     <div className="space-y-4">
//                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                             <span className="text-gray-600">{currentTexts.firstName}</span>
//                             <span className="text-gray-900 font-medium">{telegramUser.first_name || currentTexts.noData}</span>
//                         </div>
//                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                             <span className="text-gray-600">{currentTexts.lastName}</span>
//                             <span className="text-gray-900 font-medium">{telegramUser.last_name || currentTexts.noData}</span>
//                         </div>
//                         {telegramUser.username && (
//                             <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                                 <span className="text-gray-600">{currentTexts.username}</span>
//                                 <span className="text-gray-900 font-medium">@{telegramUser.username}</span>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Contact Information */}
//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.contactInfo}</h3>
//                     <div className="space-y-4">
//                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                             <span className="text-gray-600">{currentTexts.company}</span>
//                             <span className="text-gray-900 font-medium">{telegramUser.company_name || currentTexts.noData}</span>
//                         </div>
//                         <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                             <span className="text-gray-600">{currentTexts.phone}</span>
//                             <span className="text-gray-900 font-medium">{telegramUser.phone_number || currentTexts.noData}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Info Message */}
//             <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
//                 <div className="flex items-start">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                         <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                     <p className="text-blue-800 text-sm">{currentTexts.editInTelegram}</p>
//                 </div>
//             </div>

//             {/* Close App Button */}
//             {isRegistrationComplete() && (
//                 <div className="mt-8 pt-6 border-t border-gray-200">
//                     <button
//                         onClick={closeApp}
//                         className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
//                     >
//                         {currentTexts.closeApp}
//                     </button>
//                 </div>
//             )}
//         </div>
//     )
// }


// app/profile/page.js
'use client'
import Link from 'next/link'
import { useTelegram } from '../hooks/useTelegram'

export default function ProfilePage() {
    const {
        user: telegramUser,
        isLoading,
        getDisplayName,
        getInitials,
        getUserLanguage,
        isRegistrationComplete,
        closeApp,
        tg
    } = useTelegram()

    // Тексты на разных языках
    const texts = {
        ru: {
            profile: 'Профиль',
            personalInfo: 'Личная информация',
            contactInfo: 'Контактная информация',
            preferences: 'Настройки',
            firstName: 'Имя',
            lastName: 'Фамилия',
            username: 'Username',
            company: 'Компания',
            phone: 'Телефон',
            language: 'Язык интерфейса',
            registrationStatus: 'Статус регистрации',
            completed: 'Завершена',
            incomplete: 'Не завершена',
            editInTelegram: 'Для изменения данных вернитесь в Telegram',
            noData: 'Не указано',
            loading: 'Загрузка...',
            russian: 'Русский',
            uzbek: 'Узбекский',
            english: 'Английский',
            closeApp: 'Закрыть приложение',
            changeLanguage: 'Изменить язык',
            changeLanguageDesc: 'Выберите язык интерфейса в боте'
        },
        uz: {
            profile: 'Profil',
            personalInfo: 'Shaxsiy ma\'lumotlar',
            contactInfo: 'Aloqa ma\'lumotlari',
            preferences: 'Sozlamalar',
            firstName: 'Ism',
            lastName: 'Familiya',
            username: 'Username',
            company: 'Kompaniya',
            phone: 'Telefon',
            language: 'Interfeys tili',
            registrationStatus: 'Ro\'yxatdan o\'tish holati',
            completed: 'Tugallangan',
            incomplete: 'Tugallanmagan',
            editInTelegram: 'Ma\'lumotlarni o\'zgartirish uchun Telegram ga qayting',
            noData: 'Ko\'rsatilmagan',
            loading: 'Yuklanmoqda...',
            russian: 'Rus tili',
            uzbek: 'O\'zbek tili',
            english: 'Ingliz tili',
            closeApp: 'Ilovani yopish',
            changeLanguage: 'Tilni o\'zgartirish',
            changeLanguageDesc: 'Botda interfeys tilini tanlang'
        },
        en: {
            profile: 'Profile',
            personalInfo: 'Personal Information',
            contactInfo: 'Contact Information',
            preferences: 'Preferences',
            firstName: 'First Name',
            lastName: 'Last Name',
            username: 'Username',
            company: 'Company',
            phone: 'Phone',
            language: 'Interface Language',
            registrationStatus: 'Registration Status',
            completed: 'Completed',
            incomplete: 'Incomplete',
            editInTelegram: 'Return to Telegram to edit data',
            noData: 'Not specified',
            loading: 'Loading...',
            russian: 'Russian',
            uzbek: 'Uzbek',
            english: 'English',
            closeApp: 'Close App',
            changeLanguage: 'Change Language',
            changeLanguageDesc: 'Select interface language in bot'
        }
    }

    const currentTexts = texts[getUserLanguage()] || texts.ru

    const getLanguageName = (lang) => {
        const names = {
            ru: currentTexts.russian,
            uz: currentTexts.uzbek,
            en: currentTexts.english
        }
        return names[lang] || lang
    }

    // Функция для отправки команды смены языка боту
    const handleChangeLanguage = () => {
        if (!tg) return

        // Отправляем данные в Telegram для команды смены языка
        tg.sendData(JSON.stringify({
            action: 'change_language',
            user_id: telegramUser.id
        }))

        // Сразу закрываем Web App
        setTimeout(() => {
            closeApp()
        }, 100)
    }

    if (isLoading) {
        return (
            <div className="p-6 pb-24">
                <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                        <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">{currentTexts.loading}</p>
                    </div>
                </div>
            </div>
        )
    }

    if (!telegramUser) {
        return (
            <div className="p-6 pb-24">
                <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-red-600 font-medium">Ошибка загрузки профиля</p>
                        <p className="text-gray-600 text-sm mt-1">Пожалуйста, откройте приложение через Telegram</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">{currentTexts.profile}</h1>
                <div className="w-10"></div>
            </div>

            {/* Avatar */}
            <div className="text-center mb-8">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-800 font-semibold text-2xl">
                        {getInitials()}
                    </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{getDisplayName()}</h2>
                {telegramUser.username && (
                    <p className="text-gray-500">@{telegramUser.username}</p>
                )}
            </div>

            {/* Language Settings - УПРОЩЕННАЯ ВЕРСИЯ */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.preferences}</h3>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="text-gray-600 font-medium">{currentTexts.language}</span>
                            <p className="text-sm text-gray-500 mt-1">{getLanguageName(getUserLanguage())}</p>
                        </div>
                        <div className="text-2xl">
                            {getUserLanguage() === 'ru' && '🇷🇺'}
                            {getUserLanguage() === 'uz' && '🇺🇿'}
                            {getUserLanguage() === 'en' && '🇺🇸'}
                        </div>
                    </div>

                    <button
                        onClick={handleChangeLanguage}
                        className="w-full py-3 px-4 bg-emerald-800 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.723 1.447a1 1 0 11-1.79-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                        </svg>
                        {currentTexts.changeLanguage}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">{currentTexts.changeLanguageDesc}</p>
                </div>
            </div>

            {/* Registration Status */}
            <div className="mb-6 p-4 rounded-xl border">
                <div className={`flex items-center ${isRegistrationComplete() ? 'text-emerald-800 bg-emerald-50 border-emerald-200' : 'text-amber-800 bg-amber-50 border-amber-200'}`}>
                    <div className={`w-3 h-3 rounded-full mr-3 ${isRegistrationComplete() ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                    <div>
                        <p className="font-medium">{currentTexts.registrationStatus}</p>
                        <p className="text-sm">{isRegistrationComplete() ? currentTexts.completed : currentTexts.incomplete}</p>
                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.personalInfo}</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-600">{currentTexts.firstName}</span>
                            <span className="text-gray-900 font-medium">{telegramUser.first_name || currentTexts.noData}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-600">{currentTexts.lastName}</span>
                            <span className="text-gray-900 font-medium">{telegramUser.last_name || currentTexts.noData}</span>
                        </div>
                        {telegramUser.username && (
                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                <span className="text-gray-600">{currentTexts.username}</span>
                                <span className="text-gray-900 font-medium">@{telegramUser.username}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.contactInfo}</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-600">{currentTexts.company}</span>
                            <span className="text-gray-900 font-medium">{telegramUser.company_name || currentTexts.noData}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-600">{currentTexts.phone}</span>
                            <span className="text-gray-900 font-medium">{telegramUser.phone_number || currentTexts.noData}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Message */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-blue-800 text-sm">{currentTexts.editInTelegram}</p>
                </div>
            </div>

            {/* Close App Button */}
            {isRegistrationComplete() && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                        onClick={closeApp}
                        className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                        {currentTexts.closeApp}
                    </button>
                </div>
            )}
        </div>
    )
}