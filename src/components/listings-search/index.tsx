import { useState, useRef } from 'react';

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
  const [filters, setFilters] = useState<Filter>(initialFiltersValues);
  const { searchListings, resetListings } = useListings();

  const selectRef = useRef<HTMLSelectElement[]>([]);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleButtonSearchClick = () => {
    searchListings({
      bedrooms: filters.bedrooms,
      bathrooms: filters.bathrooms,
      parking: filters.parking,
      priceRange: filters.price
    });
  };

  const handleFiltersValueChange = (id: string, value: string) => {
    setFilters((previous) => ({ ...previous, [id]: parseInt(value) }));
  };

  const handleButtonResetClick = () => {
    setFilters(initialFiltersValues);
    resetListings();
    if (selectRef.current && sliderRef.current) {
      selectRef.current[0].value = '';
      selectRef.current[1].value = '';
      selectRef.current[2].value = '';
      sliderRef.current.value = '0';
    }
  };

  return (
    <section className="flex flex-1 items-center border border-red-300">
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

      <Button variant="primary" aria-label="search" type="button" onClick={handleButtonSearchClick}>
        Search
      </Button>
      <Button variant="outline" aria-label="reset" type="button" onClick={handleButtonResetClick}>
        Reset
      </Button>
    </section>
  );
}