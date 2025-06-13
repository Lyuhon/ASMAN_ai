// // // app/page.js
// // 'use client'
// // import { useState, useEffect } from 'react'
// // import Link from 'next/link'

// // export default function HomePage() {
// //   const [user, setUser] = useState({ name: 'Имя Фамилия' })
// //   const [stats, setStats] = useState({
// //     totalReports: 12,
// //     lastReport: '2024-06-08'
// //   })

// //   return (
// //     <div className="p-6 pb-24">
// //       {/* Header */}
// //       <div className="mb-8">
// //         <div className="flex items-center justify-between mb-4">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-900">
// //               {user.name}!
// //             </h1>
// //             <p className="text-gray-600 mt-1">Добро пожаловать в Asman AI</p>
// //           </div>
// //           <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
// //             <span className="text-emerald-800 font-semibold text-lg">
// //               {user.name.split(' ').map(n => n[0]).join('')}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Stats */}
// //       {/* <div className="grid grid-cols-2 gap-4 mb-8">
// //         <div className="card text-center">
// //           <div className="text-3xl font-bold text-emerald-800 mb-2">
// //             {stats.totalReports}
// //           </div>
// //           <div className="text-gray-600 text-sm">Всего отчетов</div>
// //         </div>
// //         <div className="card text-center">
// //           <div className="text-sm font-semibold text-emerald-800 mb-2">
// //             {new Date(stats.lastReport).toLocaleDateString('ru-RU')}
// //           </div>
// //           <div className="text-gray-600 text-sm">Последний отчет</div>
// //         </div>
// //       </div> */}

// //       {/* Quick Actions */}
// //       <div className="space-y-4">
// //         <h2 className="text-lg font-semibold text-gray-900 mb-4">Быстрые действия</h2>

// //         <Link href="/create-report" className="block">
// //           <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-6 text-white">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <h3 className="font-semibold text-lg mb-2">Создать отчет</h3>
// //                 <p className="text-emerald-100 text-sm">Загрузите файлы и создайте новый отчет</p>
// //               </div>
// //               <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
// //                 <svg className="w-6 h-6" fill="#006045" viewBox="0 0 20 20">
// //                   <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
// //                 </svg>
// //               </div>
// //             </div>
// //           </div>
// //         </Link>

// //         {/* <div className="grid grid-cols-2 gap-4">
// //           <Link href="/history" className="block">
// //             <div className="card hover:shadow-md transition-shadow">
// //               <div className="text-center">
// //                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                   <svg className="w-6 h-6 text-emerald-800" fill="currentColor" viewBox="0 0 20 20">
// //                     <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
// //                     <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
// //                   </svg>
// //                 </div>
// //                 <h3 className="font-medium text-gray-900">История</h3>
// //                 <p className="text-gray-600 text-sm mt-1">Просмотр отчетов</p>
// //               </div>
// //             </div>
// //           </Link>

// //           <Link href="/profile" className="block">
// //             <div className="card hover:shadow-md transition-shadow">
// //               <div className="text-center">
// //                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                   <svg className="w-6 h-6 text-emerald-800" fill="currentColor" viewBox="0 0 20 20">
// //                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
// //                   </svg>
// //                 </div>
// //                 <h3 className="font-medium text-gray-900">Профиль</h3>
// //                 <p className="text-gray-600 text-sm mt-1">Настройки</p>
// //               </div>
// //             </div>
// //           </Link>
// //         </div> */}
// //       </div>
// //     </div>
// //   )
// // }



// // app/page.tsx
// 'use client'
// // import { useState, useEffect } from 'react'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useTelegram } from './hooks/useTelegram' // Путь к вашему хуку

// export default function HomePage() {
//   const { user: telegramUser, isLoading, tg } = useTelegram()

//   const [stats, setStats] = useState({
//     totalReports: 12,
//     lastReport: '2024-06-08'
//   })

//   // Формируем отображаемое имя из данных Telegram
//   const getDisplayName = () => {
//     if (!telegramUser) return 'Пользователь'

//     const parts = []
//     if (telegramUser.first_name) parts.push(telegramUser.first_name)
//     if (telegramUser.last_name) parts.push(telegramUser.last_name)

//     return parts.length > 0 ? parts.join(' ') : (telegramUser.username || `User ${telegramUser.id}`)
//   }

//   // Формируем инициалы для аватара
//   const getInitials = () => {
//     if (!telegramUser) return 'U'

