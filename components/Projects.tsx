'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const featuredProject = {
  title: '🚀 E-Commerce 백엔드 API',
  description: '대용량 트래픽을 처리하는 이커머스 플랫폼의 백엔드 시스템입니다. 마이크로서비스 아키텍처를 적용하여 확장성을 높였으며, Redis를 활용한 캐싱으로 응답 속도를 50% 개선했습니다.',
  technologies: ['Spring Boot', 'MySQL', 'Redis', 'AWS', 'Docker'],
  achievements: '동시 사용자 10,000명 처리, 응답시간 50% 단축',
  github: 'https://github.com/example/ecommerce-api',
  demo: 'https://api.example.com'
}

const projects = [
  {
    title: '📊 실시간 데이터 분석 API',
    description: '실시간으로 수집되는 대용량 데이터를 처리하고 분석하는 API 시스템입니다. Apache Kafka를 활용한 스트리밍 처리로 데이터 처리량을 대폭 개선했습니다.',
    technologies: ['Python', 'FastAPI', 'Kafka', 'PostgreSQL'],
    github: 'https://github.com/example/data-analysis-api',
    demo: 'https://analytics.example.com'
  },
  {
    title: '🔐 인증/인가 서비스',
    description: 'JWT 기반의 인증/인가 마이크로서비스입니다. OAuth 2.0과 RBAC을 구현하여 보안성과 확장성을 동시에 확보했습니다.',
    technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    github: 'https://github.com/example/auth-service',
    demo: 'https://auth.example.com'
  },
  {
    title: '📱 채팅 시스템',
    description: 'WebSocket을 활용한 실시간 채팅 시스템입니다. Socket.IO와 Redis Pub/Sub으로 다중 서버 환경에서의 실시간 통신을 구현했습니다.',
    technologies: ['Node.js', 'Socket.IO', 'Redis', 'MongoDB'],
    github: 'https://github.com/example/chat-system',
    demo: 'https://chat.example.com'
  },
  {
    title: '🔍 검색 엔진 API',
    description: 'Elasticsearch를 활용한 고성능 검색 엔진 API입니다. 자동완성, 필터링, 정렬 기능을 포함하여 사용자 경험을 극대화했습니다.',
    technologies: ['Java', 'Spring Boot', 'Elasticsearch', 'MySQL'],
    github: 'https://github.com/example/search-api',
    demo: 'https://search.example.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Featured Projects
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg-tertiary text-accent-blue px-3 py-1 rounded-full text-xs font-mono border border-border-color"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border-color text-text-secondary rounded-lg text-sm font-semibold hover:border-accent-blue hover:text-accent-blue hover:-translate-y-1 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}