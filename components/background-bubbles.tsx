"use client"

import { useEffect, useState } from "react"

// Generate a random specific number of bubbles to prevent hydration mismatches
export function BackgroundBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number, size: number, left: number, duration: number, delay: number }>>([])
  const [molecules, setMolecules] = useState<Array<{ id: number, size: number, left: number, duration: number, delay: number }>>([])

  useEffect(() => {
    // Generate bubbles only on client side after mounting to avoid React hydration errors
    const bubbleCount = 20;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // 20px to 80px
      left: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 20 + 15, // 15s to 35s string
      delay: Math.random() * 10, // 0s to 10s
    }))
    setBubbles(newBubbles)

    // Generate molecules
    const moleculeCount = 12;
    const newMolecules = Array.from({ length: moleculeCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 40, // 40px to 100px
      left: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 30 + 25, // 25s to 55s, slower than bubbles
      delay: Math.random() * 15, 
    }))
    setMolecules(newMolecules)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
       {/* Ambient Aurora Background Color Tints */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-rose-600/20 blur-[150px] mix-blend-screen -z-30 opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen -z-30 opacity-60 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-red-500/10 blur-[150px] mix-blend-screen -z-30 opacity-50 animate-pulse" style={{ animationDuration: '15s' }}></div>

       {/* Background dark gradient to make bubbles pop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[50px] -z-20"></div>
      
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full border border-white/30 bg-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-md animate-ambient-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-100px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {/* Bubble glare */}
          <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-white/30 to-transparent blur-[1px]"></div>
        </div>
      ))}

      {/* Floating Molecules */}
      {molecules.map((mol) => (
        <div
          key={`mol-${mol.id}`}
          className="absolute text-white/10 animate-ambient-rotate-float"
          style={{
            width: `${mol.size}px`,
            height: `${mol.size}px`,
            left: `${mol.left}%`,
            bottom: `-150px`,
            animationDuration: `${mol.duration}s`,
            animationDelay: `${mol.delay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {/* Hexagon representing carbon ring/chemistry */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            {/* Hexagon base */}
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" strokeLinejoin="round" />
            
            {/* Internal abstract bonds */}
            <line x1="50" y1="10" x2="50" y2="40" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <line x1="15" y1="70" x2="40" y2="60" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            <line x1="85" y1="70" x2="60" y2="60" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
            
            {/* Central node */}
            <circle cx="50" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  )
}
