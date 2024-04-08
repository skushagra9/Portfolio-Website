"use client"
import { useState, useRef } from 'react'; // Add import for useRef
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input"; // Assuming Input component is imported from "./ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useToast } from './ui/use-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast()

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const SenderEmail = formData.get('SenderEmail');
    const message = formData.get('message');
    try {
      const result = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, SenderEmail, message }),
      });

      const data = await result.json();
      if (!data.error) {
        toast({
          title: data.success,
          description: data.message,
          variant: "error"
        })

        formRef.current?.reset();
      }
    } catch (error) {
      toast({
        title: "Error Sending the Form",
        description: "Please Try Again",
        variant: "error"
      })

      console.error(error)
    }
  };

  return (
    <div id="contact" className="max-w-screen-lg mx-auto mt-16 px-8 md:p-0 flex flex-col items-center gap-y-4">
      <span className="text-indigo-900 dark:text-indigo-300 font-bold">
        📞 Contact Me
      </span>
      <div>
        <Card>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <CardHeader>
              <CardTitle className="icon_underline">Send me a mail.</CardTitle>
              <CardDescription>
                After submitting the form, a toast message will appear for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="SenderEmail"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                <Label htmlFor="message">Your Message</Label>
                <textarea
                  placeholder="Your message here..."
                  name="message"
                  required
                  className="resize-none flex min-h-[80px] w-full rounded-md bg-background dark:bg-indigo-100 px-3 py-2 text-sm text-black ring-offset-background dark:placeholder:text-muted focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" variant={"destructive"}>
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
