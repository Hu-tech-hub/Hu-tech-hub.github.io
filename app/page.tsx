import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
export default function Home() {
  return <main><a className="skip-link" href="#projects">프로젝트로 바로가기</a><Navigation /><Hero /><About /><Projects /><Experience /><TechStack /><Contact /></main>
}
