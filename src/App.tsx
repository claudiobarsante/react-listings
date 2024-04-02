import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

import { ErrorPage } from 'pages/error';
import { ListingsProvider } from 'hooks/context/use-listings';
import { router } from './routes';

import './global.css';
export function App() {
  return (
    <ListingsProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Frontend assessment" />
        <Toaster richColors />
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </HelmetProvider>
    </ListingsProvider>
  );
}
