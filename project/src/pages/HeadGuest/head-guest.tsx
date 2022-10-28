import Logo from '../../components/logo';

function HeadGuest() {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-header.jpg"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo className="logo__link"/>
        <div className="user-block">
          <a href={'/login'} className="user-block__link">Sign in</a>
        </div>
      </header>

    </section>
  );
}
