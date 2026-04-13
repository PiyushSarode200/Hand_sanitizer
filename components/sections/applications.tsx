"use client"

import { 
  Hospital, School, Building2, Plane, 
  ShieldCheck, Zap, Sparkles, Timer, Droplets,
  AlertTriangle, Flame, Eye, Baby
} from "lucide-react"

const applications = [
  { icon: Hospital, label: "Healthcare Facilities", description: "Hospitals, clinics, and medical centers", iconColor: "text-rose-400" },
  { icon: School, label: "Educational Institutions", description: "Schools, colleges, and universities", iconColor: "text-yellow-400" },
  { icon: Building2, label: "Offices & Workplaces", description: "Corporate offices and factories", iconColor: "text-indigo-400" },
  { icon: Plane, label: "Travel & Transportation", description: "Airports, stations, and vehicles", iconColor: "text-cyan-400" },
]

const advantages = [
  { icon: ShieldCheck, label: "Kills 99.9% Germs", description: "Effective against bacteria and viruses" },
  { icon: Zap, label: "Quick Action", description: "Works within seconds of application" },
  { icon: Sparkles, label: "No Water Needed", description: "Convenient for on-the-go use" },
  { icon: Timer, label: "Long-lasting Effect", description: "Protection lasts for hours" },
  { icon: Droplets, label: "Moisturizing", description: "Glycerin prevents skin dryness" },
]

const disadvantages = [
  { icon: AlertTriangle, label: "Not for Visible Dirt", description: "Less effective on soiled hands" },
  { icon: Flame, label: "Flammable", description: "Contains alcohol, keep away from fire" },
  { icon: Eye, label: "Eye Irritant", description: "Avoid contact with eyes" },
  { icon: Baby, label: "Supervision Needed", description: "Children require adult supervision" },
]

export function ApplicationsSection() {
  return (
    <section id="applications" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            Practical Use
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Applications & Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Understanding where, why, and when to use hand sanitizers
          </p>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            Applications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((item) => (
              <div
                key={item.label}
                className="group glass rounded-2xl p-6 border border-primary/20 hover:glow transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages & Disadvantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Advantages */}
          <div className="glass rounded-3xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              Advantages
            </h3>
            <div className="space-y-4">
              {advantages.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors duration-300">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disadvantages */}
          <div className="glass rounded-3xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
              </div>
              Disadvantages
            </h3>
            <div className="space-y-4">
              {disadvantages.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors duration-300">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
