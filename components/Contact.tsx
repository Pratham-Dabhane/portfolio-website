'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pratham.dabhane.2503@gmail.com',
    href: 'mailto:pratham.dabhane.2503@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 78409 52689',
    href: 'tel:+917840952689',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
  },
]

const socials = [
  { icon: Github, href: 'https://github.com/Pratham-Dabhane', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/Pratham-Dabhane', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/_.pratham.dabhane._', label: 'Instagram' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus((prev) => ({ ...prev, loading: true }))

    try {
      const response = await fetch('https://formspree.io/f/xanewlkg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.',
          loading: false,
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.',
        loading: false,
      })
    }
  }

  return (
    <div className="container-max" ref={ref}>
      {/* Header */}
      <div className="reveal-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <span className="label block mb-3">Contact</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] leading-[1.1]">
            Let&apos;s work<br />
            <span className="text-accent">together</span>
          </h2>
        </div>
        <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
          Have a question or an exciting opportunity? Drop me a message and I&apos;ll get back to you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left — Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-2 space-y-10"
        >
          {/* Contact cards */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="glass-card p-5 flex items-start gap-4 group transition-all duration-300 hover:border-accent/30">
                  <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="label text-[10px] block mb-1">{item.label}</span>
                    <span className="text-sm text-white/80">{item.value}</span>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="w-4 h-4 text-white/20 ml-auto mt-1 group-hover:text-accent transition-colors duration-300" />
                  )}
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block" data-cursor>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              )
            })}
          </div>

          {/* Socials */}
          <div>
            <span className="label text-[10px] block mb-4">Follow me</span>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-cursor
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition-all duration-300 text-muted"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="label text-[10px] block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="label text-[10px] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="label text-[10px] block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/40 transition-all duration-300 text-sm resize-none"
              />
            </div>

            {formStatus.submitted && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  formStatus.success
                    ? 'bg-accent/10 border border-accent/30 text-accent'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.loading}
              className={`btn-primary w-full justify-center ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              data-cursor
            >
              {formStatus.loading ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
