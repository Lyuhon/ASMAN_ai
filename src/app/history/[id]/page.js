// // /history/[id]/page.js
// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { useTelegramContext } from '../../contexts/TelegramContext'

// export default function ReportFilesPage() {
//     const params = useParams()
//     const reportId = params.id
//     const { user, tg, isLoading: userLoading } = useTelegramContext()

//     const [report, setReport] = useState(null)
//     const [files, setFiles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const [downloadingFiles, setDownloadingFiles] = useState(new Set())
//     const [notification, setNotification] = useState(null)
//     const [downloadProgress, setDownloadProgress] = useState({})

//     // Показать уведомление
//     const showNotification = (message, type = 'success') => {
//         setNotification({ message, type })
//         setTimeout(() => setNotification(null), 5000)
//     }

//     // Загрузка списка файлов отчета
//     const fetchReportFiles = async () => {
//         if (userLoading || !user || !reportId) {
//             return
//         }

//         try {
//             setLoading(true)
//             setError(null)

//             console.log('📋 Загрузка файлов отчета:', reportId)

//             const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/files`

//             const headers = {
//                 'Content-Type': 'application/json'
//             }

//             if (tg?.initData) {
//                 headers['X-Telegram-Init-Data'] = tg.initData
//             }

//             const response = await fetch(apiUrl, {
//                 method: 'GET',
//                 headers: headers
//             })

//             console.log('📥 Ответ от API:', response.status)

//             if (response.status === 401) {
//                 setError('Необходима авторизация через Telegram')
//                 return
//             }

//             if (response.status === 403) {
//                 setError('Доступ запрещен')
//                 return
//             }

//             if (response.status === 404) {
//                 setError('Отчет не найден')
//                 return
//             }

//             if (!response.ok) {
//                 throw new Error(`Ошибка сервера: ${response.status}`)
//             }

//             const result = await response.json()

//             if (result.success) {
//                 console.log('✅ Файлы загружены:', result.files)
//                 setReport({
//                     id: result.report_id,
//                     type: result.report_type,
//                     created_at: result.created_at
//                 })
//                 setFiles(result.files || [])
//             } else {
//                 setError(result.message || 'Ошибка загрузки файлов')
//             }

//         } catch (err) {
//             console.error('💥 Ошибка при загрузке файлов:', err)
//             setError('Ошибка соединения с сервером')
//         } finally {
//             setLoading(false)
//         }
//     }

//     // Скачивание отдельного файла
//     const downloadFile = async (file) => {
//         console.log('📥 Скачивание файла:', file.filename)

//         if (!user || !tg?.initData) {
//             showNotification('Ошибка авторизации', 'error')
//             return
//         }

//         if (downloadingFiles.has(file.type)) {
//             return
//         }

//         try {
//             setDownloadingFiles(prev => new Set([...prev, file.type]))
//             setDownloadProgress(prev => ({ ...prev, [file.type]: 0 }))

//             // Используем XMLHttpRequest для отслеживания прогресса
//             const downloadWithProgress = () => {
//                 return new Promise((resolve, reject) => {
//                     const xhr = new XMLHttpRequest()

//                     // Отслеживание прогресса скачивания
//                     xhr.addEventListener('progress', (event) => {
//                         if (event.lengthComputable) {
//                             const percentComplete = Math.round((event.loaded / event.total) * 100)
//                             console.log(`📊 Прогресс скачивания ${file.filename}: ${percentComplete}%`)
//                             setDownloadProgress(prev => ({
//                                 ...prev,
//                                 [file.type]: percentComplete
//                             }))
//                         }
//                     })

//                     xhr.addEventListener('load', () => {
//                         if (xhr.status === 200) {
//                             resolve(xhr.response)
//                         } else {
//                             reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`))
//                         }
//                     })

//                     xhr.addEventListener('error', () => {
//                         reject(new Error('Ошибка сети при скачивании'))
//                     })

//                     xhr.addEventListener('abort', () => {
//                         reject(new Error('Скачивание отменено'))
//                     })

