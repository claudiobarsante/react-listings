import { Modal } from 'react-responsive-modal';
import { Home } from 'lucide-react';

import { Button } from 'components/button';
import { Listing } from 'hooks/context/use-listings';

type ListingFavoritesModalProps = {
  favoriteListings: Listing[];
  open: boolean;
  onCloseModal: () => void;
};
export function ListingsFavoritesModal({ open, onCloseModal, favoriteListings }: ListingFavoritesModalProps) {
  return (
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
          aria-label="close"
        >
          <span className="pl-2">Close</span>
        </Button>
      </article>
    </Modal>
  );
}
