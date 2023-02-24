# My Interested Github Issue

## [데모링크](https://payhere-my-github-issue.vercel.app/)
Octokit api 사용할때 token이 없으면 사용량 한도가 존재하기 때문에 배포환경에 token을 주입하였습니다.

## 로컬 환경 개발 서버 실행

```sh
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조

- pages 폴더 하위에서는 각각의 라우트에 라우팅 될 페이지 컴포넌트를 관리했습니다.
- components 폴더는 common 폴더를 제외하고 pages 폴더와 1:1로 매칭되는 폴더를 만들어주고 하나의 page에서만 쓰이는 컴포넌트는 해당 페이지의 폴더 내에서 관리했습니다.
- components/common 폴더는 앱 전역에서 쓰일 컴포넌트를 관리했습니다.
- 전역적으로 사용하는 상수는 constants 폴더 내부에서 관리했습니다.
- React의 ContextAPI와 관련된 파일은 context 폴더 내부에서 관리했습니다.
- custom hook은 hooks 폴더 내부에서 관리했습니다.
- global한 성격을 가진 style 파일은 styles 폴더 내부에서 관리했습니다.

```
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
|  └── vite.svg
├── src
|  ├── App.tsx
|  ├── api
|  |  ├── octokit.ts
|  |  └── service
|  ├── assets
|  |  └── svg
|  ├── components
|  |  ├── common
|  |  ├── home
|  |  ├── issues
|  |  └── search
|  ├── constants
|  |  ├── localStorage.ts
|  |  └── route.ts
|  ├── context
|  |  └── BookmarkProvider.tsx
|  ├── env.d.ts
|  ├── global.d.ts
|  ├── hooks
|  |  ├── useBookmarkActions.ts
|  |  ├── useBookmarkValue.ts
|  |  └── useDebounce.ts
|  ├── main.tsx
|  ├── pages
|  |  ├── Home.tsx
|  |  ├── Issues.tsx
|  |  ├── Search.tsx
|  |  └── index.ts
|  ├── styles
|  |  ├── globalStyle.ts
|  |  └── reset.ts
|  ├── types
|  |  └── dto
|  └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 구현하지 못한 기능

요구사항 구현은 다 되었으나 더 구현했으면 좋았을것 같은 기능을 나열했습니다.

- api 요청, 응답 사이에 로딩 UI 적용했으면 좋았을것 같습니다.
- 4개 이상의 repository를 저장하려고 할때 현재 alert을 이용해 경고를 띄우고 있는데 custom modal을 사용하면 더 좋은 결과를 낼 수 있었을것 같습니다.
- 4개 이상의 repository를 저장하지 못할때 현재 저장된 repository list를 modal로 보여주며 삭제할 수 있는 기능을 구현했으면 더 좋았을것 같습니다.

## 아쉬운 부분

- pagination 로직이 현재 repository검색 페이지와 issue리스트 페이지에서 사용중인데 로직이 거의 같아 공통 컴포넌트로 만들어 사용했으면 더 좋았을것 같습니다. 만약 실제 서비스였다면 시간을 들여 리팩토링을 했을것 같습니다.

## 기타

- Octokit 패키지가 vite의 mjs방식 import에서 아예 작동하지 않는 이슈가 있어 현재 cdn방식으로 바로 불러와 사용하고 있습니다. 과제 제출 후 Octokit쪽에 이슈 리포트를 할 계획이며 추후에 과제를 하시는분들은 꼭 CRA또는 Webpack을 직접 설치하시게끔 안내드리면 좋을것 같습니다 어떻게든 고쳐보겠다고 이틀 반 정도 해당 이슈에 시간을 썻네요🥲
