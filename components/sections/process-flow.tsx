"use client"

import { Package, Blend, Zap, Archive, CheckCircle, ArrowRight } from "lucide-react"
import { BeakerSimulation } from "@/components/beaker-simulation"

const processSteps = [
  {
    icon: Package,
    label: "Raw Materials",
    description: "Gather all ingredients",
    iconColor: "text-amber-400",
  },
  {
    icon: Blend,
    label: "Mixing",
    description: "Combine components",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    label: "Reaction",
    description: "Chemical bonding",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: Archive,
    label: "Storage",
    description: "Rest for 72 hours",
    iconColor: "text-blue-400",
  },
  {
    icon: CheckCircle,
    label: "Final Product",
    description: "Ready to use",
    iconColor: "text-emerald-400",
  },
]

export function ProcessFlowSection() {
  return (
    <section id="process-flow" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            Visual Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Process Flow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A visual representation of the hand sanitizer production process
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2" />
            
            {/* Animated Flow */}
            <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 overflow-hidden">
              <div className="h-full w-32 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow" />
            </div>

            {processSteps.map((step, index) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center">
                {/* Node */}
                <div className="group">
                  <div className="w-24 h-24 glass rounded-2xl flex items-center justify-center border border-primary/30 group-hover:glow transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                    <step.icon className={`h-10 w-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Label */}
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.label}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-primary/50">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Flow */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.label} className="relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-primary/20" />
                )}

                <div className="flex items-start gap-6">
                  {/* Node */}
                  <div className="glass rounded-2xl p-4 border border-primary/30 shrink-0">
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-4 flex-1">
                    <h4 className="font-bold text-foreground mb-1">{step.label}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Beaker Simulation */}
        <div className="mt-24 mb-10 w-full relative z-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 glass rounded-full text-sm text-accent mb-4 animate-pulse">
              Interactive View
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Real-time Reaction Process
            </h3>
            <p className="text-muted-foreground">
              Watch step-by-step how the chemical components interact.
            </p>
          </div>
          <BeakerSimulation />
        </div>
      </div>
    </section>
  )
}
