const activities = [
  { label: '연구실', title: '영상처리 연구실', description: '영상처리와 카메라 기하를 학습하고 실습 코드와 랩미팅 자료로 정리했습니다.', href: '#lab' },
  { label: '캡스톤 디자인', title: 'ArUco 자율주행 카트', description: '천장 마커 인식과 위치 추정 및 영상 피드백 주행 제어를 연결했습니다.', href: '#aruco' },
  { label: '교육 · 팀 프로젝트', title: '디지털 스마트 아카데미 부산', description: 'BODYFENCE에서 데이터 구축과 보행 분석 파이프라인을 개발했습니다.', href: '#bodyfence' },
  { label: '교육 · 팀 프로젝트', title: '네이버 부스트캠프 AI Tech', description: '객체 탐지와 영역 분할 및 Re:View와 PAZULE 팀 프로젝트를 진행했습니다.', href: '#review' },
  { label: '개인 프로젝트', title: 'PLC Virtual Factory', description: 'PLC·GOT·Unity를 연동하고 가상 검사공정의 반복 동작을 검증했습니다.', href: '#plc' },
]
export default function Experience() {
  return <section id="experience" className="portfolio-section activities-section"><div className="portfolio-container">
    <div className="section-heading"><div><p className="eyebrow">EXPERIENCE & LEARNING / 02</p><h2>경험을 쌓은 곳<span>.</span></h2></div><p>프로젝트와 교육 및 연구실 활동</p></div>
    <div className="activity-list">{activities.map((item, index) => <a href={item.href} key={item.title}><span className="activity-index">0{index + 1}</span><div><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></div><span aria-hidden="true">↗</span></a>)}</div>
  </div></section>
}
