import { createContext, useContext, useState } from 'react';
import { filterListings, getListingById } from 'utils/filter';
import { INITIAL_VALUE } from './data';

export type Listing = {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  'Sale Price': number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};

export type SearchFilters = {
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  priceRange?: number;
};

type ListingsContextData = {
  listings: Listing[];
  searchListings: ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => void;
  resetListings: () => void;
  getListing: (id: number) => Listing | undefined;
};

type ListingsProviderProps = {
  children: React.ReactNode;
};

const ListingsContextValues = {
  listings: [],
  searchListings: () => null,
  resetListings: () => null,
  getListing: () => undefined
};

const ListingsContext = createContext<ListingsContextData>(ListingsContextValues);

const ListingsProvider = ({ children }: ListingsProviderProps) => {
  const [listings, setListings] = useState<Listing[]>(INITIAL_VALUE);

  const searchListings = ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => {
    const filteredListings = filterListings({ listings: INITIAL_VALUE, bedrooms, bathrooms, parking, priceRange });
    setListings(filteredListings);
  };

  const resetListings = () => {
    setListings(INITIAL_VALUE);
  };

  const getListing = (id: number): Listing | undefined => {
    const listing = getListingById(listings, id);
    return listing;
  };

  return (
    <ListingsContext.Provider value={{ listings, getListing, resetListings, searchListings }}>
      {children}
    </ListingsContext.Provider>
  );
};

const useListings = () => useContext(ListingsContext);

export { ListingsProvider, useListings };
