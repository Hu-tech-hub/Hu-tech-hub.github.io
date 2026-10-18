const stacks = [
  { title: 'Languages', items: ['Python', 'C++', 'C#'] },
  { title: 'Vision & AI', items: ['OpenCV', 'MediaPipe', 'PyTorch', 'TensorFlow', 'NumPy'] },
  { title: 'Service', items: ['FastAPI', 'LangGraph', 'MongoDB'] },
  { title: 'Device & Simulation', items: ['Raspberry Pi', 'Unity', 'GX Works3', 'GT Designer3', 'MX Component'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Linux', 'Jupyter'] },
]
export default function TechStack() {
  return <section id="tech" className="portfolio-section skills-section"><div className="portfolio-container">
    <div className="section-heading"><div><p className="eyebrow">TOOLBOX / 03</p><h2>프로젝트에서 쓴 도구<span>.</span></h2></div></div>
    <div className="skills-list">{stacks.map(stack => <div key={stack.title}><h3>{stack.title}</h3><div className="tech-tags">{stack.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </div></section>
}