//                     // Настройка запроса
//                     xhr.open('GET', file.download_url, true)
//                     xhr.responseType = 'blob'
//                     xhr.setRequestHeader('Content-Type', 'application/json')
//                     xhr.setRequestHeader('X-Telegram-Init-Data', tg.initData)

//                     // Запуск скачивания
//                     xhr.send()
//                 })
//             }

//             const blob = await downloadWithProgress()

//             // Создаем ссылку для скачивания
//             const link = document.createElement('a')
//             link.href = URL.createObjectURL(blob)
//             link.download = file.filename

//             document.body.appendChild(link)
//             link.click()
//             document.body.removeChild(link)

//             URL.revokeObjectURL(link.href)

//             showNotification(`📁 ${file.name} скачан`, 'success')

//             if (tg?.HapticFeedback) {
//                 tg.HapticFeedback.notificationOccurred('success')
//             }

//         } catch (error) {
//             console.error('💥 Ошибка при скачивании:', error)
//             showNotification(`❌ Ошибка скачивания: ${error.message}`, 'error')

//             if (tg?.HapticFeedback) {
//                 tg.HapticFeedback.notificationOccurred('error')
//             }
//         } finally {
//             setDownloadingFiles(prev => {
//                 const newSet = new Set(prev)
//                 newSet.delete(file.type)
//                 return newSet
//             })
//             // Убираем прогресс через небольшую задержку
//             setTimeout(() => {
//                 setDownloadProgress(prev => {
//                     const newProgress = { ...prev }
//                     delete newProgress[file.type]
//                     return newProgress
//                 })
//             }, 1000)
//         }
//     }

//     // Получение иконки файла
//     const getFileIcon = (file) => {
//         switch (file.type) {
//             case 'pdf':
//                 return (
//                     <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                 )
//             case 'image':
//                 return (
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                         </svg>
//                     </div>
//                 )
//             case 'video':
//             case 'video1':
//             case 'video2':
//                 return (
//                     <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                         </svg>
//                     </div>
//                 )
//             case 'docx':
//                 return (
//                     <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                 )
//             case 'xlsx':
//                 return (
//                     <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                 )
//             case 'csv':
//                 return (
//                     <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                 )
//             default:
//                 return (
//                     <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
//                         <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                 )
//         }
//     }

//     // Форматирование размера файла
//     const formatFileSize = (bytes) => {
//         if (bytes === 0) return '0 Bytes'
//         const k = 1024
//         const sizes = ['Bytes', 'KB', 'MB', 'GB']
//         const i = Math.floor(Math.log(bytes) / Math.log(k))
//         return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
//     }

//     // Форматирование даты
//     const formatDate = (dateString) => {
//         return new Date(dateString).toLocaleDateString('ru-RU', {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//         })
//     }

//     useEffect(() => {
//         if (!userLoading && user && reportId) {
//             fetchReportFiles()
//         }
//     }, [userLoading, user, reportId])

//     if (userLoading) {
//         return (
//             <div className="p-6 pb-24">
//                 <div className="flex items-center justify-center py-12">
//                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
//                 </div>
//             </div>
//         )
//     }

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

