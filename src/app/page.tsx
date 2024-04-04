import Header from "@/components/Heading"
import { Introduction } from "@/components/Introduction"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Experience"

export default function Home() {
  return (
    <div>

      <div className="flex flex-col items-center justify-center">
        <Header />
        <Introduction />

        <Skills />
        <Exp />
      </div>

    </div>
  )
}
