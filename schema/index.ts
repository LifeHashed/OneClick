import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    githubLink: z.string().url({
        message: "Please enter a valid GitHub URL"
    }).optional(),
    linkedinLink: z.string().url({
        message: "Please enter a valid LinkedIn URL"
    }).optional(),
    discordHandle: z.string().regex(/^.{3,32}#[0-9]{4}$/, {
        message: "Please enter a valid Discord handle (e.g., user#1234)"
    }).optional()
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
});



export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
})
})