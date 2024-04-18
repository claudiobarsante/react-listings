import { render, screen, waitFor } from 'utils/tests/test-utils';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { router } from 'routes';

/**
 * Mock helmet module
 */
jest.mock('react-helmet-async', () => ({
  Helmet: () => jest.fn(),
  HelmetProvider: () => jest.fn()
}));

describe('Router Configuration', () => {
  it('renders ListingsPage when path is /', async () => {
    const mock = createMemoryRouter(router.routes, { initialEntries: ['/'] });

    render(<RouterProvider router={mock} />);
    await waitFor(() => expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument());
  });

  //todo- check why is not redirectin for the correct page
  it('renders Details page for the listing 1278', async () => {
    const mock = createMemoryRouter(router.routes, { initialEntries: ['/', '/listings/2534'], initialIndex: 1 });

    render(<RouterProvider router={mock} />);
    await waitFor(() => expect(screen.getByText(/Lovely House with Mountain View/i)).toBeInTheDocument());
  });
});
