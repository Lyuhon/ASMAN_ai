// // // // Исправленный app/create-report/page.js
// // // 'use client'
// // // import { useState } from 'react'
// // // import { useRouter } from 'next/navigation'
// // // import Link from 'next/link'
// // // import { useTelegramContext } from '../contexts/TelegramContext'

// // // export default function CreateReportPage() {
// // //     const router = useRouter()
// // //     const { user, tg, isLoading: userLoading } = useTelegramContext()
// // //     const [currentStep, setCurrentStep] = useState(0)
// // //     const [selectedType, setSelectedType] = useState(null)
// // //     const [formData, setFormData] = useState({
// // //         image: null,
// // //         video1: null,
// // //         video2: null,
// // //         data_file: null,
// // //         language: 'ru',
// // //         cubic_metr: false
// // //     })
// // //     const [isGenerating, setIsGenerating] = useState(false)

// // //     const reportTypes = [
// // //         {
// // //             id: 'qogi',
// // //             title: 'QOGI',
// // //             description: 'Отчет для анализа данных измерений (CSV файлы)',
// // //             icon: (
// // //                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// // //                 </svg>
// // //             )
// // //         },
// // //         {
// // //             id: 'eyecsite',
// // //             title: 'EYECSITE',
// // //             description: 'Отчет для EYECSITE (XLSX файлы)',
// // //             icon: (
// // //                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                 </svg>
// // //             )
// // //         }
// // //     ]

// // //     const steps = [
// // //         { id: 1, title: 'Изображение OPGAL', desc: 'Загрузите изображение (до 5 МБ)' },
// // //         { id: 2, title: 'Видео файл', desc: 'Загрузите первый .ts файл (до 100 МБ)' },
// // //         { id: 3, title: 'Enhanced видео', desc: 'Загрузите второй .ts файл (до 100 МБ)' },
// // //         { id: 4, title: 'Загрузка данных', desc: 'Выберите файл данных' },
// // //         { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
// // //         { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
// // //     ]

// // //     const languages = [
// // //         { code: 'ru', name: 'Русский' },
// // //         { code: 'en', name: 'English' },
// // //         { code: 'uz', name: 'O\'zbek' }
// // //     ]

// // //     const selectType = (type) => {
// // //         setSelectedType(type)
// // //         setCurrentStep(1)
// // //     }

// // //     const nextStep = () => {
// // //         if (currentStep < 6) setCurrentStep(currentStep + 1)
// // //     }

// // //     const prevStep = () => {
// // //         if (currentStep > 1) {
// // //             setCurrentStep(currentStep - 1)
// // //         } else if (currentStep === 1) {
// // //             setCurrentStep(0)
// // //             setSelectedType(null)
// // //         }
// // //     }

// // //     const handleFileUpload = (fieldName, file) => {
// // //         setFormData({ ...formData, [fieldName]: file })
// // //     }

// // //     const validateFile = (file, type) => {
// // //         const maxImageSize = 5 * 1024 * 1024 // 5 MB
// // //         const maxVideoSize = 100 * 1024 * 1024 // 100 MB

// // //         switch (type) {
// // //             case 'image':
// // //                 if (!file.type.startsWith('image/')) {
// // //                     alert('Файл должен быть изображением (JPG, PNG, GIF)')
// // //                     return false
// // //                 }
// // //                 if (file.size > maxImageSize) {
// // //                     alert('Размер изображения не должен превышать 5 МБ')
// // //                     return false
// // //                 }
// // //                 break
// // //             case 'video':
// // //                 if (!file.name.toLowerCase().endsWith('.ts')) {
// // //                     alert('Видео файл должен быть в формате .ts')
// // //                     return false
// // //                 }
// // //                 if (file.size > maxVideoSize) {
// // //                     alert('Размер видео файла не должен превышать 100 МБ')
// // //                     return false
// // //                 }
// // //                 break
// // //             case 'data':
// // //                 const isQogi = selectedType === 'qogi'
// // //                 const isEyecsite = selectedType === 'eyecsite'

// // //                 if (isQogi && !file.name.toLowerCase().endsWith('.csv')) {
// // //                     alert('Для QOGI отчетов необходим CSV файл')
// // //                     return false
// // //                 }
// // //                 if (isEyecsite && !file.name.toLowerCase().endsWith('.xlsx')) {
// // //                     alert('Для EYECSITE отчетов необходимо файл XLSX')
// // //                     return false
// // //                 }
// // //                 break
// // //         }
// // //         return true
// // //     }

// // //     const generateReport = async () => {
// // //         if (!formData.data_file) {
// // //             console.log('❌ Нет файла данных для отправки')
// // //             alert('Пожалуйста, загрузите файл данных')
// // //             return
// // //         }

// // //         if (!user || !tg?.initData) {
// // //             console.log('❌ Пользователь не авторизован через Telegram')
// // //             alert('Ошибка: необходима авторизация через Telegram')
// // //             return
// // //         }

// // //         setIsGenerating(true)

// // //         console.log('🚀 Начинаем генерацию отчета', selectedType.toUpperCase())
// // //         console.log('👤 Пользователь Telegram:', user.id)
// // //         console.log('📊 Параметры отчета:', {
// // //             selectedType,
// // //             language: formData.language,
// // //             cubic_metr: formData.cubic_metr,
// // //             telegram_user_id: user.id, // АВТОМАТИЧЕСКИ из контекста
// // //             imageFileName: formData.image?.name,
// // //             video1FileName: formData.video1?.name,
// // //             video2FileName: formData.video2?.name,
// // //             dataFileName: formData.data_file?.name,
// // //             dataFileSize: formData.data_file?.size,
// // //             dataFileType: formData.data_file?.type
// // //         })

// // //         try {
// // //             const formDataToSend = new FormData()

// // //             // Основные данные
// // //             formDataToSend.append('data_file', formData.data_file)
// // //             formDataToSend.append('language', formData.language)
// // //             formDataToSend.append('cubic_metr', formData.cubic_metr.toString())

// // //             // ВАЖНО: Автоматически передаем telegram_user_id из контекста
// // //             formDataToSend.append('telegram_user_id', user.id.toString())

// // //             // ВАЖНО: Добавляем init_data для аутентификации
// // //             formDataToSend.append('init_data', tg.initData)

// // //             // Добавляем медиафайлы если они есть
// // //             if (formData.image) {
// // //                 formDataToSend.append('image', formData.image)
// // //             }
// // //             if (formData.video1) {
// // //                 formDataToSend.append('video1', formData.video1)
// // //             }
// // //             if (formData.video2) {
// // //                 formDataToSend.append('video2', formData.video2)
// // //             }

// // //             console.log('📤 Отправляем FormData с аутентификацией:')
// // //             for (let [key, value] of formDataToSend.entries()) {
// // //                 if (key === 'init_data') {
// // //                     console.log(`  ${key}:`, value.substring(0, 50) + '...')
// // //                 } else if (key === 'data_file' || key === 'image' || key === 'video1' || key === 'video2') {
// // //                     console.log(`  ${key}:`, {
// // //                         name: value.name,
// // //                         size: value.size,
// // //                         type: value.type
// // //                     })
// // //                 } else {
// // //                     console.log(`  ${key}:`, value)
// // //                 }
// // //             }

// // //             // Выбираем правильный API URL в зависимости от типа отчета
// // //             const apiUrl = selectedType === 'qogi'
// // //                 ? 'https://asmanenergy.com/wp-json/qogi/v1/generate-qogi-report'
// // //                 : 'https://asmanenergy.com/wp-json/qogi/v1/generate-eyecsite-report'

// // //             console.log('🌐 API URL:', apiUrl)
// // //             console.log('⏱️ Время отправки запроса:', new Date().toISOString())

// // //             const response = await fetch(apiUrl, {
// // //                 method: 'POST',
// // //                 body: formDataToSend,
// // //                 headers: {
// // //                     'Accept': 'application/json',
// // //                 }
// // //             })

// // //             console.log('📥 Получен ответ от сервера:')
// // //             console.log('  Status:', response.status)
// // //             console.log('  StatusText:', response.statusText)
// // //             console.log('  OK:', response.ok)

// // //             let result
// // //             const contentType = response.headers.get('content-type')
// // //             console.log('📄 Content-Type:', contentType)

// // //             if (contentType && contentType.includes('application/json')) {
// // //                 result = await response.json()
// // //                 console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))
// // //             } else {
// // //                 const textResult = await response.text()
// // //                 console.log('📋 Text ответ:', textResult)
// // //                 console.log('❌ Ответ не в формате JSON!')
// // //                 alert(`Сервер вернул неожиданный ответ. Проверьте консоль для деталей.`)
// // //                 return
// // //             }

// // //             if (result.success) {
// // //                 console.log('✅ Отчет успешно создан!')
// // //                 console.log('📊 Данные отчета:', {
// // //                     report_id: result.report_id,
// // //                     file_path: result.file_path,
// // //                     download_url: result.download_url
// // //                 })

// // //                 alert(`Отчет ${selectedType.toUpperCase()} успешно создан! ID: ${result.report_id}`)

// // //                 // Сброс формы ПЕРЕД редиректом
// // //                 console.log('🔄 Сбрасываем форму')
// // //                 setFormData({
// // //                     image: null,
// // //                     video1: null,
// // //                     video2: null,
// // //                     data_file: null,
// // //                     language: 'ru',
// // //                     cubic_metr: false
// // //                 })
// // //                 setCurrentStep(0)
// // //                 setSelectedType(null)

// // //                 // Редирект на страницу истории
// // //                 console.log('🔄 Перенаправляем на страницу истории')
// // //                 router.push('/history')
// // //             } else {
// // //                 console.log('❌ Ошибка от API:', result)
// // //                 alert(`Ошибка создания отчета: ${result.message || 'Неизвестная ошибка'}`)
// // //             }
// // //         } catch (error) {
// // //             console.error('💥 Критическая ошибка при отправке запроса:', error)
// // //             alert('Ошибка соединения с сервером. Проверьте консоль для деталей.')
// // //         } finally {
// // //             console.log('🏁 Завершение процесса генерации отчета')
// // //             setIsGenerating(false)
// // //         }
// // //     }

// // //     // Показываем загрузку если пользователь еще не загружен
// // //     if (userLoading) {
// // //         return (
// // //             <div className="p-6 pb-24">
// // //                 <div className="flex items-center justify-center py-12">
// // //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// // //                 </div>
// // //             </div>
// // //         )
// // //     }

// // //     // Показываем ошибку если пользователь не авторизован
// // //     if (!user) {
// // //         return (
// // //             <div className="p-6 pb-24">
// // //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4">
// // //                     <div className="flex items-center">
// // //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // //                         </svg>
// // //                         <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         )
// // //     }

// // //     const canProceedToNextStep = () => {
// // //         switch (currentStep) {
// // //             case 1: // Изображение - опционально
// // //                 return true
// // //             case 2: // Видео 1 - опционально  
// // //                 return true
// // //             case 3: // Видео 2 - опционально
// // //                 return true
// // //             case 4: // Файл данных - обязательно
// // //                 return !!formData.data_file
// // //             case 5: // Настройки - всегда можно пройти
// // //                 return true
// // //             default:
// // //                 return true
// // //         }
// // //     }

// // //     return (
// // //         <div className="p-6 pb-24">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between mb-8">
// // //                 <button
// // //                     onClick={() => currentStep === 0 ? window.history.back() : prevStep()}
// // //                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
// // //                     disabled={isGenerating}
// // //                 >
// // //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                     </svg>
// // //                 </button>
// // //                 <h1 className="text-xl font-semibold text-gray-900">
// // //                     {currentStep === 0 ? 'Выбор типа отчета' : 'Создание отчета'}
// // //                 </h1>
// // //                 <div className="w-10"></div>
// // //             </div>

// // //             {/* User Info */}
// // //             {/* <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
// // //                 <div className="flex items-center gap-3">
// // //                     <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white font-semibold">
// // //                         {user.first_name?.[0] || 'U'}
// // //                     </div>
// // //                     <div>
// // //                         <div className="font-medium text-emerald-900">
// // //                             {user.first_name} {user.last_name}
// // //                         </div>
// // //                         <div className="text-sm text-emerald-700">
// // //                             ID: {user.id}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div> */}

