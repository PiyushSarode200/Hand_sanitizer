"use client"

import { FlaskConical, Users, BookOpen, Sparkles, ShieldCheck, Microscope, Target } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  { name: "Abhijeet Damal", image: "/members/abhijeet.jpeg" },
  { name: "Piyush Sarode", image: "/members/piyush.jpeg" },
  { name: "Shravani Minache", image: "/members/shravani.jpeg" },
  { name: "Vikrant Haral", image: "/members/vikrant.jpeg" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-float">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            <span className="text-sm text-muted-foreground">Chemical Prototyping Project</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-vibrant">Hand Sanitizer</span>
            <br />
            <span className="text-gradient-primary glow-text">Preparation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Chemical Prototyping Experiment
          </p>

          {/* Team Members */}
          <div className="glass rounded-2xl p-6 md:p-8 mb-12 inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-5 w-5 text-rose-400" />
              <h3 className="text-lg font-semibold text-foreground">Group Members</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center gap-4 text-foreground hover:-translate-y-2 hover:glow-text transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-primary/20 shadow-xl transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-base md:text-lg font-bold text-center">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Info */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <BookOpen className="h-5 w-5 text-sky-400" />
            <span className="text-muted-foreground">Course: Chemical Prototyping</span>
          </div>

          {/* About Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center justify-center gap-3">
              <FlaskConical className="h-8 w-8 text-emerald-400 animate-pulse" />
              About This Project
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="glass p-6 md:p-8 rounded-2xl hover:glow transition-all duration-300 hover:-translate-y-1 cursor-default group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <ShieldCheck className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">The Need for Hygiene</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In today&apos;s world, maintaining proper hand hygiene is essential for preventing the spread of infectious diseases. Hand sanitizers are an indispensable tool when soap and water aren&apos;t readily available.
                </p>
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl hover:glow transition-all duration-300 hover:-translate-y-1 cursor-default group">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                  <Microscope className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Scientific Principles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This project explores the science behind formulation, breaking down the chemical properties and principles that make antiseptic solutions highly effective at destroying harmful pathogens.
                </p>
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl hover:glow transition-all duration-300 hover:-translate-y-1 cursor-default group md:col-span-2">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <Target className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Objective</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Through this chemical prototyping experiment, we demonstrate the practical application of chemical knowledge. We aim to understand the precise role of each ingredient and the chemical processes involved in producing a safe, efficient, and reliable hand sanitizer.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="glass rounded-2xl p-4 md:p-6 hover:glow transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=500&auto=format&fit=crop" 
                  alt="Lab Work" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <p className="mt-4 text-center font-bold text-foreground">Lab Work</p>
            </div>
            
            <div className="glass rounded-2xl p-4 md:p-6 hover:glow transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop" 
                  alt="Team Photo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <p className="mt-4 text-center font-bold text-foreground">Team Photo</p>
            </div>
            
            <div className="glass rounded-2xl p-4 md:p-6 hover:glow transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: "0.4s" }}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=500&auto=format&fit=crop" 
                  alt="Experiment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <p className="mt-4 text-center font-bold text-foreground">Experiment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
