# 백엔드 개발자 포트폴리오

Next.js와 Tailwind CSS로 제작된 모던한 백엔드 개발자 포트폴리오입니다.

## 🚀 특징

- **Next.js 14** - 최신 React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Framer Motion** - 부드러운 애니메이션
- **Responsive Design** - 모든 디바이스에서 완벽한 반응형
- **GitHub Pages** - 자동 배포

## 🎨 디자인

- 다크 테마 & 코드 에디터 감성
- GitHub 스타일 컬러 팔레트
- 부드러운 애니메이션과 인터랙션
- 모던하고 미니멀한 레이아웃

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 프로젝트 구조

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── Hero.tsx          # 히어로 섹션
│   ├── About.tsx         # 소개 섹션
│   ├── TechStack.tsx     # 기술 스택
│   ├── Projects.tsx      # 프로젝트 갤러리
│   ├── Experience.tsx    # 경력 섹션
│   └── Contact.tsx       # 연락처
├── .github/workflows/     # GitHub Actions
└── public/               # 정적 파일
```

## 🚀 시작하기

### 개발 환경 설정

1. **저장소 클론**
   ```bash
   git clone https://github.com/Hu-tech-hub/Hu-tech-hub.github.io.git
   cd Hu-tech-hub.github.io
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드 및 배포

1. **프로덕션 빌드**
   ```bash
   npm run build
   ```

2. **정적 파일 생성**
   ```bash
   npm run export
   ```

3. **GitHub Pages 배포**
   ```bash
   git push origin main
   ```
   > GitHub Actions가 자동으로 배포를 처리합니다.

## 📝 커스터마이징

### 개인 정보 수정

1. **기본 정보** - `components/Hero.tsx`에서 이름과 소개 수정
2. **기술 스택** - `components/TechStack.tsx`에서 사용 기술 수정
3. **프로젝트** - `components/Projects.tsx`에서 프로젝트 정보 수정
4. **경력** - `components/Experience.tsx`에서 경력 사항 수정
5. **연락처** - `components/Contact.tsx`에서 연락처 정보 수정

### 스타일 커스터마이징

- **색상**: `tailwind.config.js`에서 컬러 팔레트 수정
- **폰트**: `app/globals.css`에서 폰트 변경
- **애니메이션**: 각 컴포넌트의 Framer Motion 설정 조정

## 🌐 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 배포 설정

1. **GitHub Pages 활성화**
   - Repository → Settings → Pages
   - Source: GitHub Actions 선택

2. **자동 배포**
   - `main` 브랜치에 push하면 자동 배포
   - `.github/workflows/deploy.yml` 워크플로우 실행

### 사이트 접근

- **URL**: https://hu-tech-hub.github.io
- **빌드 상태**: GitHub Actions 탭에서 확인

## 📱 반응형 지원

- **Mobile**: 320px ~ 768px
- **Tablet**: 768px ~ 1024px  
- **Desktop**: 1024px+

## 🔧 개발 도구

- **ESLint**: 코드 품질 검사
- **TypeScript**: 타입 검사
- **Tailwind CSS**: CSS 유틸리티
- **Framer Motion**: 애니메이션

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 💬 문의

포트폴리오에 대한 문의나 피드백은 언제든 환영합니다!

- 📧 Email: hong@example.com
- 💻 GitHub: [@hongdev](https://github.com/hongdev)
- 💼 LinkedIn: [hongdev](https://linkedin.com/in/hongdev)