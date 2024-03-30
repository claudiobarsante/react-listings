import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FormTextAreaProps = ComponentProps<'textarea'>;

export default function FormTextArea(props: FormTextAreaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-[120px] w-full rounded-sm border border-zinc-300 p-1 font-medium',
        'text-md text-zinc-700 placeholder-zinc-500 shadow-sm outline-none',
        'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
      )}
      {...props}
    />
  );
}