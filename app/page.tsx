'use client'

import React from "react"

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    console.log('Email submitted:', email)
    e.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Raw Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large black rectangle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary border-8 border-primary opacity-5" />
        
        {/* Medium black rectangle - bottom left */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary opacity-5 border-4 border-primary" />
        
        {/* Accent color bar - left side */}
        <div className="absolute left-0 top-1/3 w-2 h-32 bg-accent" />
        <div className="absolute left-0 top-2/3 w-2 h-24 bg-accent" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b-4 border-primary bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">
            DO IT LIKE A PRO
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#" className="hover:opacity-50 transition-opacity">ABOUT</a>
            <a href="#" className="hover:opacity-50 transition-opacity">UPDATES</a>
            <a href="#" className="hover:opacity-50 transition-opacity">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
        {/* Pre-heading */}
        <div className={`mb-12 text-center transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <br></br>
          <div className="inline-block border-4 border-primary px-6 py-2 mb-8">
          
            <span className="text-xs font-black uppercase tracking-[0.2em]">Something Extraordinary</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-center mb-6 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="block text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4">
            COMING
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight relative">
            SOON
            <span className="absolute -bottom-8 -right-12 w-16 h-16 border-4 border-primary transform rotate-12" />
          </span>
        </h1>

        {/* Decorative line */}
        <div className={`w-32 h-1 bg-primary my-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        } origin-left`} />

        {/* Subheading */}
        <p className={`text-center max-w-2xl text-lg sm:text-xl font-medium text-muted-foreground mb-16 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Master your craft at the highest level. We're building the platform that separates pros from amateurs.
        </p>

        {/* Email Capture */}
        <form onSubmit={handleEmailSubmit} className={`w-full max-w-md transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-background border-3 border-primary px-6 py-4 font-semibold uppercase text-sm tracking-wider placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground border-3 border-primary px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary/90 transition-all active:scale-95"
            >
              NOTIFY ME
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className={`mt-20 flex gap-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a href="#" className="font-black text-sm uppercase tracking-wider hover:opacity-50 transition-opacity">
            TWITTER
          </a>
          <a href="#" className="font-black text-sm uppercase tracking-wider hover:opacity-50 transition-opacity">
            LINKEDIN
          </a>
          <a href="#" className="font-black text-sm uppercase tracking-wider hover:opacity-50 transition-opacity">
            INSTAGRAM
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ${
        scrollY > 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-black uppercase tracking-wider">SCROLL</span>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-primary bg-background mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            © 2025 DO IT LIKE A PRO. ALL RIGHTS RESERVED.
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            CRAFTED WITH INTENTION
          </div>
        </div>
      </footer>
    </main>
  )
}
