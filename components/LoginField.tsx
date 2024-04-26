import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface LoginFieldProps {
  name: string;
  label: string;
  type: "email" | "password";
}

export const LoginField = ({ name, label, type }: LoginFieldProps) => {
  const { register, formState } = useFormContext();

  return (
    <FormField
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="w-full">
          <FormLabel className="text-[#65657B] tracking-wide">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              {...field}
              {...register(name)}
              className={cn(
                "py-6 rounded-xl border-[#6D7088]",
                fieldState?.error && "border-destructive"
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
