import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Listing, useListings } from 'hooks/context/use-listings';

import { Button } from 'components/button';
import { Heart } from 'lucide-react';
import { Form } from 'components/form';

export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>();
  // -- react-router-dom -
  const { id } = useParams();
  const navigate = useNavigate();
  // -- from ListingsContext -
  const { getListing } = useListings();

  useEffect(() => {
    const result = getListing(Number(id));
    if (!result) navigate('/404');
    setListing(result);
  }, [getListing, id, navigate]);

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
          <Button variant="primary" className="flex items-center justify-center">
            <Heart className="size-4" />
            <span className="pl-2">Save property</span>
          </Button>
        </div>
        <Form />
      </section>
    </main>
  );
}
