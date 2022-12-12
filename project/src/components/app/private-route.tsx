import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {LOGIN_ROUT} from '../../constants';
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
          if (authorizationStatus) {
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