//     return (
//         <div className="p-6 pb-24">
//             {/* Уведомления */}
//             {notification && (
//                 <div className={`fixed top-4 left-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${notification.type === 'success'
//                     ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
//                     : 'bg-red-50 border border-red-200 text-red-800'
//                     }`}>
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                             {notification.type === 'success' ? (
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                             ) : (
//                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                                 </svg>
//                             )}
//                             <span className="text-sm font-medium">{notification.message}</span>
//                         </div>
//                         <button
//                             onClick={() => setNotification(null)}
//                             className="ml-4 text-current opacity-70 hover:opacity-100"
//                         >
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <Link href="/history" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                 </Link>
//                 <div className="flex-1 text-center">
//                     <h1 className="text-xl font-semibold text-gray-900">Файлы отчета</h1>
//                     {report && (
//                         <p className="text-sm text-gray-600 mt-1">
//                             {report.type?.toUpperCase()} #{report.id}
//                         </p>
//                     )}
//                 </div>
//                 <button
//                     onClick={fetchReportFiles}
//                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
//                 >
//                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Report Info */}
//             {report && (
//                 <div className="bg-gray-50 rounded-xl p-4 mb-6">
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <h3 className="font-medium text-gray-900">{report.type?.toUpperCase()} отчет #{report.id}</h3>
//                             <p className="text-sm text-gray-600 mt-1">📅 {formatDate(report.created_at)}</p>
//                         </div>
//                         <div className="text-right">
//                             <p className="text-sm font-medium text-gray-900">{files.length} файлов</p>
//                             <p className="text-xs text-gray-500">доступно для скачивания</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Loading State */}
//             {loading && (
//                 <div className="flex items-center justify-center py-12">
//                     <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
//                 </div>
//             )}

//             {/* Error State */}
//             {error && (
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
//                     <div className="flex items-center">
//                         <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-red-800 text-sm">{error}</span>
//                     </div>
//                 </div>
//             )}

//             {/* Files List */}
//             {!loading && files.length > 0 && (
//                 <div className="space-y-3">
//                     {files.map((file, index) => (
//                         <div key={`${file.type}-${index}`} className="card">
//                             <div className="flex items-center gap-4">
//                                 {/* File Icon */}
//                                 {getFileIcon(file)}

//                                 {/* File Info */}
//                                 <div className="flex-1 min-w-0">
//                                     <h3 className="font-medium text-gray-900 truncate">{file.name}</h3>
//                                     <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
//                                         <span>{file.filename}</span>
//                                         <span>•</span>
//                                         <span>{formatFileSize(file.size)}</span>
//                                         {file.extension && (
//                                             <>
//                                                 <span>•</span>
//                                                 <span className="uppercase">{file.extension}</span>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Download Button */}
//                                 <button
//                                     onClick={() => downloadFile(file)}
//                                     disabled={downloadingFiles.has(file.type)}
//                                     className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors relative ${downloadingFiles.has(file.type)
//                                         ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                         : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
//                                         }`}
//                                     title="Скачать файл"
//                                 >
//                                     {downloadingFiles.has(file.type) ? (
//                                         <div className="relative w-8 h-8">
//                                             {/* Фоновый круг */}
//                                             <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
//                                                 <circle
//                                                     cx="16"
//                                                     cy="16"
//                                                     r="12"
//                                                     fill="none"
//                                                     stroke="#e5e7eb"
//                                                     strokeWidth="3"
//                                                 />
//                                                 {/* Прогресс круг */}
//                                                 <circle
//                                                     cx="16"
//                                                     cy="16"
//                                                     r="12"
//                                                     fill="none"
//                                                     stroke="#059669"
//                                                     strokeWidth="3"
//                                                     strokeLinecap="round"
//                                                     strokeDasharray={`${(downloadProgress[file.type] || 0) * 0.75} 75`}
//                                                     className="transition-all duration-300"
//                                                 />
//                                             </svg>
//                                             {/* Процент в центре */}
//                                             <div className="absolute inset-0 flex items-center justify-center">
//                                                 <span className="text-[9
//                                                     px] font-medium text-emerald-700">
//                                                     {downloadProgress[file.type] || 0}%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                         </svg>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Empty State */}
//             {!loading && files.length === 0 && !error && (
//                 <div className="text-center py-12">
//                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Файлы не найдены</h3>
//                     <p className="text-gray-600 mb-6">Для этого отчета нет доступных файлов</p>
//                     <Link href="/history" className="btn-secondary inline-block">
//                         Вернуться к истории
//                     </Link>
//                 </div>
//             )}
//         </div>
//     )
// }












// С переводами

// /history/[id]/page.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTelegramContext } from '../../contexts/TelegramContext'
import { useTelegram } from '../../hooks/useTelegram'

export default function ReportFilesPage() {
    const params = useParams()
    const reportId = params.id
    const { user, tg, isLoading: userLoading } = useTelegramContext()
    const { getUserLanguage } = useTelegram()

    const [report, setReport] = useState(null)
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [downloadingFiles, setDownloadingFiles] = useState(new Set())
    const [notification, setNotification] = useState(null)
    const [downloadProgress, setDownloadProgress] = useState({})

    // Тексты для мультиязычности
    const texts = {
        ru: {
            pageTitle: 'Файлы отчета',
            reportFiles: 'Файлы отчета',
            report: 'отчет',
            createdAt: '📅',
            filesAvailable: 'файлов',
            availableForDownload: 'доступно для скачивания',
            authRequired: 'Необходима авторизация через Telegram',
            accessDenied: 'Доступ запрещен',
            reportNotFound: 'Отчет не найден',
            serverError: 'Ошибка сервера',
            loadingError: 'Ошибка загрузки файлов',
            connectionError: 'Ошибка соединения с сервером',
            authError: 'Ошибка авторизации',
            downloadedSuccess: 'скачан',
            downloadError: 'Ошибка скачивания',
            noFilesFound: 'Файлы не найдены',
            noFilesDescription: 'Для этого отчета нет доступных файлов',
            backToHistory: 'Вернуться к истории',
            downloadFile: 'Скачать файл',
            downloading: 'Скачивание...',
            networkError: 'Ошибка сети при скачивании',
            downloadCancelled: 'Скачивание отменено'
        },
        uz: {
            pageTitle: 'Hisobot fayllari',
            reportFiles: 'Hisobot fayllari',
            report: 'hisobot',
            createdAt: '📅',
            filesAvailable: 'fayl',
            availableForDownload: 'yuklab olish mumkin',
            authRequired: 'Telegram orqali avtorizatsiya talab qilinadi',
            accessDenied: 'Kirish taqiqlangan',
            reportNotFound: 'Hisobot topilmadi',
            serverError: 'Server xatosi',
            loadingError: 'Fayllarni yuklashda xato',
            connectionError: 'Server bilan aloqa xatosi',
            authError: 'Avtorizatsiya xatosi',
            downloadedSuccess: 'yuklandi',
            downloadError: 'Yuklashda xato',
            noFilesFound: 'Fayllar topilmadi',
            noFilesDescription: 'Ushbu hisobot uchun mavjud fayllar yo\'q',
            backToHistory: 'Tarixga qaytish',
            downloadFile: 'Faylni yuklash',
            downloading: 'Yuklanmoqda...',
            networkError: 'Yuklashda tarmoq xatosi',
            downloadCancelled: 'Yuklash bekor qilindi'
        },
        en: {
            pageTitle: 'Report Files',
            reportFiles: 'Report Files',
            report: 'report',
            createdAt: '📅',
            filesAvailable: 'files',
            availableForDownload: 'available for download',
            authRequired: 'Telegram authorization required',
            accessDenied: 'Access denied',
            reportNotFound: 'Report not found',
            serverError: 'Server error',
            loadingError: 'Error loading files',
            connectionError: 'Server connection error',
            authError: 'Authorization error',
            downloadedSuccess: 'downloaded',
            downloadError: 'Download error',
            noFilesFound: 'No files found',
            noFilesDescription: 'No files available for this report',
            backToHistory: 'Back to History',
            downloadFile: 'Download file',
            downloading: 'Downloading...',
            networkError: 'Network error during download',
            downloadCancelled: 'Download cancelled'
        }
    }

    const currentTexts = texts[getUserLanguage()] || texts.ru

    // Показать уведомление
    const showNotification = (message, type = 'success') => {
        setNotification({ message, type })
        setTimeout(() => setNotification(null), 5000)
    }

    // Загрузка списка файлов отчета
    const fetchReportFiles = async () => {
        if (userLoading || !user || !reportId) {
            return
        }

        try {
            setLoading(true)
            setError(null)

            console.log('📋 Загрузка файлов отчета:', reportId)

            const apiUrl = `https://asmanenergy.com/wp-json/qogi/v1/reports/${reportId}/files`

            const headers = {
                'Content-Type': 'application/json'
            }

            if (tg?.initData) {
                headers['X-Telegram-Init-Data'] = tg.initData
            }

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            })

            console.log('📥 Ответ от API:', response.status)

            if (response.status === 401) {
                setError(currentTexts.authRequired)
                return
            }

            if (response.status === 403) {
                setError(currentTexts.accessDenied)
                return
            }

            if (response.status === 404) {
                setError(currentTexts.reportNotFound)
                return
            }

            if (!response.ok) {
                throw new Error(`${currentTexts.serverError}: ${response.status}`)
            }

            const result = await response.json()

            if (result.success) {
                console.log('✅ Файлы загружены:', result.files)
                setReport({
                    id: result.report_id,
                    type: result.report_type,
                    created_at: result.created_at
                })
                setFiles(result.files || [])
            } else {
                setError(result.message || currentTexts.loadingError)
            }

        } catch (err) {
            console.error('💥 Ошибка при загрузке файлов:', err)
            setError(currentTexts.connectionError)
        } finally {
            setLoading(false)
        }
    }

    // Скачивание отдельного файла
    const downloadFile = async (file) => {
        console.log('📥 Скачивание файла:', file.filename)

        if (!user || !tg?.initData) {
            showNotification(currentTexts.authError, 'error')
            return
        }

        if (downloadingFiles.has(file.type)) {
            return
        }

        try {
            setDownloadingFiles(prev => new Set([...prev, file.type]))
            setDownloadProgress(prev => ({ ...prev, [file.type]: 0 }))

            // Используем XMLHttpRequest для отслеживания прогресса
            const downloadWithProgress = () => {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest()

                    // Отслеживание прогресса скачивания
                    xhr.addEventListener('progress', (event) => {
                        if (event.lengthComputable) {
                            const percentComplete = Math.round((event.loaded / event.total) * 100)
                            console.log(`📊 Прогресс скачивания ${file.filename}: ${percentComplete}%`)
                            setDownloadProgress(prev => ({
                                ...prev,
                                [file.type]: percentComplete
                            }))
                        }
                    })

                    xhr.addEventListener('load', () => {
                        if (xhr.status === 200) {
                            resolve(xhr.response)
                        } else {
                            reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`))
                        }
                    })

                    xhr.addEventListener('error', () => {
                        reject(new Error(currentTexts.networkError))
                    })

                    xhr.addEventListener('abort', () => {
                        reject(new Error(currentTexts.downloadCancelled))
                    })

                    // Настройка запроса
                    xhr.open('GET', file.download_url, true)
                    xhr.responseType = 'blob'
                    xhr.setRequestHeader('Content-Type', 'application/json')
                    xhr.setRequestHeader('X-Telegram-Init-Data', tg.initData)

                    // Запуск скачивания
                    xhr.send()
                })
            }

            const blob = await downloadWithProgress()

            // Создаем ссылку для скачивания
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = file.filename

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            URL.revokeObjectURL(link.href)

            showNotification(`📁 ${file.name} ${currentTexts.downloadedSuccess}`, 'success')

            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('success')
            }

        } catch (error) {
            console.error('💥 Ошибка при скачивании:', error)
            showNotification(`❌ ${currentTexts.downloadError}: ${error.message}`, 'error')

            if (tg?.HapticFeedback) {
                tg.HapticFeedback.notificationOccurred('error')
            }
        } finally {
            setDownloadingFiles(prev => {
                const newSet = new Set(prev)
                newSet.delete(file.type)
                return newSet
            })
            // Убираем прогресс через небольшую задержку
            setTimeout(() => {
                setDownloadProgress(prev => {
                    const newProgress = { ...prev }
                    delete newProgress[file.type]
                    return newProgress
                })
            }, 1000)
        }
    }

    // Получение иконки файла
    const getFileIcon = (file) => {
        switch (file.type) {
            case 'pdf':
                return (
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            case 'image':
                return (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )
            case 'video':
            case 'video1':
            case 'video2':
                return (
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                )
            case 'docx':
                return (
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            case 'xlsx':
                return (
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            case 'csv':
                return (
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            default:
                return (
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
        }
    }

    // Форматирование размера файла
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    // Форматирование даты
    const formatDate = (dateString) => {
        const locale = getUserLanguage() === 'uz' ? 'uz-UZ' : getUserLanguage() === 'en' ? 'en-US' : 'ru-RU'
        return new Date(dateString).toLocaleDateString(locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    useEffect(() => {
        if (!userLoading && user && reportId) {
            fetchReportFiles()
        }
    }, [userLoading, user, reportId])

    if (userLoading) {
        return (
            <div className="p-6 pb-24">
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
                </div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="p-6 pb-24">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">{currentTexts.authRequired}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6 pb-24">
            {/* Уведомления */}
            {notification && (
                <div className={`fixed top-4 left-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${notification.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {notification.type === 'success' ? (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                            <span className="text-sm font-medium">{notification.message}</span>
                        </div>
                        <button
                            onClick={() => setNotification(null)}
                            className="ml-4 text-current opacity-70 hover:opacity-100"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Link href="/history" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
                <div className="flex-1 text-center">
                    <h1 className="text-xl font-semibold text-gray-900">{currentTexts.reportFiles}</h1>
                    {report && (
                        <p className="text-sm text-gray-600 mt-1">
                            {report.type?.toUpperCase()} #{report.id}
                        </p>
                    )}
                </div>
                <button
                    onClick={fetchReportFiles}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>

            {/* Report Info */}
            {report && (
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-gray-900">{report.type?.toUpperCase()} {currentTexts.report} #{report.id}</h3>
                            <p className="text-sm text-gray-600 mt-1">{currentTexts.createdAt} {formatDate(report.created_at)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{files.length} {currentTexts.filesAvailable}</p>
                            <p className="text-xs text-gray-500">{currentTexts.availableForDownload}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-800 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 text-sm">{error}</span>
                    </div>
                </div>
            )}

            {/* Files List */}
            {!loading && files.length > 0 && (
                <div className="space-y-3">
                    {files.map((file, index) => (
                        <div key={`${file.type}-${index}`} className="card">
                            <div className="flex items-center gap-4">
                                {/* File Icon */}
                                {getFileIcon(file)}

                                {/* File Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-gray-900 truncate">{file.name}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                                        <span>{file.filename}</span>
                                        <span>•</span>
                                        <span>{formatFileSize(file.size)}</span>
                                        {file.extension && (
                                            <>
                                                <span>•</span>
                                                <span className="uppercase">{file.extension}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Download Button */}
                                <button
                                    onClick={() => downloadFile(file)}
                                    disabled={downloadingFiles.has(file.type)}
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors relative ${downloadingFiles.has(file.type)
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
                                        }`}
                                    title={currentTexts.downloadFile}
                                >
                                    {downloadingFiles.has(file.type) ? (
                                        <div className="relative w-8 h-8">
                                            {/* Фоновый круг */}
                                            <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                                                <circle
                                                    cx="16"
                                                    cy="16"
                                                    r="12"
                                                    fill="none"
                                                    stroke="#e5e7eb"
                                                    strokeWidth="3"
                                                />
                                                {/* Прогресс круг */}
                                                <circle
                                                    cx="16"
                                                    cy="16"
                                                    r="12"
                                                    fill="none"
                                                    stroke="#059669"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${(downloadProgress[file.type] || 0) * 0.75} 75`}
                                                    className="transition-all duration-300"
                                                />
                                            </svg>
                                            {/* Процент в центре */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[9px] font-medium text-emerald-700">
                                                    {downloadProgress[file.type] || 0}%
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && files.length === 0 && !error && (
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{currentTexts.noFilesFound}</h3>
                    <p className="text-gray-600 mb-6">{currentTexts.noFilesDescription}</p>
                    <Link href="/history" className="btn-secondary inline-block">
                        {currentTexts.backToHistory}
                    </Link>
                </div>
            )}
        </div>
    )
}