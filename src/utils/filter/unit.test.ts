import { FilterListings, filterListings, getListingById } from '.';
import { LISTING } from './mock';

/**
 * Filters a list of listings based on the provided filters.
 *
 * @param filters - The filters to apply to the list of listings.
 * @param filters.listings - The list of listings to filter.
 * @param filters.bedrooms - The number of bedrooms to filter by.
 * @param filters.bathrooms - The number of bathrooms to filter by.
 * @param filters.parking - The number of parking spaces to filter by.
 * @param filters.priceRange - The maximum price range to filter by.
 * @returns The filtered list of listings or an empty [] if no listings match the provided filters
 */
describe('filterListings', () => {
  it('should return all listings when no filters are provided', () => {
    const filters: FilterListings = {
      listings: LISTING,
      bedrooms: undefined,
      bathrooms: undefined,
      parking: undefined,
      priceRange: undefined
    };
    const filteredListings = filterListings(filters);
    expect(filteredListings).toEqual(LISTING);
  });

  it('should return empty array if no listings match the provided filters', () => {
    const filters: FilterListings = {
      listings: LISTING,
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      priceRange: 1
    };
    const filteredListings = filterListings(filters);
    expect(filteredListings).toEqual([]);
  });

  it('should return listings that match the provided filters', () => {
    const filters: FilterListings = {
      listings: LISTING,
      bedrooms: 4,
      bathrooms: undefined,
      parking: undefined,
      priceRange: undefined
    };
    const filteredListings = filterListings(filters);

    const expectedFilteredListingIds = [2534, 6631, 4234, 10847];
    const filteredListingIds = filteredListings.map((listing) => listing.Id);
    expect(filteredListingIds).toEqual(expectedFilteredListingIds);
  });
});

/**
 * Returns the listing with the given id from the list of listings.
 *
 * @param listings - The list of listings to search.
 * @param id - The id of the listing to return.
 * @returns The listing with the given id, or undefined if no listing with the given id is found.
 */
describe('getListingById', () => {
  it('should return the listing with the given id', () => {
    const listing = getListingById(LISTING, 2534);
    const expectedListing = LISTING.find((listing) => listing.Id === 2534);
    expect(listing).toEqual(expectedListing);
  });

  it('should return undefined if the given listing Id is not found', () => {
    const listing = getListingById(LISTING, 1234);
    const expectedListing = LISTING.find((listing) => listing.Id === 1234);
    expect(listing).toEqual(expectedListing);
  });
});
