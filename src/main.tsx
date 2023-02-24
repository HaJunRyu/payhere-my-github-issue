import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE } from '@/constants/route';
import { Home, Issues, Search } from '@/pages';
import App from '@/App';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTE.HOME,
        element: <Home />,
      },
      {
        path: ROUTE.ISSUES,
        element: <Issues />,
      },
      {
        path: ROUTE.SEARCH,
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
