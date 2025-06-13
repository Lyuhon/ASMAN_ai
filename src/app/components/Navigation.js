// // app/components/Navigation.js
// 'use client'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export default function Navigation() {
//     const pathname = usePathname()

//     const isActive = (path) => pathname === path

//     const navItems = [
//         {
//             href: '/',
//             label: 'Главная',
//             icon: (
//                 <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                 </svg>
//             )
//         },
//         {
//             href: '/create-report',
//             label: 'Создать',
//             icon: (
//                 <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                 </svg>
//             ),
//             isActive: (path) => path.startsWith('/create-report')
//         },
//         {
//             href: '/history',
//             label: 'История',
//             icon: (
//                 <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 4h8a1 1 0 110 2H6a1 1 0 110-2zm0 4h8a1 1 0 110 2H6a1 1 0 110-2z" />
//                 </svg>
//             )
//         },
//         {
//             href: '/profile',
//             label: 'Профиль',
//             icon: (
//                 <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                 </svg>
//             )
//         }
//     ]

//     return (
//         <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-lg">
//             <div className="grid grid-cols-4 py-0">
//                 {navItems.map((item) => {
//                     const active = item.isActive ? item.isActive(pathname) : isActive(item.href)

//                     return (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`flex flex-col items-center py-3 px-2 transition-colors duration-200 ${active
//                                 ? 'text-emerald-800'
//                                 : 'text-gray-400 hover:text-gray-600'
//                                 }`}
//                         >
//                             {item.icon}
//                             <span className="text-xs font-medium">{item.label}</span>
//                         </Link>
//                     )
//                 })}
//             </div>
//         </nav>
//     )
// }


// app/components/Navigation.js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTelegram } from '../hooks/useTelegram'

export default function Navigation() {
    const pathname = usePathname()
    const { getUserLanguage } = useTelegram()

    const isActive = (path) => pathname === path

    // Тексты навигации на разных языках
    const navTexts = {
        ru: {
            home: 'Главная',
            create: 'Создать',
            history: 'История',
            profile: 'Профиль'
        },
        uz: {
            home: 'Bosh sahifa',
            create: 'Yaratish',
            history: 'Tarix',
            profile: 'Profil'
        },
        en: {
            home: 'Home',
            create: 'Create',
            history: 'History',
            profile: 'Profile'
        }
    }

    const currentTexts = navTexts[getUserLanguage()] || navTexts.ru

    const navItems = [
        {
            href: '/',
            label: currentTexts.home,
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            href: '/create-report',
            label: currentTexts.create,
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            ),
            isActive: (path) => path.startsWith('/create-report')
        },
        {
            href: '/history',
            label: currentTexts.history,
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 4h8a1 1 0 110 2H6a1 1 0 110-2zm0 4h8a1 1 0 110 2H6a1 1 0 110-2z" />
                </svg>
            )
        },
        {
            href: '/profile',
            label: currentTexts.profile,
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ]

    return (
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-lg">
            <div className="grid grid-cols-4 py-0">
                {navItems.map((item) => {
                    const active = item.isActive ? item.isActive(pathname) : isActive(item.href)

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center py-3 px-2 transition-colors duration-200 ${active
                                ? 'text-emerald-800'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {item.icon}
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}