import React from 'react';

type ListingCardProps = {
  id: number;
  thumbnailURL: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
};
export function ListingCard(props: ListingCardProps) {
  const { id, thumbnailURL, title, location, bedrooms, bathrooms, price } = props;

  return (
    <article className="max-w-sm rounded border border-gray-200 shadow-lg">
      <figure>
        <img className="w-full" src={thumbnailURL} alt={title} />
      </figure>
      <div className="flex flex-col justify-start gap-2">
        <h2>{title}</h2>
        <p>{location}</p>
        <p>
          {`${bedrooms} beds`}
          {'|'}
          {`${bathrooms} baths`}
        </p>
        <p>${price}</p>
        <button>View Details</button>
      </div>
    </article>
  );
}