//     if (telegramUser.first_name && telegramUser.last_name) {
//       return `${telegramUser.first_name[0]}${telegramUser.last_name[0]}`
//     } else if (telegramUser.first_name) {
//       return telegramUser.first_name[0]
//     } else if (telegramUser.username) {
//       return telegramUser.username[0].toUpperCase()
//     }

//     return 'U'
//   }

//   // Показываем загрузку пока получаем данные
//   if (isLoading) {
//     return (
//       <div className="p-6 pb-24">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-center">
//             <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
//             <p className="text-gray-600">Загрузка...</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Показываем ошибку если не удалось получить данные пользователя
//   if (!telegramUser) {
//     return (
//       <div className="p-6 pb-24">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <p className="text-red-600 font-medium">Ошибка авторизации</p>
//             <p className="text-gray-600 text-sm mt-1">Пожалуйста, откройте приложение через Telegram</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-6 pb-24">
//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">
//               Привет, {getDisplayName()}!
//             </h1>
//             <p className="text-gray-600 mt-1">Добро пожаловать в Asman AI</p>
//             {telegramUser.username && (
//               <p className="text-gray-500 text-sm mt-1">@{telegramUser.username}</p>
//             )}
//           </div>
//           <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
//             <span className="text-emerald-800 font-semibold text-lg">
//               {getInitials()}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Debug info - можно убрать в продакшене */}
//       {process.env.NODE_ENV === 'development' && (
//         <div className="mb-6 p-3 bg-gray-50 rounded-lg text-xs">
//           <details>
//             <summary className="cursor-pointer text-gray-600">Debug: Данные пользователя</summary>
//             <pre className="mt-2 text-gray-800">{JSON.stringify(telegramUser, null, 2)}</pre>
//           </details>
//         </div>
//       )}

//       {/* Stats - раскомментируйте когда будете использовать */}
//       {/* <div className="grid grid-cols-2 gap-4 mb-8">
//         <div className="card text-center">
//           <div className="text-3xl font-bold text-emerald-800 mb-2">
//             {stats.totalReports}
//           </div>
//           <div className="text-gray-600 text-sm">Всего отчетов</div>
//         </div>
//         <div className="card text-center">
//           <div className="text-sm font-semibold text-emerald-800 mb-2">
//             {new Date(stats.lastReport).toLocaleDateString('ru-RU')}
//           </div>
//           <div className="text-gray-600 text-sm">Последний отчет</div>
//         </div>
//       </div> */}

//       {/* Quick Actions */}
//       <div className="space-y-4">
//         <h2 className="text-lg font-semibold text-gray-900 mb-4">Быстрые действия</h2>

//         <Link href="/create-report" className="block">
//           <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-6 text-white">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">Создать отчет</h3>
//                 <p className="text-emerald-100 text-sm">Загрузите файлы и создайте новый отчет</p>
//               </div>
//               <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                 <svg className="w-6 h-6" fill="#006045" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </Link>

//         {/* Дополнительные действия - раскомментируйте по необходимости */}
//         {/* <div className="grid grid-cols-2 gap-4">
//           <Link href="/history" className="block">
//             <div className="card hover:shadow-md transition-shadow">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <svg className="w-6 h-6 text-emerald-800" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                     <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-medium text-gray-900">История</h3>
//                 <p className="text-gray-600 text-sm mt-1">Просмотр отчетов</p>
//               </div>
//             </div>
//           </Link>

//           <Link href="/profile" className="block">
//             <div className="card hover:shadow-md transition-shadow">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <svg className="w-6 h-6 text-emerald-800" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="font-medium text-gray-900">Профиль</h3>
//                 <p className="text-gray-600 text-sm mt-1">Настройки</p>
//               </div>
//             </div>
//           </Link>
//         </div> */}
//       </div>

//       {/* Кнопка закрытия Web App - опционально */}
//       {tg && (
//         <div className="mt-8 pt-6 border-t border-gray-200">
//           <button
//             onClick={() => tg.close()}
//             className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
//           >
//             Закрыть приложение
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }


// app/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useTelegram } from './hooks/useTelegram'

