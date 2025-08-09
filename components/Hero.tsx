'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'PRATHAM'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150) // Adjust speed here
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container-max text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Profile Photo with Enhanced Concentric Circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="concentric-circles relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary-200 shadow-lg relative z-10">
              <Image
                src="/assets/Hero/mortyweb_1.png"
                alt="Pratham Dabhane"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Additional larger circles */}
            <div className="circle-3"></div>
            <div className="circle-4"></div>
          </div>
        </motion.div>

        {/* Name with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="heading-xl text-gradient mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary-700 mb-6">
            AI & DS Engineer & Developer
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed">
            I craft intelligent, data-driven solutions to complex challenges, 
            building scalable AI-powered applications that deliver exceptional real-world impact.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/Pratham-Dabhane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/Pratham-Dabhane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/_.pratham.dabhane._"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:pratham.dabhane.2503@gmail.com"
            className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
