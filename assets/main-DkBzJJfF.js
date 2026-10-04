import{t as e}from"./i18n-Ch9Lx8N6.js";var t=`/max-dev/assets/avatar-5bgIPVnG.jpg`;document.querySelector(`#app`).innerHTML=`

  <div class="avatar">
    <img src="${t}" alt="Портрет Макса" data-i18n-alt="common.avatarAlt">
  </div>

  <div class="badge-mask" aria-hidden="true"></div>

  <header>
    <h1>MAX.DEV</h1>


<nav>
  <a href="/max-dev/index.html" class="active" data-i18n="nav.home">Главная</a>
  <a href="/max-dev/projects.html" data-i18n="nav.projects">Проекты</a>
  <a href="/max-dev/contacts.html" data-i18n="nav.contacts">Контакты</a>
  <div class="lang-switch" role="group" aria-label="Выбор языка" data-i18n-aria-label="lang.label">
    <button type="button" class="lang-switch-btn" data-lang-btn="ru" aria-pressed="true">RU</button>
    <button type="button" class="lang-switch-btn" data-lang-btn="en" aria-pressed="false">EN</button>
  </div>
</nav>


  </header>

  <main>
    <section class="panel hero">
      <div class="main-content-text">


    <h2><span data-i18n="home.title">Привет! Я Макс</span> <span class="wave-emoji">🖐</span></h2>

    <p class="lead-text" data-i18n="home.lead">
      Android-разработчик и Web Dev. Создаю современные мобильные приложения,
      сайты и удобные цифровые интерфейсы для предпринимателей, специалистов
      и небольших компаний.

      Помогаю превратить вашу идею, услугу или бизнес в современное
      онлайн-пространство — от стильного сайта-визитки до полноценного
      интернет-магазина.

      Психологи, преподаватели, фотографы, мастера, эксперты, производители,
      владельцы небольших магазинов — если вам нужно профессиональное
      присутствие в интернете, я помогу его создать.
    </p>

    <div class="tech-stack-section">
      <h3 data-i18n="home.stackTitle">Мой стек и технологии:</h3>

      <ul class="skills-list">
        <li>
          <span>🤖</span>
          <strong>Android Dev:</strong> Android Studio, Java/Kotlin, SDK, Keystore
        </li>

        <li>
          <span>💻</span>
          <strong>Web Dev:</strong> HTML5, CSS3 (Flexbox/Grid), JavaScript, Vite
        </li>

        <li>
          <span>🛠️</span>
          <strong data-i18n="home.tools">Инструменты:</strong> Git, GitHub, VS Code
        </li>
      </ul>
    </div>

    <div class="about-me-section">
      <h3 data-i18n="home.aboutTitle">Чем я занимаюсь:</h3>

      <p data-i18n="home.aboutText">
        Создаю современные мобильные приложения и адаптивные веб-интерфейсы —
        от продумывания логики и структуры продукта до реализации и финальной
        полировки.

        Люблю разбираться в технически сложных задачах, находить причины
        ошибок и доводить проекты до стабильного и аккуратного результата.
      </p>
    </div>

    <div class="cta-buttons">
      <a
        href="/max-dev/projects.html"
        class="btn btn-primary"
        data-i18n="home.ctaProjects"
      >
        Посмотреть проекты 🚀
      </a>

      <a
        href="https://t.me/soulpatchers"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        data-i18n="home.ctaTelegram"
      >
        Написать в Telegram 💬
      </a>
    </div>

  </div>
</section>


  </main>
`,document.querySelectorAll(`.panel`).forEach(e=>{e.style.setProperty(`backdrop-filter`,`blur(18px)`,`important`)}),e();