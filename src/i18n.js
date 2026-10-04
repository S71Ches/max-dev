// =========================================================
// RU / EN localization — lightweight, no dependencies.
//
// How it works:
//  • Elements with data-i18n="key" get their textContent replaced.
//  • Elements with data-i18n-alt="key" get their alt attribute replaced.
//  • <title data-i18n="..."> is translated the same way.
//  • The selected language is stored in localStorage ("site-lang").
//  • Russian is the default language.
//  • Every element with [data-lang-btn] acts as a language button.
//
// Usage: call initI18n() once the page markup exists
// (main.js for the home page, an inline module script on
// projects.html and contacts.html).
// =========================================================

const STORAGE_KEY = 'site-lang'
const DEFAULT_LANG = 'ru'
const SUPPORTED = ['ru', 'en']

const translations = {
  ru: {
    // Meta
    'meta.title.home': 'MAX.DEV — Главная',
    'meta.title.projects': 'Проекты — MAX.DEV',
    'meta.title.contacts': 'Контакты — MAX.DEV',
    'common.avatarAlt': 'Портрет Макса',
    'lang.label': 'Выбор языка',

    // Navigation
    'nav.home': 'Главная',
    'nav.projects': 'Проекты',
    'nav.contacts': 'Контакты',

    // Home
    'home.title': 'Привет! Я Макс',
    'home.lead':
      'Android-разработчик и Web Dev. Создаю современные мобильные приложения, сайты и удобные цифровые интерфейсы для предпринимателей, специалистов и небольших компаний. Помогаю превратить вашу идею, услугу или бизнес в современное онлайн-пространство — от стильного сайта-визитки до полноценного интернет-магазина. Психологи, преподаватели, фотографы, мастера, эксперты, производители, владельцы небольших магазинов — если вам нужно профессиональное присутствие в интернете, я помогу его создать.',
    'home.stackTitle': 'Мой стек и технологии:',
    'home.tools': 'Инструменты:',
    'home.aboutTitle': 'Чем я занимаюсь:',
    'home.aboutText':
      'Создаю современные мобильные приложения и адаптивные веб-интерфейсы — от продумывания логики и структуры продукта до реализации и финальной полировки. Люблю разбираться в технически сложных задачах, находить причины ошибок и доводить проекты до стабильного и аккуратного результата.',
    'home.ctaProjects': 'Посмотреть проекты 🚀',
    'home.ctaTelegram': 'Написать в Telegram 💬',

    // Projects
    'projects.title': 'Мои проекты 🚀',
    'projects.lead':
      'Здесь представлены мобильные приложения и веб-интерфейсы, которые я разрабатываю самостоятельно — от идеи и проектирования интерфейса до реализации, тестирования и подготовки готового продукта.',

    'projects.podarunok.badge': 'Коммерческий проект для клиента',
    'projects.podarunok.desc':
      'Интернет-магазин подарков, разработанный для реального клиента. Каталог с категориями и подкатегориями, поиск, избранное, корзина и оформление заказа, личные кабинеты, отзывы с рейтингом и модерацией. Собственная админ-панель для управления товарами, категориями, изображениями, заказами, статьями и информационными страницами. Бэкенд на Supabase, защита формы заказа от спама и полностью адаптивная вёрстка.',
    
    'projects.podarunok.private':
      '🔒 По просьбе клиента сайт не демонстрируется публично в моём портфолио. В описании проекта указаны реализованные мной функции и выполненная работа.',
    
    'projects.foodcost.desc':
      'Android-приложение для расчёта себестоимости продуктов и крафтовых изделий. Самостоятельно разработал приложение: продумал структуру и интерфейс, реализовал логику расчётов, протестировал приложение и подготовил подписанную релизную сборку. Android Studio · Kotlin / Java · UI/UX',
    'projects.foodcost.screenshots': '📱 Посмотреть скриншоты',

    'projects.portfolio.desc':
      'Сайт-портфолио, который вы сейчас просматриваете. Разработан с использованием современных возможностей CSS: glassmorphism, асимметричные скругления, кастомные маски и адаптивная вёрстка. Особое внимание уделено визуальной подаче, плавности интерфейса и корректному отображению на разных размерах экрана. Проект собран с использованием быстрого сборщика Vite.',

    'projects.back': '← На главную',
    'projects.discuss': 'Обсудить проект 💬',

    // Contacts
    'contacts.title': 'Связаться со мной 💬',
    'contacts.lead':
      'Я всегда открыт для новых предложений, интересных проектов по мобильной разработке и созданию сайтов. Пишите, обсудим вашу идею!',
    'contacts.telegramNote': '@soulpatchers — самый быстрый способ связи',
    'contacts.email': 'Электронная почта',
    'contacts.location': 'Локация',
    'contacts.locationValue': 'Кривой Рог, Украина 🇺🇦 (Работаю удаленно)',
    'contacts.back': '← На главную',
    'contacts.projects': 'Посмотреть проекты 🚀',
  },

  en: {
    // Meta
    'meta.title.home': 'MAX.DEV — Home',
    'meta.title.projects': 'Projects — MAX.DEV',
    'meta.title.contacts': 'Contact — MAX.DEV',
    'common.avatarAlt': 'Portrait of Max',
    'lang.label': 'Language',

    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contact',

    // Home
    'home.title': "Hi! I'm Max",
    'home.lead':
      "Android and web developer. I build modern mobile apps, websites and user-friendly digital interfaces for entrepreneurs, independent professionals and small businesses. I help turn your idea, service or business into a modern online presence — from a sleek business-card website to a full-featured online store. Psychologists, teachers, photographers, craftspeople, experts, manufacturers, small shop owners — if you need a professional presence online, I'll help you build it.",
    'home.stackTitle': 'My stack & technologies:',
    'home.tools': 'Tools:',
    'home.aboutTitle': 'What I do:',
    'home.aboutText':
      'I build modern mobile apps and responsive web interfaces — from shaping the product logic and structure to implementation and final polish. I enjoy digging into technically challenging problems, tracking down the root cause of bugs and bringing projects to a stable, clean result.',
    'home.ctaProjects': 'View projects 🚀',
    'home.ctaTelegram': 'Message me on Telegram 💬',

    // Projects
    'projects.title': 'My projects 🚀',
    'projects.lead':
      'Here are the mobile apps and web interfaces I build end to end — from the initial idea and interface design to implementation, testing and a finished, ready-to-ship product.',

    'projects.podarunok.badge': 'Commercial client project',
    'projects.podarunok.desc':
      'An online gift shop built for a real client. Product catalog with categories and subcategories, search, wishlist, cart and checkout, user accounts, plus reviews with ratings and moderation. A custom admin panel manages products, categories, image uploads, orders, articles and info pages. Supabase backend, spam-protected checkout form and a fully responsive layout.',
    'projects.podarunok.private':
      '🔒 At the client’s request, the website is not publicly showcased in my portfolio. The project description reflects the features I implemented and the development work I completed.',

    'projects.foodcost.desc':
      'An Android app for calculating the cost of food products and handmade goods. I built it on my own: designed the structure and interface, implemented the calculation logic, tested the app and prepared a signed release build. Android Studio · Kotlin / Java · UI/UX',
    'projects.foodcost.screenshots': '📱 View screenshots',

    'projects.portfolio.desc':
      "The portfolio website you're looking at right now. Built with modern CSS features: glassmorphism, asymmetric rounded shapes, custom masks and a responsive layout. Special attention went into visual presentation, smooth interactions and correct rendering across screen sizes. The project is bundled with the fast Vite build tool.",

    'projects.back': '← Back to home',
    'projects.discuss': "Let's discuss your project 💬",

    // Contacts
    'contacts.title': 'Get in touch 💬',
    'contacts.lead':
      "I'm always open to new opportunities and interesting projects in mobile development and web design. Drop me a message and let's talk about your idea!",
    'contacts.telegramNote': '@soulpatchers — the fastest way to reach me',
    'contacts.email': 'Email',
    'contacts.location': 'Location',
    'contacts.locationValue': 'Kryvyi Rih, Ukraine 🇺🇦 (Working remotely)',
    'contacts.back': '← Back to home',
    'contacts.projects': 'View projects 🚀',
  },
}

function readStoredLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED.includes(value) ? value : null
  } catch {
    return null
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Storage unavailable (private mode etc.) — switching still works for this page view.
  }
}

export function getLang() {
  return readStoredLang() || DEFAULT_LANG
}

export function applyLang(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG]
  const fallback = translations[DEFAULT_LANG]

  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    const value = dict[key] ?? fallback[key]
    if (value !== undefined) el.textContent = value
  })

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt')
    const value = dict[key] ?? fallback[key]
    if (value !== undefined) el.setAttribute('alt', value)
  })

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label')
    const value = dict[key] ?? fallback[key]
    if (value !== undefined) el.setAttribute('aria-label', value)
  })

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang-btn') === lang
    btn.classList.toggle('is-active', isActive)
    btn.setAttribute('aria-pressed', String(isActive))
  })
}

export function setLang(lang) {
  if (!SUPPORTED.includes(lang)) return
  storeLang(lang)
  applyLang(lang)
}

export function initI18n() {
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')))
  })
  applyLang(getLang())
}
