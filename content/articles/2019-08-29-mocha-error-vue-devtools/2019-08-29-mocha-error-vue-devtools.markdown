---
type: article
title: "Mocha Error: global leak detected: __VUE_DEVTOOLS_TOAST__ (Chrome Browser)"
date: 2019-09-03 18:33:00 +0900
slug: "/articles/mocha-error-vue-devtools/"
description: '코드스테이츠 체크 포인트를 진행하다 첫 번째 과제인 billTotal 테스트에서 제목과 같은 오류가 발생했다. "Error: global leak detected”로도 검색해보고, "__VUE_DEVTOOLS_TOAST__"으로도 검색해봐도 딱 들어맞는 해결책이 없었고, 내가 작성한 함수에 오류가 있을까 싶어 내용을 싹 지워봐도 오류가 발생했다. 도무지 이게 무슨 오류인지 알 수가 없었다.'
tags: [Mocha] # add tag
---

### 해결 방법
![이미지](./mocha-error-vue-devtools-1.png)
크롬 확장 프로그램에서 Vue.js 개발툴을 꺼주세요. 작동 상태와는 무관합니다. 작동 중이지 않아도 꺼주세요.

___
### 잡설
![이미지](./mocha-error-vue-devtools-2.png)
코드스테이츠 체크 포인트를 진행하다 첫 번째 과제인 billTotal 테스트에서 제목과 같은 오류가 발생했다.

"`Error: global leak detected`”로도 검색해보고,  "`__VUE_DEVTOOLS_TOAST__`"으로도 검색해봐도 딱 들어맞는 해결책이 없었고,
내가 작성한 함수에 오류가 있을까 싶어 내용을 싹 지워봐도 오류가 발생했다. 도무지 이게 무슨 오류인지 알 수가 없었다.

![이미지](./mocha-error-vue-devtools-3.png)
그리고 혹시나하고 사파리로 열어보니 오류 없이 과제가 통과된 상태. 띠용.

코드의 문제가 아닌 것 같아 더더욱 해결할 방법을 찾을 수 없었다.
그래서 헬프데스크에 질문하려던 찰나, Vue.js 프로그래밍을 한다고 크롬에 확장 프로그램을 설치했던게 생각났다.

![이미지](./mocha-error-vue-devtools-4.png) 
확장 프로그램은 실행 중이었지만 Vue.js로 개발된 페이지가 아니어서 작동하지않은 상태였다.
하지만 Vue 관련해서 이 것 외에는 의심되는게 없었기 때문에 프로그램을 끄고 새로고침 해봤다.

**그리고 정상적으로 과제가 통과된 걸 확인!**  
결국 이 확장프로그램으로 인한 오류라는 걸 알게 되었다.
