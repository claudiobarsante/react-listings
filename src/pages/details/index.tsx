import { Listing, useListings } from 'hooks/context/use-listings';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>();
  const { id } = useParams();
  const { getListing } = useListings();

  useEffect(() => {
    const result = getListing(Number(id));
    setListing(result);
  }, [getListing, id]);

  return (
    <main className="grid-cols-listingDetails grid">
      <section>
        <header className="flex justify-between">
          <div>
            <h2>{listing?.Title}</h2>
            <h3>{listing?.Location}</h3>
          </div>
          <div>
            <h2>{listing?.['Sale Price']}</h2>
            <h3>{listing?.DateListed}</h3>
          </div>
        </header>
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
    </main>
  );
}
