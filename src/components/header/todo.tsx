import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from 'utils/tests/test-utils';
import { Header } from '.';
describe('Header component', () => {
  //   it('renders the logo with correct properties', () => {
  //     render(
  //       <Router>
  //         <Header />
  //       </Router>
  //     );

  //     const logoElement = screen.getByAltText('number8');
  //     expect(logoElement).toBeInTheDocument();
  //     expect(logoElement).toHaveAttribute('src', 'assets/number8.png');
  //     expect(logoElement).toHaveAttribute('height', '100');
  //     expect(logoElement).toHaveAttribute('width', '100');
  //   });

  it('renders a link to home page', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    //expect(screen.getElementByText('').closest('a')).toHaveAttribute('href', '/');
    //     const linkElement = screen.getByRole('a', { name: /number 8/i });
    //     expect(linkElement).toBeInTheDocument();
    //     expect(linkElement).toHaveAttribute('href', '/');
  });
});
