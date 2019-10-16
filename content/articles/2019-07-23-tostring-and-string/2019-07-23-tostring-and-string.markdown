---
type: article
title: "Javascript 숫자에서 문자로 형변환 시 String과 toString의 차이?"
date: "2019-07-23 10:00:00 +0900"
slug: "/articles/tostring-and-string/"
description: "숫자를 문자로 형변환을 할 때 toString()을 쓴 경우를 많이 봤습니다. 하지만 메소드 중에 문자로 형변환을 해주는 String()도 있습니다. 이 둘에 어떤 차이가 있을까요?"
tags:
  - "Javascript"
---

숫자를 문자로 형변환을 할 때 toString()을 쓴 경우를 많이 봤습니다.
하지만 메소드 중에 문자로 형변환을 해주는 String()도 있습니다.
이 둘에 어떤 차이가 있을까요?

결론은, 형변환만을 할 때는 차이가 없습니다.
완전히 같은 결과 값을 보여 줍니다.

사실 toString() 메소드는 2에서 32까지의 진수로 바꾸어 반환하는 기능을 가졌습니다.
매개변수에 아무것도 넣지 않았을 때 디폴트인 10진수로 출력해 주니, String() 메소드와 차이가 없는 것 처럼 보이는 것 뿐입니다.

자세한 용법은 아래 문서들을 참고하세요.

- String() - 문자로 형변환하여 반환  
w3schools: https://www.w3schools.com/jsref/jsref_string.asp  
MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

- Number.prototype.toString() - 특정 진수로 객체를 표현한 문자열을 반환  
w3schools: https://www.w3schools.com/jsref/jsref_tostring_number.asp  
MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString