import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().min(3).max(30),
  password: z.string().min(3).max(50),
  username: z.string().min(3).max(30),
});
const signInSchema = z.object({
  email: z.string().min(3).max(30),
  password: z.string().min(3).max(50),
});
const roomSchema = z.object({
  roomId: z.string().min(3).max(30),
});

export { signInSchema, signUpSchema, roomSchema };
