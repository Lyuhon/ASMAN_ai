// utils/translations.js
// Централизованная система переводов для новых страниц

// Переводы для страницы создания отчетов
export const createReportTexts = {
    ru: {
        // Заголовки и навигация
        selectReportType: 'Выбор типа отчета',
        createReport: 'Создание отчета',
        chooseReportType: 'Выберите тип отчета',
        whatReportCreate: 'Какой отчет вы хотите создать?',

        // Типы отчетов
        qogiTitle: 'QOGI',
        qogiDescription: 'Отчет для анализа данных измерений (CSV файлы)',
        eyecsiteTitle: 'EYECSITE',
        eyecsiteDescription: 'Отчет для EYECSITE (XLSX файлы)',

        // Шаги процесса
        stepOf: 'Шаг {step} из {total}',

        // Файлы QOGI
        opgalImage: 'Изображение OPGAL',
        opgalImageDesc: 'Загрузите изображение (до 5 МБ)',
        firstVideo: 'Первое видео',
        firstVideoDesc: 'Загрузите первый .ts файл (до 100 МБ)',
        secondVideo: 'Второе видео',
        secondVideoDesc: 'Загрузите второй .ts файл (до 100 МБ)',
        csvData: 'Данные CSV',
        csvDataDesc: 'Выберите CSV файл с данными',

        // Файлы EYECSITE
        imageFile: 'Изображение',
        imageFileDesc: 'Загрузите изображение (до 5 МБ)',
        videoFile: 'Видео файл',
        videoFileDesc: 'Загрузите .ts видео файл (до 100 МБ)',
        wordDocument: 'Документ Word',
        wordDocumentDesc: 'Загрузите .docx файл (до 20 МБ)',
        excelTable: 'Таблица Excel',
        excelTableDesc: 'Загрузите .xlsx файл (до 50 МБ)',

        // Настройки
        reportSettings: 'Настройки отчета',
        reportSettingsDesc: 'Язык и параметры',
        reportGeneration: 'Генерация отчета',
        reportGenerationDesc: 'Создание PDF',
        reportLanguage: 'Язык отчета',
        convertToCubicMeters: 'Конвертировать в м³/ч',

        // Языки
        russian: 'Русский',
        english: 'English',
        uzbek: 'O\'zbek',

        // Загрузка файлов
        selectFile: 'Выберите файл',
        selectImage: 'Выберите изображение OPGAL',
        selectVideo: 'Выберите .ts видео файл',
        selectDocx: 'Выберите .docx документ',
        selectXlsx: 'Выберите .xlsx файл',
        selectCsv: 'Выберите CSV файл',
        selectXlsxData: 'Выберите XLSX файл',

        fileUploaded: 'Файл загружен',
        clickToSelect: 'Нажмите для выбора файла',
        maxSize: 'до {size}',
        optional: 'необязательно',
        supportedFormats: 'Поддерживаемые форматы: {formats}',

        // Статусы файлов
        ready: 'Готово',
        optionalFile: 'Необязательно',
        requiredFile: 'Обязательно',

        // Форматы файлов
        jpgPngGif: 'JPG, PNG, GIF',
        onlyTsFiles: 'Только .ts файлы',
        onlyDocxFiles: 'Только .docx файлы',
        onlyXlsxFiles: 'Только .xlsx файлы',
        csvFiles: 'CSV файлы',
        xlsxFiles: 'XLSX файлы',

        // Навигация
        back: 'Назад',
        next: 'Далее',
        skip: 'Пропустить',
        createReportBtn: 'Создать отчет',

        // Генерация
        readyToGenerate: 'Готово к генерации',
        confirmCreation: 'подтвердите создание',
        allDataUploaded: 'Все данные загружены, подтвердите создание отчета',
        reportType: 'Тип отчета',
        dataFile: 'Файл данных',
        image: 'Изображение',
        video1: 'Видео 1',
        video2: 'Видео 2',
        video: 'Видео',
        document: 'Документ',
        excelFile: 'Таблица Excel',
        language: 'Язык',
        cubicMeters: 'Кубические метры',
        yes: 'Да',
        no: 'Нет',
        uploaded: '✓ Загружено',

        // Процесс загрузки
        uploadingFiles: 'Загрузка файлов...',
        generatingReport: 'Генерация отчета...',
        uploading: 'Загружаем файлы на сервер...',
        processing: 'Обрабатываем данные...',
        generating: 'Генерируется...',

        // Уведомления
        reportCreatedSuccessfully: 'Отчет создан успешно!',
        reportCreated: 'Отчет {type} создан. ID: {id}',
        goToHistory: 'Перейти к истории',
        reportRejected: 'Отчет отклонен',
        uncertaintyTooHigh: 'Неопределенность {percent}% превышает максимальные 45%. Переделайте отчет.',
        reportCreationError: 'Ошибка создания отчета',
        connectionError: 'Ошибка соединения',
        connectionErrorDesc: 'Не удалось подключиться к серверу. Попробуйте позже.',
        close: 'Закрыть',

        // Валидация
        fileMustBeImage: 'Файл должен быть изображением (JPG, PNG, GIF)',
        imageSizeLimit: 'Размер изображения не должен превышать 5 МБ',
        videoMustBeTs: 'Видео файл должен быть в формате .ts',
        videoSizeLimit: 'Размер видео файла не должен превышать 100 МБ',
        docxMustBeDocx: 'Документ должен быть в формате .docx',
        docxSizeLimit: 'Размер документа не должен превышать 20 МБ',
        xlsxMustBeXlsx: 'Файл должен быть в формате .xlsx',
        xlsxSizeLimit: 'Размер файла не должен превышать 50 МБ',
        qogiNeedsCsv: 'Для QOGI отчетов необходим CSV файл',
        eyecsiteNeedsXlsx: 'Для EYECSITE отчетов необходим XLSX файл',
        uploadDataFile: 'Пожалуйста, загрузите CSV файл данных для QOGI отчета',
        authRequired: 'Ошибка: необходима авторизация через Telegram',
        telegramAuthRequired: 'Необходима авторизация через Telegram'
    },

    uz: {
        // Заголовки и навигация
        selectReportType: 'Hisobot turini tanlash',
        createReport: 'Hisobot yaratish',
        chooseReportType: 'Hisobot turini tanlang',
        whatReportCreate: 'Qanday hisobot yaratmoqchisiz?',

        // Типы отчетов
        qogiTitle: 'QOGI',
        qogiDescription: 'O\'lchov ma\'lumotlarini tahlil qilish uchun hisobot (CSV fayllar)',
        eyecsiteTitle: 'EYECSITE',
        eyecsiteDescription: 'EYECSITE uchun hisobot (XLSX fayllar)',

        // Шаги процесса
        stepOf: 'Qadam {step} / {total}',

        // Файлы QOGI
        opgalImage: 'OPGAL tasviri',
        opgalImageDesc: 'Tasvir yuklang (5 MB gacha)',
        firstVideo: 'Birinchi video',
        firstVideoDesc: 'Birinchi .ts faylni yuklang (100 MB gacha)',
        secondVideo: 'Ikkinchi video',
        secondVideoDesc: 'Ikkinchi .ts faylni yuklang (100 MB gacha)',
        csvData: 'CSV ma\'lumotlari',
        csvDataDesc: 'Ma\'lumotlar bilan CSV faylni tanlang',

        // Файлы EYECSITE
        imageFile: 'Tasvir',
        imageFileDesc: 'Tasvir yuklang (5 MB gacha)',
        videoFile: 'Video fayl',
        videoFileDesc: '.ts video faylni yuklang (100 MB gacha)',
        wordDocument: 'Word hujjati',
        wordDocumentDesc: '.docx faylni yuklang (20 MB gacha)',
        excelTable: 'Excel jadvali',
        excelTableDesc: '.xlsx faylni yuklang (50 MB gacha)',

        // Настройки
        reportSettings: 'Hisobot sozlamalari',
        reportSettingsDesc: 'Til va parametrlar',
        reportGeneration: 'Hisobot yaratish',
        reportGenerationDesc: 'PDF yaratish',
        reportLanguage: 'Hisobot tili',
        convertToCubicMeters: 'm³/soat ga o\'tkazish',

        // Языки
        russian: 'Русский',
        english: 'English',
        uzbek: 'O\'zbek',

        // Загрузка файлов
        selectFile: 'Faylni tanlang',
        selectImage: 'OPGAL tasvirini tanlang',
        selectVideo: '.ts video faylni tanlang',
        selectDocx: '.docx hujjatini tanlang',
        selectXlsx: '.xlsx faylni tanlang',
        selectCsv: 'CSV faylni tanlang',
        selectXlsxData: 'XLSX faylni tanlang',

        fileUploaded: 'Fayl yuklandi',
        clickToSelect: 'Faylni tanlash uchun bosing',
        maxSize: '{size} gacha',
        optional: 'majburiy emas',
        supportedFormats: 'Qo\'llab-quvvatlanadigan formatlar: {formats}',

        // Статусы файлов
        ready: 'Tayyor',
        optionalFile: 'Majburiy emas',
        requiredFile: 'Majburiy',

        // Форматы файлов
        jpgPngGif: 'JPG, PNG, GIF',
        onlyTsFiles: 'Faqat .ts fayllar',
        onlyDocxFiles: 'Faqat .docx fayllar',
        onlyXlsxFiles: 'Faqat .xlsx fayllar',
        csvFiles: 'CSV fayllar',
        xlsxFiles: 'XLSX fayllar',

        // Навигация
        back: 'Orqaga',
        next: 'Keyingi',
        skip: 'O\'tkazib yuborish',
        createReportBtn: 'Hisobot yaratish',

        // Генерация
        readyToGenerate: 'Yaratishga tayyor',
        confirmCreation: 'yaratishni tasdiqlang',
        allDataUploaded: 'Barcha ma\'lumotlar yuklandi, hisobot yaratishni tasdiqlang',
        reportType: 'Hisobot turi',
        dataFile: 'Ma\'lumotlar fayli',
        image: 'Tasvir',
        video1: 'Video 1',
        video2: 'Video 2',
        video: 'Video',
        document: 'Hujjat',
        excelFile: 'Excel jadvali',
        language: 'Til',
        cubicMeters: 'Kub metrlar',
        yes: 'Ha',
        no: 'Yo\'q',
        uploaded: '✓ Yuklandi',

        // Процесс загрузки
        uploadingFiles: 'Fayllar yuklanmoqda...',
        generatingReport: 'Hisobot yaratilmoqda...',
        uploading: 'Fayllarni serverga yuklayapmiz...',
        processing: 'Ma\'lumotlarni qayta ishlaymiz...',
        generating: 'Yaratilmoqda...',

        // Уведомления
        reportCreatedSuccessfully: 'Hisobot muvaffaqiyatli yaratildi!',
        reportCreated: '{type} hisobot yaratildi. ID: {id}',
        goToHistory: 'Tarixga o\'tish',
        reportRejected: 'Hisobot rad etildi',
        uncertaintyTooHigh: 'Noaniqlik {percent}% maksimal 45% dan oshadi. Hisobotni qayta ishlang.',
        reportCreationError: 'Hisobot yaratishda xato',
        connectionError: 'Ulanish xatosi',
        connectionErrorDesc: 'Serverga ulanib bo\'lmadi. Keyinroq urinib ko\'ring.',
        close: 'Yopish',

        // Валидация
        fileMustBeImage: 'Fayl tasvir bo\'lishi kerak (JPG, PNG, GIF)',
        imageSizeLimit: 'Tasvir hajmi 5 MB dan oshmasligi kerak',
        videoMustBeTs: 'Video fayl .ts formatida bo\'lishi kerak',
        videoSizeLimit: 'Video fayl hajmi 100 MB dan oshmasligi kerak',
        docxMustBeDocx: 'Hujjat .docx formatida bo\'lishi kerak',
        docxSizeLimit: 'Hujjat hajmi 20 MB dan oshmasligi kerak',
        xlsxMustBeXlsx: 'Fayl .xlsx formatida bo\'lishi kerak',
        xlsxSizeLimit: 'Fayl hajmi 50 MB dan oshmasligi kerak',
        qogiNeedsCsv: 'QOGI hisobotlari uchun CSV fayl kerak',
        eyecsiteNeedsXlsx: 'EYECSITE hisobotlari uchun XLSX fayl kerak',
        uploadDataFile: 'QOGI hisoboti uchun CSV ma\'lumotlar faylini yuklang',
        authRequired: 'Xato: Telegram orqali avtorizatsiya kerak',
        telegramAuthRequired: 'Telegram orqali avtorizatsiya kerak'
    },

    en: {
        // Заголовки и навигация
        selectReportType: 'Select Report Type',
        createReport: 'Create Report',
        chooseReportType: 'Choose Report Type',
        whatReportCreate: 'What report do you want to create?',

        // Типы отчетов
        qogiTitle: 'QOGI',
        qogiDescription: 'Report for measurement data analysis (CSV files)',
        eyecsiteTitle: 'EYECSITE',
        eyecsiteDescription: 'Report for EYECSITE (XLSX files)',

        // Шаги процесса
        stepOf: 'Step {step} of {total}',

        // Файлы QOGI
        opgalImage: 'OPGAL Image',
        opgalImageDesc: 'Upload image (up to 5 MB)',
        firstVideo: 'First Video',
        firstVideoDesc: 'Upload first .ts file (up to 100 MB)',
        secondVideo: 'Second Video',
        secondVideoDesc: 'Upload second .ts file (up to 100 MB)',
        csvData: 'CSV Data',
        csvDataDesc: 'Select CSV file with data',

        // Файлы EYECSITE
        imageFile: 'Image',
        imageFileDesc: 'Upload image (up to 5 MB)',
        videoFile: 'Video File',
        videoFileDesc: 'Upload .ts video file (up to 100 MB)',
        wordDocument: 'Word Document',
        wordDocumentDesc: 'Upload .docx file (up to 20 MB)',
        excelTable: 'Excel Table',
        excelTableDesc: 'Upload .xlsx file (up to 50 MB)',

        // Настройки
        reportSettings: 'Report Settings',
        reportSettingsDesc: 'Language and parameters',
        reportGeneration: 'Report Generation',
        reportGenerationDesc: 'PDF Creation',
        reportLanguage: 'Report Language',
        convertToCubicMeters: 'Convert to m³/h',

        // Языки
        russian: 'Русский',
        english: 'English',
        uzbek: 'O\'zbek',

        // Загрузка файлов
        selectFile: 'Select File',
        selectImage: 'Select OPGAL Image',
        selectVideo: 'Select .ts Video File',
        selectDocx: 'Select .docx Document',
        selectXlsx: 'Select .xlsx File',
        selectCsv: 'Select CSV File',
        selectXlsxData: 'Select XLSX File',

        fileUploaded: 'File uploaded',
        clickToSelect: 'Click to select file',
        maxSize: 'up to {size}',
        optional: 'optional',
        supportedFormats: 'Supported formats: {formats}',

        // Статусы файлов
        ready: 'Ready',
        optionalFile: 'Optional',
        requiredFile: 'Required',

        // Форматы файлов
        jpgPngGif: 'JPG, PNG, GIF',
        onlyTsFiles: 'Only .ts files',
        onlyDocxFiles: 'Only .docx files',
        onlyXlsxFiles: 'Only .xlsx files',
        csvFiles: 'CSV files',
        xlsxFiles: 'XLSX files',

        // Навигация
        back: 'Back',
        next: 'Next',
        skip: 'Skip',
        createReportBtn: 'Create Report',

        // Генерация
        readyToGenerate: 'Ready to Generate',
        confirmCreation: 'confirm creation',
        allDataUploaded: 'All data uploaded, confirm report creation',
        reportType: 'Report Type',
        dataFile: 'Data File',
        image: 'Image',
        video1: 'Video 1',
        video2: 'Video 2',
        video: 'Video',
        document: 'Document',
        excelFile: 'Excel Table',
        language: 'Language',
        cubicMeters: 'Cubic Meters',
        yes: 'Yes',
        no: 'No',
        uploaded: '✓ Uploaded',

        // Процесс загрузки
        uploadingFiles: 'Uploading Files...',
        generatingReport: 'Generating Report...',
        uploading: 'Uploading files to server...',
        processing: 'Processing data...',
        generating: 'Generating...',

        // Уведомления
        reportCreatedSuccessfully: 'Report Created Successfully!',
        reportCreated: '{type} report created. ID: {id}',
        goToHistory: 'Go to History',
        reportRejected: 'Report Rejected',
        uncertaintyTooHigh: 'Uncertainty {percent}% exceeds maximum 45%. Redo the report.',
        reportCreationError: 'Report Creation Error',
        connectionError: 'Connection Error',
        connectionErrorDesc: 'Could not connect to server. Try again later.',
        close: 'Close',

        // Валидация
        fileMustBeImage: 'File must be an image (JPG, PNG, GIF)',
        imageSizeLimit: 'Image size must not exceed 5 MB',
        videoMustBeTs: 'Video file must be in .ts format',
        videoSizeLimit: 'Video file size must not exceed 100 MB',
        docxMustBeDocx: 'Document must be in .docx format',
        docxSizeLimit: 'Document size must not exceed 20 MB',
        xlsxMustBeXlsx: 'File must be in .xlsx format',
        xlsxSizeLimit: 'File size must not exceed 50 MB',
        qogiNeedsCsv: 'QOGI reports require CSV file',
        eyecsiteNeedsXlsx: 'EYECSITE reports require XLSX file',
        uploadDataFile: 'Please upload CSV data file for QOGI report',
        authRequired: 'Error: Telegram authorization required',
        telegramAuthRequired: 'Telegram authorization required'
    }
}

// Универсальная функция для получения переводов
export function getTranslations(translationKey, language = 'ru') {
    const translations = {
        createReport: createReportTexts,
        // Можно добавить другие страницы в будущем
    }

    const selectedTranslations = translations[translationKey]
    if (!selectedTranslations) {
        console.warn(`Translation key "${translationKey}" not found`)
        return {}
    }

    return selectedTranslations[language] || selectedTranslations.ru
}

// Функция для интерполяции строк (для случаев типа "Шаг {step} из {total}")
export function interpolateString(template, values) {
    if (!template || typeof template !== 'string') return template

    return template.replace(/\{(\w+)\}/g, (match, key) => {
        return values[key] !== undefined ? values[key] : match
    })
}

// Хук для использования переводов в компонентах
export function useTranslations(translationKey, getUserLanguage) {
    const language = getUserLanguage()
    const texts = getTranslations(translationKey, language)

    // Возвращаем объект с переводами и функцией для интерполяции
    return {
        t: texts,
        interpolate: (template, values) => interpolateString(template, values)
    }
}