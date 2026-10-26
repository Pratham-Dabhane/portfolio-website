'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Exposes the Lenis instance so Navigation, Hero and the home page can
// scroll through Lenis instead of fighting it with native smooth scrolling.
// Until Lenis is created (first client render) the value is null and callers
// should fall back to native scrolling.
const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    setLenis(lenisInstance)

    // Sync Lenis with GSAP ScrollTrigger. Keep a named reference so the
    // listener can actually be removed on cleanup (previously it leaked).
    const onLenisScroll = () => {
      ScrollTrigger.update()
    }
    lenisInstance.on('scroll', onLenisScroll)

    const tick = (time: number) => {
      lenisInstance.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenisInstance.off('scroll', onLenisScroll)
      gsap.ticker.remove(tick)
      lenisInstance.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
