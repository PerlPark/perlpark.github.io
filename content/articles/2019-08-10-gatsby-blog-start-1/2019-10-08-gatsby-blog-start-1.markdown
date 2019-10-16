---
type: article
title: "왕 초보 개발자의 Gatsby 블로그 시작하기 (1) - 설치하기"
date: "2019-08-10 10:00:00 +0900"
slug: "/articles/gatsby-blog-start-1/"
description: "기존에 jekyll로 깃허브 블로그를 만들었지만, React 기반의 Gatsby로 블로그를 만들어 이전하려고 한다. 나는 프론트앤드 개발자를 목표로 하고 있어서, 앞으로 배우게 될 언어 기반으로 블로그를 만들면 미리 연습해볼 수도 있고, 후에 관리나 커스터마이징 할 때 용이할 것 같아서다."
tags:
  - "Gatsby"
---

기존에 jekyll로 깃허브 블로그를 만들었지만, React 기반의 Gatsby로 블로그를 만들어 이전하려고 한다.  
나는 프론트앤드 개발자를 목표로 하고 있어서, 앞으로 배우게 될 언어 기반으로 블로그를 만들면 미리 연습해볼 수도 있고,
후에 관리나 커스터마이징 할 때 용이할 것 같아서다.  

우선은 공식 문서를 차근차근 따라가면서 만들어 보려고 한다.


### 첫 번째 준비: 패키지를 설치하고, 관리하기쉽게 해주는 Homebrew를 설치하자.
https://www.gatsbyjs.org/tutorial/part-zero/#install-homebrew-for-nodejs

1. 터미널을 열자.
2. `brew -v` 명령어를 쳐보자.
이미 설치되어있다면 버전을 확인할 수 있다.
3. 설치되어있지 않다면, [여기](https://docs.brew.sh/Installation)를 참고하여 자신의 운영제체에 맞게 홈브류를 설치하자.
4. 설치를 완료했다면, step 2를 다시 따라하여 버전을 확인해보자.

** MacOS 유저라면, [여기](https://www.gatsbyjs.org/tutorial/part-zero/#mac-users-install-xcode-command-line-tools)를 참고하여 **Xcode Command Line Tools**도 설치해주자.


### 두 번째 준비: Node.js와 npm을 설치하자.
https://www.gatsbyjs.org/tutorial/part-zero/#-install-nodejs-and-npm

* Gatsby는 Node.js 기반에서 개발되었기 때문에 Node.js와 npm를 필수로 설치해야 한다. 최신 버전을 권장하며, 최소 8 이상의 버전이 설치되어있어야 한다.

1. 터미널을 열자.
2. `brew update` 명령어를 입력하여, 홈브류를 최신버전으로 업데이트 한다.
3. `node --version` 명령어를 입력하여 이미 설치되어있는지 확인하자.
    1. 노드가 설치되어있지 않다면, `brew install node` 명령어를 입력하여 설치한다. 이때 npm도 같이 설치가 된다.
    2. 홈브류를 통해 설치한 적이 없는데 버전 정보가 뜬다면, 다른 경로를 통해 이미 설치했을 가능성이 있다. 기존에 설치된 Node.js를 삭제하고 홈브류를 통해 다시 설치를 하거나, 본인에게 맞는 방식으로 셋팅을 해주자.  
    >나는 다른 경로로 설치된 node를 삭제한 뒤 홈브류로 다시 설치했다.  
    >https://www.theteams.kr/teams/35/post/67342
    3. (선택사항) 홈브류를 통해 설치된 노드가 있을 경우엔 버전을 업그레이드 해준다.

** Git도 아직 설치하지 않았다면 [여기](https://www.gatsbyjs.org/tutorial/part-zero/#install-git)를 참고하여 운영체제에 맞게 설치해주자.


### 세 번째 준비: Gatsby CLI를 설치하자.
https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli

* Gatsby 개발에 필요한 툴이다. npm 기반으로 제작된 패키지이므로 `npm install -g gatsby-cli` 명령어를 입력해 설치해준다.
* 설치가 완료된 후에 `gatsby --help`를 입력해보면 사용할 수 있는 명령어를 확인할 수 있다.

--- 
우선은 여기까지!  
다음에는 Gatsby CLI를 실행해서 개발을 시작하고 본격적으로 블로그를 만들어 보겠습니다.