# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- MongoDB + Express + MongoDB + React + NodeJS 연동 프로젝트

## NodeJS backend Project를 생성하기 위하여

- 프로젝트 생성 : `express-21c node-310-Food`
- node-310-Food 폴더에서 : `npm install`

## React Frontend Project를 생성하기 위하여

- node-310-Food 폴더에서 React Client 생성 : `create-react-app client`

- client 폴더에서 터미널 열기
- yarn 실행 및 업데이트 : `yarn`, `yarn build`
- node-310-Food/client/build 폴더 생성 확인하기

## nodeJS에서 client 인식시키기

- node-310-Food/app.js 파일 열어 아래와 같이 바꾸기
- `app.use(express.static(path.join("./client/build")));` : public -> /client/build
- `// app.use("/", indexRouter);` : 삭제 혹은 주석처리

- node-310-Food 폴더에서 서버 start : `nodemon`
- Web Browser에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- App._ 으로 시작되는 파일을 모두 ReactJS._ 로 변경
  App.css -> ReactJS.css
  App.js -> ReactJS.js
  App.test.js -> ReactJS.test.js

- node-310-Food\client\src\index.js 파일 수정
  `import ReactJS from "./ReactJS";` : App에서 바꾸기
  `<ReactJS />` : `<App />`에서 바꾸기
  `// reportWebVitals();` : 주석처리

- node-310-Food\client\src\ReactJS.test.js 파일 수정
  : App으로 된거 다 ReactJS로 바꾸기

- node-310-Food\client\src\ReactJS.js 파일 수정
  : App으로 된거 다 ReactJS로 바꾸기

  ## MongoDB 연동하기

- node-310-Food 폴더에서
- mongoose dependency 설치 : `npm install mongoose`

- client 폴더에서
- 날짜와 시간 도구 설치 : `yarn add install moment`
- UUID Key 생성 도구 설치 : `yarn add react-uuid`
