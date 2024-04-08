import Header from "@/components/Heading"
import { Introduction } from "@/components/Introduction"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Experience"
import Project from "@/components/Projects"
import ContactForm from "@/components/Contact"

export default function Home() {
  return (

    <div className="flex flex-col items-center gap-y-12">
      <Header />
      <Introduction />
      <Skills />
      <Exp />
      <Project />
      <ContactForm />
    </div>
  )
}
