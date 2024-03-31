import { Helmet } from 'react-helmet-async';
import { Listings } from 'components/listings';
import { ListingsSearch } from 'components/listings-search';

export function ListingsPage() {
  return (
    <>
      <Helmet>
        <title>Listings</title>
        <meta
          name="description"
          content="Page with listings. You case use filters to search by bedrooms, bathrooms, parking or price range"
        />
      </Helmet>
      <main>
        <ListingsSearch />
        <Listings />
      </main>
    </>
  );
}
