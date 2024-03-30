import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { ListingsProvider } from 'hooks/context/use-listings';
import { router } from './routes';

import './global.css';
export function App() {
  return (
    <ListingsProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </ListingsProvider>
  );
}
