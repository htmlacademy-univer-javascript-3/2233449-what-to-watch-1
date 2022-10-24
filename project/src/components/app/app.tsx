import Main, {FilmProps} from '../../pages/main/main';
import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from './private-route';

function App(props: FilmProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Main(props)}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/mylist" element={<PrivateRoute isLogIn={false} destinationPage={<MyList/>}/>}/>
        <Route path="/films/:id" element={<MoviePage/>}/>
        <Route path="/films/:id/review" element={<AddReview/>}/>
        <Route path="/player/:id" element={<Player/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
