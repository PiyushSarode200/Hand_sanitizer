"use client"

import { GitBranch, LayoutGrid, ZoomIn } from "lucide-react"
import Image from "next/image"

export function DiagramsSection() {
  return (
    <section id="diagrams" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            Technical Documentation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Diagrams
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visual representations of the production process
          </p>
        </div>

        {/* Diagrams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Process Flow Diagram */}
          <div className="group glass rounded-3xl p-6 border border-primary/20 hover:glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <GitBranch className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Process Flow Diagram</h3>
            </div>

            {/* Diagram Content */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
              <Image
                src="/images/process-diagram.jpg"
                alt="Process Flow Diagram"
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Fallback Text (Hidden when image loads over it) */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <span className="text-muted-foreground/50 text-sm">Please upload /images/process-diagram.jpg</span>
              </div>
            </div>

            {/* Zoom indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <ZoomIn className="h-4 w-4" />
              <span className="text-sm">Hover to view details</span>
            </div>
          </div>

          {/* Block Diagram */}
          <div className="group glass rounded-3xl p-6 border border-primary/20 hover:glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <LayoutGrid className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Block Diagram</h3>
            </div>

            {/* Diagram Content */}
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
              <Image
                src="/images/block-diagram.jpg"
                alt="Block Diagram"
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Fallback Text (Hidden when image loads over it) */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <span className="text-muted-foreground/50 text-sm">Please upload /images/block-diagram.jpg</span>
              </div>
            </div>

            {/* Zoom indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <ZoomIn className="h-4 w-4" />
              <span className="text-sm">Hover to view details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
