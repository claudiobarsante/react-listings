import { useListings } from 'hooks/context/use-listings';
export function ListingsPage() {
  const { listings } = useListings();
  console.log('--listings--', listings);
  return (
    <>
      <h1>Listing page</h1>
    </>
  );
}
