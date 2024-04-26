"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email format." }),
  password: z
    .string()
    .min(11, { message: "Password must be at least 11 characters." }),
});

export default function Home() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log("Nothing yet!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center min-w-96">
        <img
          src="/logoCedar.svg"
          alt="Company Logo"
          className="mb-10 max-w-40"
        />
        <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-[#012D67]">
          Sign in to your account
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center space-y-6 max-w-72 sm:max-w-full w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#65657B] tracking-wide">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className={cn(
                        "py-6 rounded-xl border-[#6D7088]",
                        fieldState.error && "border-destructive"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[#65657B] tracking-wide">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className={cn(
                        "py-6 rounded-xl border-[#6D7088]",
                        fieldState.error && "border-destructive"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#3667E9] text-lg font-bold rounded-xl py-6"
            >
              Sign in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
