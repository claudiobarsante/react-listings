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
  filtered: Listing[];
  searchListings: ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => void;
};

type ListingsProviderProps = {
  children: React.ReactNode;
};

const ListingsContextValues = {
  listings: [],
  filtered: [],
  searchListings: () => null
};

const ListingsContext = createContext<ListingsContextData>(ListingsContextValues);

const ListingsProvider = ({ children }: ListingsProviderProps) => {
  const [listings] = useState<Listing[]>(INITIAL_VALUE);
  const [filtered, setFiltered] = useState<Listing[]>([]);

  const searchListings = ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => {
    const filteredListings = filterListings({ listings, bedrooms, bathrooms, parking, priceRange });
    setFiltered(filteredListings);
  };

  return <ListingsContext.Provider value={{ listings, filtered, searchListings }}>{children}</ListingsContext.Provider>;
};

const useListings = () => useContext(ListingsContext);

export { ListingsProvider, useListings };
