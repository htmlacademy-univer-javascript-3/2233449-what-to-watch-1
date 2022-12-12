import Logo from '../../components/logo';
import Footer from '../../components/footer';
import UserBlock from '../../components/user-block';
import FilmsList from '../../components/films-list';
import {Film} from '../../types/film';
import {useAppSelector} from '../../hooks';
import {getFilms} from '../../store/data-reducer/selector';

export type FilmsProps = {
  films: Film[]
}

function MyList() {
  const films = useAppSelector(getFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
