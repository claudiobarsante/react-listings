import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FromInputProps = ComponentProps<'input'>;
export function FormInput(props: FromInputProps) {
  return (
    <input
      className={twMerge(
        'w-full rounded-sm border border-zinc-300 p-1 font-medium',
        'text-md text-zinc-700 placeholder-zinc-400 shadow-sm outline-none',
        'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
      )}
      {...props}
    />
  );
}
