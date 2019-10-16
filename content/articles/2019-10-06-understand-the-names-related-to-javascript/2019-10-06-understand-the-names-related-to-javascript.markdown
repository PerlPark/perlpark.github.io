---
type: article
title: "Vanilla js / Ecma script / Typescript 자바스크립트를 둘러싼 명칭 이해하기!"
date: 2019-10-06 22:55:55 +0900
slug: "/articles/understand-the-names-related-to-javascript/"
description: "제가 접했던 명칭, 용어 중에 헷갈리고 정확한 개념 정의가 안됐던 것들을 정리해봤습니다."
tags: [Javascript] # add tag
---

## 1. 바닐라 자바스크립트 (Vanilla js)
아무 것도 섞이지 않은 바닐라 아이스크림처럼, 순수한 자바스크립트만을 일컫습니다.  
라이브러리나 프레임워크를 사용하지 않고 자바스크립트만으로 구현을 한다면, 바닐라 자바스크립트로 개발하였다 말 할 수 있겠죠.  
React 등의 자바스크립트 프레임워크가 주목을 받으면서, 그 기반이 되는 자바스크립트도 중요해지다보니 생겨난 용어가 아닐까 추측이 됩니다.

- 공식 홈페이지 [http://vanilla-js.com/](http://vanilla-js.com/) 
- 참고 글 [https://tuhbm.github.io/2018/01/21/vanillaJS/](https://tuhbm.github.io/2018/01/21/vanillaJS/) 

***
## 2. 에크마 스크립트 (Ecma Script)
자바스크립트와 가장 많이 혼용하여 사용되는 ECMA Script입니다.  
본래 자바스크립트는 넷스케이프라는 회사에서 livescript(라이브 스크립트)라는 이름으로 개발이 되었다가 후에, 자바스크립트라는 이름을 사용하게된 언어입니다. 그리고 이 자바스크립트가 성공을 하자, 마이크로소프트에서 jscript라는 이름으로 인터넷 익스플로어에 호환되는 파생 언어를 내놓습니다. 이렇게 파생되는 언어가 생기자 표준화(기준 규격을 정의하는 것)가 필요해졌고, Ecma 인터내셔널(정보와 통신 시스템을 위한 국제적 표준화 기구)을 통해 공표된 표준이 **ECMA Script**라고 합니다.  

간단히 정리하자면, 스크립트 언어를 위한 표준 = ECMA Script, 그 표준을 따르는 스크립트 언어 = Javascript가 되겠습니다.  
흔히 "ES6 기반이다", "Ecma script 6로 개발했다"라고 한다면 Ecma script 6에서 정의된 문법이나 기술을 이용해 개발했다라고 이해하시면 될 것 같습니다.

아주 구체적으로 정리된 포스트를 링크해드리니, 더 자세한 설명이 필요하면 참고해보세요. :)  
- 추천 글 [https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html](https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html)
- Javascript 위키백과 https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8  
- Ecma Stript 위키백과 https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

***
## 3. 타입 스크립트 (Typescript)
타입스크립트는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어로, 마이크로소프트에서 개발했다고 합니다.  
자바스크립트와 확실히 구분되는 새로운 언어라는 것이죠. '슈퍼셋'이란 서브셋이라는 하위 항목이 있고, 그것을 포함해서 더 확장된 것을 의미합니다. 아래 이미지 처럼요. 타입스크립트로 작성된 코드는 자바스크립트로 컴파일하여 사용하면 되고, 자바스크립트와의 대표적인 차이는 'type' 즉, 자료형을 구분한다는 점이라고 합니다. javascript + type = typescript!

![타입 스크립트 로고](./understand-the-names-related-to-javascript.png)

***
## Bonus.  
<sub>자바스크립트와 관련한 개념들에 대한 설명!</sub>
#### 1. 제이쿼리 (jquery)
제이쿼리는 자바스크립트 프레임워크입니다. 과거 복잡하고 깔끔하지 않았던 자바스크립트를 개선하여, 비교적 쉽게 자바스크립트의 기능을 쓸 수 있게 했다고 합니다. 대표적으로 간결해진 DOM select가 장점이었던 것 같아요.

ex. `document.document.getelementbyid('main') => $('#main')`

#### 2. 에이젝스 (Ajax)
에이젝스는 개발 기법에 속해요. 일반적인 웹사이트는 페이지를 이동하거나, 게시물을 조회하는 등의 동작을 일어날 때 페이지 전체가 갱신되는데, ajax 기법을 이용하면 일부분의 데이터만 변경되면서 좀 더 깔끔하게 사용성을 제공할 수 있어요. 프론트엔드 개발에서 주로 서버와 데이터 교류를 해야할 때 사용돼요.

- Ajax 위키백과 [https://ko.wikipedia.org/wiki/Ajax](https://ko.wikipedia.org/wiki/Ajax)
- Ajax란 무엇인가? [https://coding-factory.tistory.com/143](https://coding-factory.tistory.com/143)

#### 3. SPA 프레임워크

대표적으로 리액트(React), 앵귤러(Angular), 뷰제이에스(Vuejs) 등의 프레임워크를 지칭해요.
리액트와 뷰제이에스는 자바스크립트 기반, 앵귤러는 타입스크립트 기반이고요, 기반 언어를 알고 있어야 더 잘 사용할 수 있는 도구예요.  
그리고 SPA는 싱글 페이지 애플리케이션이라는 뜻으로, 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 사용자와 소통하는 웹 애플리케이션이나 웹사이트를 뜻합니다.(출처. 위키백과)

- 싱글 페이지 애플리케이션 위키백과 [https://ko.wikipedia.org/wiki/싱글_페이지_애플리케이션](https://ko.wikipedia.org/wiki/%EC%8B%B1%EA%B8%80_%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98)

> **더 읽어보면 좋을 글**  
> 프레임워크와 라이브러리 차이점(Framework vs Library)  
> [https://zinee-world.tistory.com/125](https://zinee-world.tistory.com/125)

___
제가 접했던 명칭, 용어 중에 헷갈리고 정확한 개념 정의가 안됐던 것들을 정리해봤습니다.  
틀린 내용이 있다면 지적해주세요 😄👋