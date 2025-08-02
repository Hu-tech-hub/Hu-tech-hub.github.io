'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Lightbulb, TrendingUp } from 'lucide-react'

const learningJourney = [
  {
    title: '🧠 AI/ML 딥러닝 여정',
    period: '2023 - Present',
    description: 'TensorFlow와 PyTorch를 시작으로 Computer Vision, NLP, 그리고 최신 LLM 기술까지 체계적으로 학습했습니다.',
    achievements: [
      'Coursera Deep Learning Specialization 완주',
      '15+ AI/ML 프로젝트 완성',
      'Kaggle 대회 참여 및 상위 20% 달성'
    ],
    icon: '🤖'
  },
  {
    title: '🔬 실무 중심 학습',
    period: '2022 - Present', 
    description: '이론과 실무를 결합한 프로젝트 중심 학습을 통해 실제 문제 해결 능력을 기를 수 있었습니다.',
    achievements: [
      'FastAPI 기반 마이크로서비스 아키텍처 구축',
      'LangChain을 활용한 RAG 시스템 개발',
      'Chronos 모델을 활용한 시계열 분석'
    ],
    icon: '⚡'
  },
  {
    title: '📚 지속적 성장',
    period: '2021 - Present',
    description: '최신 기술 트렌드를 파악하고 새로운 도구와 프레임워크를 습득하여 지속적으로 성장하고 있습니다.',
    achievements: [
      '매주 기술 블로그 포스팅',
      '오픈소스 프로젝트 기여',
      '기술 커뮤니티 활동 및 지식 공유'
    ],
    icon: '📖'
  }
]

export default function LearningJourney() {
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
            Learning Journey
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <p className="text-center text-text-secondary mb-16 max-w-3xl mx-auto text-lg">
            지속적인 학습과 실무 경험을 통해 AI/ML 백엔드 개발 전문성을 키워나가고 있습니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningJourney.map((journey, index) => (
              <motion.div
                key={journey.title}
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
                {/* Learning Icon */}
                <div className="absolute top-6 right-6 text-accent-blue opacity-20">
                  <BookOpen className="w-8 h-8" />
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-6">{journey.icon}</div>
                
                {/* Title & Period */}
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {journey.title}
                </h3>
                <p className="text-accent-blue font-mono text-sm mb-4">
                  {journey.period}
                </p>
                
                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {journey.description}
                </p>
                
                {/* Achievements */}
                <div className="border-t border-border-color pt-6">
                  <h4 className="text-sm font-semibold text-accent-green mb-3 uppercase tracking-wide">
                    주요 성과
                  </h4>
                  <ul className="space-y-2">
                    {journey.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="text-accent-green mt-1 text-xs">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
              지속적인 학습과 성장을 통해 더 나은 개발자가 되어가고 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Hu-tech-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Code className="w-5 h-5" />
                View All Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent-blue hover:text-accent-blue hover:-translate-y-1 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                Let's Connect
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}