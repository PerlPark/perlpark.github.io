---
type: article
title: "Git 로컬 폴더 이동 - clone 해놓은 폴더를 다른 경로에 옮기고 싶나요?"
date: 2019-08-13 17:21:00 +0900
slug: "/posts/git-shift-the-local-folder/"
description: "로컬에서 Repository를 clone해놓은 폴더를 다른 경로로 옮기고 싶을 땐 어떡해야할까요? 그냥 폴더를 옮겨버리면 오류가 나지 않을까요? 다시 clone을 해줘야하는 건 아닐까요?"
tags:
  - "Git"
---

로컬에서 Repository를 clone해놓은 폴더를 다른 경로로 옮기고 싶을 땐 어떡해야할까요?  
그냥 폴더를 옮겨버리면 오류가 나지 않을까요? 다시 clone을 해줘야하는 건 아닐까요?

방법은.. **그냥 옮기면 됩니다.**

옮기기 전 폴더에서 `git remote -v`를 해보세요. 해당 폴더에 clone받은 Repository 경로가 출력될 겁니다.  
그리고 다른 경로에 폴더를 이동시키고 다시 `git remote -v`를 해보세요. 동일한 Repository 경로가 출력됩니다.

즉, 폴더를 이동 시켜도 그 폴더가 가리키는 Repository가 달라지거나 해제되지 않습니다.
이후에 작업이나 git을 사용하는데도 문제가 없습니다.

<img src="./git-shift-the-local-folder.png">  

만약 폴더를 다른 곳에 복사, 붙이기 하면 어떨까요?  
제가 테스트 해보았을 때는, 문제가 없더군요. 복사한 폴더에서 `git remote -v`를 해봤는데 원본 폴더와 동일한 Repository 경로가 출력되었습니다. ^^

다만 복사된 폴더와 원본 폴더를 동시에 사용할 땐 문제가 발생할 수도 있을 것 같아요.  
복사된 폴더만을 이용하고 원본 폴더는 백업용으로만 보관하는 게 좋겠습니다.