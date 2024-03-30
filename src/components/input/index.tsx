import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormInputProps = {
  error: unknown;
} & ComponentProps<'input'>;
// -- had to add forwardRef in order to o register the component's ref (react-hook-form)
const FormInputComponent: React.ForwardRefRenderFunction<HTMLInputElement, FormInputProps> = (props, ref) => {
  const { error } = props;
  return (
    <>
      <input
        ref={ref}
        className={twMerge(
          'w-full rounded-sm border border-zinc-300 p-1 font-medium',
          'text-md text-zinc-700 placeholder-zinc-400 shadow-sm outline-none',
          'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
        )}
        {...props}
      />
      {error && <p role="alert">{error.toString()}</p>}
    </>
  );
};

export const FormInput = forwardRef(FormInputComponent);
