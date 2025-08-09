'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus(prev => ({
      ...prev,
      loading: true
    }));
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xanewlkg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I will get back to you soon.',
          loading: false
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
        loading: false
      });
    }
  };

  return (
    <div className="container-max">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="heading-lg mb-6">Get In Touch</h2>
          <p className="text-body mb-8">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800">Email</h3>
                <a href="mailto:pratham.dabhane.2503@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                  pratham.dabhane.2503@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800">Phone</h3>
                <a href="tel:+919876543210" className="text-primary-600 hover:text-primary-700 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-800">Location</h3>
                <p className="text-secondary-600">Mumbai, Maharashtra, India</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-secondary-800">Follow Me</h3>
            <div className="flex space-x-4">
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
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            {formStatus.submitted && (
              <div className={`p-4 rounded-lg ${
                formStatus.success 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus.loading}
              className={`w-full btn-primary ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}
