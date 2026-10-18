import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'

export default function Hero() {
  return <section id="home" className="portfolio-hero">
    <div className="portfolio-container hero-layout">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> SANGYEOB KIM · SOFTWARE DEVELOPER</p>
        <h1>영상과 센서를 다루는<br />개발자 <span>김상엽입니다.</span></h1>
        <p className="hero-description">보행 분석과 자율주행 카트부터<br />AI 서비스와 가상 검사설비까지 직접 구현해 왔습니다.</p>
        <div className="hero-actions"><a className="primary-link" href="#projects">프로젝트 보기 <ArrowDown size={17} /></a><a href="https://github.com/Hu-tech-hub" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a></div>
        <div className="hero-topics"><span>Computer Vision</span><span>Sensor Data</span><span>Software Integration</span></div>
      </div>
      <div className="hero-visual">
        <div className="visual-caption"><span>프로젝트 시연</span><span>01 — 08</span></div>
        <a href="#bodyfence" className="hero-preview">
          <img src="https://raw.githubusercontent.com/Hu-tech-hub/Hu-tech-hub/main/assets/profile/bodyfence-demo.gif" alt="BODYFENCE 보행 분석 시연" width={800} height={450} />
          <div><span>디지털 스마트 아카데미 부산 · 팀 프로젝트</span><strong>BODYFENCE <ArrowUpRight size={20} /></strong></div>
        </a>
        <div className="hero-visual-footer"><span>영상 · 센서 · 제어 · 서비스</span><span className="mono">Hu-tech-hub ↗</span></div>
      </div>
    </div>
  </section>
}
