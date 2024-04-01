import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { Listing, useListings } from 'hooks/context/use-listings';

import { Button } from 'components/button';
import { Heart } from 'lucide-react';
import { Form } from 'components/form';
import { formatDate, formatPrice } from 'utils/format/index';

export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>();
  // -- react-router-dom -
  const { id } = useParams();
  const navigate = useNavigate();
  // -- from ListingsContext -
  const { favoriteListings, getListing, saveFavoriteListing } = useListings();

  const currentListingRef = useRef<Listing>();

  useEffect(() => {
    const result = getListing(Number(id));

    if (!result) navigate('/404');

    currentListingRef.current = result;
    setListing(result);
  }, [getListing, id, navigate]);

  const handleSaveToFavorites = () => {
    saveFavoriteListing(favoriteListings, currentListingRef.current!);
  };
  return (
    <>
      <Helmet>
        <title>Listing Details</title>
        <meta
          name="description"
          content={`Details for the listing ${listing?.Title} in ${listing?.Location} with form to contact agent. ${listing?.Description}`}
        />
      </Helmet>
      <div className="grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-listingDetails">
        <section>
          <div className="flex h-20 justify-between border border-blue-500">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.Title}</h2>
              <h3 className="text-md font-normal tracking-tight text-zinc-700">{listing?.Location}</h3>
            </div>
            <div>
              <h2 className=" border border-yellow-400 text-right text-lg font-semibold tracking-tight text-zinc-800">
                {formatPrice(listing?.['Sale Price'] || 0)}
              </h2>
              <h3 className="text-right text-sm text-zinc-500">Date Listed: {formatDate(listing?.DateListed || '')}</h3>
            </div>
          </div>
          <figure>
            <img
              className="h-[15rem] w-full object-cover lg:h-[20rem]"
              src={listing?.PictureURL}
              alt={listing?.Title}
            />
          </figure>
          <div className="mt-3 flex items-center justify-between rounded-sm border border-zinc-300 px-5">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.Bedrooms}</span>
              <span className="font-semibold text-zinc-400">BED</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.Bathrooms}</span>
              <span className="font-semibold text-zinc-400">BATH</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.Parking}</span>
              <span className="font-semibold text-zinc-400">PARKING</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.Sqft}</span>
              <span className="font-semibold text-zinc-400">SQFT</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold tracking-tight text-zinc-800">{listing?.YearBuilt}</span>
              <span className="font-semibold text-zinc-400">YEAR BUILT</span>
            </div>
          </div>
          <p className="mb-5 mt-4 text-justify text-sm text-zinc-500">{listing?.Description}</p>
        </section>
        <section>
          <div className="flex h-20 flex-col items-end justify-start border border-green-500">
            <Button
              variant="primary"
              className="bottom-2 flex items-center justify-center"
              onClick={handleSaveToFavorites}
            >
              <Heart className="size-4" />
              <span className="pl-2">Save property</span>
            </Button>
          </div>
          <Form />
        </section>
      </div>
    </>
  );
}
