import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format." }),
    password: z
      .string()
      .min(11, { message: "Password must be at least 11 characters." }),
  });
  