"use client"

import { Droplets, FlaskConical, Atom, Waves } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const ingredients = [
  {
    icon: FlaskConical,
    title: "Ethanol / Isopropyl Alcohol",
    description: "The primary active ingredient that kills bacteria and viruses by denaturing their proteins. Concentration of 60-80% is most effective for sanitization.",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    glowColor: "rgba(6, 182, 212, 0.4)",
    image: "/images/isopropyl-alcohol.jpg",
    animation: "slide-left",
    iconColor: "text-blue-400",
  },
  {
    icon: Droplets,
    title: "Glycerin",
    description: "A humectant that prevents skin dryness and irritation caused by alcohol. It moisturizes and softens the skin while maintaining the sanitizer's effectiveness.",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.4)",
    image: "/images/glycerin.jpg",
    animation: "slide-bottom",
    iconColor: "text-emerald-400",
  },
  {
    icon: Atom,
    title: "Hydrogen Peroxide",
    description: "Acts as a stabilizer and helps eliminate bacterial spores that may contaminate the mixture. Used in small concentrations (3%) for safety.",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    glowColor: "rgba(14, 165, 233, 0.4)",
    image: "/images/hydrogen-peroxide.jpg",
    animation: "slide-right",
    iconColor: "text-purple-400",
  },
  {
    icon: Waves,
    title: "Distilled Water",
    description: "Pure water free from impurities and minerals. Used to dilute the mixture to the optimal concentration for effective sanitization.",
    color: "from-indigo-500/20 to-cyan-500/20",
    borderColor: "border-indigo-500/30",
    glowColor: "rgba(99, 102, 241, 0.4)",
    image: "/images/distilled-water.jpg",
    animation: "ripple-fade",
    iconColor: "text-cyan-400",
  },
]

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-accent/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// Individual card component with 3D tilt effect
function IngredientCard({ 
  ingredient, 
  index, 
  isVisible 
}: { 
  ingredient: typeof ingredients[0]
  index: number
  isVisible: boolean 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 10, y: -x * 10 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (ingredient.animation) {
        case "slide-left":
          return "opacity-0 -translate-x-24"
        case "slide-bottom":
          return "opacity-0 translate-y-24"
        case "slide-right":
          return "opacity-0 translate-x-24"
        case "ripple-fade":
          return "opacity-0 scale-90"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-x-0 translate-y-0 scale-100"
  }

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-1000 ease-out ${getAnimationClass()}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect behind card */}
      <div 
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: ingredient.glowColor }}
      />
      
      <div 
        className={`relative glass rounded-3xl overflow-hidden border ${ingredient.borderColor} transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-2`}
        style={{
          boxShadow: `0 0 0 rgba(0,0,0,0), inset 0 0 0 rgba(255,255,255,0)`,
        }}
      >
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={ingredient.image}
            alt={ingredient.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
          
          {/* Icon overlay */}
          <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${ingredient.color} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20`}>
            <ingredient.icon className={`h-7 w-7 ${ingredient.iconColor}`} />
          </div>

          {/* Floating particles effect for this card */}
          {ingredient.animation === "slide-right" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-sky-400/50 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Ripple effect for water card */}
          {ingredient.animation === "ripple-fade" && isVisible && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-20 h-20 border border-indigo-400/30 rounded-full"
                    style={{
                      animation: `ripple 3s ease-out infinite`,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {ingredient.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {ingredient.description}
          </p>

          {/* Animated underline */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>

        {/* Decorative corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}

export function IngredientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="ingredients" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating particles */}
      <FloatingParticles />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4 border border-primary/20">
            Raw Materials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Key Ingredients
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Understanding the essential components that make an effective hand sanitizer
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={ingredient.title}
              ingredient={ingredient}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Custom keyframes for ripple */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
