'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { useLenis } from '@/components/SmoothScroll'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    let rafId = 0
    let ticking = false

    const update = () => {
      ticking = false
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      setShowScrollTop(window.scrollY > 500)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          // Document offset, not offsetTop: offsetTop is relative to the
          // nearest positioned ancestor (the `relative` wrapper div),
          // so it is wrong as soon as that wrapper is not at the top.
          const offsetTop =
            element.getBoundingClientRect().top + window.scrollY
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Throttle layout reads to one per animation frame.
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(update)
      }
    }

    // Run once on mount so a refresh / deep link to #projects highlights
    // the right section instead of defaulting to Home until first scroll.
    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // GSAP reveal animations for sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal-up elements
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Reveal-fade elements
      gsap.utils.toArray<HTMLElement>('.reveal-fade').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Parallax wrappers (see Projects.tsx). GSAP used to animate the
      // <Image> itself, which overwrote its Tailwind hover scale and left
      // a gap at the bottom of the card. Now it animates a taller wrapper
      // around the image, so the image keeps its own hover transform.
      // Wrapper is 130% tall starting at -15%: animating yPercent between
      // about -8 and +8 keeps it covering its container at both ends.
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((el) => {
        gsap.fromTo(el, { yPercent: -8 }, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-bg">
      <Navigation activeSection={activeSection} />

      <div className="relative">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Hero ambient glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
          <Hero />
        </section>

        <div className="divider" />

        <section id="about" className="section-padding bg-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
          <About />
        </section>

        <div className="divider" />

        <section id="projects" className="section-padding bg-bg relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
          <Projects />
        </section>

        <div className="divider" />

        <section id="contact" className="section-padding bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px] pointer-events-none" />
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="label">
          &copy; {new Date().getFullYear()} Pratham Dabhane &mdash; All rights reserved
        </p>
      </footer>

      {/* Scroll to Top: hidden state must also be non-interactive, or
          keyboard users can tab to (and click) an invisible button. */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden={!showScrollTop}
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          tabIndex={showScrollTop ? 0 : -1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-accent hover:text-black hover:border-accent text-white flex items-center justify-center transition-all duration-200 backdrop-blur-heavy"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </main>
  )
}