// // //             {/* Type Selection */}
// // //             {currentStep === 0 && (
// // //                 <div className="space-y-6">
// // //                     <div className="text-center mb-8">
// // //                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
// // //                             Выберите тип отчета
// // //                         </h2>
// // //                         <p className="text-gray-600">
// // //                             Какой отчет вы хотите создать?
// // //                         </p>
// // //                     </div>

// // //                     <div className="space-y-4">
// // //                         {reportTypes.map((type) => (
// // //                             <button
// // //                                 key={type.id}
// // //                                 onClick={() => selectType(type.id)}
// // //                                 className="w-full card transition-shadow text-left"
// // //                             >
// // //                                 <div className="flex items-center">
// // //                                     <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
// // //                                         {type.icon}
// // //                                     </div>
// // //                                     <div className="flex-1">
// // //                                         <h3 className="text-lg font-semibold text-gray-900 mb-1">
// // //                                             {type.title}
// // //                                         </h3>
// // //                                         <p className="text-gray-600 text-sm">
// // //                                             {type.description}
// // //                                         </p>
// // //                                     </div>
// // //                                     <div className="w-6 h-6 text-gray-400">
// // //                                         <svg fill="currentColor" viewBox="0 0 20 20">
// // //                                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
// // //                                         </svg>
// // //                                     </div>
// // //                                 </div>
// // //                             </button>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             )}

// // //             {/* File Upload and Settings Steps */}
// // //             {currentStep > 0 && (
// // //                 <>
// // //                     {/* Progress Bar */}
// // //                     <div className="mb-8">
// // //                         <div className="flex items-center justify-between mb-2">
// // //                             <span className="text-sm font-medium text-emerald-800">Шаг {currentStep} из 6</span>
// // //                             <div className="flex items-center gap-2">
// // //                                 <span className="text-xs text-gray-600">
// // //                                     {reportTypes.find(t => t.id === selectedType)?.title}
// // //                                 </span>
// // //                                 <span className="text-sm text-gray-600">{Math.round((currentStep / 6) * 100)}%</span>
// // //                             </div>
// // //                         </div>
// // //                         <div className="w-full bg-gray-200 rounded-full h-2">
// // //                             <div
// // //                                 className="bg-emerald-800 h-2 rounded-full transition-all duration-300"
// // //                                 style={{ width: `${(currentStep / 6) * 100}%` }}
// // //                             ></div>
// // //                         </div>
// // //                     </div>

// // //                     {/* Step Content */}
// // //                     <div className="mb-8">
// // //                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
// // //                             {steps[currentStep - 1].title}
// // //                         </h2>
// // //                         <p className="text-gray-600 mb-6">{steps[currentStep - 1].desc}</p>

// // //                         {/* Step 1: Image Upload */}
// // //                         {currentStep === 1 && (
// // //                             <FileUploadArea
// // //                                 type="image"
// // //                                 accept="image/*"
// // //                                 maxSize="5 МБ"
// // //                                 onFileSelect={(file) => {
// // //                                     if (validateFile(file, 'image')) {
// // //                                         handleFileUpload('image', file)
// // //                                     }
// // //                                 }}
// // //                                 selectedFile={formData.image}
// // //                                 optional={true}
// // //                             />
// // //                         )}

// // //                         {/* Step 2: Video 1 Upload */}
// // //                         {currentStep === 2 && (
// // //                             <FileUploadArea
// // //                                 type="video"
// // //                                 accept=".ts"
// // //                                 maxSize="100 МБ"
// // //                                 onFileSelect={(file) => {
// // //                                     if (validateFile(file, 'video')) {
// // //                                         handleFileUpload('video1', file)
// // //                                     }
// // //                                 }}
// // //                                 selectedFile={formData.video1}
// // //                                 optional={true}
// // //                             />
// // //                         )}

// // //                         {/* Step 3: Video 2 Upload */}
// // //                         {currentStep === 3 && (
// // //                             <FileUploadArea
// // //                                 type="video"
// // //                                 accept=".ts"
// // //                                 maxSize="100 МБ"
// // //                                 title="Enhanced видео"
// // //                                 onFileSelect={(file) => {
// // //                                     if (validateFile(file, 'video')) {
// // //                                         handleFileUpload('video2', file)
// // //                                     }
// // //                                 }}
// // //                                 selectedFile={formData.video2}
// // //                                 optional={true}
// // //                             />
// // //                         )}

// // //                         {/* Step 4: Data File Upload */}
// // //                         {currentStep === 4 && (
// // //                             <FileUploadArea
// // //                                 type="data"
// // //                                 accept={selectedType === 'qogi' ? '.csv' : '.xlsx'}
// // //                                 onFileSelect={(file) => {
// // //                                     if (validateFile(file, 'data')) {
// // //                                         handleFileUpload('data_file', file)
// // //                                     }
// // //                                 }}
// // //                                 selectedFile={formData.data_file}
// // //                                 dataType={selectedType}
// // //                                 optional={false}
// // //                             />
// // //                         )}

// // //                         {/* Step 5: Settings - УБИРАЕМ поле telegram_user_id */}
// // //                         {currentStep === 5 && (
// // //                             <div className="space-y-6">
// // //                                 <div>
// // //                                     <label className="block text-sm font-medium text-gray-700 mb-3">
// // //                                         Язык отчета
// // //                                     </label>
// // //                                     <div className="grid grid-cols-3 gap-3">
// // //                                         {languages.map((lang) => (
// // //                                             <button
// // //                                                 key={lang.code}
// // //                                                 onClick={() => setFormData({ ...formData, language: lang.code })}
// // //                                                 className={`p-3 rounded-xl border-2 text-sm font-medium transition-colors ${formData.language === lang.code
// // //                                                     ? 'border-emerald-800 bg-emerald-50 text-emerald-800'
// // //                                                     : 'border-gray-200 text-gray-700 hover:border-emerald-300'
// // //                                                     }`}
// // //                                             >
// // //                                                 {lang.name}
// // //                                             </button>
// // //                                         ))}
// // //                                     </div>
// // //                                 </div>

// // //                                 <div>
// // //                                     <label className="flex items-center">
// // //                                         <input
// // //                                             type="checkbox"
// // //                                             checked={formData.cubic_metr}
// // //                                             onChange={(e) => setFormData({ ...formData, cubic_metr: e.target.checked })}
// // //                                             className="w-4 h-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-600"
// // //                                         />
// // //                                         <span className="ml-3 text-sm text-gray-700">
// // //                                             Конвертировать в м³/ч
// // //                                         </span>
// // //                                     </label>
// // //                                 </div>

// // //                                 {/* УБРАЛИ поле telegram_user_id - оно берется автоматически */}
// // //                             </div>
// // //                         )}

// // //                         {/* Step 6: Generation */}
// // //                         {currentStep === 6 && (
// // //                             <div className="text-center">
// // //                                 {isGenerating ? (
// // //                                     <div className="py-4">
// // //                                         <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
// // //                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //                                             Генерация отчета...
// // //                                         </h3>
// // //                                         <p className="text-gray-600">
// // //                                             Пожалуйста, подождите
// // //                                         </p>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <div className="py-4">
// // //                                         <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                                             <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //                                             Готово к генерации
// // //                                         </h3>
// // //                                         <p className="text-gray-600 mb-6">
// // //                                             Все данные загружены, подтвердите создание отчета
// // //                                         </p>
// // //                                         <div className="bg-gray-50 rounded-xl p-4 text-left">
// // //                                             <div className="space-y-2 text-sm">
// // //                                                 <div className="flex justify-between">
// // //                                                     <span className="text-gray-600">Тип отчета:</span>
// // //                                                     <span className="font-medium">{selectedType.toUpperCase()}</span>
// // //                                                 </div>
// // //                                                 <div className="flex justify-between">
// // //                                                     <span className="text-gray-600">Файл данных:</span>
// // //                                                     <span className="font-medium">{formData.data_file?.name}</span>
// // //                                                 </div>
// // //                                                 {formData.image && (
// // //                                                     <div className="flex justify-between">
// // //                                                         <span className="text-gray-600">Изображение:</span>
// // //                                                         <span className="font-medium">✓ Загружено</span>
// // //                                                     </div>
// // //                                                 )}
// // //                                                 {formData.video1 && (
// // //                                                     <div className="flex justify-between">
// // //                                                         <span className="text-gray-600">Видео 1:</span>
// // //                                                         <span className="font-medium">✓ Загружено</span>
// // //                                                     </div>
// // //                                                 )}
// // //                                                 {formData.video2 && (
// // //                                                     <div className="flex justify-between">
// // //                                                         <span className="text-gray-600">Enhanced видео:</span>
// // //                                                         <span className="font-medium">✓ Загружено</span>
// // //                                                     </div>
// // //                                                 )}
// // //                                                 <div className="flex justify-between">
// // //                                                     <span className="text-gray-600">Язык:</span>
// // //                                                     <span className="font-medium">
// // //                                                         {languages.find(l => l.code === formData.language)?.name}
// // //                                                     </span>
// // //                                                 </div>
// // //                                                 <div className="flex justify-between">
// // //                                                     <span className="text-gray-600">Кубические метры:</span>
// // //                                                     <span className="font-medium">{formData.cubic_metr ? 'Да' : 'Нет'}</span>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         )}
// // //                     </div>

// // //                     {/* Navigation Buttons */}
// // //                     <div className="flex gap-4">
// // //                         {currentStep < 6 && (
// // //                             <button
// // //                                 onClick={prevStep}
// // //                                 className="btn-secondary flex-1"
// // //                                 disabled={isGenerating}
// // //                             >
// // //                                 Назад
// // //                             </button>
// // //                         )}

// // //                         {currentStep < 6 ? (
// // //                             <button
// // //                                 onClick={nextStep}
// // //                                 className="btn-primary flex-1"
// // //                                 disabled={!canProceedToNextStep() || isGenerating}
// // //                             >
// // //                                 {currentStep <= 3 ? 'Пропустить' : 'Далее'}
// // //                             </button>
// // //                         ) : (
// // //                             <button
// // //                                 onClick={generateReport}
// // //                                 className="btn-primary flex-1"
// // //                                 disabled={isGenerating}
// // //                             >
// // //                                 {isGenerating ? 'Генерируется...' : 'Создать отчет'}
// // //                             </button>
// // //                         )}
// // //                     </div>
// // //                 </>
// // //             )}
// // //         </div>
// // //     )
// // // }

// // // function FileUploadArea({ type, accept, onFileSelect, selectedFile, optional = false, maxSize, title, dataType }) {
// // //     const getIcon = () => {
// // //         switch (type) {
// // //             case 'image':
// // //                 return (
// // //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                     </svg>
// // //                 )
// // //             case 'video':
// // //                 return (
// // //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
// // //                     </svg>
// // //                 )
// // //             case 'data':
// // //                 return (
// // //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                     </svg>
// // //                 )
// // //             default:
// // //                 return (
// // //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// // //                     </svg>
// // //                 )
// // //         }
// // //     }

// // //     const getTitle = () => {
// // //         if (title) return title

// // //         switch (type) {
// // //             case 'image':
// // //                 return 'Выберите изображение OPGAL'
// // //             case 'video':
// // //                 return 'Выберите .ts видео файл'
// // //             case 'data':
// // //                 return dataType === 'qogi' ? 'Выберите CSV файл' : 'Выберите XLSX файл'
// // //             default:
// // //                 return 'Выберите файл'
// // //         }
// // //     }

// // //     const getDescription = () => {
// // //         if (selectedFile) return 'Файл загружен'

// // //         let desc = 'Нажмите для выбора файла'
// // //         if (maxSize) desc += ` (до ${maxSize})`
// // //         if (optional) desc += ' - необязательно'

// // //         return desc
// // //     }

// // //     const getFileFormat = () => {
// // //         switch (type) {
// // //             case 'image':
// // //                 return 'JPG, PNG, GIF'
// // //             case 'video':
// // //                 return 'Только .ts файлы'
// // //             case 'data':
// // //                 return dataType === 'qogi' ? 'CSV файлы' : 'XLSX файлы'
// // //             default:
// // //                 return ''
// // //         }
// // //     }

