---
type: article
title: "Table 좌우 양 끝의 border 없애기"
date: 2021-01-13 23:55:55 +0900
slug: "/articles/css/1"
description: "대체로 예쁘게 디자인된 표(Table)는 좌우 양 끝의 border가 없습니다. 방법은 아주 간단합니다~"
tags:
    - CSS
---

대체로 예쁘게 디자인된 표(Table)는 좌우 양 끝의 border가 없습니다.  
예를 들면 이렇게.  
<br/>
![](https://images.velog.io/images/jinjoo/post/aa719af5-3cc4-460c-bafe-2d94452986f6/image.png)

방법은 아주 간단합니다~
1. 모든 th, td에 border를 추가합니다.
	- 반드시 left, right 양 쪽 모두 border를 적용해야 합니다.
    - 한 쪽만 적용하면 rowspan, colspan 속성 사용된 부분에서 border가 일정하게 적용되지 않습니다.
    
2. first-child는 border-left: 0;
3. last-child는 border-right: 0;를 해주면 됨!

코드로 보면 이렇습니다.

```
table th,
table td {
	border-left: 1px black solid;
	border-right: 1px black solid;

	// border: 1px black solid;
	// 이렇게 해도 됨
}
table th:first-child,
table td:first-child {
	border-left: 0;
}
table th:last-child,
table td:last-child {
	border-right: 0;
}
```
![](https://images.velog.io/images/jinjoo/post/3db335b3-5eba-4faa-990c-bbec68754d2e/image.png)
rowspan, colspan 속성을 써도 잘 적용됩니다.