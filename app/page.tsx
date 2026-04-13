import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { IngredientsSection } from "@/components/sections/ingredients"
import { ProcedureSection } from "@/components/sections/procedure"
import { ProcessFlowSection } from "@/components/sections/process-flow"
import { DiagramsSection } from "@/components/sections/diagrams"
import { ResultsSection } from "@/components/sections/results"
import { GallerySection } from "@/components/sections/gallery"
import { ApplicationsSection } from "@/components/sections/applications"
import { AcknowledgmentSection } from "@/components/sections/acknowledgment"
import { BackgroundEffects } from "@/components/background-effects"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <IngredientsSection />
      <ProcedureSection />
      <ProcessFlowSection />
      <DiagramsSection />
      <ResultsSection />
      <GallerySection />
      <ApplicationsSection />
      <AcknowledgmentSection />
    </main>
  )
}
