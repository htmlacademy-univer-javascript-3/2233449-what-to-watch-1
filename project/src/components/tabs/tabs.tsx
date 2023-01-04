import {ActivePart} from '../../pages/movie-page/movie-page';
import FilmDetails from './film-details';
import FilmReviews from './film-reviews';
import FilmInfo from './film-info';

interface TabsProps {
  activePart: ActivePart
}

function Tabs({activePart}: TabsProps) {
  switch (activePart) {
    case ActivePart.OverviewPart:
      return <FilmInfo/>;
    case ActivePart.ReviewPart:
      return <FilmReviews/>;
    case ActivePart.DetailsPart:
      return <FilmDetails/>;
  }
}

export default Tabs;
