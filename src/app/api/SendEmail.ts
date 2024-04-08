import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
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
    success: "Successfully Sent",
    message: "I will Contact You shortly"
  })

};
