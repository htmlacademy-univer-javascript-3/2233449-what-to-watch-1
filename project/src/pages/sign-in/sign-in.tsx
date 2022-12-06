import Logo from '../../components/logo';
import {renderSignInError} from './sign-in-error';
import {renderSignInMessage} from './sign-in-message';
import Footer from '../../components/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MAIN_ROUTE} from '../../constants';
import {loginAction} from '../../api-action';
import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthData} from '../../types/auth-data';

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const isSignInMessage = false;
  const {isError} = useAppSelector((state) => state);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(MAIN_ROUTE);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email !== '' && password !== '') {
      onSubmit({
        email,
        password,
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className="logo__link"/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {(() => {
            if (isError) {
              return renderSignInError();
            } else if (isSignInMessage) {
              return renderSignInMessage();
            }
          })()}
          <div className="sign-in__fields">
            <div className={isError ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" value={email} onChange={handleEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" value={password} onChange={handlePasswordChange}
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

export default SignIn;
