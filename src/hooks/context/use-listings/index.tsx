import { createContext, useContext, useState } from 'react';
import { filterListings, getListingById } from 'utils/filter';
import { INITIAL_VALUE } from './data';
import { addToFavoritesListings } from 'utils/listing';
import { Listing } from './types';
import { SearchFilters } from './types';
import { ListingsContextData } from './types';
import { ListingsContextValues } from './types';

type ListingsProviderProps = {
  children: React.ReactNode;
};

const ListingsContext = createContext<ListingsContextData>(ListingsContextValues);

const ListingsProvider = ({ children }: ListingsProviderProps) => {
  const [listings, setListings] = useState<Listing[]>(INITIAL_VALUE);
  const [favoriteListings, setfavoriteListings] = useState<Listing[]>([]);

  const resetListings = () => {
    setListings(INITIAL_VALUE);
  };

  const getListing = (id: number): Listing | undefined => {
    const listing = getListingById(listings, id);
    return listing;
  };

  const searchListings = ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => {
    const filteredListings = filterListings({ listings: INITIAL_VALUE, bedrooms, bathrooms, parking, priceRange });
    setListings(filteredListings);
  };

  const saveFavoriteListing = (favoriteListings: Listing[], listing: Listing) => {
    const result: Listing[] = addToFavoritesListings(favoriteListings, listing);
    // -- if result is empty, the listing is already saved in the favorite listings. It's not necessary to save it again.
    if (result.length === 0) return;

    setfavoriteListings(result);
  };

  const getFavoriteListings = (): Listing[] => {
    return favoriteListings;
  };

  return (
    <ListingsContext.Provider
      value={{
        favoriteListings,
        getFavoriteListings,
        saveFavoriteListing,
        listings,
        getListing,
        resetListings,
        searchListings
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

const useListings = () => useContext(ListingsContext);

export { ListingsProvider, useListings };
