# 🪷 MyLink (마이링크)

> **맑고 잔잔한 연꽃 감성의 나만의 링크트리 서비스 (Lotuscore Edition)**

---

## 🌐 라이브 접속 및 저장소 바로가기

| 구분 | 접속 URL | 설명 |
| :--- | :--- | :--- |
| **마이링크 공식 라이브 URL** | 🔗 **[https://kimleehun1229-hue.github.io/my-link/](https://kimleehun1229-hue.github.io/my-link/)** | 실제 인터넷에서 접속 가능한 메인 페이지 |
| **마이링크 전용 라우트 URL** | 🔗 **[https://kimleehun1229-hue.github.io/my-link/MyLink/](https://kimleehun1229-hue.github.io/my-link/MyLink/)** | `/MyLink` 전용 주소로 접속 가능한 페이지 |
| **GitHub 저장소 URL** | 📁 **[https://github.com/kimleehun1229-hue/my-link](https://github.com/kimleehun1229-hue/my-link)** | 전체 소스코드 리포지토리 |
| **GitHub 'MyLink' 전용 폴더** | 📁 **[https://github.com/kimleehun1229-hue/my-link/tree/main/MyLink](https://github.com/kimleehun1229-hue/my-link/tree/main/MyLink)** | 마이링크 전용 폴더 및 단독 실행 파일 |

---

## ✨ 주요 특징

- **Lotuscore Theme**: 연꽃 수채화 그라데이션과 글래스모피즘(Glassmorphism) 블러 효과 적용
- **반응형 디자인**: 모바일 및 데스크톱 환경에 최적화된 레이아웃
- **정적 배포 최적화**: Next.js 정적 내보내기(`output: 'export'`) 및 GitHub Pages 자동 배포 CI/CD 연동
- **전용 폴더 및 라우트 제공**: `MyLink/` 전용 디렉터리 및 `/MyLink` 라우트 완벽 지원

---

## 📁 저장소 구조

```text
my-link/
├── MyLink/                        # [NEW] MyLink 전용 폴더
│   ├── README.md                  # 전용 안내 문서
│   └── index.html                 # 단독 실행 가능한 정적 마이링크
├── src/
│   └── app/
│       ├── MyLink/page.tsx        # [NEW] /MyLink 전용 라우트
│       ├── mylink/page.tsx        # [NEW] /mylink 소문자 전용 라우트
│       ├── page.tsx               # 메인 홈 마이링크 페이지
│       └── layout.tsx
├── next.config.ts                 # 정적 export & basePath 설정
└── package.json
```

---

## 💻 로컬 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Webpack 모드)
npm run dev

# 프로덕션 정적 빌드
npm run build
```

---

© 2026 마이링크 · kimleehun1229-hue
