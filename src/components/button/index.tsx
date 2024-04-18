import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
/**
 * Creates a Tailwind-style utility function that generates CSS classes based on a set of variants.
 * @param base - The base CSS classes that are applied regardless of the variant.
 * @param variants - A map of variant names to CSS classes that are applied when the corresponding variant is specified.
 * @param defaultVariant - The name of the default variant that is applied if no variant is specified.
 * @returns A function that takes a variant name as its argument and returns the corresponding CSS classes.
 */
const button = tv({
  base: [
    'rounded-sm px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-200',
    'active:opacity-80'
  ],

  variants: {
    variant: {
      primary: 'bg-zinc-600 text-white hover:bg-zinc-700',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
/**
 * Props for the Button component.
 */
export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;
/**
 * Button component.
 * @param {ButtonProps} props - The props for the button.
 * @category Component
 */
export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />;
}
