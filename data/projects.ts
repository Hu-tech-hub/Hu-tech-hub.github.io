export type RelatedRepository = { name: string; description: string; url: string }
export type Project = {
  id: string; title: string; group: string; subtitle: string; description: string
  technologies: string[]; github: string; image?: string; imageAlt?: string; role?: string[]
  highlights: string[]; modules?: RelatedRepository[]; experiments?: RelatedRepository[]
  reference?: RelatedRepository; imageCredit?: { label: string; url: string }; demo?: string
}
const profileMedia = 'https://raw.githubusercontent.com/Hu-tech-hub/Hu-tech-hub/main/assets/profile'
const own = (name: string) => 'https://github.com/Hu-tech-hub/' + name
export const projects: Project[] = [
  {
    id: 'bodyfence', title: 'BODYFENCE', group: '디스부', subtitle: '디지털 스마트 아카데미 부산 · 팀 프로젝트',
    description: 'IMU 센서와 AI를 결합해 보행을 분석하고 낙상을 감지하는 웨어러블 플랫폼.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Raspberry Pi'],
    github: own('WalkerHolic'), image: profileMedia + '/bodyfence-demo.gif',
    imageAlt: '일반 보행과 파킨슨 보행 시연 및 앱의 보행 분석 화면',
    role: ['팀장으로 데이터 수집과 라벨링 절차 수립', '영상·IMU 동기화 기반 보행 단계 자동 라벨링 GUI 구현', 'TCN 기반 보폭 예측과 보행 분석 파이프라인 통합'],
    highlights: ['영상과 센서의 시간축을 맞춰 학습 데이터 구축', '보행 분석과 낙상 감지 결과를 앱 서비스로 연결'],
    modules: [
      { name: 'make_gait_data', description: '영상·IMU 데이터 처리와 보행 단계 라벨링', url: own('make_gait_data') },
      { name: 'Stride_Length_Estimation_Model', description: 'TCN 보폭 추론 및 GUI·CLI 실행', url: own('Stride_Length_Estimation_Model') },
      { name: 'NAKSANG', description: 'IMU 기반 보행 이벤트 감지·시각화', url: own('NAKSANG') },
    ],
    experiments: [
      { name: 'gait-analyzer-chronos-langchain', description: 'Chronos 임베딩 기반 센서 분석 RAG', url: own('gait-analyzer-chronos-langchain') },
      { name: 'Chatbot', description: 'MongoDB 기반 텍스트 처리·챗봇', url: own('Chatbot') },
      { name: 'rag-system', description: '문서 검색·질의응답 파이프라인', url: own('rag-system') },
    ],
    reference: { name: 'Chronos', description: '시계열 모델 참고 저장소', url: own('Chronos') },
  },
  {
    id: 'aruco', title: 'ArUco Autonomous Cart', group: '캡스톤 디자인', subtitle: '캡스톤 디자인 · 팀 프로젝트',
    description: '천장의 ChArUco Diamond 마커로 위치와 방향을 추정하고 목적지까지 이동하는 자율주행 카트.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi'], github: own('ArUco_Autonomous_Car'),
    image: 'https://raw.githubusercontent.com/Hu-tech-hub/ArUco_Autonomous_Car/main/docs/media/drive.gif',
    imageAlt: '천장 마커를 따라 이동하고 회전하는 자율주행 카트',
    role: ['OpenCV 기반 카메라 캘리브레이션과 위치·자세 추정', 'BFS 경로 탐색과 영상 피드백 PID 주행 제어'],
    highlights: ['카메라 인식부터 메카넘 휠 구동까지 연결', '주행·회전 시험을 반복하며 제어값 조정'],
  },
  {
    id: 'review', title: 'Re:View', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '강의 화면과 음성을 시간축으로 연결해 독립형 강의 노트와 질의응답을 제공하는 서비스.',
    technologies: ['Python', 'OpenCV', 'FastAPI', 'LangGraph'], github: 'https://github.com/seolbbb/Re-View',
    image: profileMedia + '/review-preview.gif', imageAlt: 'Re:View 강의 업로드와 노트 서비스 화면',
    role: ['ORB·pHash 기반 핵심 슬라이드 추출', 'LangGraph 질의응답 챗봇 구현과 AI 모듈 통합'],
    highlights: ['중복 화면 제거와 병렬 처리로 전처리 시간 약 40% 단축', '음성·화면 분석·요약·질의응답을 하나의 흐름으로 연결'],
  },
  {
    id: 'pazule', title: 'PAZULE', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '사진으로 파주 출판단지의 숨은 명소를 찾고 AI 판정과 힌트로 미션을 풀어가는 게임.',
    technologies: ['Python', 'BLIP-VQA', 'CLIP'], github: 'https://github.com/seung23/PAZULE',
    image: profileMedia + '/pazule-demo.gif', imageAlt: 'PAZULE의 미션 선택·실패 힌트·성공 결과 화면',
    demo: 'https://youtu.be/nwvFlsWx7yI',
    role: ['지역 랜드마크를 찾는 게임과 미션 흐름 기획', 'BLIP-VQA 랜드마크 검증과 실패 원인 기반 힌트 생성 구현'],
    highlights: ['장소와 감성 조건을 함께 확인하는 사진 미션', '파주시 AI 혁신 아이디어 경진대회 최우수상'],
  },
  {
    id: 'detection', title: 'Object Detection', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '이미지 속 10개 재활용 품목의 종류와 위치를 탐지하는 컴퓨터 비전 프로젝트.',
    technologies: ['Python', 'PyTorch', 'MMDetection', 'YOLO'],
    github: 'https://github.com/boostcampaitech8/pro-cv-objectdetection-cv-02',
    image: profileMedia + '/detection-preview.png', imageAlt: '객체 탐지 프로젝트의 재활용 품목 소개 이미지',
    role: ['EDA·데이터 증강·2-Stage 모델 실험', 'Docker 공통 실행환경과 Issue·Branch·Commit·PR 협업 절차 정리'],
    highlights: ['여러 모델 계열의 예측 결과를 앙상블', '동일한 환경에서 실험 결과와 변경 이력 비교'],
  },
  {
    id: 'segmentation', title: 'Semantic Segmentation', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '손 X-ray 이미지에서 겹치는 뼈를 포함한 29개 영역을 픽셀 단위로 분할하는 프로젝트.',
    technologies: ['Python', 'PyTorch', 'SMP', 'MMSegmentation'],
    github: 'https://github.com/boostcampaitech8/pro-cv-semanticsegmentation-cv-02',
    image: profileMedia + '/segmentation-preview.png', imageAlt: '손 뼈 X-ray 예시 이미지. 모델 예측 결과가 아님',
    imageCredit: { label: '손 X-ray 예시 · Wikipedia', url: 'https://en.m.wikipedia.org/wiki/File:X-ray_of_normal_hand_by_dorsoplantar_projection.jpg' },
    highlights: ['Multi-label semantic segmentation', '모델·해상도·손목 영역 Crop·앙상블 실험'],
  },
  {
    id: 'plc', title: 'PLC Virtual Factory', group: '개인 프로젝트', subtitle: '개인 프로젝트 · 가상 검사 자동화',
    description: 'PLC가 공정 순서를 제어하고 Unity가 동작을 표현하는 가상 검사 자동화 설비.',
    technologies: ['C#', 'Unity', 'GX Works3', 'GT Designer3', 'MX Component'],
    github: own('PLC_VirtualFactory'),
    image: 'https://raw.githubusercontent.com/Hu-tech-hub/PLC_VirtualFactory/main/docs/demos/04-ok-ng-discharge.gif',
    imageAlt: 'Unity 가상설비에서 검사 결과에 따라 OK·NG 제품이 분리 배출되는 장면',
    role: ['공정 시퀀스·Device Map·통신 구조 설계', 'PLC·GOT·Unity와 C# 통신 Bridge 구현', '센서 상태와 PLC 명령의 양방향 통신 및 자동 반복 검증'],
    highlights: ['자동·수동 운전과 인터록·비상정지·복구', '제품 공급 → 검사 → OK·NG 배출의 가상 공정'],
  },
  {
    id: 'lab', title: 'Computer Vision Lab', group: '영상처리 연구실', subtitle: '영상처리 연구실 · 학습·랩미팅 기록',
    description: '영상 필터링과 특징점 검출부터 카메라 기하까지 코드와 노트북으로 정리한 기록.',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Jupyter'], github: own('Computer_Vision_Lab'),
    highlights: ['SIFT·ORB 특징점과 디스크립터 매칭', '카메라 캘리브레이션·증강현실·포즈 추정', '선형대수·신호처리 기초 학습'],
  },
]
export const projectGroups = ['전체', '디스부', '캡스톤 디자인', '부스트캠프', '개인 프로젝트', '영상처리 연구실']
