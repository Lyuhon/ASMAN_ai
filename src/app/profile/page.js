// app/profile/page.js
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        firstName: 'Иван',
        lastName: 'Петров',
        company: 'ООО "Компания"',
        phone: '+7 (999) 123-45-67'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Здесь будет логика сохранения
        alert('Профиль обновлен!')
    }

    return (
        <div className="p-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Link href="/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">Профиль</h1>
                <div className="w-10"></div>
            </div>

            {/* Avatar */}
            <div className="text-center mb-8">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-800 font-semibold text-2xl">
                        {formData.firstName[0]}{formData.lastName[0]}
                    </span>
                </div>
                <button className="text-emerald-800 font-medium">Изменить фото</button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                    </label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="input-field"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Фамилия
                    </label>
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="input-field"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Компания
                    </label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input-field"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                    />
                </div>

                <button type="submit" className="btn-primary w-full">
                    Сохранить изменения
                </button>
            </form>
        </div>
    )
}