import Card from '../../components/card-item';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import {Film} from "../../mocks/films";
import UserBlock from "../../components/user-block";
import FilmsList from "../../components/films-list";

export type FilmsProps = {
  films: Film[]
}

function MyList(props: FilmsProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={props.films}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
