import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { Listing, useListings } from 'hooks/context/use-listings';

import { Button } from 'components/button';
import { Heart, Home } from 'lucide-react';
import { Form } from 'components/form';

import 'react-responsive-modal/styles.css';
import { ListingCardDetails } from 'components/listing-card/details';
export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>({} as Listing);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
    setListing(result!);
  }, [getListing, id, navigate]);

  const handleSaveToFavorites = () => {
    saveFavoriteListing(favoriteListings, currentListingRef.current!);
    onOpenModal();
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
        <ListingCardDetails listing={listing} />

        <aside>
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
        </aside>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <article className="relative h-96 w-auto lg:h-96 lg:w-[25rem]">
          <h2 className="mb-5 text-lg font-bold tracking-tight text-zinc-700">Your favorites listings</h2>
          <div className="flex  flex-col justify-start gap-3 lg:gap-2">
            {favoriteListings.length > 0 &&
              favoriteListings.map((listing) => (
                <span key={listing.Id} className=" text-sm font-semibold text-zinc-700 ">
                  <Home strokeWidth={2.5} className="mb-1 inline size-5 text-orange-600" /> {listing.Title}
                </span>
              ))}
          </div>

          <Button
            variant="outline"
            className="absolute bottom-2 flex items-center justify-center"
            onClick={onCloseModal}
          >
            <span className="pl-2">Close</span>
          </Button>
        </article>
      </Modal>
    </>
  );
}
