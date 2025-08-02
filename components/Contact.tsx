'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText, MapPin, Phone } from 'lucide-react'

const contactLinks = [
  {
    name: 'Email',
    value: 'hu.tech.hub@gmail.com',
    href: 'mailto:hu.tech.hub@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400 hover:border-red-400'
  },
  {
    name: 'GitHub',
    value: 'github.com/Hu-tech-hub',
    href: 'https://github.com/Hu-tech-hub',
    icon: Github,
    color: 'hover:text-gray-400 hover:border-gray-400'
  },
  {
    name: 'Portfolio',
    value: 'hu-tech-hub.github.io',
    href: 'https://hu-tech-hub.github.io',
    icon: FileText,
    color: 'hover:text-green-400 hover:border-green-400'
  },
  {
    name: 'Research',
    value: 'AI/ML Research Hub',
    href: 'https://github.com/Hu-tech-hub?tab=repositories',
    icon: Linkedin,
    color: 'hover:text-blue-400 hover:border-blue-400'
  }
]

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-bg-secondary border-t border-border-color">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
            Let's Connect
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-16 h-1 bg-gradient-to-r from-accent-green to-accent-blue rounded-full"></div>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            새로운 기회와 협업에 언제나 열려있습니다!<br />
            함께 멋진 프로젝트를 만들어보시겠습니까?
          </motion.p>
          
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-4 p-6 bg-bg-tertiary border border-border-color rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${contact.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 bg-bg-secondary rounded-full border border-border-color group-hover:border-current transition-colors">
                    <IconComponent className="w-6 h-6 text-text-secondary group-hover:text-current transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary group-hover:text-current transition-colors">
                      {contact.name}
                    </div>
                    <div className="text-sm text-text-secondary font-mono mt-1">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
          
          {/* Additional Info */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent-blue" />
              <span>Seoul, South Korea</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent-green" />
              <span>Available for Remote Work</span>
            </div>
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            className="border-t border-border-color mt-16 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary">
              © 2024 Hu-tech-hub. Built with Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-text-secondary mt-2 font-mono">
              {"{ Made with 🧠 AI and ⚡ Passion }"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}