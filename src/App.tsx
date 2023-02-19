import { Outlet } from 'react-router-dom';
import { globalStyle } from '@/styles/globalStyle';
import { Global } from '@emotion/react';
import { Layout, Navigation } from '@/components/common';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <Outlet />
      </Layout>
      <Navigation />
    </>
  );
};

export default App;
