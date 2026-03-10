'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Python', level: 70, icon: '🐍' },
  { name: 'Git', level: 40, icon: '📝' },
  { name: 'ML', level: 60, icon: '🤖' },
  { name: 'PostgreSQL', level: 30, icon: '🐘' },
  { name: 'MongoDB', level: 35, icon: '🍃' },
  { name: 'AWS', level: 15, icon: '☁️' },
  { name: 'CI/CD', level: 25, icon: '♾️' },
]

const technologies = [
  'Python', 'Git', 'NLP', 'NumPy', 'Pandas', 'Scikit-learn',
  'OpenCV', 'Docker', 'Flask', 'MongoDB', 'PostgreSQL', 'CI/CD',
  'TensorFlow', 'LangChain', 'FastAPI', 'Streamlit',
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars on scroll
      gsap.utils.toArray<HTMLElement>('.skill-fill').forEach((bar) => {
        gsap.from(bar, {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Double the tech list for seamless marquee
  const marqueeItems = [...technologies, ...technologies]

  return (
    <div ref={sectionRef} className="container-max relative">
      {/* Header */}
      <div className="reveal-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <span className="label block mb-3">About</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] leading-[1.1]">
            A bit about<br />
            <span className="text-accent">who I am</span>
          </h2>
        </div>
        <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
          Background, skills, and the technologies I use to bring ideas to life.
        </p>
      </div>

      {/* Bio */}
      <div className="reveal-up grid md:grid-cols-2 gap-8 mb-24">
        <p className="text-white/80 leading-relaxed">
          I&apos;m a passionate AI and Data Science engineer, driven to design intelligent, user-focused solutions.
          With expertise in machine learning, deep learning, and data-driven systems, I specialize in building scalable,
          impactful applications that solve real-world problems.
        </p>
        <p className="text-white/80 leading-relaxed">
          When I&apos;m not building AI models or diving into datasets, I&apos;m exploring emerging technologies
          and sharing insights with the tech community. I believe in continuous learning and staying ahead of the curve in the fast-evolving AI landscape.
        </p>
      </div>

      {/* Tech Marquee */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="label">Technologies</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="relative overflow-hidden py-6">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex animate-marquee whitespace-nowrap mb-4">
            {marqueeItems.map((tech, i) => (
              <span
                key={`r1-${i}`}
                className="inline-flex items-center mx-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-white/70 hover:border-accent/50 hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Row 2 reversed */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...marqueeItems].reverse().map((tech, i) => (
              <span
                key={`r2-${i}`}
                className="inline-flex items-center mx-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-white/70 hover:border-accent/50 hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <span className="label">Skill Map</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4, borderColor: 'rgba(209,255,0,0.3)' }}
              className="glass-card p-6 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-sm uppercase tracking-wider">{skill.name}</span>
                </div>
                <span className="font-mono text-xs text-accent">{skill.level}%</span>
              </div>
              <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="skill-fill h-full rounded-full bg-gradient-to-r from-accent to-white/60"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
