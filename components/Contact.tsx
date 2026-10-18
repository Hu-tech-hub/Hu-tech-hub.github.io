import { ArrowUpRight, Github, Mail, BookOpen } from 'lucide-react'
export default function Contact() {
  return <footer id="contact" className="contact-section"><div className="portfolio-container">
    <p className="eyebrow">CONTACT / LINKS</p><h2>연락처와<br />프로젝트 기록<span>.</span></h2>
    <div className="contact-links">
      <a href="https://github.com/Hu-tech-hub" target="_blank" rel="noopener noreferrer"><Github size={20} /><span>GitHub<small>프로젝트 코드와 저장소</small></span><ArrowUpRight /></a>
      <a href="https://yeobi0106.tistory.com/" target="_blank" rel="noopener noreferrer"><BookOpen size={20} /><span>Blog<small>구현 과정과 문제 해결 기록</small></span><ArrowUpRight /></a>
      <a href="mailto:rlatkdduq1234@gmail.com"><Mail size={20} /><span>Email<small>rlatkdduq1234@gmail.com</small></span><ArrowUpRight /></a>
    </div><div className="site-footer"><span>© {new Date().getFullYear()} Sangyeob Kim</span><a href="#home">맨 위로 ↑</a></div>
  </div></footer>
}