// // //     return (
// // //         <div className="border-2 border-dashed border-[#006045] rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
// // //             <input
// // //                 type="file"
// // //                 accept={accept}
// // //                 onChange={(e) => onFileSelect(e.target.files[0])}
// // //                 className="hidden"
// // //                 id={`file-${type}-${Date.now()}`}
// // //             />
// // //             <label htmlFor={`file-${type}-${Date.now()}`} className="cursor-pointer">
// // //                 {getIcon()}
// // //                 <div className="text-lg font-medium text-gray-900 mb-2">
// // //                     {selectedFile ? selectedFile.name : getTitle()}
// // //                 </div>
// // //                 <div className="text-sm text-gray-600 mb-2">
// // //                     {getDescription()}
// // //                 </div>
// // //                 {getFileFormat() && (
// // //                     <div className="text-xs text-gray-500 mb-4">
// // //                         Поддерживаемые форматы: {getFileFormat()}
// // //                     </div>
// // //                 )}
// // //                 {selectedFile ? (
// // //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
// // //                         ✓ Готово
// // //                     </div>
// // //                 ) : optional ? (
// // //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
// // //                         Необязательно
// // //                     </div>
// // //                 ) : (
// // //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
// // //                         Обязательно
// // //                     </div>
// // //                 )}
// // //             </label>
// // //         </div>
// // //     )
// // // }









// // // Исправленный app/create-report/page.js
// // 'use client'
// // import { useState } from 'react'
// // import { useRouter } from 'next/navigation'
// // import Link from 'next/link'
// // import { useTelegramContext } from '../contexts/TelegramContext'

// // export default function CreateReportPage() {
// //     const router = useRouter()
// //     const { user, tg, isLoading: userLoading } = useTelegramContext()
// //     const [currentStep, setCurrentStep] = useState(0)
// //     const [selectedType, setSelectedType] = useState(null)
// //     const [formData, setFormData] = useState({
// //         // Для QOGI (как было)
// //         image: null,
// //         video1: null,
// //         video2: null,
// //         data_file: null,

// //         // Для EYECSITE (новые поля)
// //         video: null,      // одно видео вместо video1/video2
// //         docx: null,       // документ Word
// //         xlsx: null,       // дополнительная таблица Excel

// //         // Общие настройки
// //         language: 'ru',
// //         cubic_metr: false
// //     })
// //     const [isGenerating, setIsGenerating] = useState(false)

// //     const reportTypes = [
// //         {
// //             id: 'qogi',
// //             title: 'QOGI',
// //             description: 'Отчет для анализа данных измерений (CSV файлы)',
// //             icon: (
// //                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                 </svg>
// //             )
// //         },
// //         {
// //             id: 'eyecsite',
// //             title: 'EYECSITE',
// //             description: 'Отчет для EYECSITE (XLSX файлы)',
// //             icon: (
// //                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                 </svg>
// //             )
// //         }
// //     ]

// //     const getStepsForType = (type) => {
// //         if (type === 'qogi') {
// //             return [
// //                 { id: 1, title: 'Изображение OPGAL', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
// //                 { id: 2, title: 'Первое видео', desc: 'Загрузите первый .ts файл (до 100 МБ)', field: 'video1', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
// //                 { id: 3, title: 'Второе видео', desc: 'Загрузите второй .ts файл (до 100 МБ)', field: 'video2', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
// //                 { id: 4, title: 'Данные CSV', desc: 'Выберите CSV файл с данными', field: 'data_file', fileType: 'data', accept: '.csv', maxSize: '10 МБ', optional: false },
// //                 { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
// //                 { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
// //             ]
// //         } else if (type === 'eyecsite') {
// //             return [
// //                 { id: 1, title: 'Изображение', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
// //                 { id: 2, title: 'Видео файл', desc: 'Загрузите .ts видео файл (до 100 МБ)', field: 'video', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
// //                 { id: 3, title: 'Документ Word', desc: 'Загрузите .docx файл (до 20 МБ)', field: 'docx', fileType: 'docx', accept: '.docx', maxSize: '20 МБ', optional: true },
// //                 { id: 4, title: 'Таблица Excel', desc: 'Загрузите .xlsx файл (до 50 МБ)', field: 'data_file', fileType: 'data', accept: '.xlsx', maxSize: '50 МБ', optional: false },
// //                 { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
// //                 { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
// //             ]
// //         }
// //         return []
// //     }

// //     // ВАЖНО: Определяем steps и totalSteps ЗДЕСЬ
// //     const steps = selectedType ? getStepsForType(selectedType) : []
// //     const totalSteps = steps.length

// //     const languages = [
// //         { code: 'ru', name: 'Русский' },
// //         { code: 'en', name: 'English' },
// //         { code: 'uz', name: 'O\'zbek' }
// //     ]

// //     const selectType = (type) => {
// //         setSelectedType(type)
// //         setCurrentStep(1)
// //     }

// //     const nextStep = () => {
// //         if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
// //     }

// //     const prevStep = () => {
// //         if (currentStep > 1) {
// //             setCurrentStep(currentStep - 1)
// //         } else if (currentStep === 1) {
// //             setCurrentStep(0)
// //             setSelectedType(null)
// //         }
// //     }

// //     const handleFileUpload = (fieldName, file) => {
// //         setFormData({ ...formData, [fieldName]: file })
// //     }

// //     const validateFile = (file, type) => {
// //         const maxImageSize = 5 * 1024 * 1024      // 5 MB
// //         const maxVideoSize = 100 * 1024 * 1024    // 100 MB  
// //         const maxDocxSize = 20 * 1024 * 1024      // 20 MB
// //         const maxXlsxSize = 50 * 1024 * 1024      // 50 MB

// //         switch (type) {
// //             case 'image':
// //                 if (!file.type.startsWith('image/')) {
// //                     alert('Файл должен быть изображением (JPG, PNG, GIF)')
// //                     return false
// //                 }
// //                 if (file.size > maxImageSize) {
// //                     alert('Размер изображения не должен превышать 5 МБ')
// //                     return false
// //                 }
// //                 break

// //             case 'video':
// //                 if (!file.name.toLowerCase().endsWith('.ts')) {
// //                     alert('Видео файл должен быть в формате .ts')
// //                     return false
// //                 }
// //                 if (file.size > maxVideoSize) {
// //                     alert('Размер видео файла не должен превышать 100 МБ')
// //                     return false
// //                 }
// //                 break

// //             case 'docx':
// //                 if (!file.name.toLowerCase().endsWith('.docx')) {
// //                     alert('Документ должен быть в формате .docx')
// //                     return false
// //                 }
// //                 if (file.size > maxDocxSize) {
// //                     alert('Размер документа не должен превышать 20 МБ')
// //                     return false
// //                 }
// //                 break

// //             case 'xlsx':
// //                 if (!file.name.toLowerCase().endsWith('.xlsx')) {
// //                     alert('Файл должен быть в формате .xlsx')
// //                     return false
// //                 }
// //                 if (file.size > maxXlsxSize) {
// //                     alert('Размер файла не должен превышать 50 МБ')
// //                     return false
// //                 }
// //                 break

// //             case 'data':
// //                 const isQogi = selectedType === 'qogi'
// //                 const isEyecsite = selectedType === 'eyecsite'

// //                 if (isQogi && !file.name.toLowerCase().endsWith('.csv')) {
// //                     alert('Для QOGI отчетов необходим CSV файл')
// //                     return false
// //                 }
// //                 if (isEyecsite && !file.name.toLowerCase().endsWith('.xlsx')) {
// //                     alert('Для EYECSITE отчетов необходим XLSX файл')
// //                     return false
// //                 }
// //                 break
// //         }
// //         return true
// //     }

// //     const generateReport = async () => {
// //         // if (!formData.data_file) {
// //         //     console.log('❌ Нет файла данных для отправки')
// //         //     alert('Пожалуйста, загрузите файл данных')
// //         //     return
// //         // }
// //         if (selectedType === 'qogi' && !formData.data_file) {
// //             console.log('❌ Нет файла данных для QOGI отчета')
// //             alert('Пожалуйста, загрузите CSV файл данных для QOGI отчета')
// //             return
// //         }

// //         if (!user || !tg?.initData) {
// //             console.log('❌ Пользователь не авторизован через Telegram')
// //             alert('Ошибка: необходима авторизация через Telegram')
// //             return
// //         }

// //         setIsGenerating(true)

// //         console.log('🚀 Начинаем генерацию отчета', selectedType.toUpperCase())
// //         console.log('👤 Пользователь Telegram:', user.id)
// //         console.log('📊 Параметры отчета:', {
// //             selectedType,
// //             language: formData.language,
// //             cubic_metr: formData.cubic_metr,
// //             telegram_user_id: user.id, // АВТОМАТИЧЕСКИ из контекста
// //             imageFileName: formData.image?.name,
// //             video1FileName: formData.video1?.name,
// //             video2FileName: formData.video2?.name,
// //             videoFileName: formData.video?.name,
// //             docxFileName: formData.docx?.name,
// //             xlsxFileName: formData.xlsx?.name,
// //             dataFileName: formData.data_file?.name,
// //             dataFileSize: formData.data_file?.size,
// //             dataFileType: formData.data_file?.type
// //         })

// //         try {
// //             const formDataToSend = new FormData()

// //             // Основные данные
// //             if (formData.data_file) {
// //                 formDataToSend.append('data_file', formData.data_file)
// //             }
// //             formDataToSend.append('language', formData.language)
// //             formDataToSend.append('cubic_metr', formData.cubic_metr.toString())
// //             formDataToSend.append('telegram_user_id', user.id.toString())
// //             formDataToSend.append('init_data', tg.initData)

// //             // Добавляем файлы в зависимости от типа отчета
// //             if (selectedType === 'qogi') {
// //                 // Для QOGI - старая логика
// //                 if (formData.image) {
// //                     formDataToSend.append('image', formData.image)
// //                 }
// //                 if (formData.video1) {
// //                     formDataToSend.append('video1', formData.video1)
// //                 }
// //                 if (formData.video2) {
// //                     formDataToSend.append('video2', formData.video2)
// //                 }
// //             } else if (selectedType === 'eyecsite') {
// //                 // Для EYECSITE - новая логика
// //                 if (formData.image) {
// //                     formDataToSend.append('image', formData.image)
// //                 }
// //                 if (formData.video) {
// //                     formDataToSend.append('video', formData.video)
// //                 }
// //                 if (formData.docx) {
// //                     formDataToSend.append('docx', formData.docx)
// //                 }
// //                 if (formData.xlsx) {
// //                     formDataToSend.append('xlsx', formData.xlsx)
// //                 }
// //             }

// //             // Логирование для отладки
// //             console.log('📤 Отправляем FormData для', selectedType.toUpperCase(), ':')
// //             for (let [key, value] of formDataToSend.entries()) {
// //                 if (key === 'init_data') {
// //                     console.log(`  ${key}:`, value.substring(0, 50) + '...')
// //                 } else if (value instanceof File) {
// //                     console.log(`  ${key}:`, {
// //                         name: value.name,
// //                         size: value.size,
// //                         type: value.type
// //                     })
// //                 } else {
// //                     console.log(`  ${key}:`, value)
// //                 }
// //             }

// //             // Выбираем правильный API URL в зависимости от типа отчета
// //             const apiUrl = selectedType === 'qogi'
// //                 ? 'https://asmanenergy.com/wp-json/qogi/v1/generate-qogi-report'
// //                 : 'https://asmanenergy.com/wp-json/qogi/v1/generate-eyecsite-report'

// //             console.log('🌐 API URL:', apiUrl)
// //             console.log('⏱️ Время отправки запроса:', new Date().toISOString())

// //             const response = await fetch(apiUrl, {
// //                 method: 'POST',
// //                 body: formDataToSend,
// //                 headers: {
// //                     'Accept': 'application/json',
// //                 }
// //             })

// //             console.log('📥 Получен ответ от сервера:')
// //             console.log('  Status:', response.status)
// //             console.log('  StatusText:', response.statusText)
// //             console.log('  OK:', response.ok)

// //             let result
// //             const contentType = response.headers.get('content-type')
// //             console.log('📄 Content-Type:', contentType)

// //             if (contentType && contentType.includes('application/json')) {
// //                 result = await response.json()
// //                 console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))
// //             } else {
// //                 const textResult = await response.text()
// //                 console.log('📋 Text ответ:', textResult)
// //                 console.log('❌ Ответ не в формате JSON!')
// //                 alert(`Сервер вернул неожиданный ответ. Проверьте консоль для деталей.`)
// //                 return
// //             }

