const stacks = [
  { title: '프로그래밍 언어', items: ['Python', 'C++', 'C#'] },
  { title: '영상처리·AI', items: ['OpenCV', 'MediaPipe', 'PyTorch', 'TensorFlow', 'NumPy'] },
  { title: '서비스 개발', items: ['FastAPI', 'LangGraph', 'MongoDB'] },
  { title: '장치·시뮬레이션', items: ['Raspberry Pi', 'Unity', 'GX Works3', 'GT Designer3', 'MX Component'] },
  { title: '개발 도구', items: ['Git', 'GitHub', 'Docker', 'Linux', 'Jupyter'] },
]
export default function TechStack() {
  return <section id="tech" className="portfolio-section skills-section"><div className="portfolio-container">
    <div className="section-heading"><div><p className="eyebrow">TOOLBOX / 03</p><h2>사용 기술<span>.</span></h2></div></div>
    <div className="skills-list">{stacks.map(stack => <div key={stack.title}><h3>{stack.title}</h3><div className="tech-tags">{stack.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </div></section>
}
