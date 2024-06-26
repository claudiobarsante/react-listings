import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormInputProps = {
  error: string | undefined;
} & ComponentProps<'input'>;
// -- add forwardRef in order to use 'register' - register uses ref -  (react-hook-form) - see documentation
const FormInputComponent: React.ForwardRefRenderFunction<HTMLInputElement, FormInputProps> = (props, ref) => {
  const { error } = props;
  return (
    <div className="relative flex w-full flex-col justify-start">
      <input
        ref={ref}
        className={twMerge(
          'w-full rounded-sm border border-zinc-300 p-1 font-medium',
          'text-md text-zinc-700 placeholder-zinc-400 shadow-sm outline-none',
          'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
        )}
        {...props}
      />
      <span role="alert" className="absolute left-1 top-8 text-xs font-medium text-red-500">
        {error?.toString()}
      </span>
    </div>
  );
};

export const FormInput = forwardRef(FormInputComponent);
