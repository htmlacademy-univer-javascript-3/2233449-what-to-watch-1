import Logo from '../../components/logo';
import {renderSignInError} from './sign-in-error';
import {renderSignInMessage} from './sign-in-message';
import Footer from '../../components/footer';

function SignIn() {
  const isError = false;
  const isSignInMessage = false;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {(() => {
            if (isError) {
              return renderSignInError()
            } else if (isSignInMessage) {
              return renderSignInMessage()
            }
          })()}
          <div className="sign-in__fields">
            <div className={isError ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                     id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                     id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}