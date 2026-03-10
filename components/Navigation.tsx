'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-heavy border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.03 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-muted hover:text-accent transition-colors duration-300"
          >
            Pratham Dabhane
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
              >
                <span
                  className={`font-mono text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    activeSection === item.id ? 'text-accent' : 'text-muted hover:text-white'
                  }`}
                >
                  <span className="text-dim mr-1">0{i + 1}</span>
                  {item.label}
                </span>
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-white/10 hover:border-accent/50 transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-heavy border-t border-white/5"
            >
              <div className="px-5 py-6 space-y-1">
                {navItems.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-mono text-sm tracking-wider ${
                      activeSection === item.id
                        ? 'bg-accent/10 text-accent'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-dim mr-2">0{i + 1}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
