import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from 'components/button';
import { FormInput } from 'components/input';
import { FormTextArea } from 'components/text-area';

export function ContactForm() {
  return (
    <form className="flex flex-col items-center justify-center gap-6 rounded-sm border border-zinc-200 bg-zinc-100 p-6">
      <h3 className="font-semibold text-zinc-700">Contact Agent</h3>
      <FormInput id="full-name" name="full-name" type="text" placeholder="Full Name *" />
      <FormInput id="email" name="email" type="email" placeholder="Email *" />
      <FormInput id="phone-number" name="phone-number" type="number" placeholder="Phone Number *" />
      <FormTextArea id="comments" name="comments" placeholder="Comments *" />
      <Button variant="primary" aria-label="contact now" className="px-12">
        Contact Now
      </Button>
    </form>
  );
}
