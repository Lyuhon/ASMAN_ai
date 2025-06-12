// app/components/Navigation.js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    const isActive = (path) => pathname === path

    const navItems = [
        {
            href: '/',
            label: 'Главная',
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            href: '/create-report',
            label: 'Создать',
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            ),
            isActive: (path) => path.startsWith('/create-report')
        },
        {
            href: '/history',
            label: 'История',
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            href: '/profile',
            label: 'Профиль',
            icon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ]

    return (
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-lg">
            <div className="grid grid-cols-4 py-2">
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
                            {active && (
                                <div className="w-1 h-1 bg-emerald-800 rounded-full mt-1"></div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}