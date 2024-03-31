import { createBrowserRouter } from 'react-router-dom';
import { ListingsPage } from './pages/listings';
import { ListingDetailsPage } from 'pages/details';
import { AppLayout } from 'pages/_layouts/app';
import { NotFound } from 'pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [{ path: '/', element: <ListingsPage /> }]
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [{ path: 'listings/:id', element: <ListingDetailsPage /> }]
  }
]);
