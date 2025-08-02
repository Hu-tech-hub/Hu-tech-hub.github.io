'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'AI/ML 백엔드 개발자',
    company: 'Freelance & Research',
    period: '2024.01 - 현재',
    responsibilities: [
      '6축 센서 데이터 기반 보행 분석 AI 시스템 개발 (Chronos + LangChain RAG)',
      'Computer Vision 연구 및 YOLO 기반 실시간 객체 감지 시스템 구축',
      'LangChain & LangServe를 활용한 고도화된 RAG 시스템 아키텍처 설계',
      'FastAPI 기반 마이크로서비스와 벡터 데이터베이스 통합 구현'
    ]
  },
  {
    title: 'AI 연구 개발자',
    company: 'University Research Lab',
    period: '2023.03 - 2023.12',
    responsibilities: [
      'WalkerHolic: TCN 모델 기반 보행 패턴 분석 및 개인화 운동 추천 시스템',
      'SIFT, ORB 알고리즘부터 증강현실까지 Computer Vision 기술 연구',
      '시계열 데이터 처리 및 Stride Length Estimation 모델 개발',
      'Jupyter Notebook 기반 실험 환경 구축 및 연구 데이터 관리'
    ]
  },
  {
    title: '백엔드 개발자',
    company: 'Tech Startup',
    period: '2022.01 - 2023.02',
    responsibilities: [
      'FastAPI 프레임워크를 활용한 고성능 웹 API 개발',
      'MongoDB, PostgreSQL 등 다양한 데이터베이스 설계 및 최적화',
      'Docker 컨테이너화 및 CI/CD 파이프라인 구축',
      'Pydantic을 활용한 데이터 검증 및 API 문서화 자동화'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Professional Experience
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-green to-accent-blue"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20 md:pl-28"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-9 top-3 w-5 h-5 bg-accent-green rounded-full border-4 border-bg-primary"></div>
                  
                  <div className="bg-bg-secondary p-8 rounded-xl border border-border-color hover:border-accent-blue transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      {exp.title} - {exp.company}
                    </h3>
                    
                    <p className="font-mono text-accent-blue mb-6">
                      {exp.period}
                    </p>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="text-text-secondary flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (respIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <span className="text-accent-green mt-2 text-xs">▸</span>
                          <span className="hover:text-text-primary transition-colors">
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}