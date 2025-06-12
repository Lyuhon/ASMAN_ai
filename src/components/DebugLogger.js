// app/components/DebugLogger.js
'use client'
import { useState, useEffect } from 'react'

export default function DebugLogger() {
    const [logs, setLogs] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [isMinimized, setIsMinimized] = useState(true)

    useEffect(() => {
        // Перехватываем console.log, console.error, console.warn
        const originalLog = console.log
        const originalError = console.error
        const originalWarn = console.warn

        const addLog = (type, args) => {
            const timestamp = new Date().toLocaleTimeString()
            const message = args.map(arg =>
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ')

            setLogs(prevLogs => [...prevLogs.slice(-99), { // Храним только последние 100 логов
                id: Date.now() + Math.random(),
                timestamp,
                type,
                message
            }])
        }

        console.log = (...args) => {
            originalLog(...args)
            addLog('log', args)
        }

        console.error = (...args) => {
            originalError(...args)
            addLog('error', args)
        }

        console.warn = (...args) => {
            originalWarn(...args)
            addLog('warn', args)
        }

        // Очистка при размонтировании
        return () => {
            console.log = originalLog
            console.error = originalError
            console.warn = originalWarn
        }
    }, [])

    const clearLogs = () => {
        setLogs([])
        console.log('🗑️ Логи очищены')
    }

    const downloadLogs = () => {
        const logsText = logs.map(log =>
            `[${log.timestamp}] ${log.type.toUpperCase()}: ${log.message}`
        ).join('\n')

        const blob = new Blob([logsText], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `debug-logs-${new Date().toISOString().slice(0, 19)}.txt`
        link.click()
        URL.revokeObjectURL(url)
    }

    const getLogIcon = (type) => {
        switch (type) {
            case 'error':
                return '❌'
            case 'warn':
                return '⚠️'
            default:
                return '📝'
        }
    }

    const getLogColor = (type) => {
        switch (type) {
            case 'error':
                return 'text-red-600 bg-red-50 border-red-200'
            case 'warn':
                return 'text-yellow-600 bg-yellow-50 border-yellow-200'
            default:
                return 'text-gray-600 bg-gray-50 border-gray-200'
        }
    }

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-20 right-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                title="Показать логи отладки"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            </button>
        )
    }

    return (
        <div className="fixed bottom-0 right-4 z-50 w-96 max-w-full">
            <div className="bg-white border border-gray-200 rounded-t-lg shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        🐛 Debug Logs
                        {logs.length > 0 && (
                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {logs.length}
                            </span>
                        )}
                    </h3>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title={isMinimized ? 'Развернуть' : 'Свернуть'}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d={isMinimized
                                    ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                } clipRule="evenodd" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title="Закрыть"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Controls */}
                {!isMinimized && (
                    <div className="flex gap-2 p-2 bg-gray-50 border-b border-gray-200">
                        <button
                            onClick={clearLogs}
                            className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded transition-colors"
                        >
                            Очистить
                        </button>
                        <button
                            onClick={downloadLogs}
                            className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded transition-colors"
                            disabled={logs.length === 0}
                        >
                            Скачать
                        </button>
                    </div>
                )}

                {/* Logs */}
                {!isMinimized && (
                    <div className="h-64 overflow-y-auto p-2 space-y-1">
                        {logs.length === 0 ? (
                            <div className="text-center text-gray-500 text-sm py-8">
                                Логи появятся здесь
                            </div>
                        ) : (
                            logs.map(log => (
                                <div
                                    key={log.id}
                                    className={`p-2 rounded text-xs border ${getLogColor(log.type)}`}
                                >
                                    <div className="flex items-start gap-2">
                                        <span className="flex-shrink-0">{getLogIcon(log.type)}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-mono text-xs text-gray-500 mb-1">
                                                {log.timestamp}
                                            </div>
                                            <div className="break-words whitespace-pre-wrap">
                                                {log.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}