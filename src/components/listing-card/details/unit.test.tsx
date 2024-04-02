import { render, screen } from '@testing-library/react';

import { ListingCardDetails } from '.';
import { Listing } from 'hooks/context/use-listings';
import { formatDate, formatPrice } from 'utils/format';

describe('ListingCardDetails', () => {
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
  it('should render the listing details card', () => {
    render(<ListingCardDetails listing={listing} />);
    const {
      DateListed,
      Title,
      Description,
      'Sale Price': SalePrice,
      PictureURL,
      Location,
      Sqft,
      Bedrooms,
      Bathrooms,
      Parking,
      YearBuilt
    } = listing;

    expect(screen.getByText(Title)).toBeInTheDocument();
    expect(screen.getByText(Location)).toBeInTheDocument();
    expect(screen.getByText(formatPrice(SalePrice))).toBeInTheDocument();
    expect(screen.getByText(`Date Listed: ${formatDate(DateListed)}`)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${Title}` })).toHaveAttribute('src', `${PictureURL}`);
    expect(screen.getByText(String(Bedrooms))).toBeInTheDocument();
    expect(screen.getByText(String(Bathrooms))).toBeInTheDocument();
    expect(screen.getByText(String(Parking))).toBeInTheDocument();
    expect(screen.getByText(String(Sqft))).toBeInTheDocument();
    expect(screen.getByText(String(YearBuilt))).toBeInTheDocument();
    expect(screen.getByText(Description)).toBeInTheDocument();
  });
});