// //             if (result.success) {
// //                 console.log('✅ Отчет успешно создан!')
// //                 console.log('📊 Данные отчета:', {
// //                     report_id: result.report_id,
// //                     file_path: result.file_path,
// //                     download_url: result.download_url
// //                 })

// //                 alert(`Отчет ${selectedType.toUpperCase()} успешно создан! ID: ${result.report_id}`)

// //                 // Сброс формы ПЕРЕД редиректом
// //                 console.log('🔄 Сбрасываем форму')
// //                 setFormData({
// //                     image: null,
// //                     video1: null,
// //                     video2: null,
// //                     video: null,
// //                     docx: null,
// //                     xlsx: null,
// //                     data_file: null,
// //                     language: 'ru',
// //                     cubic_metr: false
// //                 })
// //                 setCurrentStep(0)
// //                 setSelectedType(null)

// //                 // Редирект на страницу истории
// //                 console.log('🔄 Перенаправляем на страницу истории')
// //                 router.push('/history')
// //             } else {
// //                 console.log('❌ Ошибка от API:', result)
// //                 alert(`Ошибка создания отчета: ${result.message || 'Неизвестная ошибка'}`)
// //             }
// //         } catch (error) {
// //             console.error('💥 Критическая ошибка при отправке запроса:', error)
// //             alert('Ошибка соединения с сервером. Проверьте консоль для деталей.')
// //         } finally {
// //             console.log('🏁 Завершение процесса генерации отчета')
// //             setIsGenerating(false)
// //         }
// //     }

// //     // Показываем загрузку если пользователь еще не загружен
// //     if (userLoading) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="flex items-center justify-center py-12">
// //                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     // Показываем ошибку если пользователь не авторизован
// //     if (!user) {
// //         return (
// //             <div className="p-6 pb-24">
// //                 <div className="bg-red-50 border border-red-200 rounded-xl p-4">
// //                     <div className="flex items-center">
// //                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                         </svg>
// //                         <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }

// //     const canProceedToNextStep = () => {
// //         if (currentStep >= totalSteps) return false

// //         const currentStepData = steps[currentStep - 1]

// //         // Если это шаг загрузки файла
// //         if (currentStepData?.field) {
// //             const fieldName = currentStepData.field
// //             const isOptional = currentStepData.optional

// //             // Если поле обязательное, проверяем что файл загружен
// //             if (!isOptional && !formData[fieldName]) {
// //                 return false
// //             }
// //         }

// //         return true
// //     }

// //     return (
// //         <div className="p-6 pb-24">
// //             {/* Header */}
// //             <div className="flex items-center justify-between mb-8">
// //                 <button
// //                     onClick={() => currentStep === 0 ? window.history.back() : prevStep()}
// //                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
// //                     disabled={isGenerating}
// //                 >
// //                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
// //                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// //                     </svg>
// //                 </button>
// //                 <h1 className="text-xl font-semibold text-gray-900">
// //                     {currentStep === 0 ? 'Выбор типа отчета' : 'Создание отчета'}
// //                 </h1>
// //                 <div className="w-10"></div>
// //             </div>

// //             {/* Type Selection */}
// //             {currentStep === 0 && (
// //                 <div className="space-y-6">
// //                     <div className="text-center mb-8">
// //                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //                             Выберите тип отчета
// //                         </h2>
// //                         <p className="text-gray-600">
// //                             Какой отчет вы хотите создать?
// //                         </p>
// //                     </div>

// //                     <div className="space-y-4">
// //                         {reportTypes.map((type) => (
// //                             <button
// //                                 key={type.id}
// //                                 onClick={() => selectType(type.id)}
// //                                 className="w-full card transition-shadow text-left"
// //                             >
// //                                 <div className="flex items-center">
// //                                     <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
// //                                         {type.icon}
// //                                     </div>
// //                                     <div className="flex-1">
// //                                         <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                                             {type.title}
// //                                         </h3>
// //                                         <p className="text-gray-600 text-sm">
// //                                             {type.description}
// //                                         </p>
// //                                     </div>
// //                                     <div className="w-6 h-6 text-gray-400">
// //                                         <svg fill="currentColor" viewBox="0 0 20 20">
// //                                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
// //                                         </svg>
// //                                     </div>
// //                                 </div>
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>
// //             )}

// //             {/* File Upload and Settings Steps */}
// //             {currentStep > 0 && (
// //                 <>
// //                     {/* Progress Bar */}
// //                     <div className="mb-8">
// //                         <div className="flex items-center justify-between mb-2">
// //                             <span className="text-sm font-medium text-emerald-800">
// //                                 Шаг {currentStep} из {totalSteps}
// //                             </span>
// //                             <div className="flex items-center gap-2">
// //                                 <span className="text-xs text-gray-600">
// //                                     {reportTypes.find(t => t.id === selectedType)?.title}
// //                                 </span>
// //                                 <span className="text-sm text-gray-600">
// //                                     {Math.round((currentStep / totalSteps) * 100)}%
// //                                 </span>
// //                             </div>
// //                         </div>
// //                         <div className="w-full bg-gray-200 rounded-full h-2">
// //                             <div
// //                                 className="bg-emerald-800 h-2 rounded-full transition-all duration-300"
// //                                 style={{ width: `${(currentStep / totalSteps) * 100}%` }}
// //                             ></div>
// //                         </div>
// //                     </div>

// //                     {/* Step Content */}
// //                     <div className="mb-8">
// //                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //                             {steps[currentStep - 1]?.title}
// //                         </h2>
// //                         <p className="text-gray-600 mb-6">{steps[currentStep - 1]?.desc}</p>

// //                         {/* Динамические шаги загрузки файлов */}
// //                         {currentStep > 0 && currentStep <= totalSteps - 2 && (() => {
// //                             const step = steps[currentStep - 1]

// //                             // Если это шаг загрузки файла
// //                             if (step?.field) {
// //                                 return (
// //                                     <FileUploadArea
// //                                         type={step.fileType}
// //                                         accept={step.accept}
// //                                         maxSize={step.maxSize}
// //                                         title={step.title}
// //                                         onFileSelect={(file) => {
// //                                             if (validateFile(file, step.fileType)) {
// //                                                 handleFileUpload(step.field, file)
// //                                             }
// //                                         }}
// //                                         selectedFile={formData[step.field]}
// //                                         optional={step.optional}
// //                                         dataType={selectedType}
// //                                     />
// //                                 )
// //                             }
// //                             return null
// //                         })()}

// //                         {/* Шаг настроек - предпоследний */}
// //                         {currentStep === totalSteps - 1 && (
// //                             <div className="space-y-6">
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700 mb-3">
// //                                         Язык отчета
// //                                     </label>
// //                                     <div className="grid grid-cols-3 gap-3">
// //                                         {languages.map((lang) => (
// //                                             <button
// //                                                 key={lang.code}
// //                                                 onClick={() => setFormData({ ...formData, language: lang.code })}
// //                                                 className={`p-3 rounded-xl border-2 text-sm font-medium transition-colors ${formData.language === lang.code
// //                                                     ? 'border-emerald-800 bg-emerald-50 text-emerald-800'
// //                                                     : 'border-gray-200 text-gray-700 hover:border-emerald-300'
// //                                                     }`}
// //                                             >
// //                                                 {lang.name}
// //                                             </button>
// //                                         ))}
// //                                     </div>
// //                                 </div>

// //                                 <div>
// //                                     <label className="flex items-center">
// //                                         <input
// //                                             type="checkbox"
// //                                             checked={formData.cubic_metr}
// //                                             onChange={(e) => setFormData({ ...formData, cubic_metr: e.target.checked })}
// //                                             className="w-4 h-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-600"
// //                                         />
// //                                         <span className="ml-3 text-sm text-gray-700">
// //                                             Конвертировать в м³/ч
// //                                         </span>
// //                                     </label>
// //                                 </div>
// //                             </div>
// //                         )}

// //                         {/* Шаг генерации - последний */}
// //                         {currentStep === totalSteps && (
// //                             <div className="text-center">
// //                                 {isGenerating ? (
// //                                     <div className="py-4">
// //                                         <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
// //                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //                                             Генерация отчета...
// //                                         </h3>
// //                                         <p className="text-gray-600">
// //                                             Пожалуйста, подождите
// //                                         </p>
// //                                     </div>
// //                                 ) : (
// //                                     <div className="py-4">
// //                                         <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                                             <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                                             </svg>
// //                                         </div>
// //                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //                                             Готово к генерации
// //                                         </h3>
// //                                         <p className="text-gray-600 mb-6">
// //                                             Все данные загружены, подтвердите создание отчета
// //                                         </p>
// //                                         <div className="bg-gray-50 rounded-xl p-4 text-left">
// //                                             <div className="space-y-2 text-sm">
// //                                                 <div className="flex justify-between">
// //                                                     <span className="text-gray-600">Тип отчета:</span>
// //                                                     <span className="font-medium">{selectedType?.toUpperCase()}</span>
// //                                                 </div>
// //                                                 {formData.data_file && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Файл данных:</span>
// //                                                         <span className="font-medium">{formData.data_file?.name}</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.image && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Изображение:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.video1 && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Видео 1:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.video2 && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Видео 2:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.video && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Видео:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.docx && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Документ:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 {formData.xlsx && (
// //                                                     <div className="flex justify-between">
// //                                                         <span className="text-gray-600">Таблица Excel:</span>
// //                                                         <span className="font-medium">✓ Загружено</span>
// //                                                     </div>
// //                                                 )}
// //                                                 <div className="flex justify-between">
// //                                                     <span className="text-gray-600">Язык:</span>
// //                                                     <span className="font-medium">
// //                                                         {languages.find(l => l.code === formData.language)?.name}
// //                                                     </span>
// //                                                 </div>
// //                                                 <div className="flex justify-between">
// //                                                     <span className="text-gray-600">Кубические метры:</span>
// //                                                     <span className="font-medium">{formData.cubic_metr ? 'Да' : 'Нет'}</span>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         )}
// //                     </div>

// //                     {/* Navigation Buttons */}
// //                     <div className="flex gap-4">
// //                         {currentStep < totalSteps && (
// //                             <button
// //                                 onClick={prevStep}
// //                                 className="btn-secondary flex-1"
// //                                 disabled={isGenerating}
// //                             >
// //                                 Назад
// //                             </button>
// //                         )}

// //                         {currentStep < totalSteps ? (
// //                             <button
// //                                 onClick={nextStep}
// //                                 className="btn-primary flex-1"
// //                                 disabled={!canProceedToNextStep() || isGenerating}
// //                             >
// //                                 {steps[currentStep - 1]?.optional ? 'Пропустить' : 'Далее'}
// //                             </button>
// //                         ) : (
// //                             <button
// //                                 onClick={generateReport}
// //                                 className="btn-primary flex-1"
// //                                 disabled={isGenerating}
// //                             >
// //                                 {isGenerating ? 'Генерируется...' : 'Создать отчет'}
// //                             </button>
// //                         )}
// //                     </div>
// //                 </>
// //             )}
// //         </div>
// //     )
// // }

// // function FileUploadArea({ type, accept, onFileSelect, selectedFile, optional = false, maxSize, title, dataType }) {
// //     // Добавить новые типы в getIcon()
// //     const getIcon = () => {
// //         switch (type) {
// //             case 'image':
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                     </svg>
// //                 )
// //             case 'video':
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
// //                     </svg>
// //                 )
// //             case 'docx':
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                     </svg>
// //                 )
// //             case 'xlsx':
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                     </svg>
// //                 )
// //             case 'data':
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                     </svg>
// //                 )
// //             default:
// //                 return (
// //                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
// //                     </svg>
// //                 )
// //         }
// //     }

// //     const getTitle = () => {
// //         if (title) return title

// //         switch (type) {
// //             case 'image':
// //                 return 'Выберите изображение OPGAL'
// //             case 'video':
// //                 return 'Выберите .ts видео файл'
// //             case 'docx':
// //                 return 'Выберите .docx документ'
// //             case 'xlsx':
// //                 return 'Выберите .xlsx файл'
// //             case 'data':
// //                 return dataType === 'qogi' ? 'Выберите CSV файл' : 'Выберите XLSX файл'
// //             default:
// //                 return 'Выберите файл'
// //         }
// //     }

