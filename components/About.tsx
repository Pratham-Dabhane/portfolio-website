'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

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
  { name: 'Python', icon: '🐍' },
  { name: 'Git', icon: '📝' },
  { name: 'NLP', icon: '🗣️' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'OpenCV', icon: '📷' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Flask', icon: '🍶' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'CI/CD', icon: '♾️' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <p className="text-lg text-secondary-600 leading-relaxed mb-6">
            I’m a passionate AI and Data Science engineer, driven to design intelligent, user-focused solutions.
             With expertise in machine learning, deep learning, and data-driven systems, I specialize in building scalable,
              impactful applications that solve real-world problems.
          </p>
          <p className="text-lg text-secondary-600 leading-relaxed">
            When I’m not building AI models or diving into datasets, I’m exploring emerging technologies
             and sharing insights with the tech community. I believe in continuous learning and staying ahead of the curve in the fast-evolving AI landscape.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h3 className="heading-md mb-8 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="bg-secondary-50 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-secondary-800">{skill.name}</span>
                  </div>
                  <span className="text-sm text-secondary-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-primary-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          variants={itemVariants}
        >
          <h3 className="heading-md mb-8 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-secondary-100"
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-secondary-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
