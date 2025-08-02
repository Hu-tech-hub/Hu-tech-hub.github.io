'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { useState } from 'react'

const featuredProject = {
  title: '🧠 보행 분석 AI 시스템',
  description: '6축 센서 데이터를 활용한 지능형 보행 진단 시스템입니다. Chronos 임베딩과 LangChain RAG를 결합하여 실시간 보행 패턴 분석 및 진단을 제공합니다. FastAPI와 Supabase를 활용한 확장 가능한 아키텍처로 구축되었습니다.',
  technologies: ['Python', 'LangChain', 'Chronos', 'FastAPI', 'Supabase', 'FAISS'],
  achievements: '실시간 센서 데이터 처리, AI 기반 진단 정확도 90% 이상',
  github: 'https://github.com/Hu-tech-hub/gait-analyzer-chronos-langchain',
  demo: 'https://gait-analyzer.demo.com',
  category: 'AI/ML'
}

const projects = [
  {
    title: '🚶‍♂️ WalkerHolic',
    description: '보행 분석 및 운동 추천 시스템입니다. TCN 모델과 LangGraph를 활용하여 사용자의 보행 패턴을 분석하고 개인화된 운동 프로그램을 제안합니다.',
    technologies: ['Python', 'FastAPI', 'TCN', 'LangGraph', 'ChromaDB'],
    github: 'https://github.com/Hu-tech-hub/WalkerHolic',
    demo: 'https://walkerholic.demo.com',
    category: 'AI/ML'
  },
  {
    title: '🤖 RAG 시스템',
    description: 'LangChain과 LangServe를 활용한 고도화된 RAG(Retrieval Augmented Generation) 시스템입니다. GPT-4와 벡터 검색을 결합하여 정확한 문서 기반 질의응답 서비스를 제공합니다.',
    technologies: ['Python', 'LangChain', 'LangServe', 'GPT-4', 'FAISS', 'MongoDB'],
    github: 'https://github.com/Hu-tech-hub/rag-system',
    demo: 'https://rag-system.demo.com',
    category: 'AI/ML'
  },
  {
    title: '👁️ Computer Vision Lab',
    description: '컴퓨터 비전 연구 및 학습을 위한 종합 실험실입니다. SIFT, ORB 특징점 검출부터 증강현실, 포즈 추정까지 다양한 CV 기술을 구현하고 연구합니다.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'NumPy'],
    github: 'https://github.com/Hu-tech-hub/Computer_Vision_Lab',
    demo: 'https://cv-lab.demo.com',
    category: 'AI/ML'
  },
  {
    title: '🎯 객체 감지 시스템',
    description: '실시간 객체 감지 및 추적 시스템입니다. RC카와 연동하여 자율주행 기능을 구현하고, 딥러닝 모델을 활용한 정확한 객체 인식을 제공합니다.',
    technologies: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Raspberry Pi'],
    github: 'https://github.com/Hu-tech-hub/detect_object_rc',
    demo: 'https://object-detection.demo.com',
    category: 'AI/ML'
  },
  {
    title: '⚡ FastAPI 학습 프로젝트',
    description: 'FastAPI 프레임워크의 핵심 기능들을 학습하고 실습한 프로젝트입니다. 경로/쿼리 파라미터, Jinja2 템플릿, Pydantic 모델 등 실무 중심의 기능을 구현했습니다.',
    technologies: ['Python', 'FastAPI', 'Jinja2', 'Pydantic', 'Uvicorn'],
    github: 'https://github.com/Hu-tech-hub/Fast_API',
    demo: 'https://fastapi-learning.demo.com',
    category: 'Backend'
  },
  {
    title: '📊 보폭 추정 모델',
    description: '머신러닝을 활용한 정확한 보폭 길이 추정 시스템입니다. 센서 데이터와 보행 패턴 분석을 통해 개인별 맞춤형 보폭 예측 모델을 제공합니다.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Hu-tech-hub/Stride_Length_Estimation_Model',
    demo: 'https://stride-estimation.demo.com',
    category: 'AI/ML'
  }
]

const categories = ['All', 'AI/ML', 'Backend', 'Computer Vision']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getProjectCount = (category: string) => {
    if (category === 'All') return projects.length
    return projects.filter(project => project.category === category).length
  }

  return (
    <section id="projects" className="py-24 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 relative">
            My Work
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <p className="text-center text-text-secondary mb-12 max-w-3xl mx-auto text-lg">
            AI/ML과 백엔드 개발을 중심으로 한 프로젝트들입니다. 
            보행 분석부터 컴퓨터 비전, RAG 시스템까지 다양한 기술을 활용합니다.
          </p>

          {/* Project Filters - Tamal Sen Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 text-text-secondary mb-4">
              <Filter className="w-5 h-5" />
              <span className="font-mono text-sm">Filter by</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30'
                      : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-text-primary border border-border-color'
                  }`}
                >
                  {category === 'All' ? `All ${getProjectCount(category)}` : `/ ${category} ${getProjectCount(category) < 10 ? '0' + getProjectCount(category) : getProjectCount(category)}`}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Project */}
          <motion.div
            className="bg-bg-secondary rounded-2xl p-8 md:p-12 mb-16 border border-border-color relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-blue to-accent-purple"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-accent-green mb-6">
              {featuredProject.title}
            </h3>
            
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {featuredProject.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-bg-tertiary text-accent-blue px-4 py-2 rounded-full text-sm font-mono border border-border-color"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-text-primary font-semibold mb-6">
              <strong>주요 성과:</strong> {featuredProject.achievements}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent-blue hover:text-accent-blue hover:-translate-y-1 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </motion.div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-bg-secondary p-8 rounded-xl border border-border-color hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                layout
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-bg-tertiary text-accent-green text-xs font-mono rounded-full border border-border-color">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg-tertiary text-accent-blue px-3 py-1 rounded-full text-xs font-mono border border-border-color"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-text-secondary text-xs font-mono px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Tamal Sen Style "Show project" button */}
                <div className="space-y-3">
                  <button 
                    className="w-full bg-gradient-to-r from-accent-green to-accent-blue text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    Show Project
                  </button>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-border-color text-text-secondary rounded-lg text-sm font-semibold hover:border-accent-blue hover:text-accent-blue transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-border-color text-text-secondary rounded-lg text-sm font-semibold hover:border-accent-blue hover:text-accent-blue transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}