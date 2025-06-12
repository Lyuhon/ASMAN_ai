// app/components/StatusBadge.js
export default function StatusBadge({ status }) {
    const getStatusConfig = (status) => {
        switch (status) {
            case 'completed':
                return {
                    text: 'Готов',
                    className: 'bg-emerald-100 text-emerald-800'
                }
            case 'processing':
                return {
                    text: 'В работе',
                    className: 'bg-yellow-100 text-yellow-800'
                }
            case 'error':
                return {
                    text: 'Ошибка',
                    className: 'bg-red-100 text-red-800'
                }
            default:
                return {
                    text: 'Неизвестно',
                    className: 'bg-gray-100 text-gray-800'
                }
        }
    }

    const config = getStatusConfig(status)

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.className}`}>
            {config.text}
        </span>
    )
}