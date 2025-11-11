'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'AlignCV – AI Resume Enhancer',
    description: 'A smart AI-powered tool that analyzes resumes and aligns them with specific job descriptions using NLP, offering tailored keyword insights and role-specific suggestions for better ATS compatibility.',
    image: '/assets/Projects/aligncv.jpg',
    technologies: ["Python", "LLMs", "Qdrant", "LangChain", "OpenAI API", "Flask", "Vector Databases", "NLP"],
    liveUrl: 'https://aligncv.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/AlignCV',
  },
  {
    id: 2,
    title: 'AI Disease Predictor',
    description: 'A machine learning-based web app built with Streamlit that predicts possible diseases based on user-input symptoms. The model is trained on a structured dataset and provides a description of the predicted illness.',
    image: '/assets/Projects/ai-disease-predictor.jpeg',
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Streamlit", "Data Preprocessing"],
    liveUrl: 'https://pra-code-disease-predictor.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/AI-Disease-Predictor',
  },
  {
    id: 3,
    title: 'Handwritten Digit Recognizer',
    description: 'A Streamlit web app that uses a trained CNN model to recognize digits drawn by users on a canvas in real time.',
    image: '/assets/Projects/handwritten-digit-recognizer.jpg',
    technologies: ["Python", "TensorFlow", "CNN", "Streamlit", "Computer Vision", "PIL", "NumPy"],
    liveUrl: 'https://pra-code-handwritten-digit-recognizer.streamlit.app/',
    githubUrl: 'https://github.com/Pratham-Dabhane/Handwritten-Digit-Recognizer',
  },
  {
    id: 4,
    title: 'Customer Segmentation',
    description: 'A data-driven project using K-Means clustering to categorize customers based on purchasing behavior.',
    image: '/assets/Projects/customer-segmentation.jpg',
    technologies: ["Python", "Machine Learning", "K-Means Clustering", "Pandas", "Data Visualization"],
    liveUrl: 'https://github.com/Pratham-Dabhane/Customer-Segmentation',
    githubUrl: 'https://github.com/Pratham-Dabhane/Customer-Segmentation',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A weather application that fetches real-time weather data using OpenWeather API and displays user-friendly results.',
    image: '/assets/Projects/weather-app.jpg',
    technologies: ["Python", "Requests", "OpenWeather API", "JSON Parsing"],
    liveUrl: 'https://github.com/Pratham-Dabhane/Weather-App',
    githubUrl: 'https://github.com/Pratham-Dabhane/Weather-App',
  },
  {
    id: 6,
    title: 'Currency Calculator API',
    description: 'A REST API that converts currency values based on real-time exchange rates, returning results in JSON format.',
    image: '/assets/Projects/currency-calculator.jpg',
    technologies: ["Python", "FastAPI", "REST API", "JSON", "Third-Party APIs"],
    liveUrl: 'https://currency-calculator-r7zg.onrender.com/convert?from=USD&to=INR&amount=100',
    githubUrl: 'https://github.com/Pratham-Dabhane/Currency-Calculator',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="container-max">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-body max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-secondary-100 hover:shadow-xl transition-all duration-300"
            >
                             <div className="aspect-video relative overflow-hidden">
                 <Image
                   src={project.image}
                   alt={project.title}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
              
              <div className="p-6">
                <h3 className="heading-md mb-2">{project.title}</h3>
                <p className="text-secondary-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
