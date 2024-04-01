import { CardListingDetails } from './components';
import { Listing } from 'hooks/context/use-listings';
import { formatDate, formatPrice } from 'utils/format';

type ListingCardDetailsProps = {
  listing: Listing;
};
export function ListingCardDetails({ listing }: ListingCardDetailsProps) {
  return (
    <CardListingDetails.Root>
      <CardListingDetails.Header>
        <CardListingDetails.LeftHeaderSide>
          <CardListingDetails.Title>{listing?.Title}</CardListingDetails.Title>
          <CardListingDetails.Location>{listing?.Location}</CardListingDetails.Location>
        </CardListingDetails.LeftHeaderSide>
        <CardListingDetails.RightHeaderSide>
          <CardListingDetails.SalePrice>{formatPrice(listing?.['Sale Price'] || 0)}</CardListingDetails.SalePrice>
          <CardListingDetails.DateListed>
            Date Listed: {formatDate(listing?.DateListed || '')}
          </CardListingDetails.DateListed>
        </CardListingDetails.RightHeaderSide>
      </CardListingDetails.Header>
      <CardListingDetails.Image src={listing?.PictureURL} alt={listing?.Title} aria-label={listing?.Title} />
      <CardListingDetails.Content>
        <CardListingDetails.ContentCol>
          <CardListingDetails.ContentColTopItem>{listing?.Bedrooms}</CardListingDetails.ContentColTopItem>
          <CardListingDetails.ContentColBottomItem>BED</CardListingDetails.ContentColBottomItem>
        </CardListingDetails.ContentCol>
        <CardListingDetails.ContentCol>
          <CardListingDetails.ContentColTopItem>{listing?.Bathrooms}</CardListingDetails.ContentColTopItem>
          <CardListingDetails.ContentColBottomItem>BATH</CardListingDetails.ContentColBottomItem>
        </CardListingDetails.ContentCol>
        <CardListingDetails.ContentCol>
          <CardListingDetails.ContentColTopItem>{listing?.Parking}</CardListingDetails.ContentColTopItem>
          <CardListingDetails.ContentColBottomItem>PARKING</CardListingDetails.ContentColBottomItem>
        </CardListingDetails.ContentCol>
        <CardListingDetails.ContentCol>
          <CardListingDetails.ContentColTopItem>{listing?.Sqft}</CardListingDetails.ContentColTopItem>
          <CardListingDetails.ContentColBottomItem>SQFT</CardListingDetails.ContentColBottomItem>
        </CardListingDetails.ContentCol>
        <CardListingDetails.ContentCol>
          <CardListingDetails.ContentColTopItem>{listing?.YearBuilt}</CardListingDetails.ContentColTopItem>
          <CardListingDetails.ContentColBottomItem>YEAR BUILT</CardListingDetails.ContentColBottomItem>
        </CardListingDetails.ContentCol>
      </CardListingDetails.Content>
      <CardListingDetails.Description>{listing?.Description}</CardListingDetails.Description>
    </CardListingDetails.Root>
  );
}
