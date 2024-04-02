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

export type ListingsContextData = {
  favoriteListings: Listing[];
  saveFavoriteListing: (favoriteListings: Listing[], listing: Listing) => void;
  getFavoriteListings: () => Listing[] | undefined;
  listings: Listing[];
  getListing: (id: number) => Listing | undefined;
  resetListings: () => void;
  searchListings: ({ bedrooms, bathrooms, parking, priceRange }: SearchFilters) => void;
};

export const ListingsContextValues = {
  favoriteListings: [],
  saveFavoriteListing: () => null,
  getFavoriteListings: () => undefined,
  listings: [],
  getListing: () => undefined,
  resetListings: () => null,
  searchListings: () => null
};
