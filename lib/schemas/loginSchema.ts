import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format." }).nonempty("Email is required."),
    password: z.string().nonempty("Password is required."),
});
  