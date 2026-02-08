"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Twitter, Instagram, Linkedin } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, "registrations"), {
        email,
        timestamp: serverTimestamp(),
        status: "pending",
      });

      toast.success("Thanks for registering! We'll notify you when we launch.");
      setEmail("");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        <div
          className={`mb-12 text-center transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <br></br>
          <div className="inline-block border-4 border-primary px-6 py-2 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Something Extraordinary
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-center mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4">
            COMING
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight relative group">
            SOON
            <span className="absolute -bottom-8 -right-12 w-16 h-16 border-4 border-primary transition-transform duration-500 group-hover:rotate-[60deg] rotate-12 cursor-pointer" />
          </span>
        </h1>

        {/* Decorative line */}
        <div
          className={`w-32 h-1 bg-primary my-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          } origin-left`}
        />

        {/* Subheading */}
        <p
          className={`text-center max-w-2xl text-lg sm:text-xl font-medium text-muted-foreground mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Master your craft at the highest level. We're building the platform
          that separates pros from amateurs.
        </p>

        <form
          onSubmit={handleEmailSubmit}
          className={`w-full max-w-md transform transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={isLoading}
              required
              className="flex-1 bg-background border-3 border-primary px-6 py-4 font-semibold lowercase text-sm tracking-wider placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-primary-foreground border-3 border-primary px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "REGISTERING..." : "NOTIFY ME"}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div
          className={`mt-20 flex gap-8 transform transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://x.com/do_itlikeapro"
            target="_blank"
            className="inline-block border-4 border-primary p-3 hover:shadow-2xl hover:-translate-y-2 hover:rotate-3 transition-all group"
          >
            <div className="flex items-center gap-2">
              <Twitter size={20} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
              <span className="font-black text-sm uppercase tracking-wider">X</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/do-it-like-a-pro/#"
            target="_blank"
            className="inline-block border-4 border-primary p-3 hover:shadow-2xl hover:-translate-y-2 hover:rotate-3 transition-all group"
          >
            <div className="flex items-center gap-2">
              <Linkedin size={20} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
              <span className="font-black text-sm uppercase tracking-wider">LINKEDIN</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/do_itlikeapro/"
            className="inline-block border-4 border-primary p-3 hover:shadow-2xl hover:-translate-y-2 hover:rotate-3 transition-all group"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <Instagram size={20} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
              <span className="font-black text-sm uppercase tracking-wider">INSTAGRAM</span>
            </div>
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbC6wdR42DckDxGq2m39"
            className="inline-block border-4 border-primary p-3 hover:shadow-2xl hover:-translate-y-2 hover:rotate-3 transition-all group"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
              </svg>
              <span className="font-black text-sm uppercase tracking-wider">WHATSAPP</span>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ${
          scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-black uppercase tracking-wider">
            SCROLL
          </span>
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
      <Toaster />
    </main>
  );
}
