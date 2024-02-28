# 실습완료 배포 사이트 (Netlify)
https://genuine-salamander-2b6ac1.netlify.app/

# 스타벅스 홈페이지 (메인 Page)

## 개요
    HTML, CSS, JS를 이용하여 스타벅스 홈페이지를 구현
## 주요 실습내용
    * 오픈그래프 (url 공유 시 기본 템플릿) 설정 방법
    * 구글 메테리얼 Icons 템플릿 된 UI 사용
    * Header 태그 - 단순히 머리글이다 라는 의미 말고는 다른 의미 없음.. (div로 만들어도 무관)
    * 메인이 되는 body영역에 기본 폰트 설정
    * 초기 HTML 홈페이지 만드는 느낌 (자바스크립트의 활용이 적음 - DOM으로 CSS에 Class 적용을 해주는 정도)
    * 상단 메뉴 설정 (드롭 다운 메뉴)
    * css에서 특정 레이아웃을 전용 역할을 해주는 용도로 만들어주는 부분이 있는 듯.
      (inner 라는 class를 지정하면 가로 사이즈 제한에, 가운데 정렬이 되는 레이아웃)
    * BEM (Block Element Modifier) - 클래스 명 작명법?! 조금 더 직관적인 class명칭
    * Lodash JS Library 사용 (윈도우 스크롤 제어 라이브러리) - 스크롤 함수를 임의의 시간마다 체크되도록 딜레이를 줘서 과부하 제어
    * Gsap JS Library 사용 (간단한 애니메이션 라이브러리)
      - 스크롤이 특정영역이 넘어가면 서서히 배너가 사라졌다가 다시 돌아오면 배너가 나오도록 제어
      - 이미지가 일정 시간 지연시간을 줘서 순차적으로 보이도록 제어
      - 왕복 왔다갔다 운동하는 애니메이션 (ease 개념)
      - 경량화를 위해 plugin으로 분리해뒀음. - ScrollToPlugin
    * Swiper JS Library 사용 (슬라이드 라이브러리 - 강의는 6버전 이여서 최신으로 별도진행)
      - 공지사항 슬라이드 부분을 마우스 휠이 들어가도록 제어
    * Youtube Iframe API 사용 (유튜브 재생을 위해 공유된 API 사용)
    * ScrollMagic Library 사용 (스크롤 감지 라이브러리)
    * HTML 내에서 특수기호 표기방법 - html entities
## 보완 및 개선필요 사항
    * css와 js에 UI효과 부분이 혼용되어 있다 보니 어디에서 쓰는지 찾기 어려워 짐. (어디에는 마우스 over, 어디에는 클릭이벤트, 포커스이벤트..)
    * html 구조가 깊어질수록 css에도 맞춰서 지정해야 되는 class 선언도 길어지게 됨.
    * css 내에 중복되는 선언을 관리하지 못함.
    * html 페이지가 하나여서 해당 페이지에 라인수가 너무 길어짐
    * css 또한 한군데에서 관리하여 라인이 너무 길어짐
    * REST API 호출, DB쪽 Back-End 데이터를 가져오는 부분은 없음
## 관련링크
    * Icon 생성싸이트 : https://iconifier.net/
    * 구글 폰트 설정, 메테리얼 Icons 싸이트 : https://fonts.google.com/
    * 스크롤 제어관련 라이브러리 (Lodash) : https://cdnjs.com/libraries/lodash.js, https://lodash.com/
    * 애니메이션 라이브러리 (Gsap) : https://cdnjs.com/libraries/gsap
    * 슬라이드 라이브러리 (Swiper) : https://swiperjs.com/
    * 유튜브 불러오기 API : https://developers.google.com/youtube/iframe_api
    * 스크롤 감지 라이브러리 (ScrollMagic) : https://cdnjs.com/libraries/ScrollMagic



# 스타벅스 홈페이지 (로그인 Page)

## 개요
    스타벅스 화면 구성 된 내용에 Git 을 이용한 버전관리가 포함되어 로그인 페이지까지 구현

## 주요 실습내용
    * Git 분기로 개발내용 진행 / 버전관리
    * 공통으로 사용되는 js 기능, css 스타일 분리작업

## 보완 및 개선필요 사항
    * 페이지 이동 시 데이터 전달 및 로그 가져오는 부분이 없음.
    * DB Back-End 데이터 가져오는 부분이 없음.

## 관련링크
    * 작업 Github : https://github.com/ReLight-Personal/starbucks

