'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. 김연구',
    role: 'Research Director',
    company: 'AI Research Lab',
    content: 'Hu-tech-hub는 AI/ML 백엔드 개발 분야에서 뛰어난 전문성을 보여줍니다. 특히 보행 분석 시스템과 RAG 구현에서 혁신적인 접근 방식을 제시했으며, 복잡한 문제를 우아한 코드로 해결하는 능력이 인상적입니다.',
    avatar: '👨‍🔬'
  },
  {
    name: '박기술',
    role: 'CTO',
    company: 'TechStartup Inc.',
    content: '컴퓨터 비전부터 LangChain RAG 시스템까지, 다양한 AI 기술을 실무에 적용하는 능력이 탁월합니다. FastAPI를 활용한 마이크로서비스 아키텍처 설계와 성능 최적화 경험이 프로젝트 성공에 크게 기여했습니다.',
    avatar: '💼'
  },
  {
    name: '이개발',
    role: 'Senior ML Engineer',
    company: 'Data Science Team',
    content: '센서 데이터 분석부터 딥러닝 모델 통합까지, 전체 AI 파이프라인을 구축할 수 있는 종합적인 역량을 갖춘 개발자입니다. 코드 품질과 문서화에 대한 세심한 접근 방식이 팀 전체의 생산성을 향상시켰습니다.',
    avatar: '🤖'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-secondary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            What People Say
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-bg-primary p-8 rounded-xl border border-border-color relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(88, 166, 255, 0.1)'
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-accent-blue opacity-20">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Avatar */}
                <div className="text-4xl mb-6">{testimonial.avatar}</div>
                
                {/* Testimonial Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="border-t border-border-color pt-6">
                  <div className="font-semibold text-text-primary mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-accent-blue font-mono text-sm mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary mb-6 text-lg">
              함께 혁신적인 AI 프로젝트를 만들어보고 싶으시다면
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}