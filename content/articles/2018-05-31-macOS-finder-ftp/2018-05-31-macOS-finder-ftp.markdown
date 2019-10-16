---
type: article
title: "맥(Mac OS) 파인더(Finder)에서 FTP 서버 접속하기"
date: 2018-05-31 20:00:00 +0900
slug: "/articles/mac-os-finder-ftp/"
tags: [TIPS]
description: "윈도우와 마찬가지로 맥에서도 별도의 프로그램 없이, 파일탐색기를 통해 FTP 서버에 접속할 수 있는 방법이 있다. 다만, 해당 방법은 읽기 전용만 가능하니 업/다운로드 해야한다면 시간 허비하지 말고 프로그램을 설치하자."
img: "../assets/img/articles/macOS-finder-ftp_1.jpg"
fig-caption: ""
---

윈도우와 마찬가지로 맥에서도 별도의 프로그램 없이, 파일탐색기를 통해 FTP 서버에 접속할 수 있는 방법이 있다.  
※ 다만, 해당 방법은 <font color="red" style="text-decoration:underline">읽기 전용</font>만 가능하니, 업/다운로드 해야한다면 시간 허비하지 말고 프로그램을 설치하자.  

![맥OS 파인더 상단 바에서 이동 메뉴 안의 서버에 연결을 선택. 단축키 커맨드 + K](./macOS-finder-ftp_1.png)
![서버에 연결 기능 창. 서버 주소 입력란과 자주가는 서버 리스트가 있다.](./macOS-finder-ftp_2.png)  
1) 파인더를 실행하고 상단바에서 이동 > 서버에 연결을 선택하거나, 단축키 Command+K를 누른다.  
2) 입력창에서 연결할 서버 주소(`ftp://`로 시작하는 url 또는, 아이피 주소 가능)를 입력하고 연결 버튼을 누른다.  

![입력한 서버 주소 연결에 필요한 계정 이름 및 암호 입력창.](./macOS-finder-ftp_3.png)
![서버에 접속 성공 후 조회된 파일들](./macOS-finder-ftp_4.png)  
3) FTP 서버 계정 정보를 입력하고 연결하면 끝.  
4) 파인더에서 해당 서버의 파일들을 조회할 수 있다. 앞서 말한대로 업/다운로드는 불가능하다.  
  
> **참고**  
> https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=10303&docId=240374881  
> http://egloos.zum.com/accuram/v/4665499