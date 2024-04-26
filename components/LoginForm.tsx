"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { LoginSchema } from "@/lib/schemas/loginSchema";

export const LoginForm = () => {
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
  );
};
