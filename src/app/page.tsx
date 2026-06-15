import Header from "@/components/Heading"
import { Introduction } from "@/components/Introduction"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Experience"
import Project from "@/components/Projects"
import { Testimonials } from "@/components/Testimonials"
import ContactForm from "@/components/Contact"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center gap-y-24 w-full max-w-screen-lg mx-auto px-6 md:px-8 pb-24">
        <Introduction />
        <Skills />
        <Exp />
        <Project />
        <Testimonials />
        <ContactForm />
      </div>
    </div>
  )
}
