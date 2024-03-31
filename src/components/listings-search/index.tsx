import { useRef } from 'react';

import { Select } from 'components/select';

import { useListings } from 'hooks/context/use-listings';
import { Button } from 'components/button';
import { Slider } from 'components/slider';

type Filter = {
  bedrooms: number | undefined;
  bathrooms: number | undefined;
  parking: number | undefined;
  price: number | undefined;
};

const initialFiltersValues: Filter = {
  bedrooms: undefined,
  bathrooms: undefined,
  parking: undefined,
  price: undefined
};
export function ListingsSearch() {
  // const [filters, setFilters] = useState<Filter>(initialFiltersValues);
  const { searchListings, resetListings } = useListings();

  const selectRef = useRef<HTMLSelectElement[]>([]);
  const sliderRef = useRef<HTMLInputElement>(null);
  const filtersRef = useRef(initialFiltersValues);

  const handleButtonSearchClick = () => {
    searchListings({
      bedrooms: filtersRef.current.bedrooms,
      bathrooms: filtersRef.current.bathrooms,
      parking: filtersRef.current.parking,
      priceRange: filtersRef.current.price
    });
  };

  const handleFiltersValueChange = (id: string, value: string) => {
    const previous = filtersRef.current;
    filtersRef.current = { ...previous, [id]: parseInt(value) };
  };

  const handleButtonResetClick = () => {
    filtersRef.current = initialFiltersValues;
    resetListings();
    if (selectRef.current && sliderRef.current) {
      selectRef.current[0].value = '';
      selectRef.current[1].value = '';
      selectRef.current[2].value = '';
      sliderRef.current.value = '0';
    }
  };

  return (
    <section className="flex items-center justify-between px-6">
      <Select
        ref={(element) => element && (selectRef.current[0] = element)}
        id="bedrooms"
        label="Bedrooms"
        maxValue={10}
        onSelectValueChange={handleFiltersValueChange}
      />
      <Select
        ref={(element) => element && (selectRef.current[1] = element)}
        id="bathrooms"
        label="Bathrooms"
        maxValue={10}
        onSelectValueChange={handleFiltersValueChange}
      />
      <Select
        ref={(element) => element && (selectRef.current[2] = element)}
        id="parking"
        label="Parking"
        maxValue={10}
        onSelectValueChange={handleFiltersValueChange}
      />

      <Slider
        ref={sliderRef}
        id="price"
        label="Price Range"
        maxValue={1000000}
        onSliderValueChange={handleFiltersValueChange}
      />
      <div className="flex items-center justify-normal gap-5">
        <Button variant="primary" aria-label="search" type="button" onClick={handleButtonSearchClick}>
          Search
        </Button>
        <Button variant="outline" aria-label="reset" type="button" onClick={handleButtonResetClick}>
          Reset
        </Button>
      </div>
    </section>
  );
}
