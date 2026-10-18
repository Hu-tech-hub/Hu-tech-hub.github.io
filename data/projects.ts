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
    description: '착용형 IMU 센서로 보행을 분석하고 낙상을 감지하는 서비스입니다.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Raspberry Pi'],
    github: own('WalkerHolic'), image: profileMedia + '/bodyfence-demo.gif',
    imageAlt: '일반 보행과 파킨슨 보행 시연 및 앱의 보행 분석 화면',
    role: ['팀장 역할과 데이터 수집·라벨링 절차 정리', '영상과 IMU 데이터를 동기화해 보행 단계에 자동으로 라벨을 붙이는 GUI 개발', 'TCN 보폭 예측 모델 개발과 보행 분석 기능 통합'],
    highlights: ['영상과 센서 데이터의 시간을 맞춰 학습 데이터 생성', '앱에서 보행 분석 결과 확인 및 낙상 알림 제공'],
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
    description: '천장에 부착한 ChArUco Diamond 마커로 위치와 방향을 파악해 목적지까지 이동하는 카트입니다.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi'], github: own('ArUco_Autonomous_Car'),
    image: 'https://raw.githubusercontent.com/Hu-tech-hub/ArUco_Autonomous_Car/main/docs/media/drive.gif',
    imageAlt: '천장 마커를 따라 이동하고 회전하는 자율주행 카트',
    role: ['OpenCV 기반 카메라 캘리브레이션과 위치·자세 추정', 'BFS 경로 탐색과 영상 피드백 PID 주행 제어'],
    highlights: ['마커 인식 결과를 이용해 메카넘 휠의 이동·회전 제어', '주행·회전 시험을 반복하며 제어값 조정'],
  },
  {
    id: 'review', title: 'Re:View', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '강의 화면과 음성 설명을 함께 분석해 강의 노트를 만들고 질문에 답하는 서비스입니다.',
    technologies: ['Python', 'OpenCV', 'FastAPI', 'LangGraph'], github: 'https://github.com/seolbbb/Re-View',
    image: profileMedia + '/review-preview.gif', imageAlt: 'Re:View 강의 업로드와 노트 서비스 화면',
    role: ['ORB·pHash 기반 핵심 슬라이드 추출', 'LangGraph 질의응답 챗봇 구현과 AI 모듈 통합'],
    highlights: ['중복 화면 제거와 병렬 처리로 전처리 시간 약 40% 단축', '음성·화면 분석부터 요약과 질의응답까지 기능 통합'],
  },
  {
    id: 'pazule', title: 'PAZULE', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '파주 출판단지의 명소를 찾아 사진을 찍으면 AI가 정답을 확인하고 힌트를 주는 미션 게임입니다.',
    technologies: ['Python', 'BLIP-VQA', 'CLIP'], github: 'https://github.com/seung23/PAZULE',
    image: profileMedia + '/pazule-demo.gif', imageAlt: 'PAZULE의 미션 선택·실패 힌트·성공 결과 화면',
    demo: 'https://youtu.be/nwvFlsWx7yI',
    role: ['파주 지역 명소를 찾는 게임과 미션 구성 기획', 'BLIP-VQA로 장소를 확인하고 오답 이유에 맞는 힌트를 생성하는 기능 개발'],
    highlights: ['장소와 감성 조건을 함께 확인하는 사진 미션', '파주시 AI 혁신 아이디어 경진대회 최우수상'],
  },
  {
    id: 'detection', title: 'Object Detection', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '이미지에서 10종의 재활용 품목을 찾고 각각의 위치를 표시하는 프로젝트입니다.',
    technologies: ['Python', 'PyTorch', 'MMDetection', 'YOLO'],
    github: 'https://github.com/boostcampaitech8/pro-cv-objectdetection-cv-02',
    image: profileMedia + '/detection-preview.png', imageAlt: '객체 탐지 프로젝트의 재활용 품목 소개 이미지',
    role: ['EDA·데이터 증강·2-Stage 모델 실험', 'Docker 공통 실행환경과 Issue·Branch·Commit·PR 협업 절차 정리'],
    highlights: ['서로 다른 모델의 예측 결과를 앙상블로 결합', '팀원 간 실행환경을 맞추고 실험 결과와 코드 변경 이력 관리'],
  },
  {
    id: 'segmentation', title: 'Semantic Segmentation', group: '부스트캠프', subtitle: '네이버 부스트캠프 AI Tech · 팀 프로젝트',
    description: '손 X-ray 이미지에서 29종의 뼈 영역을 픽셀 단위로 구분하는 프로젝트입니다.',
    technologies: ['Python', 'PyTorch', 'SMP', 'MMSegmentation'],
    github: 'https://github.com/boostcampaitech8/pro-cv-semanticsegmentation-cv-02',
    image: profileMedia + '/segmentation-preview.png', imageAlt: '손 뼈 X-ray 예시 이미지. 모델 예측 결과가 아님',
    imageCredit: { label: '손 X-ray 예시 · Wikipedia', url: 'https://en.m.wikipedia.org/wiki/File:X-ray_of_normal_hand_by_dorsoplantar_projection.jpg' },
    highlights: ['겹치는 뼈 영역을 구분하는 다중 라벨 영역 분할', '모델과 입력 해상도 비교 및 손목 영역 잘라내기·앙상블 실험'],
  },
  {
    id: 'plc', title: 'PLC Virtual Factory', group: '개인 프로젝트', subtitle: '개인 프로젝트 · 가상 검사 자동화',
    description: 'PLC로 공정 순서를 제어하고 Unity에서 제품 이송과 검사·분류 과정을 재현한 가상설비입니다.',
    technologies: ['C#', 'Unity', 'GX Works3', 'GT Designer3', 'MX Component'],
    github: own('PLC_VirtualFactory'),
    image: 'https://raw.githubusercontent.com/Hu-tech-hub/PLC_VirtualFactory/main/docs/demos/04-ok-ng-discharge.gif',
    imageAlt: 'Unity 가상설비에서 검사 결과에 따라 OK·NG 제품이 분리 배출되는 장면',
    role: ['공정 시퀀스·Device Map·통신 구조 설계', 'PLC·GOT·Unity와 C# 통신 Bridge 구현', 'Unity 센서 상태와 PLC 명령을 주고받으며 공정의 자동 반복 확인'],
    highlights: ['자동·수동 운전과 인터록·비상정지·복구', '제품 공급 → 검사 → OK·NG 배출의 가상 공정'],
  },
  {
    id: 'lab', title: 'Computer Vision Lab', group: '영상처리 연구실', subtitle: '영상처리 연구실 · 학습·랩미팅 기록',
    description: '영상 필터링과 특징점 검출 및 카메라 기하를 공부하며 작성한 코드와 노트북입니다.',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Jupyter'], github: own('Computer_Vision_Lab'),
    highlights: ['SIFT·ORB 특징점과 디스크립터 매칭', '카메라 캘리브레이션·증강현실·포즈 추정', '선형대수·신호처리 기초 학습'],
  },
]
export const projectGroups = ['전체', '디스부', '캡스톤 디자인', '부스트캠프', '개인 프로젝트', '영상처리 연구실']
