import Logo from '../../components/logo';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">404 Page Not Found</h1>
        <Link to={'/'}>Main page</Link>
      </header>
    </div>
  );
}

export default NotFound;
