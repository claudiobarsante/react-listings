import { ListingCard } from 'components/listing-card';
import { useListings } from 'hooks/context/use-listings';

export function Listings() {
  const { listings } = useListings();
  return (
    <section className="m-5 grid grid-cols-5 gap-5">
      {listings.length > 0 && listings.map((listing) => <ListingCard key={listing.Id} {...listing} />)}
    </section>
  );
}
