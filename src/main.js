import './style.css'
import avatar from './assets/avatar.jpg'

document.querySelector('#app').innerHTML = `
  <div class="avatar">
    <img src="${avatar}" alt="Портрет Макса">
  </div>

  <div class="badge-mask" aria-hidden="true"></div>

  <header>
    <h1>MAX.DEV</h1>

    <nav>
      <a href="${import.meta.env.BASE_URL}index.html" class="active">Главная</a>
      <a href="${import.meta.env.BASE_URL}projects.html">Проекты</a>
      <a href="${import.meta.env.BASE_URL}contacts.html">Контакты</a>
    </nav>
  </header>

  <main>
    <section class="panel hero">
      <div class="main-content-text">

        <h2>Привет! Я Макс <span class="wave-emoji">🖐</span></h2>

        <p class="lead-text">
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
          <h3>Мой стек и технологии:</h3>

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
              <strong>Инструменты:</strong> Git, GitHub, VS Code
            </li>
          </ul>
        </div>

        <div class="about-me-section">
          <h3>Чем я занимаюсь:</h3>

          <p>
            Создаю современные мобильные приложения и адаптивные веб-интерфейсы —
            от продумывания логики и структуры продукта до реализации и финальной
            полировки.

            Люблю разбираться в технически сложных задачах, находить причины
            ошибок и доводить проекты до стабильного и аккуратного результата.
          </p>
        </div>

        <div class="cta-buttons">
          <a
            href="${import.meta.env.BASE_URL}projects.html"
            class="btn btn-primary"
          >
            Посмотреть проекты 🚀
          </a>

          <a
            href="https://t.me/soulpatchers"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            Написать в Telegram 💬
          </a>
        </div>

      </div>
    </section>
  </main>
`