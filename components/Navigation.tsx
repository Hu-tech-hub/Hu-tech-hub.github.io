'use client'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
const items = [{ href: '#projects', title: 'Projects' }, { href: '#about', title: 'About' }, { href: '#experience', title: 'Activities' }, { href: '#tech', title: 'Tools' }, { href: '#contact', title: 'Contact' }]
export default function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="portfolio-container navigation" aria-label="주 메뉴">
    <a href="#home" className="wordmark" onClick={() => setOpen(false)}>Sangyeob Kim<span>.</span></a>
    <div className="desktop-nav">{items.map(item => <a key={item.href} href={item.href}>{item.title}</a>)}<a className="nav-github" href="https://github.com/Hu-tech-hub" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
    <button className="mobile-toggle" type="button" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </nav>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="모바일 메뉴">{items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.title}</a>)}</nav>}</header>
}
