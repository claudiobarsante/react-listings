import { Link } from 'react-router-dom';
import { Bath, BedDouble } from 'lucide-react';
import { Card } from './components';
//-- Types
import { Listing } from 'hooks/context/use-listings';

export function ListingCard(props: Listing) {
  const { Id, Title, 'Sale Price': SalePrice, ThumbnailURL, Location, Bedrooms, Bathrooms } = props;

  return (
    <Card.Root>
      <Card.Image src={ThumbnailURL} alt={Title} aria-label={Title.toLowerCase()} />
      <Card.Content>
        <Card.ListingTitle>{Title}</Card.ListingTitle>
        <Card.ListingLocation>{Location}</Card.ListingLocation>
        <Card.ListingInterior>
          <BedDouble className="mb-0.5 mr-1 inline size-4" />
          {Bedrooms} beds | <Bath className="mb-0.5 mr-1 inline size-4" />
          {Bathrooms} baths
        </Card.ListingInterior>
        <Card.ListingPrice>${SalePrice}</Card.ListingPrice>
        <Link to={`listings/${Id}`}>
          <Card.ListingButton variant="primary" className="my-3">
            View Details
          </Card.ListingButton>
        </Link>
      </Card.Content>
    </Card.Root>
  );
}
