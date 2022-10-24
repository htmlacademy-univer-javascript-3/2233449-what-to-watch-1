import Card from '../../components/card_item';
import Films from '../../FilmsList';
import Logo from '../../components/logo';
import Footer from '../../components/footer';

export interface FilmProps {
  filmName: string;
  filmGenre: string;
  filmDate: string;
}

function Main({filmName, filmGenre, filmDate}: FilmProps) {
  const films = new Films();
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo className="logo__link"/>
          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
              </div>
            </li>
            <li className='user-block__item'>
              <a className='user-block__link'>Sign out</a>
            </li>
          </ul>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster'
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{filmName}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{filmGenre}</span>
                <span className='film-card__year'>{filmDate}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'/>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>All genres</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Comedies</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Crime</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Documentary</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Dramas</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Horror</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Kids & Family</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Romance</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Sci-Fi</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Thrillers</a>
            </li>
          </ul>

          <div className='catalog__films-list'>
            <Card image={films.GrindelwaldImageData} href='film-page.html'
              name='Fantastic Beasts: The Crimes of Grindelwald'
            />
            <Card image={films.RhapsodyImageData} href='film-page.html' name='Bohemian Rhapsody'/>
            <Card image={films.MacbethImageData} href='film-page.html' name='Macbeth'/>
            <Card image={films.AviatorImageData} href='film-page.html' name='Aviator'/>
            <Card image={films.WeNeedToTalkAboutKevinImageData} href='film-page.html'
              name='We need to talk about Kevin'
            />
            <Card image={films.WhatWeDointheShadowsImageData} href='film-page.html' name='What We Do in the Shadows'/>
            <Card image={films.RevenantImageData} href='film-page.html' name='Revenant'/>
            <Card image={films.JohnnyEnglishImageData} href='film-page.html' name='Johnny English'/>
            <Card image={films.ShutterIslandImageData} href='film-page.html' name='Shutter Island'/>
            <Card image={films.PulpFictionImageData} href='film-page.html' name='Pulp Fiction'/>
            <Card image={films.NoCountryforOldMenImageData} href='film-page.html' name='No Country for Old Men'/>
            <Card image={films.SnatchImageData} href='film-page.html' name='Snatch'/>
            <Card image={films.MoonriseKingdomImageData} href='film-page.html' name='Moonrise Kingdom'/>
            <Card image={films.SevenYearsinTibetImageData} href='film-page.html' name='Seven Years in Tibet'/>
            <Card image={films.MidnightSpecialImageData} href='film-page.html' name='Midnight Special'/>
            <Card image={films.WaroftheWorldsImageData} href='film-page.html' name='War of the Worlds'/>
            <Card image={films.DardjeelingLimitedImageData} href='film-page.html' name='Dardjeeling Limited'/>
            <Card image={films.OrlandoImageData} href='film-page.html' name='Orlando'/>
            <Card image={films.MindhunterImageData} href='film-page.html' name='Mindhunter'/>
            <Card image={films.MidnightSpecialImageData} href='film-page.html' name='Midnight Special'/>

          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
