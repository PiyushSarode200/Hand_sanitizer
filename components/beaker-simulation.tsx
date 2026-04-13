"use client"

import { useState, useEffect } from "react"
import { Play, RotateCcw, Droplets, CheckCircle2, ChevronRight } from "lucide-react"

const simulationSteps = [
  { id: 1, title: "1. Measure Alcohol", desc: "Pouring Isopropyl Alcohol into the beaker as the main solvent." },
  { id: 2, title: "2. Add Glycerin", desc: "Dropping thick glycerin to provide emollient properties." },
  { id: 3, title: "3. Hydrogen Peroxide", desc: "Chemical reaction eliminates bacterial spores (bubbles form)." },
  { id: 4, title: "4. Distilled Water", desc: "Diluting the mixture to optimal concentration." },
  { id: 5, title: "5. Mixing", desc: "Stirring thoroughly to ensure a homogenous solution." },
  { id: 6, title: "6. Final Product", desc: "Sanitizer is bottled and ready for 72-hour resting phase." },
]

export function BeakerSimulation() {
  const [activeStep, setActiveStep] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-advance step logic if needed, or trigger animations per step
  useEffect(() => {
    // When step changes, trigger an animation state if we want specific timed events
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 3500)
    return () => clearTimeout(timer)
  }, [activeStep])

  // Computed layout state properties based on activeStep
  const liquidHeight = 
    activeStep === 1 ? "30%" : 
    activeStep === 2 ? "35%" : 
    activeStep === 3 ? "40%" : 
    activeStep === 4 ? "75%" : 
    activeStep === 5 ? "75%" : "100%"
  
  const isBottleShape = activeStep === 6

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mt-16 p-2">
      
      {/* LEFT SIDE: VISUAL SIMULATION */}
      <div className="glass rounded-3xl p-8 flex flex-col items-center justify-end relative h-[500px] border border-primary/20 overflow-hidden shadow-2xl">
        
        {/* Glow effect on step 6 */}
        {activeStep === 6 && (
          <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow transition-all duration-1000 z-0"></div>
        )}

        {/* Unified locked 320x350 coordinate space */}
        <div className="relative z-10 w-[320px] h-[350px] mx-auto mt-12 mb-8">
          
          {/* Animated Stream from Flask (Step 1 & 4) */}
          {(activeStep === 1 || activeStep === 4) && isAnimating && (
            <div className="absolute top-[68px] left-[155px] flex flex-col items-center z-30 w-2.5">
              <div className={`w-full h-[230px] rounded-full mix-blend-screen animate-pour shadow-[0_0_15px_rgba(100,220,220,1)] ${
                activeStep === 1 ? "bg-blue-300/80" : "bg-indigo-200/70"
              }`}></div>
            </div>
          )}

          {/* Droplets (Step 2 & 3) */}
          {(activeStep === 2 || activeStep === 3) && (
            <div className="absolute top-[40px] left-[155px] flex flex-col items-center gap-6 z-20 w-2.5">
              {[1, 2, 3].map((drop) => (
                <div 
                  key={drop} 
                  className={`w-4 h-6 rounded-full animate-pulse blur-[1px] shadow-[0_0_10px_rgba(255,255,255,0.8)] ${
                    activeStep === 2 ? "bg-white/90" : "bg-teal-100/80"
                  }`}
                  style={{ animation: `fall-droplet 1.5s infinite ${drop * 0.4}s` }}
                ></div>
              ))}
            </div>
          )}

          {/* SVGs Container */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
            
            {/* Flask SVG (Steps 1 & 4) */}
            <svg 
              className={`absolute top-[20px] left-[160px] w-24 h-24 transform origin-center transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) ${
                (activeStep === 1 || activeStep === 4) ? "translate-x-0 translate-y-0 rotate-[-95deg] opacity-100" : "translate-x-[30px] -translate-y-[20px] rotate-[0deg] opacity-0"
              }`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
            >
              <path className="text-muted-foreground" d="M10 2v7.31M14 2v7.31M8.5 2h7" />
              <path className={`transition-colors duration-1000 ${
                activeStep === 1 ? "text-blue-400/80 fill-blue-400/20" : "text-indigo-400/80 fill-indigo-400/20"
              }`} d="M14 9.3V1.99h-4v7.31L4.6 16.25c-.34.45-.44 1.05-.2 1.62.24.58.82.93 1.48.93h12.24c.66 0 1.24-.35 1.48-.93.24-.58.14-1.17-.2-1.62L14 9.3z" />
            </svg>

            {/* Realistic Dropper (Step 2 & 3) */}
            <div 
              className={`absolute top-[-35px] left-[142px] flex flex-col items-center transition-all duration-700 ease-out z-30 ${
                (activeStep === 2 || activeStep === 3) ? "translate-y-[40px] opacity-100" : "-translate-y-[20px] opacity-0"
              }`}
            >
               {/* Rubber Bulb */}
               <div className="w-8 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-[20px] rounded-b-sm border-x border-t border-gray-500 shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.5),_0_5px_10px_rgba(0,0,0,0.3)] z-10 flex flex-col items-center justify-end">
                 {/* Bulb Grip Ridges */}
                 <div className="w-full h-[2px] bg-gray-600/50 mb-1"></div>
                 <div className="w-full h-[2px] bg-gray-600/50 mb-1"></div>
                 <div className="w-full h-[2px] bg-gray-600/50 mb-1"></div>
                 {/* Bulb Flange */}
                 <div className="w-10 h-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-sm border border-gray-900 mb-[-2px] shadow-sm"></div>
               </div>
               
               {/* Glass Tube */}
               <div className="w-3.5 h-20 bg-white/10 glass border-l border-r border-b border-white/60 rounded-b-full rounded-t-sm z-0 relative overflow-hidden flex flex-col justify-end shadow-[inset_2px_0_4px_rgba(255,255,255,0.6),_inset_-1px_0_3px_rgba(0,0,0,0.2)]">
                  {/* Glare stripe */}
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-white/80 z-20"></div>
                  
                  {/* Internal Liquid Core (Drains out as it drops) */}
                  <div 
                     className={`w-full transition-all duration-[2000ms] ease-in-out relative z-10 ${
                       activeStep === 2 ? "bg-white/70 h-[30%]" : 
                       activeStep === 3 ? "bg-teal-200/50 h-[40%]" : "h-[80%]"
                     }`}
                  ></div>
               </div>
            </div>

            {/* Stirring Rod (Step 5) */}
            <div 
              className={`absolute top-[40px] left-[155px] w-3 h-48 bg-gradient-to-b from-white/90 to-white/20 rounded-full transition-all duration-1000 origin-top shadow-lg ${
                activeStep === 5 ? "opacity-100 animate-stir" : "opacity-0 -translate-y-20"
              }`}
            ></div>

            {/* Sanitizer Pump Head (Step 6) */}
            <div 
              className={`absolute bottom-[212px] left-[128px] flex flex-col items-center transition-all duration-1000 ${
                activeStep === 6 ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
            >
              {/* Pump Spout */}
              <div className="w-16 h-4 bg-muted-foreground/80 rounded-t-lg rounded-br-2xl transform -translate-x-4"></div>
              {/* Pump Neck */}
              <div className="w-8 h-10 bg-muted-foreground border border-gray-600/50">
                <div className="w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)]"></div>
              </div>
              {/* Bottle Cap */}
              <div className="w-16 h-8 bg-foreground rounded-md shadow-lg flex items-center justify-center border-t-2 border-white/20">
                <div className="w-full h-1 bg-white/10"></div>
              </div>
            </div>
          </div>

          {/* BEAKER / BOTTLE CONTAINER */}
          <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 flex flex-col items-center z-20">
            {/* Realistic Beaker Rim & Spout (Hidden in Step 6) */}
            <div className={`absolute -top-1.5 w-[108%] h-4 border-[3px] border-primary/50 rounded-full transition-opacity duration-500 z-30 shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${isBottleShape ? "opacity-0" : "opacity-100"}`}>
               {/* Spout sticking out top-left */}
               <div className="absolute -left-3 top-[-1px] w-6 h-5 bg-transparent border-t-[3px] border-l-[3px] border-primary/50 transform rotate-[-30deg] rounded-tl-xl"></div>
               {/* Glass rim glare */}
               <div className="absolute inset-0 rounded-full border-t border-white/60"></div>
            </div>

            <div 
              className={`relative w-40 sm:w-48 transition-all duration-1000 overflow-hidden border-primary/50 glass z-20 ${
                isBottleShape 
                  ? "h-[220px] rounded-3xl border-4 shadow-[0_0_50px_rgba(100,220,220,0.5)] bg-primary/10" 
                  : "h-48 rounded-b-[35px] border-b-[6px] border-x-4 border-t-0 shadow-[inset_20px_0_30px_rgba(255,255,255,0.15),_inset_-20px_0_30px_rgba(255,255,255,0.05),_0_15px_25px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Glass surface reflection */}
              <div className="absolute top-0 right-4 w-4 h-full bg-gradient-to-b from-white/20 to-transparent rounded-full blur-md z-30 opacity-50 transform skew-x-[-5deg]"></div>

              {/* Liquid Fill */}
              <div 
                className={`absolute bottom-0 left-[-10%] right-[-10%] bg-gradient-to-t transition-all duration-[2500ms] ease-in-out ${
                  activeStep === 5 ? "animate-swirl blur-[1px]" : "rounded-t-lg"
                } ${
                  activeStep === 1 ? "from-blue-400/40 via-blue-200/50 to-white/70" :
                  activeStep === 2 ? "from-cyan-400/40 via-cyan-200/50 to-white/60" :
                  activeStep === 3 ? "from-teal-400/40 via-teal-200/50 to-white/60" :
                  activeStep === 4 ? "from-indigo-400/30 via-blue-300/40 to-blue-100/60" :
                  activeStep === 5 ? "from-purple-400/40 via-cyan-300/50 to-blue-300/60" :
                  "from-primary via-accent to-primary/80 opacity-90"
                }`}
                style={{ height: liquidHeight }}
              >
                {/* Liquid Surface Oval for 3D depth */}
                <div className={`absolute top-[-5px] left-0 w-full h-[10px] rounded-[50%] bg-white/30 border border-white/20 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-opacity duration-500 ${isBottleShape ? "opacity-0" : "opacity-100"}`}></div>
              </div>

              {/* Measuring Marks with Text */}
              <div className={`absolute left-0 bottom-[10%] h-[80%] w-8 border-r-2 border-primary/30 flex flex-col justify-between py-2 transition-opacity duration-500 font-mono text-[10px] text-primary/70 font-semibold z-30 ${isBottleShape ? "opacity-0" : "opacity-100"}`}>
                <div className="w-full flex items-center justify-end pr-1"><span className="absolute left-1">200</span><div className="w-2 h-[2px] bg-primary/50"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><div className="w-1 h-[2px] bg-primary/30"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><span className="absolute left-1">150</span><div className="w-2 h-[2px] bg-primary/50"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><div className="w-1 h-[2px] bg-primary/30"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><span className="absolute left-1">100</span><div className="w-2 h-[2px] bg-primary/50"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><div className="w-1 h-[2px] bg-primary/30"></div></div>
                <div className="w-full flex items-center justify-end pr-1"><span className="absolute left-1">50</span><div className="w-2 h-[2px] bg-primary/50"></div></div>
              </div>

              {/* Bubble Particles (Step 3) */}
              {activeStep === 3 && (
                <div className="absolute bottom-4 left-0 w-full h-full overflow-hidden z-20">
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bottom-0 w-2.5 h-2.5 border border-white/60 bg-white/30 rounded-full animate-float-up-bubble filter drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
                      style={{ 
                        left: `${15 + Math.random() * 70}%`,
                        animationDuration: `${1 + Math.random() * 1.5}s`,
                        animationDelay: `${Math.random() * 1.5}s`,
                        animationIterationCount: 'infinite'
                      }}
                    ></div>
                  ))}
                </div>
              )}
              
              {/* Medical Cross Logo on Bottle (Step 6) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 delay-500 z-30 ${isBottleShape ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-[3px] border-white/40 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                   <div className="text-white font-black text-3xl tracking-tighter drop-shadow-md">70%</div>
                 </div>
              </div>
            </div>
          </div>
        </div>  
        <div className="mt-8 font-bold text-primary tracking-widest uppercase text-sm">
          {isBottleShape ? "Hand Sanitizer" : "Reaction Vessel"}
        </div>
      </div>

      {/* RIGHT SIDE: CONTROLS */}
      <div className="flex flex-col justify-center gap-4">
        <div className="mb-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
            Reaction Timeline
          </h3>
          <p className="text-muted-foreground mt-2">
            Click on any step to visualize the formulation process mechanically.
          </p>
        </div>

        <div className="space-y-3">
          {simulationSteps.map((step) => {
            const isActive = activeStep === step.id
            const isCompleted = activeStep > step.id

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                  isActive 
                    ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(100,220,220,0.15)]" 
                    : isCompleted
                      ? "bg-muted/30 border-primary/10 hover:border-primary/30"
                      : "bg-background border-border hover:border-primary/30"
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_var(--primary)]"></div>
                )}
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isActive ? "bg-primary text-background" : isCompleted ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-sm font-bold">{step.id}</span>}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}>
                      {step.title}
                    </h4>
                    {isActive && (
                      <p className="text-sm text-muted-foreground mt-1 animate-in fade-in slide-in-from-top-2 duration-500">
                        {step.desc}
                      </p>
                    )}
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? "text-primary translate-x-1" : "text-muted-foreground group-hover:translate-x-1"
                  }`} />
                </div>
              </button>
            )
          })}
        </div>
        
        {/* Playback Controls Backup */}
        <div className="flex items-center gap-4 mt-6">
          <button 
            onClick={() => setActiveStep(prev => prev < 6 ? prev + 1 : 1)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 glass rounded-full hover:glow transition-all duration-300 text-primary font-medium"
          >
            {activeStep === 6 ? (
              <><RotateCcw className="w-4 h-4" /> Restart Process</>
            ) : (
              <><Play className="w-4 h-4" /> Next Step</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