// //     const getDescription = () => {
// //         if (selectedFile) return 'Файл загружен'

// //         let desc = 'Нажмите для выбора файла'
// //         if (maxSize) desc += ` (до ${maxSize})`
// //         if (optional) desc += ' - необязательно'

// //         return desc
// //     }

// //     // Обновить getFileFormat()
// //     const getFileFormat = () => {
// //         switch (type) {
// //             case 'image':
// //                 return 'JPG, PNG, GIF'
// //             case 'video':
// //                 return 'Только .ts файлы'
// //             case 'docx':
// //                 return 'Только .docx файлы'
// //             case 'xlsx':
// //                 return 'Только .xlsx файлы'
// //             case 'data':
// //                 return dataType === 'qogi' ? 'CSV файлы' : 'XLSX файлы'
// //             default:
// //                 return ''
// //         }
// //     }

// //     return (
// //         <div className="border-2 border-dashed border-[#006045] rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
// //             <input
// //                 type="file"
// //                 accept={accept}
// //                 onChange={(e) => onFileSelect(e.target.files[0])}
// //                 className="hidden"
// //                 id={`file-${type}-${Date.now()}`}
// //             />
// //             <label htmlFor={`file-${type}-${Date.now()}`} className="cursor-pointer">
// //                 {getIcon()}
// //                 <div className="text-lg font-medium text-gray-900 mb-2">
// //                     {selectedFile ? selectedFile.name : getTitle()}
// //                 </div>
// //                 <div className="text-sm text-gray-600 mb-2">
// //                     {getDescription()}
// //                 </div>
// //                 {getFileFormat() && (
// //                     <div className="text-xs text-gray-500 mb-4">
// //                         Поддерживаемые форматы: {getFileFormat()}
// //                     </div>
// //                 )}
// //                 {selectedFile ? (
// //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
// //                         ✓ Готово
// //                     </div>
// //                 ) : optional ? (
// //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
// //                         Необязательно
// //                     </div>
// //                 ) : (
// //                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
// //                         Обязательно
// //                     </div>
// //                 )}
// //             </label>
// //         </div>
// //     )
// // }









// // Исправленный app/create-report/page.js
// 'use client'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { useTelegramContext } from '../contexts/TelegramContext'

// export default function CreateReportPage() {
//     const router = useRouter()
//     const { user, tg, isLoading: userLoading } = useTelegramContext()
//     const [currentStep, setCurrentStep] = useState(0)
//     const [selectedType, setSelectedType] = useState(null)
//     const [formData, setFormData] = useState({
//         // Для QOGI (как было)
//         image: null,
//         video1: null,
//         video2: null,
//         data_file: null,

//         // Для EYECSITE (новые поля)
//         video: null,      // одно видео вместо video1/video2
//         docx: null,       // документ Word
//         xlsx: null,       // дополнительная таблица Excel

//         // Общие настройки
//         language: 'ru',
//         cubic_metr: false
//     })

//     const [uploadProgress, setUploadProgress] = useState({
//         loaded: 0,
//         total: 0,
//         progress: 0,
//         isUploading: false
//     })

//     const [notification, setNotification] = useState(null) // { type: 'success' | 'error', message: '', reportId?: number }

//     const [isGenerating, setIsGenerating] = useState(false)

//     const reportTypes = [
//         {
//             id: 'qogi',
//             title: 'QOGI',
//             description: 'Отчет для анализа данных измерений (CSV файлы)',
//             icon: (
//                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//             )
//         },
//         {
//             id: 'eyecsite',
//             title: 'EYECSITE',
//             description: 'Отчет для EYECSITE (XLSX файлы)',
//             icon: (
//                 <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//             )
//         }
//     ]

//     const getStepsForType = (type) => {
//         if (type === 'qogi') {
//             return [
//                 { id: 1, title: 'Изображение OPGAL', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
//                 { id: 2, title: 'Первое видео', desc: 'Загрузите первый .ts файл (до 100 МБ)', field: 'video1', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
//                 { id: 3, title: 'Второе видео', desc: 'Загрузите второй .ts файл (до 100 МБ)', field: 'video2', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
//                 { id: 4, title: 'Данные CSV', desc: 'Выберите CSV файл с данными', field: 'data_file', fileType: 'data', accept: '.csv', maxSize: '10 МБ', optional: false },
//                 { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
//                 { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
//             ]
//         } else if (type === 'eyecsite') {
//             return [
//                 { id: 1, title: 'Изображение', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
//                 { id: 2, title: 'Видео файл', desc: 'Загрузите .ts видео файл (до 100 МБ)', field: 'video', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
//                 { id: 3, title: 'Документ Word', desc: 'Загрузите .docx файл (до 20 МБ)', field: 'docx', fileType: 'docx', accept: '.docx', maxSize: '20 МБ', optional: true },
//                 { id: 4, title: 'Таблица Excel', desc: 'Загрузите .xlsx файл (до 50 МБ)', field: 'data_file', fileType: 'data', accept: '.xlsx', maxSize: '50 МБ', optional: false },
//                 { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
//                 { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
//             ]
//         }
//         return []
//     }

//     // ВАЖНО: Определяем steps и totalSteps ЗДЕСЬ
//     const steps = selectedType ? getStepsForType(selectedType) : []
//     const totalSteps = steps.length

//     const languages = [
//         { code: 'ru', name: 'Русский' },
//         { code: 'en', name: 'English' },
//         { code: 'uz', name: 'O\'zbek' }
//     ]

//     const selectType = (type) => {
//         setSelectedType(type)
//         setCurrentStep(1)
//     }

//     const nextStep = () => {
//         if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
//     }

//     const prevStep = () => {
//         if (currentStep > 1) {
//             setCurrentStep(currentStep - 1)
//         } else if (currentStep === 1) {
//             setCurrentStep(0)
//             setSelectedType(null)
//         }
//     }

//     const handleFileUpload = (fieldName, file) => {
//         setFormData({ ...formData, [fieldName]: file })
//     }

//     const validateFile = (file, type) => {
//         const maxImageSize = 5 * 1024 * 1024      // 5 MB
//         const maxVideoSize = 100 * 1024 * 1024    // 100 MB  
//         const maxDocxSize = 20 * 1024 * 1024      // 20 MB
//         const maxXlsxSize = 50 * 1024 * 1024      // 50 MB

//         switch (type) {
//             case 'image':
//                 if (!file.type.startsWith('image/')) {
//                     alert('Файл должен быть изображением (JPG, PNG, GIF)')
//                     return false
//                 }
//                 if (file.size > maxImageSize) {
//                     alert('Размер изображения не должен превышать 5 МБ')
//                     return false
//                 }
//                 break

//             case 'video':
//                 if (!file.name.toLowerCase().endsWith('.ts')) {
//                     alert('Видео файл должен быть в формате .ts')
//                     return false
//                 }
//                 if (file.size > maxVideoSize) {
//                     alert('Размер видео файла не должен превышать 100 МБ')
//                     return false
//                 }
//                 break

//             case 'docx':
//                 if (!file.name.toLowerCase().endsWith('.docx')) {
//                     alert('Документ должен быть в формате .docx')
//                     return false
//                 }
//                 if (file.size > maxDocxSize) {
//                     alert('Размер документа не должен превышать 20 МБ')
//                     return false
//                 }
//                 break

//             case 'xlsx':
//                 if (!file.name.toLowerCase().endsWith('.xlsx')) {
//                     alert('Файл должен быть в формате .xlsx')
//                     return false
//                 }
//                 if (file.size > maxXlsxSize) {
//                     alert('Размер файла не должен превышать 50 МБ')
//                     return false
//                 }
//                 break

//             case 'data':
//                 const isQogi = selectedType === 'qogi'
//                 const isEyecsite = selectedType === 'eyecsite'

//                 if (isQogi && !file.name.toLowerCase().endsWith('.csv')) {
//                     alert('Для QOGI отчетов необходим CSV файл')
//                     return false
//                 }
//                 if (isEyecsite && !file.name.toLowerCase().endsWith('.xlsx')) {
//                     alert('Для EYECSITE отчетов необходим XLSX файл')
//                     return false
//                 }
//                 break
//         }
//         return true
//     }

//     const generateReport = async () => {
//         // if (!formData.data_file) {
//         //     console.log('❌ Нет файла данных для отправки')
//         //     alert('Пожалуйста, загрузите файл данных')
//         //     return
//         // }
//         if (selectedType === 'qogi' && !formData.data_file) {
//             console.log('❌ Нет файла данных для QOGI отчета')
//             alert('Пожалуйста, загрузите CSV файл данных для QOGI отчета')
//             return
//         }

//         if (!user || !tg?.initData) {
//             console.log('❌ Пользователь не авторизован через Telegram')
//             alert('Ошибка: необходима авторизация через Telegram')
//             return
//         }

//         setIsGenerating(true)

//         console.log('🚀 Начинаем генерацию отчета', selectedType.toUpperCase())
//         console.log('👤 Пользователь Telegram:', user.id)
//         console.log('📊 Параметры отчета:', {
//             selectedType,
//             language: formData.language,
//             cubic_metr: formData.cubic_metr,
//             telegram_user_id: user.id, // АВТОМАТИЧЕСКИ из контекста
//             imageFileName: formData.image?.name,
//             video1FileName: formData.video1?.name,
//             video2FileName: formData.video2?.name,
//             videoFileName: formData.video?.name,
//             docxFileName: formData.docx?.name,
//             xlsxFileName: formData.xlsx?.name,
//             dataFileName: formData.data_file?.name,
//             dataFileSize: formData.data_file?.size,
//             dataFileType: formData.data_file?.type
//         })

//         try {
//             const formDataToSend = new FormData()

//             // Основные данные
//             if (formData.data_file) {
//                 formDataToSend.append('data_file', formData.data_file)
//             }
//             formDataToSend.append('language', formData.language)
//             formDataToSend.append('cubic_metr', formData.cubic_metr.toString())
//             formDataToSend.append('telegram_user_id', user.id.toString())
//             formDataToSend.append('init_data', tg.initData)

//             // Добавляем файлы в зависимости от типа отчета
//             if (selectedType === 'qogi') {
//                 // Для QOGI - старая логика
//                 if (formData.image) {
//                     formDataToSend.append('image', formData.image)
//                 }
//                 if (formData.video1) {
//                     formDataToSend.append('video1', formData.video1)
//                 }
//                 if (formData.video2) {
//                     formDataToSend.append('video2', formData.video2)
//                 }
//             } else if (selectedType === 'eyecsite') {
//                 // Для EYECSITE - новая логика
//                 if (formData.image) {
//                     formDataToSend.append('image', formData.image)
//                 }
//                 if (formData.video) {
//                     formDataToSend.append('video', formData.video)
//                 }
//                 if (formData.docx) {
//                     formDataToSend.append('docx', formData.docx)
//                 }
//                 if (formData.xlsx) {
//                     formDataToSend.append('xlsx', formData.xlsx)
//                 }
//             }

//             // Логирование для отладки
//             console.log('📤 Отправляем FormData для', selectedType.toUpperCase(), ':')
//             for (let [key, value] of formDataToSend.entries()) {
//                 if (key === 'init_data') {
//                     console.log(`  ${key}:`, value.substring(0, 50) + '...')
//                 } else if (value instanceof File) {
//                     console.log(`  ${key}:`, {
//                         name: value.name,
//                         size: value.size,
//                         type: value.type
//                     })
//                 } else {
//                     console.log(`  ${key}:`, value)
//                 }
//             }

//             // Выбираем правильный API URL в зависимости от типа отчета
//             const apiUrl = selectedType === 'qogi'
//                 ? 'https://asmanenergy.com/wp-json/qogi/v1/generate-qogi-report'
//                 : 'https://asmanenergy.com/wp-json/qogi/v1/generate-eyecsite-report'

//             console.log('🌐 API URL:', apiUrl)
//             console.log('⏱️ Время отправки запроса:', new Date().toISOString())

//             setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: true })

//             const response = await new Promise((resolve, reject) => {
//                 const xhr = new XMLHttpRequest()

