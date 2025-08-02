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
              AI/ML 백엔드 개발에 특화된 개발자로서, 보행 분석부터 컴퓨터 비전, RAG 시스템까지 
              다양한 지능형 시스템을 구축해왔습니다. LangChain, 센서 데이터 분석, 딥러닝 모델 통합을 통해 
              혁신적인 솔루션을 개발하며, 지속적인 연구와 학습을 통해 최신 AI 기술을 실무에 적용합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-green mb-2">14+</div>
                <div className="text-text-secondary">AI/ML Projects</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">6+</div>
                <div className="text-text-secondary">Tech Specializations</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-purple mb-2">90%+</div>
                <div className="text-text-secondary">AI Model Accuracy</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
                <div className="text-text-secondary">Learning Passion</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}