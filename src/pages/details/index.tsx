import { useParams } from 'react-router-dom';

export function ListingDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <span>Page details {id}</span>
    </>
  );
}
