"use client"

import { useState } from "react"
import { CheckCircle2, ShieldCheck, Activity, Zap, ClipboardCheck } from "lucide-react"

const checklists = [
  {
    id: "spore",
    title: "72-Hour Spore Eradication",
    description: "Hydrogen Peroxide completely neutralizes all bacterial spores present in the raw materials or storage containers.",
    icon: ShieldCheck,
  },
  {
    id: "ph",
    title: "Skin-Safe pH Balance Check",
    description: "Formulation maintains optimal slightly acidic pH, preventing skin irritation while remaining highly lethal to pathogens.",
    icon: Activity,
  },
  {
    id: "evap",
    title: "Rapid Evaporation Rate",
    description: "Ideal volatility of the 75% alcohol base guarantees the solution flash-dries without leaving sticky, non-hygienic residue.",
    icon: Zap,
  }
]

export function ResultsSection() {
  const [passed, setPassed] = useState<Record<string, boolean>>({})
  const [scanning, setScanning] = useState<Record<string, boolean>>({})

  const handleTest = (id: string) => {
    if (passed[id] || scanning[id]) return;
    
    // Start scanning
    setScanning(prev => ({ ...prev, [id]: true }))
    
    // Pass after 1.5s
    setTimeout(() => {
      setScanning(prev => ({ ...prev, [id]: false }))
      setPassed(prev => ({ ...prev, [id]: true }))
    }, 1500)
  }

  const allPassed = checklists.every(item => passed[item.id])

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-emerald-400 mb-4 border border-emerald-500/20">
            Quality Control
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Results & Efficacy Checklist
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Verifying the physical and chemical properties of the final Hand Sanitizer formulation.
          </p>
        </div>

        {/* Interactive Checklist UI */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`glass rounded-3xl p-6 md:p-10 border transition-all duration-700 ${allPassed ? 'border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.15)]' : 'border-primary/20'}`}>
            
            {/* Header / Summary */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className={`p-4 rounded-2xl transition-colors duration-500 ${allPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-primary/10 text-primary'}`}>
                <ClipboardCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Standardized Batch Testing</h3>
                <p className="text-muted-foreground">Click on each control parameter to initiate the validation scan.</p>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-4">
              {checklists.map((item, index) => {
                const isScanning = scanning[item.id]
                const isPassed = passed[item.id]

                return (
                  <div 
                    key={item.id}
                    onClick={() => handleTest(item.id)}
                    className={`relative overflow-hidden cursor-pointer rounded-2xl p-6 transition-all duration-500 flex items-center justify-between gap-6 border
                      ${isPassed 
                        ? 'bg-emerald-500/10 border-emerald-500/30' 
                        : isScanning 
                          ? 'bg-primary/5 border-primary/40'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                  >
                    {/* Scanning overlay beam */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full h-full animate-flow" style={{ animationDuration: '1s' }} />
                    )}
                    
                    {/* Content */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${isPassed ? 'text-emerald-400 bg-emerald-500/20' : 'text-muted-foreground bg-white/10'}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className={`text-lg font-bold transition-colors duration-300 ${isPassed ? 'text-emerald-400' : 'text-foreground'}`}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="shrink-0 relative z-10 flex items-center gap-3">
                      {isScanning && (
                        <>
                          <span className="text-sm font-semibold text-primary animate-pulse">Scanning...</span>
                          <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                        </>
                      )}
                      
                      {!isScanning && !isPassed && (
                        <span className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors">Run Test &rarr;</span>
                      )}

                      {isPassed && (
                        <>
                          <span className="text-sm font-bold text-emerald-400 glow-text">Passed</span>
                          <CheckCircle2 className="h-8 w-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* All Passed Footer Confirmation */}
            <div className={`mt-10 overflow-hidden transition-all duration-700 ${allPassed ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400">All Systems Verified</h4>
                  <p className="text-sm text-emerald-400/80">The formulation meets all international chemical safety standards.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
