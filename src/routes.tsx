import { createBrowserRouter } from 'react-router-dom';
import { ListingsPage } from './pages/listings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ListingsPage />
  }
]);
