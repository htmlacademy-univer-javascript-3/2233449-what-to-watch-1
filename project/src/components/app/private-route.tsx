import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, LOGIN_ROUT} from '../../constants';
import {getAuthorizationStatus} from '../../store/user-reducer/selector';

type PrivateRouterProps = {
  destinationPage: JSX.Element;
};

function PrivateRoute({destinationPage}: PrivateRouterProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <div>
      {
        (() => {
          if (authorizationStatus === AuthorizationStatus.Auth) {
            return destinationPage;
          } else {
            return <Navigate to={LOGIN_ROUT}/>;
          }
        }
        )()
      }
    </div>);
}

export default PrivateRoute;
