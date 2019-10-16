---
type: article
title: "Array.from()으로 연속된 수로 구성된 배열 [1, 2, 3, 4, 5] 만드는 과정 알아보기"
date: 2019-08-19 23:59:59 +0900
slug: "/articles/array-from/"
tags: [Javascript]
description: "이 메서드는 이름에서도 유추해볼 수 있다시피 어떤 데이터로 부터 배열을 생성합니다. 문자열을 문자 단위로 쪼개어 배열로 만들거나 아규먼트를 배열로 만들 수 있으며, 특정 길이의 배열을 만들어 연속된 수를 넣을 수도 있습니다."
---

> Array.from 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.
> * Array.from(arrayLike[, mapFn[, thisArg]])
> * 반환 값: 새로운 Array 인스턴스.
> * 버전: ECMAScript 2015 (ES 6, ECMA-262)
> * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

이 메서드는 이름에서도 유추해볼 수 있다시피 어떤 데이터로 부터 배열을 생성합니다.  
MDN에 나와있는 예시로, 문자열을 문자 단위로 쪼개어 배열로 만들거나, 아규먼트를 배열로 만들 수 있습니다.
```js
Array.from('foo')); // -> [‘f’, ‘o’, ‘o’]
```
```js
function f() {
  return Array.from(arguments);
}
f(1, 2, 3); // -> [1, 2, 3]
```
**그리고 특정 길이의 배열을 만들어 연속된 수를 넣을 수도 있습니다.** ([참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from#%EC%8B%9C%ED%80%80%EC%8A%A4_%EC%83%9D%EC%84%B1%EA%B8%B0(range)))  
아래 코드에서 length 길이와, 배열의 값이 되는 i에 수를 더하거나 빼주면 내가 원하는 범위의 연속된 수로 이뤄진 배열이 만들어집니다.
```js
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
Array.from({length: 7}, (v, i) => i-3); // [-3, -2, -1, 0, 1, 2, 3]
```
어떻게 이런 배열이 나올 수 있을까요? 메서드가 어떻게 동작하는 지 알아보겠습니다.

### 첫 째로, {length: x}는 x 길이의 유사 배열 객체를 생성합니다.

콘솔에서 일반 배열의 값을 열어보면 `인덱스`와 `값`, `length` 속성을 확인할 수 있는데요, 이 구성으로 객체를 만든 것이 유사 배열 객체입니다.
배열처럼 `obj[0]`, `obj[1]`, `obj.length`와 같은 참조가 가능하지만, 배열이 아닌 객체라는 겁니다.

![참고 이미지](./array-from-1.png)

그리고 이 유사 배열 객체에 `length` 값만 입력해주었으니, `Array.from` 메서드가 값은 `undefined`로 채워진 배열을 반환해줍니다.

![이미지](./array-from-2.png)

### 하지만 우리가 만들고자 하는 것은 연속된 수로 이루어진, 즉 인덱스(0~4) 값이 채워진 배열입니다.

여기서 mdn 내용 중에 주의 깊게 봐야하는 부분이 있습니다.
> `Array.from()`은 선택 매개변수인 mapFn를 가지는데, 배열(혹은 배열 서브클래스)의 각 요소를 맵핑할 때 사용할 수 있습니다. 즉, `Array.from(obj, mapFn, thisArg)`는 중간에 다른 배열을 생성하지 않는다는 점을 제외하면 **`Array.from(obj).map(mapFn, thisArg)`와 같습니다.** 이 특징은 typed arrays와 같은 특정 배열 서브클래스에서 중간 배열 값이 적절한 유형에 맞게 생략되기 때문에 특히 중요합니다.

설명과 같이 `map` 메서드가 연결된 구조로 이해해 봅시다.  
`map` 메서드는 첫 번째 매개변수(currentValue)로 값을, 두 번째 매개변수(index)로 인덱스를 참조할 수 있습니다.
```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```
그러므로 `Array.from` 메서드에서도 인덱스를 참조하려면 **두 개의 매개변수가 필요**합니다.  
그리고 **인덱스를 참조하는 매개변수를 새로운 배열의 값으로 반환**해주세요.  
만들고자 했던 배열을 볼 수 있습니다!

![이미지](./array-from-3.png)

```js
Array.from({length: 5}, x => x); // 값만 매개변수로 받음 => 새로운 배열의 값은 기존 배열의 값
Array.from({length: 5}, (value, index) => index); // 값과 인덱스를 매개변수로 받음 => 새로운 배열의 값은 기존 배열의 인덱스
```
화살표 함수가 익숙치 않은 분들을 위한 기본 함수 표현법 예시입니다.
```js
Array.from({length: 5}, function(value, index){
     return index;
});
```
***
이해가 되셨다면 좋겠네요!😄

코드스테이츠에서 알고리즘 퀴즈를 여러가지 방법으로 풀어보다가 Array.from 메서드를 써보게 되었는데,
어떤 원리로 값이 만들어지는지 코드만 봐서는 이해가 안되어서 포스팅을 작성하게 되었습니다.

아래 스택오버플로우의 글과 mdn을 참고했습니다.  
https://stackoverflow.com/questions/40528557/how-does-array-fromlength-5-v-i-i-work