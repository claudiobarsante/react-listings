import { Listings } from 'components/listings';
import { ListingsSearch } from 'components/listings-search';

export function ListingsPage() {
  return (
    <main>
      <ListingsSearch />
      <Listings />
    </main>
  );
}
