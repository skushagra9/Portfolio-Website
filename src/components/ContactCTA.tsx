"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";

export function ContactCTA() {
  // Scroll to the contact form section when the CTA button is clicked
  // Uses smooth scrolling to provide visual feedback to the user
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FadeIn className="w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="space-y-2">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground">
            Interested in collaborating on your next project?
          </p>
        </div>
        <Button onClick={handleScroll} size="lg" aria-label="Contact me by scrolling to the contact form" className="bg-pink-500 hover:bg-pink-600 text-white">
          Contact Me
        </Button>
      </div>
    </FadeIn>
  );
}
