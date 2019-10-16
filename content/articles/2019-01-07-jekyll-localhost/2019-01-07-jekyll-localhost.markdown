---
type: article
title: "jekyll 블로그 로컬에서 확인하기"
date: 2019-01-07 19:44:00 +0900
slug: "/articles/jekyll-localhost/"
img: "./jekyll-localhost_1.png" # Add image post (optional)
fig-caption: ""
tags: [jekyll] # add tag
---

### 방법은 간단합니다.
이미 지킬 블로그를 사용하고 있다는 전제 하에서 설명합니다.  
  
** 참고 문서:  
https://jekyllrb.com/docs/  
https://jamiekang.github.io/2017/04/28/working-jekyll-locally/
  
1. 터미널에서 지킬블로그 디렉토리로 이동  
2. "bundle exec jekyll serve" 입력  
3. <a href="http://localhost:4000/" target="_blank">http://localhost:4000/</a>에 접속하면 로컬 디렉토리의 내용을 확인 가능

<img src="./jekyll-localhost_1.png">

### 🤯 만약 오류가 난다면, 무언가 잘못되어있다는 얘기겠죠?  
저의 경우에는 Permission 오류로, 오래 전에 node를 설치한다고 패키지를 몽땅 지우는 등 난리를 치다가 지킬을 설치하지 않아서 생긴 문제였습니다. 지킬을 제대로 설치하기 위해 아래의 과정을 거쳤습니다.  

* 이번에 얻은 교훈입니다. 공식문서만 잘 따라도 문제가 없습니다.  
https://jekyllrb-ko.github.io/docs/installation/

* gem install File Permission Error 오류를 만나서 아래의 아티클을 참고하여 원인을 파악하였고, 공식문서를 따라 루비 설치 및 버전업해주었습니다.  
https://blog.jungbin.kim/jekyll/2016/11/28/start-to-jekyll.html

<figure style="text-align:center;">
<img src="./jekyll-localhost_2.png">  
<figcaption style="text-align:center;font-size: 0.9em;">gem install File Permission Error</figcaption>
</figure>
<figure style="text-align:center;">
<img src="./jekyll-localhost_3.png">  
<figcaption style="text-align:center;font-size: 0.9em;">공식문서를 따라 루비를 설치하고...</figcaption>
</figure>

* "gem install bundler jekyll"을 입력하여 jekyll을 재설치해줍니다.  
※ 이전과 같은 오류가 난다면, 터미널을 재부팅해보세요.  

* 그리고 "bundle exec jekyll serve"를 입력하여 다시 테스트 해봅니다.

* 굵은 글씨로 "can't find gem bundler (>= 0.a) with executable bundle (Gem::GemNotFoundException)"라는 메세지가 출력된다면, "gem install bundler -v 1.16.1" 명령어로 bundler 1.16.1 버전을 설치 해보세요.  
※ 참고: https://stackoverflow.com/questions/47026174/find-spec-for-exe-cant-find-gem-bundler-0-a-gemgemnotfoundexception/47201709
  
### 성공입니다!
<figure style="text-align:center;">
<img src="./jekyll-localhost_4.png">  
<figcaption style="text-align:center;font-size: 0.9em;">여러 난관을 거친 결과. 종료하려면 ctrl-c를 누르라는 안내가 나옵니다.</figcaption>
</figure>

> 근본적인 원인은 맥 터미널에 대한 이해 부족인 거 같아, 루비를 설치하며 홈브류에 대해서도 다시 알아보게되었습니다. 앞으로도 더 많이 공부하고 익혀야겠습니다. https://code.apptilus.com/posts/tools/homebrew-for-mac