//                 // Отслеживание прогресса загрузки
//                 xhr.upload.addEventListener('progress', (e) => {
//                     if (e.lengthComputable) {
//                         const progress = Math.round((e.loaded / e.total) * 100)
//                         console.log(`📤 Прогресс загрузки: ${progress}% (${(e.loaded / 1024 / 1024).toFixed(1)} из ${(e.total / 1024 / 1024).toFixed(1)} МБ)`)

//                         setUploadProgress({
//                             loaded: e.loaded,
//                             total: e.total,
//                             progress: progress,
//                             isUploading: true
//                         })
//                     }
//                 })

//                 xhr.onload = () => {
//                     setUploadProgress(prev => ({ ...prev, isUploading: false }))

//                     const mockResponse = {
//                         status: xhr.status,
//                         statusText: xhr.statusText,
//                         ok: xhr.status >= 200 && xhr.status < 300,
//                         headers: {
//                             get: (name) => xhr.getResponseHeader(name)
//                         },
//                         json: async () => JSON.parse(xhr.responseText),
//                         text: async () => xhr.responseText
//                     }
//                     resolve(mockResponse)
//                 }

//                 xhr.onerror = () => {
//                     setUploadProgress(prev => ({ ...prev, isUploading: false }))
//                     reject(new Error('Network error'))
//                 }

//                 xhr.open('POST', apiUrl)
//                 xhr.setRequestHeader('Accept', 'application/json')
//                 xhr.send(formDataToSend)
//             })

//             console.log('📥 Получен ответ от сервера:')
//             console.log('  Status:', response.status)
//             console.log('  StatusText:', response.statusText)
//             console.log('  OK:', response.ok)

//             let result
//             const contentType = response.headers.get('content-type')
//             console.log('📄 Content-Type:', contentType)

//             if (contentType && contentType.includes('application/json')) {
//                 result = await response.json()
//                 console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))
//             } else {
//                 const textResult = await response.text()
//                 console.log('📋 Text ответ:', textResult)
//                 console.log('❌ Ответ не в формате JSON!')
//                 alert(`Сервер вернул неожиданный ответ. Проверьте консоль для деталей.`)
//                 return
//             }

//             if (result.success) {
//                 console.log('✅ Отчет успешно создан!')
//                 console.log('📊 Данные отчета:', {
//                     report_id: result.report_id,
//                     file_path: result.file_path,
//                     download_url: result.download_url
//                 })

//                 alert(`Отчет ${selectedType.toUpperCase()} успешно создан! ID: ${result.report_id}`)

//                 // Сброс формы ПЕРЕД редиректом
//                 console.log('🔄 Сбрасываем форму')
//                 setFormData({
//                     image: null,
//                     video1: null,
//                     video2: null,
//                     video: null,
//                     docx: null,
//                     xlsx: null,
//                     data_file: null,
//                     language: 'ru',
//                     cubic_metr: false
//                 })
//                 setCurrentStep(0)
//                 setSelectedType(null)
//                 setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: false })

//                 // Редирект на страницу истории
//                 console.log('🔄 Перенаправляем на страницу истории')
//                 router.push('/history')
//             } else {
//                 console.log('❌ Ошибка от API:', result)
//                 alert(`Ошибка создания отчета: ${result.message || 'Неизвестная ошибка'}`)
//             }
//         } catch (error) {
//             console.error('💥 Критическая ошибка при отправке запроса:', error)
//             alert('Ошибка соединения с сервером. Проверьте консоль для деталей.')
//             // } finally {
//             //     console.log('🏁 Завершение процесса генерации отчета')
//             //     setIsGenerating(false)
//             // }
//         } finally {
//             console.log('🏁 Завершение процесса генерации отчета')
//             setIsGenerating(false)
//             setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: false }) // ← Добавь эту строку
//         }
//     }

//     // Показываем загрузку если пользователь еще не загружен
//     if (userLoading) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="flex items-center justify-center py-12">
//                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
//                 </div>
//             </div>
//         )
//     }

//     // Показываем ошибку если пользователь не авторизован
//     if (!user) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//                     <div className="flex items-center">
//                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     const canProceedToNextStep = () => {
//         if (currentStep >= totalSteps) return false

//         const currentStepData = steps[currentStep - 1]

//         // Если это шаг загрузки файла
//         if (currentStepData?.field) {
//             const fieldName = currentStepData.field
//             const isOptional = currentStepData.optional

//             // Если поле обязательное, проверяем что файл загружен
//             if (!isOptional && !formData[fieldName]) {
//                 return false
//             }
//         }

//         return true
//     }

//     return (
//         <div className="p-6 pb-24">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <button
//                     onClick={() => currentStep === 0 ? window.history.back() : prevStep()}
//                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
//                     disabled={isGenerating}
//                 >
//                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                 </button>
//                 <h1 className="text-xl font-semibold text-gray-900">
//                     {currentStep === 0 ? 'Выбор типа отчета' : 'Создание отчета'}
//                 </h1>
//                 <div className="w-10"></div>
//             </div>

//             {/* Type Selection */}
//             {currentStep === 0 && (
//                 <div className="space-y-6">
//                     <div className="text-center mb-8">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                             Выберите тип отчета
//                         </h2>
//                         <p className="text-gray-600">
//                             Какой отчет вы хотите создать?
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         {reportTypes.map((type) => (
//                             <button
//                                 key={type.id}
//                                 onClick={() => selectType(type.id)}
//                                 className="w-full card transition-shadow text-left"
//                             >
//                                 <div className="flex items-center">
//                                     <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
//                                         {type.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                                             {type.title}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm">
//                                             {type.description}
//                                         </p>
//                                     </div>
//                                     <div className="w-6 h-6 text-gray-400">
//                                         <svg fill="currentColor" viewBox="0 0 20 20">
//                                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* File Upload and Settings Steps */}
//             {currentStep > 0 && (
//                 <>
//                     {/* Progress Bar */}
//                     <div className="mb-8">
//                         <div className="flex items-center justify-between mb-2">
//                             <span className="text-sm font-medium text-emerald-800">
//                                 Шаг {currentStep} из {totalSteps}
//                             </span>
//                             <div className="flex items-center gap-2">
//                                 <span className="text-xs text-gray-600">
//                                     {reportTypes.find(t => t.id === selectedType)?.title}
//                                 </span>
//                                 <span className="text-sm text-gray-600">
//                                     {Math.round((currentStep / totalSteps) * 100)}%
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div
//                                 className="bg-emerald-800 h-2 rounded-full transition-all duration-300"
//                                 style={{ width: `${(currentStep / totalSteps) * 100}%` }}
//                             ></div>
//                         </div>
//                     </div>

//                     {/* Step Content */}
//                     <div className="mb-8">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                             {steps[currentStep - 1]?.title}
//                         </h2>
//                         <p className="text-gray-600 mb-6">{steps[currentStep - 1]?.desc}</p>

//                         {/* Динамические шаги загрузки файлов */}
//                         {currentStep > 0 && currentStep <= totalSteps - 2 && (() => {
//                             const step = steps[currentStep - 1]

//                             // Если это шаг загрузки файла
//                             if (step?.field) {
//                                 return (
//                                     <FileUploadArea
//                                         type={step.fileType}
//                                         accept={step.accept}
//                                         maxSize={step.maxSize}
//                                         title={step.title}
//                                         onFileSelect={(file) => {
//                                             if (validateFile(file, step.fileType)) {
//                                                 handleFileUpload(step.field, file)
//                                             }
//                                         }}
//                                         selectedFile={formData[step.field]}
//                                         optional={step.optional}
//                                         dataType={selectedType}
//                                     />
//                                 )
//                             }
//                             return null
//                         })()}

//                         {/* Шаг настроек - предпоследний */}
//                         {currentStep === totalSteps - 1 && (
//                             <div className="space-y-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-3">
//                                         Язык отчета
//                                     </label>
//                                     <div className="grid grid-cols-3 gap-3">
//                                         {languages.map((lang) => (
//                                             <button
//                                                 key={lang.code}
//                                                 onClick={() => setFormData({ ...formData, language: lang.code })}
//                                                 className={`p-3 rounded-xl border-2 text-sm font-medium transition-colors ${formData.language === lang.code
//                                                     ? 'border-emerald-800 bg-emerald-50 text-emerald-800'
//                                                     : 'border-gray-200 text-gray-700 hover:border-emerald-300'
//                                                     }`}
//                                             >
//                                                 {lang.name}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             checked={formData.cubic_metr}
//                                             onChange={(e) => setFormData({ ...formData, cubic_metr: e.target.checked })}
//                                             className="w-4 h-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-600"
//                                         />
//                                         <span className="ml-3 text-sm text-gray-700">
//                                             Конвертировать в м³/ч
//                                         </span>
//                                     </label>
//                                 </div>
//                             </div>
//                         )}

//                         {/* Шаг генерации - последний */}
//                         {currentStep === totalSteps && (
//                             <div className="text-center">
//                                 {isGenerating ? (
//                                     <div className="py-4">
//                                         <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                                             {uploadProgress.isUploading ? 'Загрузка файлов...' : 'Генерация отчета...'}
//                                         </h3>

//                                         {/* Прогресс-бар загрузки */}
//                                         {uploadProgress.isUploading && uploadProgress.total > 0 && (
//                                             <div className="max-w-md mx-auto mb-4">
//                                                 <div className="flex justify-between text-sm text-gray-600 mb-2">
//                                                     <span>{uploadProgress.progress}%</span>
//                                                     <span>
//                                                         {(uploadProgress.loaded / 1024 / 1024).toFixed(1)} из {(uploadProgress.total / 1024 / 1024).toFixed(1)} МБ
//                                                     </span>
//                                                 </div>
//                                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                                     <div
//                                                         className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
//                                                         style={{ width: `${uploadProgress.progress}%` }}
//                                                     ></div>
//                                                 </div>
//                                             </div>
//                                         )}

//                                         <p className="text-gray-600">
//                                             {uploadProgress.isUploading ? 'Загружаем файлы на сервер...' : 'Обрабатываем данные...'}
//                                         </p>
//                                     </div>
//                                 ) : (
//                                     // остальной код без изменений...
//                                     <div className="py-4">
//                                         <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                             <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                                             Готово к генерации
//                                         </h3>
//                                         <p className="text-gray-600 mb-6">
//                                             Все данные загружены, подтвердите создание отчета
//                                         </p>
//                                         <div className="bg-gray-50 rounded-xl p-4 text-left">
//                                             <div className="space-y-2 text-sm">
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Тип отчета:</span>
//                                                     <span className="font-medium">{selectedType?.toUpperCase()}</span>
//                                                 </div>
//                                                 {formData.data_file && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Файл данных:</span>
//                                                         <span className="font-medium">{formData.data_file?.name}</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.image && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Изображение:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.video1 && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Видео 1:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.video2 && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Видео 2:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.video && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Видео:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.docx && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Документ:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 {formData.xlsx && (
//                                                     <div className="flex justify-between">
//                                                         <span className="text-gray-600">Таблица Excel:</span>
//                                                         <span className="font-medium">✓ Загружено</span>
//                                                     </div>
//                                                 )}
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Язык:</span>
//                                                     <span className="font-medium">
//                                                         {languages.find(l => l.code === formData.language)?.name}
//                                                     </span>
//                                                 </div>
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Кубические метры:</span>
//                                                     <span className="font-medium">{formData.cubic_metr ? 'Да' : 'Нет'}</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>

//                     {/* Navigation Buttons */}
//                     <div className="flex gap-4">
//                         {currentStep < totalSteps && (
//                             <button
//                                 onClick={prevStep}
//                                 className="btn-secondary flex-1"
//                                 disabled={isGenerating}
//                             >
//                                 Назад
//                             </button>
//                         )}

//                         {currentStep < totalSteps ? (
//                             <button
//                                 onClick={nextStep}
//                                 className="btn-primary flex-1"
//                                 disabled={!canProceedToNextStep() || isGenerating}
//                             >
//                                 {steps[currentStep - 1]?.optional ? 'Пропустить' : 'Далее'}
//                             </button>
//                         ) : (
//                             <button
//                                 onClick={generateReport}
//                                 className="btn-primary flex-1"
//                                 disabled={isGenerating}
//                             >
//                                 {isGenerating ? 'Генерируется...' : 'Создать отчет'}
//                             </button>
//                         )}
//                     </div>

//                 </>
//             )}
//         </div>
//     )
// }

// function FileUploadArea({ type, accept, onFileSelect, selectedFile, optional = false, maxSize, title, dataType }) {
//     // Добавить новые типы в getIcon()
//     const getIcon = () => {
//         switch (type) {
//             case 'image':
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                 )
//             case 'video':
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                     </svg>
//                 )
//             case 'docx':
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                 )
//             case 'xlsx':
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                     </svg>
//                 )
//             case 'data':
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                 )
//             default:
//                 return (
//                     <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                     </svg>
//                 )
//         }
//     }

