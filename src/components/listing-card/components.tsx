import { Button, ButtonProps } from 'components/button';
import { ComponentProps } from 'react';

type CardRootProps = ComponentProps<'article'>;
function CardRoot(props: CardRootProps) {
  return <article className="max-w-sm rounded border border-gray-200 shadow-lg" {...props}></article>;
}

type CardImageProps = ComponentProps<'img'>;
function CardImage(props: CardImageProps) {
  return (
    <figure>
      <img className="w-full" {...props} />
    </figure>
  );
}

type CardContentProps = ComponentProps<'section'>;
function CardContent(props: CardContentProps) {
  return <section className="flex flex-col justify-start px-3" {...props}></section>;
}

type CardListingTitleProps = ComponentProps<'h2'>;

function CardListingTitle(props: CardListingTitleProps) {
  return <h2 className="text-md py-1 font-bold leading-none text-zinc-700" {...props}></h2>;
}

type CardListingLocationProps = ComponentProps<'span'>;
function CardListingLocation(props: CardListingLocationProps) {
  return <span className="text-sm leading-none text-zinc-500" {...props}></span>;
}

type CardListingInteriorProps = ComponentProps<'span'>;
function CardListingInterior(props: CardListingInteriorProps) {
  return (
    <div className="flex items-center justify-start pt-2">
      <span className="text-sm text-zinc-500" {...props}></span>
    </div>
  );
}

type CardListingPriceProps = ComponentProps<'span'>;

function CardListingPrice(props: CardListingPriceProps) {
  return <span className="pt-2 text-lg font-semibold text-zinc-800" {...props}></span>;
}

type CardListingButtonProps = ButtonProps;

function CardListingButton(props: CardListingButtonProps) {
  return <Button {...props}></Button>;
}
export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Content: CardContent,
  ListingTitle: CardListingTitle,
  ListingLocation: CardListingLocation,
  ListingInterior: CardListingInterior,
  ListingPrice: CardListingPrice,
  ListingButton: CardListingButton
};
