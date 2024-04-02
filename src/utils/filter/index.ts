// -- types
import { SearchFilters } from 'hooks/context/use-listings/types';
import { Listing } from 'hooks/context/use-listings/types';

export type FilterListings = {
  listings: Listing[];
} & SearchFilters;

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

export const getListingById = (listings: Listing[], id: number): Listing | undefined => {
  const listing = listings.find((listing) => listing.Id === id);
  return listing;
};
