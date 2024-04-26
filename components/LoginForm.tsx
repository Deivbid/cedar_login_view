"use client";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { LoginField } from "./LoginField";

import { LoginSchema } from "@/lib/schemas/loginSchema";

type FieldName = "email" | "password";
interface Input {
  type: "custom";
  name: FieldName;
  message: string;
}

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setError, register, ...form } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (data: z.infer<typeof LoginSchema>) => {
    return await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleErrorResponse = async (response: Response) => {
    const errorData = await response.json();
    toast({
      variant: "destructive",
      title: "Login Failed",
      description:
        errorData.message || "Please check your credentials and try again.",
    });
    if (errorData.error) {
      const ErrorInputs: Input[] = [
        {
          type: "custom",
          name: "email",
          message: "Please check if this email is correct",
        },
        {
          type: "custom",
          name: "password",
          message: "Please check if this password is correct",
        },
      ];

      ErrorInputs.forEach(({ name, type, message }) =>
        setError(name, { type, message })
      );
    }
  };

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    try {
      const response = await login(data);
      if (response.ok) {
        toast({
          title: "Login Successful",
          description: "You are now logged in!",
        });
        router.push("/management");
      } else {
        await handleErrorResponse(response);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      toast({
        title: "Error",
        variant: "destructive",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form} setError={setError} register={register}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-6 max-w-72 sm:max-w-full w-full"
      >
        <LoginField name="email" label="Email address" type="email" />
        <LoginField name="password" label="Password" type="password" />

        <Button
          type="submit"
          className="w-full bg-[#3667E9] text-lg font-bold rounded-xl py-6"
        >
          {isLoading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Signing in
            </>
          ) : (
            <span> Sign in</span>
          )}
        </Button>
      </form>
    </Form>
  );
};
