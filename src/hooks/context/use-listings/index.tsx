import { createContext, useContext, useState } from 'react';
import { filterListings } from 'utils/filter/search';
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
};

type ListingsProviderProps = {
  children: React.ReactNode;
};

const ListingsContextValues = {
  listings: [],
  searchListings: () => null,
  resetListings: () => null
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

  return (
    <ListingsContext.Provider value={{ listings, searchListings, resetListings }}>{children}</ListingsContext.Provider>
  );
};

const useListings = () => useContext(ListingsContext);

export { ListingsProvider, useListings };
