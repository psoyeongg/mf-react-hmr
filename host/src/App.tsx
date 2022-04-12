import React from 'react';
import { Header, Footer } from '@managent/shared';

const RemoteButton1 = React.lazy(() => import('app1/Button'));
const RemoteButton2 = React.lazy(() => import('app2/Button'));

const App = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '10px' }}>
        <h1>Host with shared libraries</h1>
        <React.Suspense fallback="Loading Button">
          <RemoteButton1 />
        </React.Suspense>
        <React.Suspense fallback="Loading Button">
          <RemoteButton2 />
        </React.Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
