import { Listing } from 'hooks/context/use-listings';

export const addToFavoritesListings = (favoriteListings: Listing[], listing: Listing): Listing[] => {
  // -- check if the listing is already in the favorite listings
  const favoriteListingIndex = favoriteListings.findIndex((favoriteListing) => favoriteListing.Id === listing.Id);
  // -- if the listing is already in the favorite listings
  if (favoriteListingIndex !== -1) return [];
  // -- add the listing to the favorite listings
  return [...favoriteListings, listing];
};
