import { createBrowserRouter } from 'react-router-dom';
import { ListingsPage } from './pages/listings';
import { ListingDetailsPage } from 'pages/details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ListingsPage />
  },
  {
    path: 'listings/:id',
    element: <ListingDetailsPage />
  }
]);
