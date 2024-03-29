import { useState } from 'react';

import { ListingCard } from 'components/listing-card';
import { Select } from 'components/select';

import { useListings } from 'hooks/context/use-listings';

export function ListingsPage() {
  const { listings, filtered, searchListings } = useListings();

  const handleClick = () => {
    searchListings({ bedrooms: 4, bathrooms: undefined, parking: undefined, priceRange: undefined });
  };

  const handleSelectChange = (id: string, value: string) => {};
  return (
    <>
      <div className="flex items-center justify-between">
        <Select id="bedrooms" label="Bedrooms" maxValue={10} handleSelectChange={handleSelectChange} />
      </div>
      <section className="m-5 grid grid-cols-10 gap-5">
        {filtered.length > 0 &&
          filtered.map((listing) => (
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
        <button type="button" onClick={handleClick}>
          Testar
        </button>
      </section>
    </>
  );
}
