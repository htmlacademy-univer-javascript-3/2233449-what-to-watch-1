import Logo from '../../components/logo/logo';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">404 Page Not Found</h1>
      </header>
    </div>
  );
}

export default NotFound;
