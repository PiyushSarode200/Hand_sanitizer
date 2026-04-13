"use client"

import { useState, useEffect } from "react"
import { Menu, X, FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home", activeColor: "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]", hoverColor: "hover:text-blue-400" },
  { label: "Ingredients", href: "#ingredients", activeColor: "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]", hoverColor: "hover:text-emerald-400" },
  { label: "Procedure", href: "#procedure", activeColor: "text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]", hoverColor: "hover:text-fuchsia-400" },
  { label: "Process Flow", href: "#process-flow", activeColor: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]", hoverColor: "hover:text-cyan-400" },
  { label: "Diagrams", href: "#diagrams", activeColor: "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]", hoverColor: "hover:text-indigo-400" },
  { label: "Results", href: "#results", activeColor: "text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]", hoverColor: "hover:text-emerald-500" },
  { label: "Gallery", href: "#gallery", activeColor: "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]", hoverColor: "hover:text-violet-400" },
  { label: "Applications", href: "#applications", activeColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]", hoverColor: "hover:text-amber-400" },
  { label: "Acknowledgment", href: "#acknowledgment", activeColor: "text-rose-400 drop-shadow-[0_0_8px_rgba(2fb,113,133,0.8)]", hoverColor: "hover:text-rose-400" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,200,200,0.1)]"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,200,200,0.4)]">
              <FlaskConical className="h-5 w-5 text-cyan-400" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 to-teal-400/0 group-hover:from-cyan-400/10 group-hover:to-teal-400/10 transition-all duration-300" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent hidden sm:block">
              Hand Sanitizer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center p-1.5 rounded-full bg-[#0d1525]/60 backdrop-blur-xl border border-cyan-500/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group",
                    isActive
                      ? item.activeColor
                      : `text-gray-400 ${item.hoverColor}`
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,200,200,0.2)]" />
                  )}
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 transition-opacity duration-300" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,200,0.3)]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-cyan-400" />
            ) : (
              <Menu className="h-5 w-5 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="rounded-2xl bg-[#0d1525]/90 backdrop-blur-xl border border-cyan-500/20 p-3 shadow-[0_8px_32px_rgba(0,200,200,0.1)]">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn(
                    "relative flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 animate-in fade-in slide-in-from-left-4",
                    isActive
                      ? `${item.activeColor} bg-white/5 border border-white/10`
                      : `text-gray-400 ${item.hoverColor} hover:bg-white/5`
                  )}
                >
                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gradient-to-b from-cyan-400 to-teal-400 shadow-[0_0_10px_rgba(0,200,200,0.6)]" />
                  )}
                  <span className="ml-2">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
