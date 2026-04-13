"use client"

import { useEffect, useRef, useState } from "react"
import { Beaker, Droplets, Atom, Waves, FlaskConical, CheckCircle2, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Beaker,
    title: "Measure Alcohol",
    description: "Carefully measure 400 mL of isopropyl alcohol or ethanol using a graduated cylinder for precision.",
    iconColor: "text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.5)",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Add Glycerin",
    description: "Add 7 mL of glycerin to provide moisturizing properties and prevent skin dryness.",
    iconColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.5)",
  },
  {
    number: "03",
    icon: Atom,
    title: "Add Hydrogen Peroxide",
    description: "Carefully add 21 mL of 3% hydrogen peroxide to eliminate any bacterial spores in the mixture.",
    iconColor: "text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.5)",
  },
  {
    number: "04",
    icon: Waves,
    title: "Add Distilled Water",
    description: "Pour distilled water up to 500 mL total volume to dilute the mixture to the optimal concentration.",
    iconColor: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.5)",
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Mix and Store",
    description: "Stir the mixture thoroughly for 30 seconds and transfer to a clean container. Let it rest for 72 hours before use.",
    iconColor: "text-fuchsia-400",
    glowColor: "rgba(232, 121, 249, 0.5)",
  },
]

function StepCard({ step, index, isVisible, totalSteps }: { 
  step: typeof steps[0]
  index: number
  isVisible: boolean
  totalSteps: number
}) {
  const isEven = index % 2 === 0
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 12, y: -x * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Node with Animation */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className={`relative transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } ${isHovered ? "scale-150" : ""}`}
          style={{ transitionDelay: isHovered ? '0ms' : `${index * 200}ms` }}
        >
          {/* Outer pulse ring */}
          <div className={`absolute inset-0 w-6 h-6 -translate-x-1 -translate-y-1 rounded-full ${isHovered ? 'bg-white/50' : 'bg-primary/30'} ${
            isVisible ? "animate-ping" : ""
          }`} style={{ animationDuration: isHovered ? "1s" : "2s" }} />
          {/* Inner glow */}
          <div className={`relative w-4 h-4 rounded-full ${isHovered ? 'bg-white' : 'bg-primary'} shadow-[0_0_20px_rgba(100,220,220,0.6)] transition-colors duration-300`}>
            <div className={`absolute inset-0 rounded-full ${isHovered ? 'bg-white' : 'bg-primary'} animate-pulse`} />
          </div>
        </div>
      </div>

      {/* Connecting Line Animation */}
      {index < totalSteps - 1 && (
        <div 
          className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-6 h-[calc(100%+1rem)] overflow-hidden"
          style={{ width: isHovered ? "4px" : "2px", transition: "width 0.3s" }}
        >
          <div 
            className={`w-full transition-all duration-1000 ease-out ${
              isVisible ? "h-full" : "h-0"
            } ${isHovered ? 'bg-gradient-to-b from-white via-primary to-transparent' : 'bg-gradient-to-b from-primary via-primary/50 to-transparent'}`}
            style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 300}ms` }}
          />
          {/* Flowing particle effect */}
          <div 
            className={`absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/80 to-transparent ${
              isVisible ? "animate-flow-down" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 200 + 500}ms`, animationDuration: isHovered ? '1s' : '2s' }}
          />
        </div>
      )}

      {/* Content Card with 3D Tilt */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"} transition-all duration-700 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0 translate-y-0" 
            : `opacity-0 ${isEven ? "-translate-x-12" : "translate-x-12"} translate-y-4`
        }`}
        style={{ 
          transitionDelay: isHovered ? '0ms' : `${index * 200 + 100}ms`,
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          zIndex: isHovered ? 20 : 1
        }}
      >
        <div className="glass rounded-2xl p-6 relative overflow-hidden transition-all duration-500"
          style={{
             boxShadow: isHovered ? `0 20px 40px -10px ${step.glowColor}` : 'none',
             borderColor: isHovered ? 'rgba(255,255,255,0.3)' : '',
          }}
        >
          {/* Giant Watermark Background Number */}
          <div className={`absolute -right-4 -bottom-10 text-[120px] font-black pointer-events-none transition-all duration-700
            ${isHovered ? 'text-white/10 scale-110 translate-y-[-10px] translate-x-[-10px]' : 'text-primary/5'}
          `}>
            {step.number}
          </div>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000" style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }} />
          </div>

          {/* Step Number & Icon */}
          <div className="flex items-center gap-4 mb-4 relative z-10 pointer-events-none">
            <span 
              className={`text-5xl font-bold transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              } ${isHovered ? step.iconColor : 'text-primary/20'}`}
              style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 200}ms` }}
            >
              {step.number}
            </span>
            <div 
              className={`p-3 rounded-xl border transition-all duration-500 ${
                isVisible ? "rotate-0 opacity-100" : "rotate-12 opacity-0"
              } ${isHovered ? 'bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-primary/10 border-primary/20'}`}
              style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 250}ms` }}
            >
              <step.icon className={`h-6 w-6 transition-transform duration-300 ${step.iconColor} ${isHovered ? 'scale-125' : ''}`} />
            </div>
          </div>

          {/* Title with underline animation */}
          <div className="relative mb-3 pointer-events-none">
            <h3 
              className={`text-xl font-bold transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              } ${isHovered ? 'text-white' : 'text-foreground'}`}
              style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 300}ms` }}
            >
              {step.title}
            </h3>
            <div 
              className={`h-0.5 mt-2 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                width: isHovered ? '100%' : '40%',
                background: isHovered ? `linear-gradient(to right, ${step.glowColor}, transparent)` : 'linear-gradient(to right, rgba(0,200,200,0.5), transparent)',
                transitionDelay: isHovered ? '0ms' : `${index * 200 + 400}ms` 
              }}
            />
          </div>

          {/* Description */}
          <p 
            className={`text-muted-foreground leading-relaxed mb-4 transition-all duration-500 relative z-10 pointer-events-none ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } ${isHovered ? 'text-white/90' : ''}`}
            style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 350}ms` }}
          >
            {step.description}
          </p>

          {/* Check indicator with animation */}
          <div 
            className={`flex items-center gap-2 transition-all duration-500 relative z-10 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } ${isHovered ? step.iconColor : 'text-primary/60'}`}
            style={{ transitionDelay: isHovered ? '0ms' : `${index * 200 + 450}ms` }}
          >
            <CheckCircle2 className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
            <span className="text-sm font-medium">Phase {index + 1} of {totalSteps}</span>
            <Sparkles className={`h-3 w-3 ml-auto transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
          </div>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  )
}

export function ProcedureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the visibility of steps
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="procedure" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4 animate-pulse">
            Step by Step
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Procedure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Follow these steps carefully to prepare your hand sanitizer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Base vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/5 to-transparent transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <StepCard 
              key={step.number} 
              step={step} 
              index={index} 
              isVisible={visibleSteps[index]}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>

      {/* Custom animation keyframes via style tag */}
      <style jsx>{`
        @keyframes flow-down {
          0% {
            transform: translateY(-50%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }
        .animate-flow-down {
          animation: flow-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
