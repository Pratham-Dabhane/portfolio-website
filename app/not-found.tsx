'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, Bug } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white bg-shapes flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-9xl font-bold text-primary-600 opacity-20">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Bug className="w-24 h-24 text-primary-600" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-secondary-800">
              Whoops… my code didn't see this coming.
            </h2>
            <p className="text-lg text-secondary-600 max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best developers encounter bugs sometimes!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="btn-primary inline-flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-6 bg-secondary-50 rounded-xl border border-secondary-200"
          >
            <h3 className="text-lg font-semibold text-secondary-800 mb-3">
              Did you know?
            </h3>
            <p className="text-secondary-600">
              The first 404 error was created by Tim Berners-Lee in 1990. 
              It's now one of the most famous HTTP status codes in the world!
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-10 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-50"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-100 rounded-full opacity-50"
          />
        </motion.div>
      </div>
    </div>
  )
}
