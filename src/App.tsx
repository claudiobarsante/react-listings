import { RouterProvider } from 'react-router-dom';

import { ListingsProvider } from 'hooks/context/use-listings';
import { router } from './routes';

import './global.css';
export function App() {
  return (
    <ListingsProvider>
      <RouterProvider router={router} />
    </ListingsProvider>
  );
}
