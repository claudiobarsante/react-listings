import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from 'components/button';
import { FormInput } from 'components/input';
import { FormTextArea } from 'components/text-area';

const schema = z.object({
  fullname: z.string().min(5, { message: 'Full name must be at least 5 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phonenumber: z.string().min(6, { message: 'Phone number must be at least 6 characters' }),
  comments: z.string().min(10, { message: 'Comments must be at least 10 characters' })
});

type ContactForm = z.infer<typeof schema>;
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<ContactForm>();

  const handleContactFormSubmit: SubmitHandler<ContactForm> = (data: ContactForm) => {
    console.log('--data', data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleContactFormSubmit)}
      className="flex flex-col items-center justify-center gap-6 rounded-sm border border-zinc-200 bg-zinc-100 p-6"
    >
      <h3 className="font-semibold text-zinc-700">Contact Agent</h3>
      <FormInput id="fullname" type="text" placeholder="Full Name *" {...register('fullname')} />
      <FormInput id="email" type="email" placeholder="Email *" {...register('email')} />
      <FormInput id="phonenumber" type="number" placeholder="Phone Number *" {...register('phonenumber')} />
      <FormTextArea id="comments" placeholder="Comments *" {...register('comments')} />
      <Button disabled={isSubmitting} variant="primary" aria-label="contact now" className="px-12" type="submit">
        Contact Now
      </Button>
    </form>
  );
}
