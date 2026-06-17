"use client"
import { useRef, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from './ui/use-toast';
import { FadeIn } from './FadeIn';
import { Spinner } from './ui/spinner';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-lg">
      <FadeIn>
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm text-muted-foreground">
              Have a project in mind? Drop me a message.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="bg-secondary/30 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                type="email"
                name="SenderEmail"
                id="email"
                required
                placeholder="you@example.com"
                className="bg-secondary/30 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">Message</Label>
              <textarea
                placeholder="What's on your mind?"
                name="message"
                id="message"
                required
                rows={4}
                className="flex w-full rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactForm;
