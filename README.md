# 📝 **React 다이어리 프로젝트**

## 🚀 **프로젝트 소개**
React와 다양한 라이브러리를 활용한 다이어리 웹 애플리케이션입니다. 
사용자는 일기를 작성, 수정, 삭제할 수 있으며, 데이터를 Web Storage에 저장하여 브라우저에서 유지됩니다. 
심플하고 깔끔한 디자인과 함께 Open Graph 설정 및 배포까지 완료된 프로젝트입니다.

---

## 🌟 **주요 기능**

### 🎨 **페이지 및 기능 구성**
- **홈**: 다이어리 목록과 요약 정보를 표시.
- **새 일기 작성**: 새로운 다이어리를 작성.
- **일기 수정**: 기존 다이어리를 수정.
- **없는 페이지**: 잘못된 경로에 접근 시 404 페이지 출력.
- **다이어리 리스트**: 작성된 다이어리들을 날짜별로 정렬하여 목록화.

### ⚙️ **사용 기술 및 구현**
1. **React Router DOM**
   - 경로 기반의 동적 페이지 렌더링.
   - `useParams`, `useNavigate`로 URL 파라미터 관리 및 페이지 이동 구현.
   
2. **Hooks**
   - `useState`, `useEffect`를 활용하여 컴포넌트 상태 관리 및 라이프사이클 처리.
   - **페이지 타이틀 변경**: `document.title`을 활용하여 각 페이지마다 고유 타이틀 설정.

3. **파비콘(Favicon)**
   - `public` 폴더에 `favicon.ico` 추가.
   - `index.html`의 `<link>` 태그로 설정.

4. **Open Graph 설정**
   - 링크 공유 시 미리보기 정보 제공.
   - 예시:
     ```html
     <meta property="og:title" content="React 다이어리 프로젝트" />
     <meta property="og:description" content="다이어리를 작성하고 관리하는 웹 애플리케이션" />
     <meta property="og:image" content="https://your-image-url.com/og-image.png" />
     <meta property="og:url" content="https://your-deployment-url.vercel.app" />
     ```

5. **Web Storage 활용**
   - 로컬 스토리지(Local Storage)를 사용해 다이어리 데이터를 저장 및 유지.

6. **컴포넌트 구조화**
   - **Header**: 페이지 상단 공통 헤더.
   - **Button**: 재사용 가능한 버튼 컴포넌트.
   - **Editor**: 다이어리 작성 및 수정 화면.
   - **Util 파일**: 상수, 이미지 관리, 날짜 처리 함수 등 모듈화.

### 🌐 **배포**
- **플랫폼**: [Vercel](https://vercel.com)
- **플랜**: 무료 플랜 사용.
- **배포 완료**: 안정적인 배포 환경과 빠른 로딩 속도 제공.


## 🛠️ **설치 및 실행**

1. **레포지토리 클론**
   ```bash
   git clone https://github.com/kaki5507/reactDiary.git
   cd section12 [ section12에 있습니다 ]
   ```

2. **패키지 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   - 기본 주소: `http://localhost:5173`

4. **빌드**
   ```bash
   npm run build
   ```

