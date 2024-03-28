import { ListingCard } from 'components/listing-card';
import { useListings } from 'hooks/context/use-listings';

export function ListingsPage() {
  const { listings, filtered, searchListings } = useListings();
  console.log('--listings--', listings);

  function handleClick() {
    searchListings({ bedrooms: 4, bathrooms: undefined, parking: undefined, priceRange: undefined });
  }
  return (
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
  );
}