//     const getTitle = () => {
//         if (title) return title

//         switch (type) {
//             case 'image':
//                 return 'Выберите изображение OPGAL'
//             case 'video':
//                 return 'Выберите .ts видео файл'
//             case 'docx':
//                 return 'Выберите .docx документ'
//             case 'xlsx':
//                 return 'Выберите .xlsx файл'
//             case 'data':
//                 return dataType === 'qogi' ? 'Выберите CSV файл' : 'Выберите XLSX файл'
//             default:
//                 return 'Выберите файл'
//         }
//     }

//     const getDescription = () => {
//         if (selectedFile) return 'Файл загружен'

//         let desc = 'Нажмите для выбора файла'
//         if (maxSize) desc += ` (до ${maxSize})`
//         if (optional) desc += ' - необязательно'

//         return desc
//     }

//     // Обновить getFileFormat()
//     const getFileFormat = () => {
//         switch (type) {
//             case 'image':
//                 return 'JPG, PNG, GIF'
//             case 'video':
//                 return 'Только .ts файлы'
//             case 'docx':
//                 return 'Только .docx файлы'
//             case 'xlsx':
//                 return 'Только .xlsx файлы'
//             case 'data':
//                 return dataType === 'qogi' ? 'CSV файлы' : 'XLSX файлы'
//             default:
//                 return ''
//         }
//     }

//     return (
//         <div className="border-2 border-dashed border-[#006045] rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
//             <input
//                 type="file"
//                 accept={accept}
//                 onChange={(e) => onFileSelect(e.target.files[0])}
//                 className="hidden"
//                 id={`file-${type}-${Date.now()}`}
//             />
//             <label htmlFor={`file-${type}-${Date.now()}`} className="cursor-pointer">
//                 {getIcon()}
//                 <div className="text-lg font-medium text-gray-900 mb-2">
//                     {selectedFile ? selectedFile.name : getTitle()}
//                 </div>
//                 <div className="text-sm text-gray-600 mb-2">
//                     {getDescription()}
//                 </div>
//                 {getFileFormat() && (
//                     <div className="text-xs text-gray-500 mb-4">
//                         Поддерживаемые форматы: {getFileFormat()}
//                     </div>
//                 )}
//                 {selectedFile ? (
//                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
//                         ✓ Готово
//                     </div>
//                 ) : optional ? (
//                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
//                         Необязательно
//                     </div>
//                 ) : (
//                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
//                         Обязательно
//                     </div>
//                 )}
//             </label>
//         </div>
//     )
// }












































// Исправленный app/create-report/page.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTelegramContext } from '../contexts/TelegramContext'

