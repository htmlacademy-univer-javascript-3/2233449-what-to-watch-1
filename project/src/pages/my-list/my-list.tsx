import Card from '../../components/card_item';
import Films from '../../FilmsList';
import Logo from '../../components/logo';
import Footer from '../../components/footer';

function MyList() {
  const films = new Films();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <Card image={films.GrindelwaldImageData} href='film-page.html'
            name='Fantastic Beasts: The Crimes of Grindelwald'
          />
          <Card image={films.RhapsodyImageData} href='film-page.html' name='Bohemian Rhapsody'/>
          <Card image={films.MacbethImageData} href='film-page.html' name='Macbeth'/>
          <Card image={films.AviatorImageData} href='film-page.html' name='Aviator'/>
          <Card image={films.WeNeedToTalkAboutKevinImageData} href='film-page.html' name='We need to talk about Kevin'/>
          <Card image={films.WhatWeDointheShadowsImageData} href='film-page.html' name='What We Do in the Shadows'/>
          <Card image={films.RevenantImageData} href='film-page.html' name='Revenant'/>
          <Card image={films.JohnnyEnglishImageData} href='film-page.html' name='Johnny English'/>
          <Card image={films.ShutterIslandImageData} href='film-page.html' name='Shutter Island'/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
