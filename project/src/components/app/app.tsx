import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from './private-route';
import Main from '../../pages/main/main';
import Spinner from '../../pages/loading-page/loading-page';
import {useAppSelector} from '../../hooks';
import {getIsDataLoaded} from '../../store/data-reducer/selector';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <Spinner/>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/mylist" element={<PrivateRoute destinationPage={<MyList/>}/>}/>
      <Route path="/films/:id" element={<MoviePage/>}/>
      <Route path="/films/:id/review" element={<AddReview/>}/>
      <Route path="/player/:id" element={<Player/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
