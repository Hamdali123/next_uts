"use server";

import { z } from "zod";
import { contactSchema } from "@/lib/schemas";

export type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  data: z.infer<typeof contactSchema>
): Promise<ContactFormState> {
  // In a real app, you'd integrate with an email service or save to a database.
  console.log("New contact form submission:", data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
