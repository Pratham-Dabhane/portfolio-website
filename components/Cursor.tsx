'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot follows instantly
      gsap.set(dot, { x: mouseX, y: mouseY })

      // Ring follows with lag
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.15, ease: 'power2.out' })

      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest('a, button, input, textarea, [data-cursor]')
      if (interactive) {
        dot.classList.add('active')
        ring.classList.add('active')
      } else {
        dot.classList.remove('active')
        ring.classList.remove('active')
      }
    }

    const hideCursor = () => {
      dot.classList.add('hidden')
      ring.classList.add('hidden')
    }

    const showCursor = () => {
      dot.classList.remove('hidden')
      ring.classList.remove('hidden')
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
