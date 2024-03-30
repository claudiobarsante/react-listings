import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormInputProps = ComponentProps<'input'>;
// -- had to add forwardRef in order to o register the component's ref (react-hook-form)
const FormInputComponent: React.ForwardRefRenderFunction<HTMLInputElement, FormInputProps> = (props, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        'w-full rounded-sm border border-zinc-300 p-1 font-medium',
        'text-md text-zinc-700 placeholder-zinc-400 shadow-sm outline-none',
        'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
      )}
      {...props}
    />
  );
};

export const FormInput = forwardRef(FormInputComponent);
