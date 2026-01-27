import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z.email({
      message: "Enter a valid email address",
    }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Include at least one uppercase letter" })
      .regex(/[0-9]/, { message: "Include at least one number" }),

    confirmPassword: z
      .string()
      .min(1, {
        message: "Please confirm your password",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don’t match. Please re-enter.",
  });