export default function HomePage() {
  const {
    user: telegramUser,
    isLoading,
    tg,
    // ✅ НОВЫЕ МЕТОДЫ из обновленного хука
    getDisplayName,
    getInitials,
    isRegistrationComplete,
    getUserLanguage,
    closeApp
  } = useTelegram()

  const [stats] = useState({
    totalReports: 12,
    lastReport: '2024-06-08'
  })

  // ✅ МУЛЬТИЯЗЫЧНЫЕ ТЕКСТЫ
  const texts = {
    ru: {
      welcome: 'Привет',
      welcomeTo: 'Добро пожаловать в Asman AI',
      quickActions: 'Быстрые действия',
      createReport: 'Создать отчет',
      createReportDesc: 'Загрузите файлы и создайте новый отчет',
      closeApp: 'Закрыть приложение',
      loading: 'Загрузка...',
      authError: 'Ошибка авторизации',
      openThroughTelegram: 'Пожалуйста, откройте приложение через Telegram',
      company: 'Компания',
      phone: 'Телефон',
      registrationIncomplete: 'Регистрация не завершена. Вернитесь в Telegram для завершения.'
    },
    uz: {
      welcome: 'Salom',
      welcomeTo: 'Asman AI ga xush kelibsiz',
      quickActions: 'Tezkor amallar',
      createReport: 'Hisobot yaratish',
      createReportDesc: 'Fayllarni yuklang va yangi hisobot yarating',
      closeApp: 'Ilovani yopish',
      loading: 'Yuklanmoqda...',
      authError: 'Avtorizatsiya xatosi',
      openThroughTelegram: 'Iltimos, ilovani Telegram orqali oching',
      company: 'Kompaniya',
      phone: 'Telefon',
      registrationIncomplete: 'Ro\'yxatdan o\'tish tugallanmagan. Tugallash uchun Telegram ga qayting.'
    },
    en: {
      welcome: 'Hello',
      welcomeTo: 'Welcome to Asman AI',
      quickActions: 'Quick Actions',
      createReport: 'Create Report',
      createReportDesc: 'Upload files and create new report',
      closeApp: 'Close App',
      loading: 'Loading...',
      authError: 'Authorization Error',
      openThroughTelegram: 'Please open the app through Telegram',
      company: 'Company',
      phone: 'Phone',
      registrationIncomplete: 'Registration incomplete. Return to Telegram to complete.'
    }
  }

  const currentTexts = texts[getUserLanguage()] || texts.ru

  // Показываем загрузку пока получаем данные
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

  // Показываем ошибку если не удалось получить данные пользователя
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
            <p className="text-red-600 font-medium">{currentTexts.authError}</p>
            <p className="text-gray-600 text-sm mt-1">{currentTexts.openThroughTelegram}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 pb-24">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {currentTexts.welcome}, {getDisplayName()}!
            </h1>
            <p className="text-gray-600 mt-1">{currentTexts.welcomeTo}</p>
            {telegramUser.username && (
              <p className="text-gray-500 text-sm mt-1">@{telegramUser.username}</p>
            )}
          </div>
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-emerald-800 font-semibold text-lg">
              {getInitials()}
            </span>
          </div>
        </div>
      </div>

      {/* ✅ НОВОЕ: User Info Card - показываем данные компании и телефона */}
      {isRegistrationComplete() && (
        <div className="mb-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
          <div className="space-y-2">
            {telegramUser.company_name && (
              <div className="flex items-center text-sm">
                <span className="text-gray-600 w-20">{currentTexts.company}:</span>
                <span className="text-gray-900 font-medium">{telegramUser.company_name}</span>
              </div>
            )}
            {telegramUser.phone_number && (
              <div className="flex items-center text-sm">
                <span className="text-gray-600 w-20">{currentTexts.phone}:</span>
                <span className="text-gray-900 font-medium">{telegramUser.phone_number}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ✅ НОВОЕ: Registration Warning - если регистрация не завершена */}
      {!isRegistrationComplete() && (
        <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-amber-800 text-sm">{currentTexts.registrationIncomplete}</p>
          </div>
        </div>
      )}

      {/* Debug info - можно убрать в продакшене */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-6 p-3 bg-gray-50 rounded-lg text-xs">
          <details>
            <summary className="cursor-pointer text-gray-600">Debug: Данные пользователя</summary>
            <pre className="mt-2 text-gray-800">{JSON.stringify(telegramUser, null, 2)}</pre>
          </details>
        </div>
      )}

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{currentTexts.quickActions}</h2>

        <Link href="/create-report" className="block">
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">{currentTexts.createReport}</h3>
                <p className="text-emerald-100 text-sm">{currentTexts.createReportDesc}</p>
              </div>
              <div className="w-12 max-h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center ml-2">
                <svg className="w-6 h-6" fill="#006045" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ✅ ОБНОВЛЕНО: Кнопка закрытия - показываем только если регистрация завершена */}
      {isRegistrationComplete() && tg && (
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