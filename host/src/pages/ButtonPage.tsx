import React from 'react';
import { useNavigate } from 'react-router-dom';
import FederatedComponent from '../components/FederatedComponent';

const RemoteButton1 = React.lazy(() => import('app1/Button'));

const ButtonPage = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/');
  };
  return (
    <>
      <RemoteButton1 />
      <FederatedComponent
        module="./Button"
        url="http://localhost:3002/app2RemoteEntry.js"
        scope="app2"
        onClick={handleClick}
      />
    </>
  );
};

export default ButtonPage;
