import { ComponentProps } from 'react';

type CardDetailsRootProps = ComponentProps<'article'>;
function CardDetailsRoot(props: CardDetailsRootProps) {
  return <article {...props}></article>;
}

type CardDetailsTitleProps = ComponentProps<'h2'>;

function CardDetailsTitle(props: CardDetailsTitleProps) {
  return <h2 className="text-lg font-semibold tracking-tight text-zinc-800" {...props}></h2>;
}

type CardDetailsLocationProps = ComponentProps<'h3'>;
function CardDetailsLocation(props: CardDetailsLocationProps) {
  return <h3 className="text-md font-normal tracking-tight text-zinc-700" {...props}></h3>;
}

type CardDetailsSalePriceProps = ComponentProps<'h2'>;
function CardDetailsSalePrice(props: CardDetailsSalePriceProps) {
  return <h2 className="text-right text-lg font-semibold tracking-tight text-zinc-800" {...props}></h2>;
}

type CardDetailsDateListedProps = ComponentProps<'h3'>;
function CardDetailsDateListed(props: CardDetailsDateListedProps) {
  return <h3 className="text-right text-sm text-zinc-500" {...props}></h3>;
}

type CardDetailsLeftHeaderProps = ComponentProps<'div'>;

function CardDetailsLeftHeader(props: CardDetailsLeftHeaderProps) {
  return <div {...props}></div>;
}
type CardDetailsRightHeaderProps = ComponentProps<'div'>;

function CardDetailsRightHeader(props: CardDetailsRightHeaderProps) {
  return <div {...props}></div>;
}

type CardDetailsHeaderProps = ComponentProps<'section'>;
function CardDetailsHeader(props: CardDetailsHeaderProps) {
  return <section className="flex h-20 justify-between" {...props}></section>;
}

type CardDetailsImageProps = ComponentProps<'img'>;
function CardDetailsImage(props: CardDetailsImageProps) {
  return (
    <figure>
      <img className="h-[15rem] w-full object-cover lg:h-[27rem]" {...props} />
    </figure>
  );
}

type CardDetailsContentProps = ComponentProps<'section'>;
function CardDetailsContent(props: CardDetailsContentProps) {
  return (
    <section
      className="mt-3 flex items-center justify-between rounded-sm border border-zinc-300 px-5"
      {...props}
    ></section>
  );
}

type CardDetailsContentColProps = ComponentProps<'div'>;

function CardDetailsContentCol(props: CardDetailsContentColProps) {
  return <div className="flex flex-col items-center justify-center" {...props}></div>;
}

type CardDetailsContentColTopItemProps = ComponentProps<'span'>;
function CardDetailsContentColTopItem(props: CardDetailsContentColTopItemProps) {
  return <span className="text-sm font-semibold tracking-tight text-zinc-800 lg:text-lg" {...props}></span>;
}
type CardDetailsContentColBottomItemProps = ComponentProps<'span'>;

function CardDetailsContentColBottomItem(props: CardDetailsContentColBottomItemProps) {
  return <span className="text-sm font-semibold text-zinc-400 lg:text-lg" {...props}></span>;
}

type CardDetailsDescriptionProps = ComponentProps<'p'>;
function CardDetailsDescription(props: CardDetailsDescriptionProps) {
  return <p className="mb-5 mt-4 text-justify text-sm text-zinc-500" {...props}></p>;
}

export const CardListingDetails = {
  Root: CardDetailsRoot,
  Header: CardDetailsHeader,
  LeftHeaderSide: CardDetailsLeftHeader,
  Title: CardDetailsTitle,
  Location: CardDetailsLocation,
  RightHeaderSide: CardDetailsRightHeader,
  SalePrice: CardDetailsSalePrice,
  DateListed: CardDetailsDateListed,
  Image: CardDetailsImage,
  Content: CardDetailsContent,
  ContentCol: CardDetailsContentCol,
  ContentColTopItem: CardDetailsContentColTopItem,
  ContentColBottomItem: CardDetailsContentColBottomItem,
  Description: CardDetailsDescription
};
