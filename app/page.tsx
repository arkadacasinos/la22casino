export default function Page() {
  return (
    <main className="lc-shell">
      <header className="lc-header">
        <a className="lc-brand" href="#top" aria-label="La Casino — на главную">La Casino</a>
        <nav className="lc-nav" aria-label="Основная навигация">
          <a href="#mirror">Зеркало</a>
          <a href="#guide">Как играть</a>
        </nav>
        <a className="lc-header-link" href="#start">Войти</a>
      </header>

      <section className="lc-hero" id="top" aria-labelledby="hero-title">
        <div className="lc-hero-copy">
          <p className="lc-kicker">Онлайн-казино для спокойной игры</p>
          <h1 id="hero-title">La Casino — игра начинается с правильного выбора</h1>
          <p className="lc-lead">La Casino — официальный сайт для тех, кто ценит понятные правила, быстрый доступ и честную навигацию без лишних обещаний.</p>
          <a className="lc-primary-action" href="#start">Перейти на официальный сайт <span aria-hidden="true">→</span></a>
          <p className="lc-note">Только для совершеннолетних. Играйте ответственно.</p>
        </div>
        <aside className="lc-hero-aside" aria-label="Преимущества La Casino">
          <span className="lc-aside-number">24/7</span>
          <span className="lc-aside-label">Доступ к игре онлайн</span>
        </aside>
      </section>

      <section className="lc-content" id="mirror" aria-labelledby="mirror-title">
        <div className="lc-section-heading">
          <p className="lc-eyebrow">Доступ без лишних шагов</p>
          <h2 id="mirror-title">La Casino зеркало — рабочее решение для входа</h2>
        </div>
        <div className="lc-prose">
          <p>Если основной адрес временно не открывается, La Casino зеркало помогает быстро вернуться на официальный сайт. Рабочее зеркало сохраняет привычную структуру, личный кабинет и игровые разделы, поэтому игроку не приходится заново разбираться в интерфейсе.</p>
          <p>Ищите La Casino зеркало только через проверенные источники. La Casino официальный сайт и его актуальное зеркало должны использовать защищённое соединение и одинаковое написание бренда. Это простой способ отличить настоящий адрес от случайной страницы.</p>
        </div>
      </section>

      <figure className="lc-art">
        <img src="/la-casino-table.png" alt="Игровой стол с фишками в теплой подсветке" loading="lazy" />
        <figcaption>Сдержанный интерфейс, ясные правила и игра в удобном темпе.</figcaption>
      </figure>

      <section className="lc-content lc-guide" id="guide" aria-labelledby="guide-title">
        <div className="lc-section-heading">
          <p className="lc-eyebrow">Короткая инструкция</p>
          <h2 id="guide-title">La Casino играть — как начать онлайн</h2>
        </div>
        <div className="lc-prose">
          <p>Чтобы La Casino играть онлайн было удобно, откройте официальный сайт, проверьте адрес и создайте аккаунт. После входа выберите знакомую игру, изучите ставку и лимиты, а затем определите бюджет до начала сессии. Такой порядок помогает сохранять контроль и не торопиться.</p>
          <p>La Casino играть можно с телефона или компьютера: адаптивная страница подстраивается под экран, а основные кнопки остаются на виду. Для входа с мобильного устройства удобно сохранить только официальный адрес, чтобы не искать La Casino онлайн среди непроверенных результатов.</p>
        </div>
      </section>

      <section className="lc-start" id="start" aria-labelledby="start-title">
        <div>
          <p className="lc-eyebrow">Ваш следующий шаг</p>
          <h2 id="start-title">La Casino официальный сайт — начните с ясности</h2>
        </div>
        <p>Откройте La Casino официальный сайт, ознакомьтесь с условиями и играйте только на комфортную сумму. Если нужен La Casino официальный сайт после блокировки адреса, используйте актуальное La Casino зеркало, а не случайные копии.</p>
        <a className="lc-secondary-action" href="#top">Вернуться наверх <span aria-hidden="true">↑</span></a>
      </section>

      <footer className="lc-footer">
        <p className="lc-brand">La Casino</p>
        <p className="lc-footer-copy">Информация для совершеннолетних игроков. Ответственная игра — часть хорошего опыта.</p>
        <div className="lc-tags" aria-label="Ключевые фразы">
          <span>#lacasino</span><span>#lacasinozerkalo</span><span>#lacasinoigrat</span><span>#lacasinooficialnyj</span><span>#lacasinooficialnyjsajt</span>
        </div>
      </footer>
    </main>
  )
}
