import { Link } from 'react-router-dom';
import { Bath, BedDouble, MapPin } from 'lucide-react';
import { Card } from './components';
//-- Types
import { Listing } from 'hooks/context/use-listings/types';
import { formatPrice } from 'utils/format';

export function ListingCard(props: Listing) {
  const { Id, Title, 'Sale Price': SalePrice, ThumbnailURL, Location, Bedrooms, Bathrooms } = props;

  return (
    <Card.Root>
      <Card.Image src={ThumbnailURL} alt={Title} aria-label={Title.toLowerCase()} />
      <Card.Content>
        <Card.ListingTitle>{Title}</Card.ListingTitle>
        <Card.ListingLocation>
          <MapPin strokeWidth={2.5} className="mb-0.5 mr-1 inline size-4 text-orange-600" />
          {Location}
        </Card.ListingLocation>
        <Card.ListingInterior>
          <BedDouble className="mb-0.5 mr-1 inline size-4" />
          {Bedrooms} beds | <Bath className="mb-0.5 mr-1 inline size-4" />
          {Bathrooms} baths
        </Card.ListingInterior>
        <Card.ListingPrice>{formatPrice(SalePrice)}</Card.ListingPrice>
        <Link to={`listings/${Id}`}>
          <Card.ListingButton variant="primary">View Details</Card.ListingButton>
        </Link>
      </Card.Content>
    </Card.Root>
  );
}
