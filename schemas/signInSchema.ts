import * as z from "zod"

export const signInSchema = z.object({
    identifier: z.
        email({
          message: "Enter a valid email address",
        }),
    password: z
        .string()
        .min(1, {message: "Password is required"})
        .min(8, {message: "Password must be at least 8 characters long"})
        .regex(/[A-Z]/, { message: "Include at least one uppercase letter" })
        .regex(/[0-9]/, { message: "Include at least one number" }),
})