# 김상엽 · Software Developer Portfolio

영상과 센서 데이터를 다루고 소프트웨어와 장치를 연결한 프로젝트를 소개합니다.

- 사이트: https://hu-tech-hub.github.io
- GitHub: https://github.com/Hu-tech-hub
- 블로그: https://yeobi0106.tistory.com/

## 구성

- BODYFENCE: 디지털 스마트 아카데미 부산 프로젝트. 핵심 모듈과 별도 실험 구분
- ArUco Autonomous Cart: 캡스톤 디자인
- Re:View · PAZULE · Object Detection · Semantic Segmentation: 네이버 부스트캠프
- PLC Virtual Factory: 개인 가상 검사 자동화 프로젝트
- Computer Vision Lab: 영상처리 연구실 학습·랩미팅 기록

프로젝트 내용과 링크는 `data/projects.ts`에서 관리합니다. Semantic Segmentation의 X-ray는 Wikipedia 예시 이미지이며 모델 예측 결과가 아닙니다. 프로젝트 이미지는 GitHub 저장소의 공개 자산을 사용합니다.

## 개발

```sh
npm ci
npm run dev
```

## 빌드와 배포

```sh
npm run build
```

Next.js 정적 내보내기 결과는 `out/`에 생성됩니다. `main` 브랜치에 반영하면 기존 GitHub Actions 워크플로가 GitHub Pages로 배포합니다.
