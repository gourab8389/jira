import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password must be at least 8 characters long."),
});
 

export const registerSchema = z.object({
    name: z.string().trim().min(1, "required"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long."),
  });