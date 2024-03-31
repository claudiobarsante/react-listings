import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from 'components/button';
import { FormInput } from 'components/input';
import { FormTextArea } from 'components/text-area';

const schema = yup.object({
  fullname: yup.string().required('Full name is required'),
  email: yup.string().required('E-mail is required').email('Invalid email address'),
  phonenumber: yup.string().required('Phone number is required'),
  comments: yup.string().required('Comments must be at least 10 characters')
});

type ContactForm = yup.InferType<typeof schema>;
export function Form() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      fullname: '',
      email: '',
      phonenumber: '',
      comments: ''
    }
  });

  const handleContactFormSubmit: SubmitHandler<ContactForm> = (data: ContactForm) => {
    console.log('--data sent--', data);
    toast.success('Your message has been sent', {
      position: 'top-center'
    });
    resetField('fullname');
    resetField('email');
    resetField('phonenumber');
    resetField('comments');
  };
  return (
    <form aria-labelledby="contact" onSubmit={handleSubmit(handleContactFormSubmit)}>
      <fieldset>
        <div className="flex flex-col items-center justify-center gap-6 rounded-sm border border-zinc-200 bg-zinc-100 p-6">
          <h2 id="contact" className="font-semibold text-zinc-700">
            Contact Agent
          </h2>

          <FormInput
            id="fullname"
            type="text"
            placeholder="Full Name *"
            {...register('fullname')}
            aria-label="full name"
            aria-invalid={errors.fullname ? 'true' : 'false'}
            error={errors.fullname?.message}
          />
          <FormInput
            id="email"
            type="email"
            placeholder="Email *"
            {...register('email')}
            aria-label="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            error={errors.email?.message}
          />
          <FormInput
            id="phonenumber"
            type="number"
            placeholder="Phone Number *"
            {...register('phonenumber')}
            aria-label="phone number"
            aria-invalid={errors.phonenumber ? 'true' : 'false'}
            error={errors.phonenumber?.message}
          />
          <FormTextArea
            id="comments"
            placeholder="Comments *"
            {...register('comments')}
            aria-label="comments"
            aria-invalid={errors.comments ? 'true' : 'false'}
            error={errors.comments?.message}
          />

          <Button
            disabled={isSubmitting}
            variant="primary"
            aria-label="contact now"
            className="mt-4 px-12"
            type="submit"
          >
            Contact Now
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
