type ListingCardProps = {
  id: number;
  bathrooms: number;
  bedrooms: number;
  location: string;
  parking: number;
  price: number;
  thumbnailURL: string;
  title: string;
};
export function ListingCard(props: ListingCardProps) {
  const { id, bathrooms, bedrooms, location, parking, price, thumbnailURL, title } = props;

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
          {'|'}
          {`${parking} parking`}
        </p>
        <p>${price}</p>
        <button>View Details</button>
      </div>
    </article>
  );
}
