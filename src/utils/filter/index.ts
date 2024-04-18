// -- types
import { SearchFilters } from 'hooks/context/use-listings/types';
import { Listing } from 'hooks/context/use-listings/types';

/**
 * FilterListings type
 * @property listings - The list of listings to filter.
 * @property searchFilters - The search criteria.
 * @intercface
 */
export type FilterListings = {
  listings: Listing[];
} & SearchFilters;
/**
 * Filters a list of listings based on the specified search criteria.
 * @typeParam FilterListing listings - The list of listings to filter.
 * @returns a list of listings type Listing[]
 */
export const filterListings = ({ listings, bedrooms, bathrooms, parking, priceRange }: FilterListings): Listing[] => {
  const filteredListings = listings.filter((listing) => {
    const bedroomsMatch = bedrooms === undefined || listing.Bedrooms === bedrooms;
    const bathroomsMatch = bathrooms === undefined || listing.Bathrooms === bathrooms;
    const parkingMatch = parking === undefined || listing.Parking === parking;
    const minPriceMatch = listing['Sale Price'] >= 0;
    const maxPriceMatch = priceRange === undefined || listing['Sale Price'] <= priceRange;
    return bedroomsMatch && bathroomsMatch && parkingMatch && minPriceMatch && maxPriceMatch;
  });

  return filteredListings;
};

/**
 *
 * @typeParam listings type Listing[]
 * @param id number
 * @returns Listing
 */
export const getListingById = (listings: Listing[], id: number): Listing | undefined => {
  const listing = listings.find((listing) => listing.Id === id);
  return listing;
};
