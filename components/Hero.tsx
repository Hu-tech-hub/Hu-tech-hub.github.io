'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative bg-gradient-to-br from-bg-primary to-bg-secondary hero-pattern pt-20">
      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            className="font-mono text-xl md:text-2xl text-text-secondary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            const developer = {'{'}
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Hu-tech-hub
          </motion.h1>
          
          <motion.p 
            className="font-mono text-xl md:text-2xl text-text-secondary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            role: "AI/ML Backend Developer"
          </motion.p>
          
          <motion.p 
            className="font-mono text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            specialization: ["Computer Vision", "RAG Systems", "Gait Analysis"]
          </motion.p>
          
          <motion.p 
            className="font-mono text-lg md:text-xl text-text-secondary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {'}'}
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            AI/ML과 백엔드 개발을 결합하여 지능형 시스템을 구축합니다.<br />
            보행 분석부터 컴퓨터 비전, RAG 시스템까지 혁신적인 솔루션을 개발합니다.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              프로젝트 보기
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent-blue hover:text-accent-blue hover:-translate-y-1 transition-all duration-300"
            >
              연락하기
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-text-secondary animate-bounce" />
      </motion.div>
    </section>
  )
}