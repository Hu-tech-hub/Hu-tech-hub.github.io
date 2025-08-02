'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: '시니어 백엔드 개발자',
    company: 'TechCorp',
    period: '2023.01 - 현재',
    responsibilities: [
      '마이크로서비스 아키텍처 설계 및 구현',
      'API 성능 최적화로 응답속도 50% 개선',
      '주니어 개발자 멘토링 및 코드 리뷰',
      'DevOps 파이프라인 구축 및 배포 자동화'
    ]
  },
  {
    title: '백엔드 개발자',
    company: 'StartupXYZ',
    period: '2021.03 - 2022.12',
    responsibilities: [
      'REST API 설계 및 개발',
      '데이터베이스 설계 및 최적화',
      '실시간 채팅 시스템 구축',
      'AWS 인프라 구축 및 관리'
    ]
  },
  {
    title: '주니어 개발자',
    company: 'DevCompany',
    period: '2020.01 - 2021.02',
    responsibilities: [
      '웹 애플리케이션 백엔드 개발',
      '데이터베이스 쿼리 최적화',
      'API 문서화 및 테스트 작성',
      '버그 수정 및 기능 개선'
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
            Experience
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