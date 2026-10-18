import './globals.css'
import type { Metadata, Viewport } from 'next'
export const metadata: Metadata = {
  title: '김상엽 | Software Developer',
  description: '영상처리와 센서 데이터 분석 및 장치 제어 프로젝트를 소개하는 김상엽의 포트폴리오. BODYFENCE · ArUco · 부스트캠프 · PLC Virtual Factory.',
  authors: [{ name: '김상엽' }],
  metadataBase: new URL('https://hu-tech-hub.github.io'),
  openGraph: { title: '김상엽 | Software Developer', description: '영상과 센서를 다루는 개발자 김상엽의 프로젝트를 소개합니다.', type: 'website', locale: 'ko_KR', url: 'https://hu-tech-hub.github.io' },
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0d1117' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>
}
