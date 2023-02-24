import { Outlet } from 'react-router-dom';
import { globalStyle } from '@/styles/globalStyle';
import { Global } from '@emotion/react';
import { Layout, Navigation } from '@/components/common';
import BookmarkProvider from './context/BookmarkProvider';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <BookmarkProvider>
          <Outlet />
        </BookmarkProvider>
      </Layout>
      <Navigation />
    </>
  );
};

export default App;
