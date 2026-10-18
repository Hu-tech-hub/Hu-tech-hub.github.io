import './globals.css'
import type { Metadata, Viewport } from 'next'
export const metadata: Metadata = {
  title: '김상엽 | Software Developer',
  description: '영상과 센서 데이터를 다루고 소프트웨어와 장치를 연결하는 김상엽의 포트폴리오. BODYFENCE · ArUco · 부스트캠프 · PLC Virtual Factory.',
  authors: [{ name: '김상엽' }],
  metadataBase: new URL('https://hu-tech-hub.github.io'),
  openGraph: { title: '김상엽 | Software Developer', description: '데이터를 읽고 동작으로 연결합니다.', type: 'website', locale: 'ko_KR', url: 'https://hu-tech-hub.github.io' },
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0d1117' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>
}
