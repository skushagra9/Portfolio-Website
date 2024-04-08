import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  message: z.string().max(250),
  name: z.string().max(50),
  SenderEmail: z.string().max(80),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function POST(request: Request) {
  const { message, name, SenderEmail }: ContactFormData = ContactFormSchema.parse(await request.json());
  try {
    if (!message) {
      return Response.json({
        error: "Invalid message",
      });
    }
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `skushagra.sharma@gmail.com`,
      subject: `${name} From Contact Form.`,
      reply_to: `${SenderEmail}`,
      text: `sender email: ${SenderEmail} 
     ${message}`,
    });

    return Response.json({
      success: "Successfully Recieved",
      message: "I will Contact You shortly"
    })

  } catch (error) {
    console.error("Error saving data to database:", error);
    return Response.json({ error: "Error saving data to database" });
  }
}
