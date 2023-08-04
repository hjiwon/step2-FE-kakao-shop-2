## **쇼핑몰 페이지 구성**

<br />

[카카오 스토어](https://store.kakao.com)를 참고하여 작성했습니다. 

1. 메인 페이지
- 핵심 기능: 전면 배너와 함께 전체적인 제품과 로그인 버튼을 보여줍니다.
- 기능 상세 설명: 전체 상품 조회 API를 통해 주문이 가능한 전체 상품 목록을 가져옵니다. 각 상품의 이미지, 상품명, 가격을 출력합니다. 상품 버튼 클릭 시 제품 세부 사항 페이지로, 로그인 버튼 클릭 시 로그인 페이지로 이동합니다.
- 인터페이스 요구사항: 로그인이 되지 않았을 때, 찜 버튼을 누르면 로그인 페이지로 이동합니다.

2. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자의 로그인 정보를 저장합니다.
- 기능 상세 설명: 입력된 이메일과 비밀번호를 통해 로그인을 진행하며, 이에 대한 상태 처리를 합니다. JWT를 활용한 토큰 기반 인증으로 로그인합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적절하지 않은 경우 알림을 보냅니다.

3. 개별 제품 상세 페이지
- 핵심 기능: 제품 가격이나 이름 등 제품 상세 정보를 제공합니다.
- 기능 상세 설명: 상세 상품 조회와 옵션 조회 API를 통해 옵션을 출력, 사용자가 선택할 수 있습니다. 옵션 선택 이후 수량을 선택할 수 있습니다. 상품의 합계 금액을 출력합니다. 장바구니 버튼 클릭 시 선택한 옵션이 장바구니에 담깁니다.
- 인터페이스 요구사항: +/- 버튼을 통해 수량을 조절할 수 있습니다. 옵션을 선택하지 않고 장바구니 버튼을 누르면 옵션을 먼저 선택하라는 알림창을 띄웁니다.

4. 장바구니 페이지
- 핵심 기능: 장바구니에 담긴 상품을 보여줍니다.
- 기능 상세 설명: 상품의 수량 수정 및 삭제가 가능합니다. 장바구니에 담은 상품과 그 옵션에 해당하는 금액을 합산, 배송비까지 계산하여 금액을 보여줍니다.
- 인터페이스 요구사항: 주문하기 버튼 클릭 시 주문 페이지로 이동합니다.

5. 주문 페이지
- 핵심 기능: 주문할 상품에 대한 소개와 함께 결제 정보를 입력합니다.
- 기능 상세 설명: 배송 요청사항을 입력할 수 있습니다. 최종 결제 금액에 따른 결제 방식을 선택합니다.
- 인터페이스 요구사항: 결제하기 버튼 클릭 시 결제 절차 없이 상품을 주문한 것으로 처리, 결제 완료 페이지로 이동합니다.

6. 결제 완료 페이지
- 핵심 기능: 결제 완료 메시지를 표시하며, 주문 정보를 확인합니다.
- 기능 상세 설명: 최종 구매에 대한 확인을 위해 주문 정보를 다시 한 번 보여줍니다.
- 인터페이스 요구 사항: 홈으로 가기 버튼을 클릭하면 메인 페이지로 이동합니다.

<br />

## **배포 환경**


크램폴린을 통해 배포하였습니다. 

[배포 링크](https://user-app.krampoline.com/ke15625760cfba/)

배포에 영향을 받는 브랜치는 [hjiwon / step2-FE-kakao-shop-2](https://github.com/hjiwon/step2-FE-kakao-shop-2)입니다.

## **실행 방법**


startServer.sh 파일을 실행하면, Nginx, MariaDB, 완성된 Spring 서버를 빌드 및 실행합니다.
sh 파일 생성 시 실행 권한이 바로 부여되지는 않으므로, 터미널로 다음 명령어를 실행하여 해당 파일에 실행 권한을 추가합니다.
```bash
chmod +x ./startServer.sh # 실행 권한 추가
./startServer.sh # 실행
```

npm start를 통해 React 프로젝트를 실행합니다.
```bash
npm install # 의존성 모듈 설치
npm run start # 프로젝트 실행
```

## **디렉토리 구조**


```
├── /build
├── /node_modules
├── package.json
├── .gitignore
├── /public
│ └── /assets
└── /src
  ├── /apis
  ├── /components
  ├── /hooks
  ├── /pages
  ├── /redux
  ├── /styles
  ├── App.js
  └── index.js
```
+ apis: API 요청 함수
+ assets: 이미지
+ components: Atomic pattern으로 구성된 컴포넌트
+ hooks: 커스텀 훅
+ pages: 페이지
+ redux: 리덕스 툴킷
+ styles: css 파일
