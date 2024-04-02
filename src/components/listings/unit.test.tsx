import { render, screen, renderHook, act, cleanup } from 'utils/tests/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Listings } from '.';
import { Listing } from 'hooks/context/use-listings';
import { useListings } from 'hooks/context/use-listings';

describe('Listings component', () => {
  it('should render NoResults component when listings array is empty', () => {
    // -- the initial state of listings is an empty array
    const { result } = renderHook(() => useListings());
    console.log('--', result.current.listings);
    render(
      <MemoryRouter>
        <Listings />
      </MemoryRouter>
    );
    expect(screen.getByText('No results')).toBeInTheDocument();

    cleanup(); //--unmmounting useListings hook
  });

  it('should renders ListingCard components when listings array is not empty', () => {
    const mockListings: Listing[] = [
      {
        Id: 2534,
        DateListed: '2023-03-03 17:41:13',
        Title: 'Lovely House with Mountain View',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.',
        'Sale Price': 349000,
        ThumbnailURL: 'https://dummyimage.com/150x150/AAF4EE/000000',
        PictureURL: 'https://dummyimage.com/350x350/AAF4EE/000000',
        Location: 'Paris',
        Sqft: 4638,
        Bedrooms: 4,
        Bathrooms: 3,
        Parking: 4,
        YearBuilt: 2006
      },
      {
        Id: 1278,
        DateListed: '2018-03-20 22:24:21',
        Title: 'Single Family House',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.',
        'Sale Price': 499000,
        ThumbnailURL: 'https://dummyimage.com/150x150/AAF4EE/000000',
        PictureURL: 'https://dummyimage.com/350x350/AAF4EE/000000',
        Location: 'Barcelona',
        Sqft: 5638,
        Bedrooms: 5,
        Bathrooms: 3,
        Parking: 3,
        YearBuilt: 2008
      }
    ];

    const { result } = renderHook(() => useListings());
    //use act when updating states
    act(() => {
      result.current.listings.push(...mockListings);
    });

    render(
      <MemoryRouter>
        <Listings />
      </MemoryRouter>
    );
    // -- Ensure ListingCard components are rendered for each listing
    expect(screen.getByText('Lovely House with Mountain View')).toBeInTheDocument();
    expect(screen.getByText('Single Family House')).toBeInTheDocument();
  });
});
