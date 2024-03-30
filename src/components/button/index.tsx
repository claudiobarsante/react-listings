import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

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

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />;
}
