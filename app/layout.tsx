import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hu-tech-hub | AI/ML 백엔드 개발자 포트폴리오',
  description: 'AI/ML과 백엔드 개발을 결합한 지능형 시스템을 구축하는 개발자입니다. 보행 분석, 컴퓨터 비전, RAG 시스템 전문.',
  keywords: ['AI 백엔드 개발자', 'ML Backend Developer', 'Computer Vision', 'RAG System', 'LangChain', 'FastAPI', 'Python', 'Gait Analysis', '보행 분석', 'AI Portfolio'],
  authors: [{ name: 'Hu-tech-hub' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0d1117',
  openGraph: {
    title: 'Hu-tech-hub | AI/ML 백엔드 개발자',
    description: 'AI/ML과 백엔드 개발을 결합한 지능형 시스템 구축 전문가. 보행 분석부터 RAG 시스템까지.',
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