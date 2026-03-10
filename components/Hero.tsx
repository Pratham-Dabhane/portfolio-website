'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ArrowDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split and animate name letters
      if (nameRef.current) {
        const text = nameRef.current.textContent || ''
        nameRef.current.innerHTML = text
          .split('')
          .map((char) =>
            char === ' '
              ? '<span class="inline-block">&nbsp;</span>'
              : `<span class="inline-block opacity-0 translate-y-[100px]">${char}</span>`
          )
          .join('')

        gsap.to(nameRef.current.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power4.out',
          delay: 0.3,
        })
      }

      // Stagger other elements
      gsap.from('.hero-stagger', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const socials = [
    { href: 'https://github.com/Pratham-Dabhane', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/Pratham-Dabhane', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/_.pratham.dabhane._', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:pratham.dabhane.2503@gmail.com', icon: Mail, label: 'Email' },
  ]

  return (
    <div ref={containerRef} className="container-max w-full px-5 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-center min-h-[80vh] py-20">
        {/* Left — text */}
        <div className="space-y-8">
          <div className="hero-stagger">
            <span className="label">AI & Data Science Engineer</span>
          </div>

          <h1
            ref={nameRef}
            className="text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
          >
            PRATHAM
          </h1>

          <p className="hero-stagger text-muted max-w-lg text-base md:text-lg leading-relaxed">
            I craft intelligent, data-driven solutions to complex challenges,
            building scalable AI-powered applications that deliver exceptional real-world impact.
          </p>

          <div className="hero-stagger flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              Get In Touch
            </button>
          </div>

          {/* Socials */}
          <div className="hero-stagger flex items-center gap-5 pt-4">
            <span className="label">Connect</span>
            <div className="w-8 h-px bg-white/20" />
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 m-auto w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-accent/20 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full border border-white/5" />

            <div className="absolute inset-0 m-auto z-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-white/10 glow-accent">
              <Image
                src="/assets/Hero/mortyweb_1.png"
                alt="Pratham Dabhane"
                width={240}
                height={240}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex flex-col items-center gap-2 pb-12"
      >
        <span className="label">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </div>
  )
}
