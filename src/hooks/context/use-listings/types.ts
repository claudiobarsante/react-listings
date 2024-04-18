/**
 * Listing type
 * @remarks
 * A real estate listing.
 * @property Id - The id of the listing.
 * @property DateListed - The date the listing was posted.
 * @property Title - The title of the listing.
 * @property Description - The description of the listing.
 * @property 'Sale Price' - The price of the listing.
 * @property ThumbnailURL - A URL to a thumbnail image of the listing.
 * @property PictureURL - A URL to a high-resolution image of the listing.
 * @property Location - The location of the listing.
 * @property Sqft - The square footage of the listing.
 * @property Bedrooms - The number of bedrooms of the listing.
 * @property Bathrooms - The number of bathrooms of the listing.
 * @property Parking - The number of parking spaces of the listing.
 * @property YearBuilt - The year the listing was built.
 * @type
 */
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

/**
 * SearchFilters type
 * @remarks
 * A type that defines the search filters for a list of listings.
 *
 * @property bedrooms - The number of bedrooms to filter by.
 * @property bathrooms - The number of bathrooms to filter by.
 * @property parking - The number of parking spaces to filter by.
 * @property priceRange - The price range to filter by, in dollars.
 * @type
 */
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
