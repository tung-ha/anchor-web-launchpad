import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  business: z.string().min(2, "Please enter your business name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a contact number"),
  message: z.string().min(10, "A sentence or two about what you need is plenty"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", business: "", email: "", phone: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    // Placeholder: enquiries aren't sent anywhere yet.
    console.log("Enquiry", values);
    toast.success("Thanks — your enquiry has been received.", {
      description: "I'll get back to you within one business day.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">Contact</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] font-extrabold md:text-5xl">
            Let's get your business online properly
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
            Send a few details and I'll come back with honest advice and a fixed price. No
            obligation, no sales pitch, no jargon.
          </p>

          <ul className="mt-9 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-brand" />
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="size-4 text-brand" />
              {site.location}
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-card p-7 text-card-foreground shadow-lift md:p-9">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input placeholder="Sam Taylor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="business"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business name</FormLabel>
                      <FormControl>
                        <Input placeholder="Taylor Plumbing" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="sam@example.com.au" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="0400 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you need?</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="A bit about your business and what you'd like your website to do."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="brand" size="xl" className="w-full">
                Send my enquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
