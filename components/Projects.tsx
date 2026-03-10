'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'AlignCV – AI Resume Enhancer',
    description: 'A smart AI-powered tool that analyzes resumes and aligns them with specific job descriptions using NLP, offering tailored keyword insights and role-specific suggestions for better ATS compatibility.',
    image: '/assets/Projects/aligncv.jpg',
    technologies: ['Python', 'LLMs', 'Qdrant', 'LangChain', 'GroqAPI', 'Flask', 'Vector Databases', 'NLP'],
    liveUrl: 'https://aligncv.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/AlignCV',
  },
  {
    id: 2,
    title: 'AI Disease Predictor',
    description: 'A machine learning-based web app built with Streamlit that predicts possible diseases based on user-input symptoms. The model is trained on a structured dataset and provides a description of the predicted illness.',
    image: '/assets/Projects/ai-disease-predictor.jpeg',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Streamlit', 'Data Preprocessing'],
    liveUrl: 'https://pra-code-disease-predictor.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/AI-Disease-Predictor',
  },
  {
    id: 3,
    title: 'Handwritten Digit Recognizer',
    description: 'A Streamlit web app that uses a trained CNN model to recognize digits drawn by users on a canvas in real time.',
    image: '/assets/Projects/handwritten-digit-recognizer.jpg',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Streamlit', 'Computer Vision', 'PIL', 'NumPy'],
    liveUrl: 'https://pra-code-handwritten-digit-recognizer.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/Handwritten-Digit-Recognizer',
  },
  {
    id: 4,
    title: 'Customer Segmentation',
    description: 'A data-driven project using K-Means clustering to categorize customers based on purchasing behavior.',
    image: '/assets/Projects/customer-segmentation.jpg',
    technologies: ['Python', 'Machine Learning', 'K-Means Clustering', 'Pandas', 'Data Visualization'],
    liveUrl: 'https://github.com/Pratham-Dabhane/Customer-Segmentation',
    githubUrl: 'https://github.com/Pratham-Dabhane/Customer-Segmentation',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A weather application that fetches real-time weather data using OpenWeather API and displays user-friendly results.',
    image: '/assets/Projects/weather-app.jpg',
    technologies: ['Python', 'Requests', 'OpenWeather API', 'JSON Parsing'],
    liveUrl: 'https://github.com/Pratham-Dabhane/Weather-App',
    githubUrl: 'https://github.com/Pratham-Dabhane/Weather-App',
  },
  {
    id: 6,
    title: 'Currency Calculator API',
    description: 'A REST API that converts currency values based on real-time exchange rates, returning results in JSON format.',
    image: '/assets/Projects/currency-calculator.jpg',
    technologies: ['Python', 'FastAPI', 'REST API', 'JSON', 'Third-Party APIs'],
    liveUrl: 'https://currency-calculator-r7zg.onrender.com/convert?from=USD&to=INR&amount=100',
    githubUrl: 'https://github.com/Pratham-Dabhane/Currency-Calculator',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="container-max relative">
      {/* Header */}
      <div className="reveal-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <span className="label block mb-3">Work</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] leading-[1.1]">
            Featured<br />
            <span className="text-accent">Projects</span>
          </h2>
        </div>
        <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
          A selection of projects that reflect my passion for building intelligent, data&#8209;driven applications.
        </p>
      </div>

      {/* Featured — first two large */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {projects.slice(0, 2).map((project) => (
          <div key={project.id} className="project-card group">
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden transition-all duration-500 h-full flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="parallax-img object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Floating action */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  data-cursor
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border border-white/10 bg-white/[0.04] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                    data-cursor
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs"
                    data-cursor
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Remaining — compact grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.slice(2).map((project) => (
          <div key={project.id} className="project-card group">
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(209,255,0,0.3)' }}
              className="glass-card overflow-hidden transition-all duration-500 h-full flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="parallax-img object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-bold mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-white/10 bg-white/[0.04] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-white/40">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[10px] px-3 py-1.5"
                    data-cursor
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-[10px] px-3 py-1.5"
                    data-cursor
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
