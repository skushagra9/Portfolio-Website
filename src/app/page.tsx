import Header from "@/components/Heading"
import { Introduction } from "@/components/Introduction"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Experience"
import Project from "@/components/Projects"

export default function Home() {
  return (

    <div className="flex flex-col items-center ">
      <Header />
      <Introduction />

      <Skills />
      <Exp />
      <Project />

    </div>
  )
}
