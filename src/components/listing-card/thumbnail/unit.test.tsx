import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ListingCard } from '.';
import { Listing } from 'hooks/context/use-listings';
import { formatPrice } from 'utils/format';

describe('ListingCard component', () => {
  const listing: Listing = {
    Id: 1278,
    DateListed: '2018-03-20 22:24:21',
    Title: 'Single Family House',
    Description: 'Lorem ipsum dolor sit amet',
    'Sale Price': 499000,
    ThumbnailURL: 'https://dummyimage.com/150x150/AAF4EE/000000',
    PictureURL: 'https://dummyimage.com/350x350/AAF4EE/000000',
    Location: 'Barcelona',
    Sqft: 5638,
    Bedrooms: 5,
    Bathrooms: 4,
    Parking: 3,
    YearBuilt: 2008
  };

  it('should render the listing thumbanil card', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <Router location={history.location} navigator={history}>
        <ListingCard {...listing} />
      </Router>
    );
    const { Title, 'Sale Price': SalePrice, ThumbnailURL, Bedrooms, Bathrooms, Location } = listing;

    expect(screen.getByText(Title)).toBeInTheDocument();
    expect(screen.getByText(Location)).toBeInTheDocument();
    expect(screen.getByText(formatPrice(SalePrice))).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${Title.toLowerCase()}` })).toHaveAttribute('src', `${ThumbnailURL}`);

    // -- to find the 'number' of bedrooms and baths --\\
    // Using a regular expression to match the pattern of "number beds" and "number baths"
    const bedsBathsElement = screen.getByText(/(\d+) beds.*(\d+) baths/);
    const bedsBathsContent = bedsBathsElement.textContent; // -- '5 beds | 4 baths'

    let bedsString = '';
    if (bedsBathsContent) bedsString = bedsBathsContent[0]; // -- beds is on the 0 idx of the string
    expect(bedsString).toBe(`${Bedrooms}`);

    let bathsString: string | undefined = '';
    const startPosition = bedsBathsContent?.indexOf('|'); // find the vertical pipe
    const bathsIdx = bedsBathsContent?.indexOf('baths');
    // -- the number of baths will be between the "|" and the string "baths"
    bathsString = bedsBathsContent?.substring(startPosition! + 1, bathsIdx)?.trim();

    expect(bathsString).toBe(`${Bathrooms}`);
  });

  it('should redirect the user to the listing details page', () => {
    const { Id } = listing;
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <ListingCard {...listing} />
      </Router>
    );
    /* the Link routes to '/listings/1278'
     <Link to={`listings/${Id}`}>
          <Card.ListingButton variant="primary">View Details</Card.ListingButton>
        </Link> */
    fireEvent.click(screen.getByRole('link', { name: /View Details/i }));
    // -- expected to redirect to the listing details page, "/listings/1278"
    expect(history.location.pathname).toBe(`/listings/${Id}`);
  });
});
