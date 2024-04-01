import { addToFavoritesListings } from '.';
import { FAVORITE_ALREADY_IN_THE_LISTING, FAVORITE_LISTINGS, FAVORITE_LISTINGS_UPDATED, LISTING } from './mock';

/**
 * Adds a listing to the favorites list if it is not already present.
 * @param favoritesListings The current list of favorites listings.
 * @param listing The listing to add to the favorites list.
 * @returns Empty [], if the listing already in the favorites or the updated list of favorites listings.
 */
describe('addToFavoritesListings', () => {
  it('should add the current listing to the favorite listings', () => {
    expect(addToFavoritesListings(FAVORITE_LISTINGS, LISTING)).toEqual(FAVORITE_LISTINGS_UPDATED);
  });
  it('should not add the current listing to the favorite listings', () => {
    expect(addToFavoritesListings(FAVORITE_LISTINGS, FAVORITE_ALREADY_IN_THE_LISTING)).toEqual([]);
  });
});
