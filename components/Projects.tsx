'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, FolderTree, BookOpen } from 'lucide-react'
import { projects, projectGroups, type Project, type RelatedRepository } from '@/data/projects'

function RepositoryList({ items }: { items: RelatedRepository[] }) {
  return <ul className="repo-list">{items.map(item => <li key={item.url}>
    <a href={item.url} target="_blank" rel="noopener noreferrer"><span>{item.name}</span><ArrowUpRight size={16} /></a>
    <p>{item.description}</p>
  </li>)}</ul>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card" id={project.id}>
    {project.image ? <div className="project-media">
      <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" width={800} height={450} />
      <span className="media-number">{String(index + 1).padStart(2, '0')}</span>
    </div> : <div className="research-cover">
      <BookOpen size={40} strokeWidth={1.2} /><p>COMPUTER VISION LAB</p>
      <span>특징점 검출 · 카메라 기하 · 영상처리</span>
    </div>}
    <div className="project-content">
      <p className="eyebrow">{project.subtitle}</p>
      <h3>{project.title}</h3><p className="project-description">{project.description}</p>
      <div className="tech-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      {project.role && <div className="project-role"><h4>담당한 일</h4><ul>{project.role.map(item => <li key={item}>{item}</li>)}</ul></div>}
      <details className="project-details"><summary>주요 구현 내용</summary><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details>
      {project.modules && <div className="project-modules"><h4><FolderTree size={17} /> 데이터 처리·보행 분석</h4><RepositoryList items={project.modules} /></div>}
      {project.experiments && <details className="project-details"><summary>별도 실험 · 센서 분석·챗봇·RAG</summary>
        <p className="experiment-note">프로젝트를 진행하며 별도로 실험한 내용입니다. 최종 시스템에는 포함하지 않았습니다.</p><RepositoryList items={project.experiments} />
        {project.reference && <a className="reference-link" href={project.reference.url} target="_blank" rel="noopener noreferrer">{project.reference.name} · {project.reference.description} ↗</a>}
      </details>}
      {project.imageCredit && <a className="image-credit" href={project.imageCredit.url} target="_blank" rel="noopener noreferrer">{project.imageCredit.label}</a>}
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> 저장소 <ArrowUpRight size={15} /></a>
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">시연 영상 <ArrowUpRight size={15} /></a>}
      </div>
    </div>
  </article>
}

export default function Projects() {
  const [group, setGroup] = useState('전체')
  useEffect(() => {
    const navigateToProject = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a[href^="#"]')
      const hash = anchor?.getAttribute('href')
      if (!hash || !projects.some(project => '#' + project.id === hash)) return
      event.preventDefault()
      setGroup('전체')
      window.history.pushState(null, '', hash)
      window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
    }
    document.addEventListener('click', navigateToProject)
    return () => document.removeEventListener('click', navigateToProject)
  }, [])
  const visible = group === '전체' ? projects : projects.filter(project => project.group === group)
  return <section id="projects" className="portfolio-section">
    <div className="portfolio-container">
      <div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>주요 프로젝트<span>.</span></h2></div>
        <p>프로젝트별 구현 내용과 담당 역할을 정리했습니다.<br />관련 모듈과 별도 실험은 각 프로젝트에서 확인할 수 있습니다.</p>
      </div>
      <div className="project-filters" role="group" aria-label="프로젝트 활동별 필터">
        {projectGroups.map(item => <button key={item} type="button" aria-pressed={group === item} onClick={() => setGroup(item)}>{item}<span>{item === '전체' ? projects.length : projects.filter(p => p.group === item).length}</span></button>)}
      </div>
      <p className="sr-only" aria-live="polite">{group} 프로젝트 {visible.length}개</p>
      <div className="portfolio-grid">{visible.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div>
    </div>
  </section>
}
