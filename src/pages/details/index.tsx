import { Listing, useListings } from 'hooks/context/use-listings';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormInput } from 'components/input/index';

export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>();
  const { id } = useParams();
  const { getListing } = useListings();

  useEffect(() => {
    const result = getListing(Number(id));
    setListing(result);
  }, [getListing, id]);

  return (
    <main className="grid-cols-listingDetails grid max-w-7xl gap-10">
      <section>
        <div className="flex h-12 justify-between">
          <div>
            <h2>{listing?.Title}</h2>
            <h3>{listing?.Location}</h3>
          </div>
          <div>
            <h2>{listing?.['Sale Price']}</h2>
            <h3>{listing?.DateListed}</h3>
          </div>
        </div>
        <figure>
          <img className="w-full" src={listing?.PictureURL} alt={listing?.Title} />
        </figure>
        <div className="flex items-center justify-between border border-gray-500">
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg text-black">{listing?.Bedrooms}</span>
            <span>BED</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg text-black">{listing?.Bathrooms}</span>
            <span>BATH</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg text-black">{listing?.Parking}</span>
            <span>PARKING</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg text-black">{listing?.Sqft}</span>
            <span>SQFT</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg text-black">{listing?.YearBuilt}</span>
            <span>YEAR BUILT</span>
          </div>
        </div>
        <p>{listing?.Description}</p>
      </section>
      <section>
        <div className="flex h-12 items-center justify-end">
          <button>Save property</button>
        </div>
        <form className="flex flex-col items-center justify-center gap-6 rounded-sm border border-zinc-200 bg-zinc-100 p-6">
          <h3 className="font-semibold text-zinc-700">Contact Agent</h3>
          <FormInput id="full-name" name="full-name" type="text" placeholder="Full Name *" />
          <FormInput id="email" name="email" type="email" placeholder="Email *" />
          <FormInput id="phone-number" name="phone-number" type="text" placeholder="Phone Number *" />
        </form>
      </section>
    </main>
  );
}
