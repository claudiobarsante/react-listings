import { render, screen, fireEvent } from 'utils/tests/test-utils';
import { Header } from '.';
import { MemoryRouter, Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';
describe('Header component', () => {
  it('renders the image with correct alt text and dimensions', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const imageElement = screen.getByAltText('number8');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test-file-stub');
    expect(imageElement).toHaveAttribute('height', '100');
    expect(imageElement).toHaveAttribute('width', '100');
  });

  it('navigates to the correct route when the link is clicked', async () => {
    const history = createMemoryHistory();
    //history.push = jest.fn();

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(screen.getByRole('link', { name: /number 8/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link', { name: /number 8/i }));

    /* the Link routes to '/', the home page
    ...
     <Link  to="/">
            <img src={number8Logo} alt="number8" aria-label="number 8" height={100} width={100} />
    </Link> */
    expect(history.location.pathname).toBe('/');
  });
});
