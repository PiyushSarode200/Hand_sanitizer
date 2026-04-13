"use client"

import { useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, Video, X, ZoomIn, Play, FlaskConical, Users, Beaker, Droplets, Sparkles, TestTube } from "lucide-react"

const photos = [
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", label: "Lab Setup", description: "Initial experiment setup" },
  { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80", label: "Mixing Process", description: "Combining ingredients" },
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80", label: "Adding Glycerin", description: "Moisturizing agent" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80", label: "Final Solution", description: "Completed sanitizer" },
  { src: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80", label: "Team Work", description: "Collaboration in lab" },
  { src: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80", label: "Quality Check", description: "Testing the product" },
]

const videos = [
  { 
    label: "Hand Sanitizer Preparation", 
    description: "Full preparation walkthrough",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hand_sanitizer_preparation_202603211033-dYOPUQnjTggeVM353qG5TZfzVGH6GK.mp4"
  },
]

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<{ type: string; index: number } | null>(null)

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            Visual Documentation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Photos and videos documenting our experiment process
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <ImageIcon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Photos</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {photos.map((photo, index) => (
              <button
                key={photo.label}
                onClick={() => setSelectedItem({ type: "photo", index })}
                className="group relative aspect-square glass rounded-2xl border border-primary/20 overflow-hidden hover:glow transition-all duration-500"
              >
                {/* Placeholder Content & Real Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <img 
                    src={photo.src}
                    alt={photo.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-10"
                  />
                  {/* Fallback Text under the image (only visible if image is missing) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-0">
                    <span className="text-xs text-muted-foreground/60 mb-2">Needs upload</span>
                    <span className="mt-1 text-sm font-medium text-foreground">{photo.label}</span>
                    <span className="text-xs text-muted-foreground">{photo.description}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Videos</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={video.label}
                className="group relative glass rounded-2xl border border-primary/20 overflow-hidden hover:glow transition-all duration-500"
              >
                {/* Video Player */}
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                    poster=""
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video Info */}
                <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{video.label}</h4>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video glass rounded-3xl p-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 glass rounded-xl hover:glow transition-all duration-300"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>

              <div className="text-center">
                {selectedItem.type === "photo" ? (
                  <div className="flex flex-col items-center w-full">
                    <div className="relative w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-primary/20 bg-black/40">
                      <img 
                        src={photos[selectedItem.index].src}
                        alt={photos[selectedItem.index].label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-3xl font-bold text-foreground mb-2">
                       {photos[selectedItem.index].label}
                    </h4>
                    <p className="text-lg text-muted-foreground">
                       {photos[selectedItem.index].description}
                    </p>
                  </div>
                ) : (
                  <div className="w-full">
                    <video
                      src={videos[selectedItem.index].src}
                      controls
                      autoPlay
                      className="w-full rounded-xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <h4 className="text-xl font-bold text-foreground mt-4 text-center">
                      {videos[selectedItem.index].label}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
