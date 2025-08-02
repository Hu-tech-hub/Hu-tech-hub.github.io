'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    fullDescription: string
    strategy: string
    client: string
    technologies: string[]
    github: string
    demo: string
    category: string
    achievements?: string
    challenges?: string
    features?: string[]
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="min-h-screen flex items-start justify-center p-4 pt-20">
            <motion.div
              className="bg-bg-secondary border border-border-color rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-bg-secondary border-b border-border-color p-6 flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors font-mono text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-text-secondary hover:text-accent-blue transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-text-secondary font-mono mb-8">
                  <span>Home</span>
                  <span>/</span>
                  <span>Portfolio</span>
                  <span>/</span>
                  <span className="text-accent-blue">{project.title}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  {project.title}
                </h1>

                {/* Main Description */}
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h6 className="text-sm font-semibold text-accent-blue mb-3 uppercase tracking-wide">
                      Strategy
                    </h6>
                    <p className="text-text-secondary">{project.strategy}</p>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold text-accent-blue mb-3 uppercase tracking-wide">
                      Client
                    </h6>
                    <p className="text-text-secondary">{project.client}</p>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold text-accent-blue mb-3 uppercase tracking-wide">
                      Technology
                    </h6>
                    <p className="text-text-secondary">{project.technologies.join(', ')}</p>
                  </div>
                </div>

                {/* Features Section */}
                {project.features && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">주요 기능</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-text-secondary">
                          <span className="text-accent-green mt-2 text-xs">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">주요 성과</h3>
                    <p className="text-text-secondary leading-relaxed">{project.achievements}</p>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">기술적 도전</h3>
                    <p className="text-text-secondary leading-relaxed">{project.challenges}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Open Project
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent-blue hover:text-accent-blue hover:-translate-y-1 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border-color p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="text-text-secondary hover:text-accent-blue transition-colors">
                      Facebook
                    </button>
                    <button className="text-text-secondary hover:text-accent-blue transition-colors">
                      Twitter
                    </button>
                    <button className="text-text-secondary hover:text-accent-blue transition-colors">
                      LinkedIn
                    </button>
                  </div>
                  <span className="text-sm text-text-secondary font-mono">
                    Next Project: [다음 프로젝트 이름]
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}