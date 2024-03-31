import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormTextAreaProps = {
  error: string | undefined;
} & ComponentProps<'textarea'>;
// -- had to add forwardRef in order to register the component's ref (react-hook-form)
const FormTextAreaComponent: React.ForwardRefRenderFunction<HTMLTextAreaElement, FormTextAreaProps> = (props, ref) => {
  const { error } = props;
  return (
    <div className="relative flex w-full flex-col justify-start">
      <textarea
        ref={ref}
        className={twMerge(
          'min-h-[120px] w-full rounded-sm border border-zinc-300 p-1 font-medium',
          'text-md text-zinc-700 placeholder-zinc-400 shadow-sm outline-none',
          'focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200'
        )}
        {...props}
      />
      <span role="alert" className="absolute  -bottom-4 left-1 text-xs font-medium text-red-500">
        {error?.toString()}
      </span>
    </div>
  );
};
export const FormTextArea = forwardRef(FormTextAreaComponent);
