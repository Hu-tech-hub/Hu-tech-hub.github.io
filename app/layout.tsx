import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '백엔드 개발자 포트폴리오',
  description: '안정적이고 확장 가능한 백엔드 시스템을 구축하는 개발자입니다.',
  keywords: ['백엔드 개발자', 'Backend Developer', '포트폴리오', 'Portfolio', 'Spring Boot', 'Node.js', 'Python'],
  authors: [{ name: '홍길동' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0d1117',
  openGraph: {
    title: '백엔드 개발자 포트폴리오',
    description: '안정적이고 확장 가능한 백엔드 시스템을 구축하는 개발자입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans text-text-primary bg-bg-primary antialiased">
        {children}
      </body>
    </html>
  )
}