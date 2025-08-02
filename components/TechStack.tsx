'use client'

import { motion } from 'framer-motion'

const techStacks = [
  {
    category: 'AI & Machine Learning',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'Scikit-learn'],
    icon: '🧠',
    description: 'AI/ML 모델 개발과 LLM 기반 서비스 구축에 전문성을 가지고 있습니다.'
  },
  {
    category: 'Computer Vision',
    technologies: ['OpenCV', 'YOLO', 'NumPy', 'Matplotlib', 'Pandas'],
    icon: '👁️',
    description: '이미지 처리부터 객체 감지까지 컴퓨터 비전 전반에 걸친 경험을 보유하고 있습니다.'
  },
  {
    category: 'Backend Development',
    technologies: ['FastAPI', 'Django', 'Flask', 'Uvicorn', 'Pydantic'],
    icon: '⚡',
    description: '고성능 웹 API와 마이크로서비스 아키텍처를 설계하고 구현합니다.'
  },
  {
    category: 'Data & Databases',
    technologies: ['MongoDB', 'Supabase', 'FAISS', 'ChromaDB', 'PostgreSQL'],
    icon: '📊',
    description: '벡터 데이터베이스부터 전통적인 RDBMS까지 다양한 데이터 저장소를 활용합니다.'
  },
  {
    category: 'Development Tools',
    technologies: ['Git', 'Docker', 'Jupyter', 'VS Code', 'Linux'],
    icon: '🛠️',
    description: '효율적인 개발 환경 구축과 버전 관리, 컨테이너화를 통한 배포를 수행합니다.'
  },
  {
    category: 'Specialized Skills',
    technologies: ['RAG Systems', 'Sensor Data Analysis', 'Time Series', 'Embeddings', 'LLM Fine-tuning'],
    icon: '⭐',
    description: '보행 분석, 시계열 데이터 처리, RAG 시스템 등 특화된 영역의 전문 지식을 보유합니다.'
  }
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 relative">
            My Expertise
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <p className="text-center text-text-secondary mb-16 max-w-3xl mx-auto text-lg">
            AI/ML 백엔드 개발에 특화된 기술 스택으로 혁신적인 솔루션을 개발합니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                className="bg-bg-secondary p-8 rounded-xl border border-border-color hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 shimmer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(88, 166, 255, 0.2)'
                }}
              >
                <div className="text-4xl mb-6">{stack.icon}</div>
                <h3 className="font-mono text-xl text-accent-blue mb-4 group-hover:text-accent-green transition-colors">
                  {stack.category}
                </h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {stack.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-bg-tertiary text-accent-blue px-3 py-1 rounded-full text-xs font-mono border border-border-color hover:bg-accent-blue hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}