export default function CreateReportPage() {
    const router = useRouter()
    const { user, tg, isLoading: userLoading } = useTelegramContext()
    const [currentStep, setCurrentStep] = useState(0)
    const [selectedType, setSelectedType] = useState(null)
    const [formData, setFormData] = useState({
        // Для QOGI (как было)
        image: null,
        video1: null,
        video2: null,
        data_file: null,

        // Для EYECSITE (новые поля)
        video: null,      // одно видео вместо video1/video2
        docx: null,       // документ Word
        xlsx: null,       // дополнительная таблица Excel

        // Общие настройки
        language: 'ru',
        cubic_metr: false
    })

    const [uploadProgress, setUploadProgress] = useState({
        loaded: 0,
        total: 0,
        progress: 0,
        isUploading: false
    })

    const [isGenerating, setIsGenerating] = useState(false)

    const reportTypes = [
        {
            id: 'qogi',
            title: 'QOGI',
            description: 'Отчет для анализа данных измерений (CSV файлы)',
            icon: (
                <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 'eyecsite',
            title: 'EYECSITE',
            description: 'Отчет для EYECSITE (XLSX файлы)',
            icon: (
                <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ]

    const getStepsForType = (type) => {
        if (type === 'qogi') {
            return [
                { id: 1, title: 'Изображение OPGAL', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
                { id: 2, title: 'Первое видео', desc: 'Загрузите первый .ts файл (до 100 МБ)', field: 'video1', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
                { id: 3, title: 'Второе видео', desc: 'Загрузите второй .ts файл (до 100 МБ)', field: 'video2', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
                { id: 4, title: 'Данные CSV', desc: 'Выберите CSV файл с данными', field: 'data_file', fileType: 'data', accept: '.csv', maxSize: '10 МБ', optional: false },
                { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
                { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
            ]
        } else if (type === 'eyecsite') {
            return [
                { id: 1, title: 'Изображение', desc: 'Загрузите изображение (до 5 МБ)', field: 'image', fileType: 'image', accept: 'image/*', maxSize: '5 МБ', optional: true },
                { id: 2, title: 'Видео файл', desc: 'Загрузите .ts видео файл (до 100 МБ)', field: 'video', fileType: 'video', accept: '.ts', maxSize: '100 МБ', optional: true },
                { id: 3, title: 'Документ Word', desc: 'Загрузите .docx файл (до 20 МБ)', field: 'docx', fileType: 'docx', accept: '.docx', maxSize: '20 МБ', optional: true },
                { id: 4, title: 'Таблица Excel', desc: 'Загрузите .xlsx файл (до 50 МБ)', field: 'data_file', fileType: 'data', accept: '.xlsx', maxSize: '50 МБ', optional: false },
                { id: 5, title: 'Настройки отчета', desc: 'Язык и параметры' },
                { id: 6, title: 'Генерация отчета', desc: 'Создание PDF' }
            ]
        }
        return []
    }

    // ВАЖНО: Определяем steps и totalSteps ЗДЕСЬ
    const steps = selectedType ? getStepsForType(selectedType) : []
    const totalSteps = steps.length

    const languages = [
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' },
        { code: 'uz', name: 'O\'zbek' }
    ]

    const selectType = (type) => {
        setSelectedType(type)
        setCurrentStep(1)
    }

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        } else if (currentStep === 1) {
            setCurrentStep(0)
            setSelectedType(null)
        }
    }

    const handleFileUpload = (fieldName, file) => {
        setFormData({ ...formData, [fieldName]: file })
    }

    const validateFile = (file, type) => {
        const maxImageSize = 5 * 1024 * 1024      // 5 MB
        const maxVideoSize = 100 * 1024 * 1024    // 100 MB  
        const maxDocxSize = 20 * 1024 * 1024      // 20 MB
        const maxXlsxSize = 50 * 1024 * 1024      // 50 MB

        switch (type) {
            case 'image':
                if (!file.type.startsWith('image/')) {
                    alert('Файл должен быть изображением (JPG, PNG, GIF)')
                    return false
                }
                if (file.size > maxImageSize) {
                    alert('Размер изображения не должен превышать 5 МБ')
                    return false
                }
                break

            case 'video':
                if (!file.name.toLowerCase().endsWith('.ts')) {
                    alert('Видео файл должен быть в формате .ts')
                    return false
                }
                if (file.size > maxVideoSize) {
                    alert('Размер видео файла не должен превышать 100 МБ')
                    return false
                }
                break

            case 'docx':
                if (!file.name.toLowerCase().endsWith('.docx')) {
                    alert('Документ должен быть в формате .docx')
                    return false
                }
                if (file.size > maxDocxSize) {
                    alert('Размер документа не должен превышать 20 МБ')
                    return false
                }
                break

            case 'xlsx':
                if (!file.name.toLowerCase().endsWith('.xlsx')) {
                    alert('Файл должен быть в формате .xlsx')
                    return false
                }
                if (file.size > maxXlsxSize) {
                    alert('Размер файла не должен превышать 50 МБ')
                    return false
                }
                break

            case 'data':
                const isQogi = selectedType === 'qogi'
                const isEyecsite = selectedType === 'eyecsite'

                if (isQogi && !file.name.toLowerCase().endsWith('.csv')) {
                    alert('Для QOGI отчетов необходим CSV файл')
                    return false
                }
                if (isEyecsite && !file.name.toLowerCase().endsWith('.xlsx')) {
                    alert('Для EYECSITE отчетов необходим XLSX файл')
                    return false
                }
                break
        }
        return true
    }

    const generateReport = async () => {
        // if (!formData.data_file) {
        //     console.log('❌ Нет файла данных для отправки')
        //     alert('Пожалуйста, загрузите файл данных')
        //     return
        // }
        if (selectedType === 'qogi' && !formData.data_file) {
            console.log('❌ Нет файла данных для QOGI отчета')
            alert('Пожалуйста, загрузите CSV файл данных для QOGI отчета')
            return
        }

        if (!user || !tg?.initData) {
            console.log('❌ Пользователь не авторизован через Telegram')
            alert('Ошибка: необходима авторизация через Telegram')
            return
        }

        setIsGenerating(true)

        console.log('🚀 Начинаем генерацию отчета', selectedType.toUpperCase())
        console.log('👤 Пользователь Telegram:', user.id)
        console.log('📊 Параметры отчета:', {
            selectedType,
            language: formData.language,
            cubic_metr: formData.cubic_metr,
            telegram_user_id: user.id, // АВТОМАТИЧЕСКИ из контекста
            imageFileName: formData.image?.name,
            video1FileName: formData.video1?.name,
            video2FileName: formData.video2?.name,
            videoFileName: formData.video?.name,
            docxFileName: formData.docx?.name,
            xlsxFileName: formData.xlsx?.name,
            dataFileName: formData.data_file?.name,
            dataFileSize: formData.data_file?.size,
            dataFileType: formData.data_file?.type
        })

        try {
            const formDataToSend = new FormData()

            // Основные данные
            if (formData.data_file) {
                formDataToSend.append('data_file', formData.data_file)
            }
            formDataToSend.append('language', formData.language)
            formDataToSend.append('cubic_metr', formData.cubic_metr.toString())
            formDataToSend.append('telegram_user_id', user.id.toString())
            formDataToSend.append('init_data', tg.initData)

            // Добавляем файлы в зависимости от типа отчета
            if (selectedType === 'qogi') {
                // Для QOGI - старая логика
                if (formData.image) {
                    formDataToSend.append('image', formData.image)
                }
                if (formData.video1) {
                    formDataToSend.append('video1', formData.video1)
                }
                if (formData.video2) {
                    formDataToSend.append('video2', formData.video2)
                }
            } else if (selectedType === 'eyecsite') {
                // Для EYECSITE - новая логика
                if (formData.image) {
                    formDataToSend.append('image', formData.image)
                }
                if (formData.video) {
                    formDataToSend.append('video', formData.video)
                }
                if (formData.docx) {
                    formDataToSend.append('docx', formData.docx)
                }
                if (formData.xlsx) {
                    formDataToSend.append('xlsx', formData.xlsx)
                }
            }

            // Логирование для отладки
            console.log('📤 Отправляем FormData для', selectedType.toUpperCase(), ':')
            for (let [key, value] of formDataToSend.entries()) {
                if (key === 'init_data') {
                    console.log(`  ${key}:`, value.substring(0, 50) + '...')
                } else if (value instanceof File) {
                    console.log(`  ${key}:`, {
                        name: value.name,
                        size: value.size,
                        type: value.type
                    })
                } else {
                    console.log(`  ${key}:`, value)
                }
            }

            // Выбираем правильный API URL в зависимости от типа отчета
            const apiUrl = selectedType === 'qogi'
                ? 'https://asmanenergy.com/wp-json/qogi/v1/generate-qogi-report'
                : 'https://asmanenergy.com/wp-json/qogi/v1/generate-eyecsite-report'

            console.log('🌐 API URL:', apiUrl)
            console.log('⏱️ Время отправки запроса:', new Date().toISOString())

            setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: true })

            const response = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                // Отслеживание прогресса загрузки
                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        const progress = Math.round((e.loaded / e.total) * 100)
                        console.log(`📤 Прогресс загрузки: ${progress}% (${(e.loaded / 1024 / 1024).toFixed(1)} из ${(e.total / 1024 / 1024).toFixed(1)} МБ)`)

                        setUploadProgress({
                            loaded: e.loaded,
                            total: e.total,
                            progress: progress,
                            isUploading: true
                        })
                    }
                })

                xhr.onload = () => {
                    setUploadProgress(prev => ({ ...prev, isUploading: false }))

                    const mockResponse = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        ok: xhr.status >= 200 && xhr.status < 300,
                        headers: {
                            get: (name) => xhr.getResponseHeader(name)
                        },
                        json: async () => JSON.parse(xhr.responseText),
                        text: async () => xhr.responseText
                    }
                    resolve(mockResponse)
                }

                xhr.onerror = () => {
                    setUploadProgress(prev => ({ ...prev, isUploading: false }))
                    reject(new Error('Network error'))
                }

                xhr.open('POST', apiUrl)
                xhr.setRequestHeader('Accept', 'application/json')
                xhr.send(formDataToSend)
            })

            console.log('📥 Получен ответ от сервера:')
            console.log('  Status:', response.status)
            console.log('  StatusText:', response.statusText)
            console.log('  OK:', response.ok)

            let result
            const contentType = response.headers.get('content-type')
            console.log('📄 Content-Type:', contentType)

            if (contentType && contentType.includes('application/json')) {
                result = await response.json()
                console.log('📋 JSON ответ:', JSON.stringify(result, null, 2))
            } else {
                const textResult = await response.text()
                console.log('📋 Text ответ:', textResult)
                console.log('❌ Ответ не в формате JSON!')
                alert(`Сервер вернул неожиданный ответ. Проверьте консоль для деталей.`)
                return
            }

            if (result.success) {
                console.log('✅ Отчет успешно создан!')
                console.log('📊 Данные отчета:', {
                    report_id: result.report_id,
                    file_path: result.file_path,
                    download_url: result.download_url
                })

                alert(`Отчет ${selectedType.toUpperCase()} успешно создан! ID: ${result.report_id}`)

                // Сброс формы ПЕРЕД редиректом
                console.log('🔄 Сбрасываем форму')
                setFormData({
                    image: null,
                    video1: null,
                    video2: null,
                    video: null,
                    docx: null,
                    xlsx: null,
                    data_file: null,
                    language: 'ru',
                    cubic_metr: false
                })
                setCurrentStep(0)
                setSelectedType(null)
                setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: false })

                // Редирект на страницу истории
                console.log('🔄 Перенаправляем на страницу истории')
                router.push('/history')
            } else {
                console.log('❌ Ошибка от API:', result)
                alert(`Ошибка создания отчета: ${result.message || 'Неизвестная ошибка'}`)
            }
        } catch (error) {
            console.error('💥 Критическая ошибка при отправке запроса:', error)
            alert('Ошибка соединения с сервером. Проверьте консоль для деталей.')
            // } finally {
            //     console.log('🏁 Завершение процесса генерации отчета')
            //     setIsGenerating(false)
            // }
        } finally {
            console.log('🏁 Завершение процесса генерации отчета')
            setIsGenerating(false)
            setUploadProgress({ loaded: 0, total: 0, progress: 0, isUploading: false }) // ← Добавь эту строку
        }
    }

    // Показываем загрузку если пользователь еще не загружен
    if (userLoading) {
        return (
            <div className="p-6 pb-24">
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
                </div>
            </div>
        )
    }

    // Показываем ошибку если пользователь не авторизован
    if (!user) {
        return (
            <div className="p-6 pb-24">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">Необходима авторизация через Telegram</span>
                    </div>
                </div>
            </div>
        )
    }

    const canProceedToNextStep = () => {
        if (currentStep >= totalSteps) return false

        const currentStepData = steps[currentStep - 1]

        // Если это шаг загрузки файла
        if (currentStepData?.field) {
            const fieldName = currentStepData.field
            const isOptional = currentStepData.optional

            // Если поле обязательное, проверяем что файл загружен
            if (!isOptional && !formData[fieldName]) {
                return false
            }
        }

        return true
    }

    return (
        <div className="p-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={() => currentStep === 0 ? window.history.back() : prevStep()}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                    disabled={isGenerating}
                >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                    {currentStep === 0 ? 'Выбор типа отчета' : 'Создание отчета'}
                </h1>
                <div className="w-10"></div>
            </div>

            {/* Type Selection */}
            {currentStep === 0 && (
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Выберите тип отчета
                        </h2>
                        <p className="text-gray-600">
                            Какой отчет вы хотите создать?
                        </p>
                    </div>

                    <div className="space-y-4">
                        {reportTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => selectType(type.id)}
                                className="w-full card transition-shadow text-left"
                            >
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
                                        {type.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {type.description}
                                        </p>
                                    </div>
                                    <div className="w-6 h-6 text-gray-400">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* File Upload and Settings Steps */}
            {currentStep > 0 && (
                <>
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-emerald-800">
                                Шаг {currentStep} из {totalSteps}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600">
                                    {reportTypes.find(t => t.id === selectedType)?.title}
                                </span>
                                <span className="text-sm text-gray-600">
                                    {Math.round((currentStep / totalSteps) * 100)}%
                                </span>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-emerald-800 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {steps[currentStep - 1]?.title}
                        </h2>
                        <p className="text-gray-600 mb-6">{steps[currentStep - 1]?.desc}</p>

                        {/* Динамические шаги загрузки файлов */}
                        {currentStep > 0 && currentStep <= totalSteps - 2 && (() => {
                            const step = steps[currentStep - 1]

                            // Если это шаг загрузки файла
                            if (step?.field) {
                                return (
                                    <FileUploadArea
                                        type={step.fileType}
                                        accept={step.accept}
                                        maxSize={step.maxSize}
                                        title={step.title}
                                        onFileSelect={(file) => {
                                            if (validateFile(file, step.fileType)) {
                                                handleFileUpload(step.field, file)
                                            }
                                        }}
                                        selectedFile={formData[step.field]}
                                        optional={step.optional}
                                        dataType={selectedType}
                                    />
                                )
                            }
                            return null
                        })()}

                        {/* Шаг настроек - предпоследний */}
                        {currentStep === totalSteps - 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Язык отчета
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setFormData({ ...formData, language: lang.code })}
                                                className={`p-3 rounded-xl border-2 text-sm font-medium transition-colors ${formData.language === lang.code
                                                    ? 'border-emerald-800 bg-emerald-50 text-emerald-800'
                                                    : 'border-gray-200 text-gray-700 hover:border-emerald-300'
                                                    }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={formData.cubic_metr}
                                            onChange={(e) => setFormData({ ...formData, cubic_metr: e.target.checked })}
                                            className="w-4 h-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-600"
                                        />
                                        <span className="ml-3 text-sm text-gray-700">
                                            Конвертировать в м³/ч
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Шаг генерации - последний */}
                        {currentStep === totalSteps && (
                            <div className="text-center">
                                {isGenerating ? (
                                    <div className="py-4">
                                        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin mx-auto mb-4"></div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {uploadProgress.isUploading ? 'Загрузка файлов...' : 'Генерация отчета...'}
                                        </h3>

                                        {/* Прогресс-бар загрузки */}
                                        {uploadProgress.isUploading && uploadProgress.total > 0 && (
                                            <div className="max-w-md mx-auto mb-4">
                                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                                    <span>{uploadProgress.progress}%</span>
                                                    <span>
                                                        {(uploadProgress.loaded / 1024 / 1024).toFixed(1)} из {(uploadProgress.total / 1024 / 1024).toFixed(1)} МБ
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                                                        style={{ width: `${uploadProgress.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}

                                        <p className="text-gray-600">
                                            {uploadProgress.isUploading ? 'Загружаем файлы на сервер...' : 'Обрабатываем данные...'}
                                        </p>
                                    </div>
                                ) : (
                                    // остальной код без изменений...
                                    <div className="py-4">
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Готово к генерации
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Все данные загружены, подтвердите создание отчета
                                        </p>
                                        <div className="bg-gray-50 rounded-xl p-4 text-left">
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Тип отчета:</span>
                                                    <span className="font-medium">{selectedType?.toUpperCase()}</span>
                                                </div>
                                                {formData.data_file && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Файл данных:</span>
                                                        <span className="font-medium">{formData.data_file?.name}</span>
                                                    </div>
                                                )}
                                                {formData.image && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Изображение:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                {formData.video1 && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Видео 1:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                {formData.video2 && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Видео 2:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                {formData.video && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Видео:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                {formData.docx && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Документ:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                {formData.xlsx && (
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Таблица Excel:</span>
                                                        <span className="font-medium">✓ Загружено</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Язык:</span>
                                                    <span className="font-medium">
                                                        {languages.find(l => l.code === formData.language)?.name}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Кубические метры:</span>
                                                    <span className="font-medium">{formData.cubic_metr ? 'Да' : 'Нет'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        {currentStep < totalSteps && (
                            <button
                                onClick={prevStep}
                                className="btn-secondary flex-1"
                                disabled={isGenerating}
                            >
                                Назад
                            </button>
                        )}

                        {currentStep < totalSteps ? (
                            <button
                                onClick={nextStep}
                                className="btn-primary flex-1"
                                disabled={!canProceedToNextStep() || isGenerating}
                            >
                                {steps[currentStep - 1]?.optional ? 'Пропустить' : 'Далее'}
                            </button>
                        ) : (
                            <button
                                onClick={generateReport}
                                className={`flex-1 py-3 px-4 rounded-xl font-medium text-white transition-all duration-200 ${isGenerating
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-lg hover:shadow-xl'
                                    }`}
                                disabled={isGenerating}
                            >
                                {isGenerating ? 'Генерируется...' : 'Создать отчет'}
                            </button>
                        )}
                    </div>

                </>
            )}
        </div>
    )
}

function FileUploadArea({ type, accept, onFileSelect, selectedFile, optional = false, maxSize, title, dataType }) {
    // Добавить новые типы в getIcon()
    const getIcon = () => {
        switch (type) {
            case 'image':
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )
            case 'video':
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )
            case 'docx':
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            case 'xlsx':
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            case 'data':
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            default:
                return (
                    <svg className="w-12 h-12 text-emerald-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                )
        }
    }

    const getTitle = () => {
        if (title) return title

        switch (type) {
            case 'image':
                return 'Выберите изображение OPGAL'
            case 'video':
                return 'Выберите .ts видео файл'
            case 'docx':
                return 'Выберите .docx документ'
            case 'xlsx':
                return 'Выберите .xlsx файл'
            case 'data':
                return dataType === 'qogi' ? 'Выберите CSV файл' : 'Выберите XLSX файл'
            default:
                return 'Выберите файл'
        }
    }

    const getDescription = () => {
        if (selectedFile) return 'Файл загружен'

        let desc = 'Нажмите для выбора файла'
        if (maxSize) desc += ` (до ${maxSize})`
        if (optional) desc += ' - необязательно'

        return desc
    }

    // Обновить getFileFormat()
    const getFileFormat = () => {
        switch (type) {
            case 'image':
                return 'JPG, PNG, GIF'
            case 'video':
                return 'Только .ts файлы'
            case 'docx':
                return 'Только .docx файлы'
            case 'xlsx':
                return 'Только .xlsx файлы'
            case 'data':
                return dataType === 'qogi' ? 'CSV файлы' : 'XLSX файлы'
            default:
                return ''
        }
    }

    return (
        <div className="border-2 border-dashed border-[#006045] rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
            <input
                type="file"
                accept={accept}
                onChange={(e) => onFileSelect(e.target.files[0])}
                className="hidden"
                id={`file-${type}-${Date.now()}`}
            />
            <label htmlFor={`file-${type}-${Date.now()}`} className="cursor-pointer">
                {getIcon()}
                <div className="text-lg font-medium text-gray-900 mb-2">
                    {selectedFile ? selectedFile.name : getTitle()}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                    {getDescription()}
                </div>
                {getFileFormat() && (
                    <div className="text-xs text-gray-500 mb-4">
                        Поддерживаемые форматы: {getFileFormat()}
                    </div>
                )}
                {selectedFile ? (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                        ✓ Готово
                    </div>
                ) : optional ? (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                        Необязательно
                    </div>
                ) : (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
                        Обязательно
                    </div>
                )}
            </label>
        </div>
    )
}