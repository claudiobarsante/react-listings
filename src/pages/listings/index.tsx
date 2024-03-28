import { ListingCard } from 'components/listing-card';
import { useListings } from 'hooks/context/use-listings';

export function ListingsPage() {
  const { listings } = useListings();
  console.log('--listings--', listings);
  return (
    <section className="m-5 grid grid-cols-10 gap-5">
      {listings.length > 0 &&
        listings.map((listing) => (
          <ListingCard
            key={listing.Id}
            id={listing.Id}
            thumbnailURL={listing.ThumbnailURL}
            title={listing.Title}
            location={listing.Location}
            bedrooms={listing.Bathrooms}
            bathrooms={listing.Bathrooms}
            price={listing['Sale Price']}
          />
        ))}
    </section>
  );
}
