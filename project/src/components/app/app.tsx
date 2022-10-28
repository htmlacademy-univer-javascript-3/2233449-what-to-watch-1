import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from './private-route';
import {Film} from '../../mocks/films';
import Main from '../../pages/main/main';
import {Genre} from '../../mocks/genres';
import {Review} from '../../mocks/reviews';

type AppProps = {
  films: Film[],
  genres: Genre[],
  reviews: Review[]
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main films={props.films} genres={props.genres}/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/mylist" element={<PrivateRoute isLogIn destinationPage={<MyList films={props.films}/>}/>}/>
        <Route path="/films/:id" element={<MoviePage films={props.films} reviews={props.reviews}/>}/>
        <Route path="/films/:id/review" element={<AddReview films={props.films}/>}/>
        <Route path="/player/:id" element={<Player films={props.films}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
