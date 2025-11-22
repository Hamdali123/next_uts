import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal harus 2 karakter."),
  email: z.string().email("Alamat email tidak valid."),
  message: z.string().min(10, "Pesan minimal harus 10 karakter."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
