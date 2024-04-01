import { ListingCard } from 'components/listing-card/thumbnail';
import { NoResults } from 'components/no-results';
import { useListings } from 'hooks/context/use-listings';

export function Listings() {
  const { listings } = useListings();

  if (listings.length === 0) return <NoResults />;

  return (
    <section className="mb-4 grid min-h-screen grid-cols-1 justify-items-center gap-y-4 md:grid-cols-3 md:gap-3 lg:grid lg:grid-cols-4 lg:gap-3">
      {listings.map((listing) => (
        <ListingCard key={listing.Id} {...listing} />
      ))}
    </section>
  );
}
