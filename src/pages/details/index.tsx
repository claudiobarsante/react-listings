import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import { useListings } from 'hooks/context/use-listings';
import { Listing } from 'hooks/context/use-listings/types';

import { Button } from 'components/button';
import { Heart } from 'lucide-react';
import { Form } from 'components/form';

import 'react-responsive-modal/styles.css';
import { ListingCardDetails } from 'components/listing-card/details';
import { ListingsFavoritesModal } from 'components/modal';
export function ListingDetailsPage() {
  const [listing, setListing] = useState<Listing>({} as Listing);
  const [open, setOpen] = useState(false);

  // -- react-router-dom -
  const { id } = useParams();
  const navigate = useNavigate();
  // -- from ListingsContext -
  const { favoriteListings, getListing, saveFavoriteListing } = useListings();

  const currentListingRef = useRef<Listing>();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
          <div className="flex h-20 flex-col items-end justify-start">
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
      <ListingsFavoritesModal open={open} onCloseModal={onCloseModal} favoriteListings={favoriteListings} />
    </>
  );
}
