<!-- GIT -->

# 개행문자(Newline)설정

## Mac OS

$ git config --global core.autocrlf input

## Windows

$ git config --global core.autocrlf true

# 사용자정보

## 커밋(버젼 생성)을 위한 정보 등록

$ git config --global user.name 'YOUR_NAME'
$ git config --global user.email 'YOUR_EMAIL'

# 구성확인

## Q키를 눌러서종료!

$ git config --global --list

# 변경할 파일의 변경사항을 추적하도록 지정.

$ git add ~~~
$ git add . // 해당 프로젝트 폴더 전체를 감지

# 메시지(-m)와 함께 버전을 생성

$ git commit -m '프로젝트 생성(버젼이름)'
$ git commit -m 'main.js 추가'
$ git commit -m 'index.html 수정'

# origin 이라는 별칭으로 원격 저장소를 연결

$ git remote add origin https://github.~~~~

# origin 이라는 별칭의 원격 저장소로 버젼 내역 전송

$ git push origin master
