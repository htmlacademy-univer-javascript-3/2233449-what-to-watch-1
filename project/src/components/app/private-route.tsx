import {Navigate} from 'react-router-dom';

type PrivateRouterProps = {
  isLogIn: boolean;
  destinationPage: JSX.Element;
};

function PrivateRoute({isLogIn, destinationPage}: PrivateRouterProps) {
  return (
    <div>
      {
        (() => {
          if (isLogIn) {
            return destinationPage;
          } else {
            return <Navigate to={'/login'}/>;
          }
        }
        )()
      }
    </div>);
}

export default PrivateRoute;
