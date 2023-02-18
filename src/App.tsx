import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE } from '@/constants/route';
import { Home, Issues, Search } from '@/pages';
import { globalStyle } from '@/styles/globalStyle';
import { Global } from '@emotion/react';
import { Layout } from '@/components/common';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Home />,
  },
  {
    path: `${ROUTE.ISSUES}/:owner/:repo`,
    element: <Issues />,
  },
  {
    path: ROUTE.SEARCH,
    element: <Search />,
  },
]);

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
};

export default App;
