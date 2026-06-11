import Header from "@/components/Heading"
import { Introduction } from "@/components/Introduction"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Experience"
import Project from "@/components/Projects"
import { IssuePanel } from "@/components/IssuePanel"
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
        <div className="w-full">
          <div className="mb-4">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-primary">Issue Tracker Demo</h3>
            <p className="text-sm text-muted-foreground mt-1">Interactive example of an issue panel with comments and replies</p>
          </div>
          <IssuePanel />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
