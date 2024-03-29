import { useState, useRef } from 'react';

import { ListingCard } from 'components/listing-card';
import { Select } from 'components/select';

import { useListings } from 'hooks/context/use-listings';

type Filter = {
  bedrooms: number | undefined;
  bathrooms: number | undefined;
  parking: number | undefined;
  price: number | undefined;
};

const initialFiltersValues: Filter = {
  bedrooms: undefined,
  bathrooms: undefined,
  parking: undefined,
  price: undefined
};

export function ListingsPage() {
  const [filters, setFilters] = useState<Filter>(initialFiltersValues);
  const { listings, searchListings, resetListings } = useListings();

  const selectRef = useRef<HTMLSelectElement[]>([]);

  const handleClick = () => {
    searchListings({
      bedrooms: filters.bedrooms,
      bathrooms: filters.bathrooms,
      parking: filters.parking,
      priceRange: filters.price
    });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFilters((previous) => ({ ...previous, [id]: parseInt(value) }));
  };

  // -- in order to reset the <Select/> components, use ref to set the value to ' ' that is the initial value
  const handleReset = () => {
    setFilters(initialFiltersValues);
    resetListings();
    if (selectRef.current) {
      selectRef.current[0].value = '';
      selectRef.current[1].value = '';
      selectRef.current[2].value = '';
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Select
          ref={(element) => element && (selectRef.current[0] = element)}
          id="bedrooms"
          label="Bedrooms"
          maxValue={10}
          handleSelectChange={handleSelectChange}
        />
        <Select
          ref={(element) => element && (selectRef.current[1] = element)}
          id="bathrooms"
          label="Bathrooms"
          maxValue={10}
          handleSelectChange={handleSelectChange}
        />
        <Select
          ref={(element) => element && (selectRef.current[2] = element)}
          id="parking"
          label="Parking"
          maxValue={10}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <section className="m-5 grid grid-cols-10 gap-5">
        {listings.length > 0 &&
          listings.map((listing) => (
            <ListingCard
              key={listing.Id}
              id={listing.Id}
              thumbnailURL={listing.ThumbnailURL}
              title={listing.Title}
              location={listing.Location}
              bedrooms={listing.Bedrooms}
              bathrooms={listing.Bathrooms}
              price={listing['Sale Price']}
            />
          ))}
        <button aria-label="search" type="button" onClick={handleClick}>
          Search
        </button>
        <button aria-label="reset" type="button" onClick={handleReset}>
          Reset
        </button>
      </section>
    </>
  );
}
