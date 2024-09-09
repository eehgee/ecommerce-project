## e-commerce 온라인 쇼핑 구현

메인 페이지(Nav / Index / Footer)
회원가입 및 로그인(소셜로그인 포함)
각 카테고리별 상품 리스트
카테고리 / 가격 상품 필터링
페이지 네이션
상품 상세보기
로그인 회원의 위시리스트
검색키워드 및 자동완성

-------------------------------------------------------------------------------------------

# 회원가입 및 로그인
유저 생성

일반 로그인 : 회원가입 한 이메일과 비밀번호로 로그인
일반 로그인 로그아웃

소셜 로그인 : 카카오톡 계정으로 로그인 하기 Kakao Developer(localhost 5173)
소셜 로그인 로그아웃

# 카테고리 및 가격 필터링
카테고리 필터링(패션 / 디지털 / 액세서리)
가격 필터링 적용(최소금액 : 1달러 - 최대금액 : 10000달러)

# 페이지네이션
ALL / 패션 / 디지털 / 액세서리 카테고리에 페이지네이션 적용
가격 필터링 적용했을 경우에도 반영

# 로그인 회원의 위시리스트
일반 로그인과 소셜 로그인으로 로그인 했을 경우에만 장바구니에 상품 추가
비회원인 경우 장바구니 페이지로 이동하면 로그인 하러 가기 페이지 보여줌

# 검색어 입력
상품 키워드 검색 시 리스트로 보여준 후(드롭다운) 해당 상품 클릭시 상세보기로 이동
검색시 대소문자 구별 안함


# Vercel 배포 주소







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


