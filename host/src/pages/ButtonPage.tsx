import React from 'react';
import { useNavigate } from 'react-router-dom';

import useFederatedComponent from '@managent/shared';

const RemoteButton1 = React.lazy(() => import('app1/Button'));
// const RemoteButton2 = React.lazy(() => import('app2/Button'));

const ButtonPage = () => {
  const {
    Component: RemoteButton2,
    errorLoading,
  }: { Component: any; errorLoading: boolean } = useFederatedComponent(
    'http://localhost:3002/app2RemoteEntry.js',
    'app2',
    './Button',
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <RemoteButton1 />
      {/* <RemoteButton2 onClick={handleClick} /> */}
      {errorLoading ? (
        <span>NOT FOUND COMPONENT 😱</span>
      ) : (
        RemoteButton2 && <RemoteButton2 onClick={handleClick} />
      )}
    </>
  );
};

export default ButtonPage;
