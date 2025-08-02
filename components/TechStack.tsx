'use client'

import { motion } from 'framer-motion'

const techStacks = [
  {
    category: 'Languages',
    technologies: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Go'],
    icon: '💻'
  },
  {
    category: 'Frameworks',
    technologies: ['Spring Boot', 'Django', 'Express.js', 'FastAPI'],
    icon: '🚀'
  },
  {
    category: 'Databases',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: '🗄️'
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Docker', 'AWS', 'Jenkins', 'Git', 'Linux'],
    icon: '⚙️'
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Tech Stack
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                className="bg-bg-secondary p-8 rounded-xl border border-border-color text-center hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 shimmer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(88, 166, 255, 0.2)'
                }}
              >
                <div className="text-4xl mb-4">{stack.icon}</div>
                <h3 className="font-mono text-xl text-accent-blue mb-4 group-hover:text-accent-green transition-colors">
                  {stack.category}
                </h3>
                <div className="text-text-secondary space-y-1">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="hover:text-text-primary transition-colors">
                      {tech}
                    </div>
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