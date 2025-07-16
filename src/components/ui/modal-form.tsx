"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// User schema based on your user-types
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  website: z.string().url("Invalid website"),
  address: z.string().min(1, "Address is required"),
  company: z.object({
    name: z.string().min(1, "Company name is required"),
    catchPhrase: z.string().min(1, "Catch phrase is required"),
    bs: z.string().min(1, "Business slogan is required"),
  }),
});

type UserFormData = z.infer<typeof userSchema>;

export default function ModalForm({
  onSubmit,
}: {
  onSubmit?: (data: UserFormData) => void;
}) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit || (() => {}))}
        className="space-y-8 p-2"
      >
        <section className="border-b border-[var(--border-light)] pb-8">
          <h3 className="font-semibold mb-2 ">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="Website" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input placeholder="Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
        <section className="border-b border-[var(--border-light)] pb-8">
          <h3 className="font-semibold mb-2 mt-4">Company</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="company.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company.catchPhrase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catch Phrase</FormLabel>
                  <FormControl>
                    <Input placeholder="Catch Phrase" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company.bs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Slogan</FormLabel>
                  <FormControl>
                    <Input placeholder="Business Slogan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[var(--primary-dark)] cursor-pointer text-white px-4 py-2 rounded hover:bg-[var(--primary-dark)] w-full"
          >
            Create User
          </Button>
        </div>
      </form>
    </Form>
  );
}
