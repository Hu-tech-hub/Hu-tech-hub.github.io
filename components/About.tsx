'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          className="fade-in-section opacity-0 translate-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            About Me
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              3년차 백엔드 개발자로서 다양한 프로젝트를 통해 안정적이고 확장 가능한 시스템을 구축해왔습니다.
              성능 최적화, 클린 아키텍처, 그리고 효율적인 데이터베이스 설계에 대한 깊은 관심을 가지고 있으며,
              새로운 기술을 학습하고 적용하는 것을 즐깁니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-green mb-2">3+</div>
                <div className="text-text-secondary">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">10+</div>
                <div className="text-text-secondary">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-purple mb-2">50%</div>
                <div className="text-text-secondary">Performance Improvement</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}