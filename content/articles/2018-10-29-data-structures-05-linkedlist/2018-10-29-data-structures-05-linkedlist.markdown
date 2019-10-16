---
type: article
title: "자료구조 5강 연결 리스트 실습"
date: 2018-10-29 01:00:00 +0300
slug: "/articles/data-structures-05-linkedlist/"
description: "올해 초 부터 프로그래밍을 공부 중이다. 상반기에는 열심히 공부하다가, 지금은 진도가 매우 더디지만.. 그 중에 재밌게 공부하고 있는 자료구조에서 연결 리스트 배운 걸 응용하여 프로그램을 짜 봤다."
img: "./data-structures-05-linkedlist_3.png"
fig-caption: ""
tags:
    - 자료구조
    - C
---

올해 초 부터 프로그래밍을 공부 중이다. 상반기에는 열심히 공부하다가, 지금은 진도가 매우 더디지만..  
그 중에 재밌게 공부하고 있는 자료구조에서 연결 리스트 배운 걸 응용하여 프로그램을 짜 봤다.  
  
자료구조 중 연결리스트는 최대 메모리 공간을 미리 정하지 않고, <span style="color:red">메모리를 동적할당</span>하여 프로그램 실행 중에 <span style="color:red">노드(Node)가 추가될 때 마다 공간을 확보</span>한다. 노드(Node)는 데이터와 다음 데이터를 가르키는 링크의 한 덩어리로, <span style="color:red">메모리 공간에서의 물리적인 순서와 상관없이 데이터 간의 논리적인 순서</span>를 만들 수 있는 장점이 있다.  
  
<figure style="text-align:center;">
<img src="./data-structures-05-linkedlist_1.png">  
<figcaption style="text-align:center;font-size: 0.9em;">head가 가르키는 노드에서 시작, 링크를 통해 데이터가 논리적인 순서로 연결된다.</figcaption>
</figure>
<figure style="text-align:center;">
<img src="./data-structures-05-linkedlist_2.png" style="max-width:225px;">  
<figcaption style="text-align:center;font-size: 0.9em;">
    메모리 공간에서의 모습 예시<br/>
    <cite>삽화 참고: 자료구조, 정광식 저</cite>
</figcaption>
</figure>

설명은 이쯤하고, 그래서 프로그램은 이렇다.  
강의 내용을 응용하여 연결 리스트의 마지막에 데이터 삽입/삭제, 특정 위치에 삽입/삭제가 가능하다.  
  
<div class="attachments"><a href="http://blog.naver.com/jinjoo_park/221386894502" target="_blank">exec 다운로드 _ Naverblog</a></div>
<img src="./data-structures-05-linkedlist_3.png">  
이해하기 쉬운 배열/스택/큐에서 갑자기 내용이 복잡해졌지만, 이거 만들면서 차차 이해해 나갔다.  
어려웠지만 은근히 재밌었다. ^^  
  
아래는 소스코드이다. [Mac OS, Xcode에서 C로 개발]

~~~cpp
//
//  main.c
//  DataStructures_05_02
//
//  Created by Jinjoo on 2018. 10. 27..
//  Copyright © 2018년 Jinjoo. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h> //동적할당을 위해 필요

/* 단순 연결 리스트의 노드 구조 정의 */
typedef struct ListNode {
    int data;
    struct ListNode* link;
}listNode;

/* 리스트의 헤드(first) 노드 구조 정의 */ 
typedef struct {
    listNode* head;
}headNode;

headNode* createLinkedList_h(void){ //헤드 노드를 하나 생성하여 반환
    headNode* H; //헤드 노드를 가르키는 포인터 변수 H 생성
    H = (headNode*)malloc(sizeof(headNode)); //포인터 변수 사이즈 크기의 메모리 영역을 할당받고, 그 메모리 영역의 주소를 반환
    H->head = NULL; //가르킬 노드가 없으니 NULL값 저장
    return H;
}


/* 연결 리스트의 노드 삽입 */
void addNode(headNode* H, int x){
    listNode* newNode;
    listNode* lastNode;
    
    newNode = (listNode*)malloc(sizeof(listNode));
    newNode->data = x; //데이터로 x입력받음
    newNode->link = NULL; //연결 리스트 마지막에 추가되는 노드이므로 link는 NULL을 가르킴
    if(H->head==NULL){ //헤드 노드가 NULL을 가리키고 있으면
        H->head = newNode; //헤드 노드에 새로 생성한 노드를 연결함
        return;
    }//헤드 노드가 NULL상태가 아니면,
    lastNode = H->head;
    while(lastNode->link != NULL)lastNode = lastNode->link; //NULL을 가리키고 있는 마지막 노드를 찾아
    lastNode->link = newNode; //새로운 노드를 연결한다
}

/* 연결 리스트의 노드 삭제 */
void deleteNode(headNode* H){
    listNode* prevNode;
    listNode* delNode;
    if(H->head->link == NULL){
        free(H->head);
        H->head = NULL;
        return;
    }else{
        prevNode = H->head;
        delNode = H->head->link;
        while(delNode->link != NULL){ //link가 NULL값을 가진, 마지막 노드를 찾아
            prevNode = delNode;
            delNode = delNode->link;
        }
        free(delNode); //해제 한다
        prevNode->link = NULL; //그리고 그 앞에 있던 노드의 link를 NULL값으로 변경한다.
    }
}

/* 연결 리스트의 특정 노드 다음에 삽입 */
void additNode(headNode* H, int itdata, int *x){
    listNode* prevNode;
    prevNode = H->head;
    while(prevNode->data != itdata)
    {
        if(prevNode->link == NULL){
            printf("[선택한 데이터를 찾을 수 없어, 추가하지 못했습니다.]\n\n");
            return;
        }
        else{
            prevNode = prevNode->link;
        }
    }
    printf("[선택한 데이터를 찾았습니다! 이 뒤에 새로운 데이터를 추가합니다.]\n\n");
    *x+=100;
    listNode* newNode;
    newNode = (listNode*)malloc(sizeof(listNode));
    newNode->data = *x;
    newNode->link = NULL;
    
    newNode->link = prevNode->link;
    prevNode->link = newNode;
    return;
}

/* 연결 리스트의 특정 노드 삭제 */
void deleteitNode(headNode* H, int itdata){
    listNode* delNode;
    listNode* prevNode;
    
    if(H->head->link == NULL && H->head->data == itdata){
        free(H->head);
        H->head = NULL;
        return;
    }else if(H->head->link != NULL && H->head->data == itdata){
        delNode = H->head;
        H->head = H->head->link;
        free(delNode);
        return;
    }else{
        delNode = H->head;
        prevNode = delNode;
        while(delNode->data != itdata)
        {
            if(delNode->link == NULL && delNode->data != itdata){
                printf("[선택한 데이터를 찾을 수 없어, 삭제하지 못했습니다.]\n\n");
                return;
            }
            else{
                prevNode = delNode;
                delNode = delNode->link;
            }
        }
        printf("[선택한 데이터를 찾았습니다! 해당 데이터를 삭제합니다.]\n\n");
        prevNode->link = delNode->link;
        free(delNode);
        return;
    }
}

/* 연결 리스트 출력 */
void printList(headNode* H){
    listNode* p;
    if(H->head == NULL){
        printf("== 연결 리스트: 데이터 없음 ==\n\n");
    }else{
        printf("== 연결 리스트: ");
        p = H->head;
        while(p != NULL){
            printf("%d", p->data);
            p = p->link;
            if(p != NULL){
                printf("->");
            }
        }
        printf(" ==\n\n");
    }
}
int main() {
    headNode* L;
    L = createLinkedList_h();
    int select_function=0, nodeData=0, selectNodeData;
    
    printf("자료구조 5장 실습 : 연결 리스트        developed by Perlpark\n");
    printf("============================================================\n");
    printf("수행할 동작을 선택해 주세요.\n※숫자 외 문자를 입력하면 오류가 나며, 해결 방법이 없습니다.\n");
    printf("============================================================\n");
    printf("0:데이터 삽입  |  1:데이터 삭제  |  2:특정 위치에 데이터 삽입  |  3:특정 데이터 삭제  |  9:종료\n\n");
    
    while(select_function != 9){
        printf("동작 선택: ");
        scanf("%d", &select_function);
        switch (select_function) {
            case 0:
                nodeData+=100;
                addNode(L, nodeData);
                printf("\n[연결 리스트의 마지막에 데이터를 추가했습니다.]\n\n");
                printList(L);
                break;
            case 1:
                if(L->head == NULL){
                    printf("\n[데이터가 존재하지 않습니다. 데이터 삽입부터 해주세요.]\n\n");
                }else{
                    deleteNode(L);
                    printf("\n[연결 리스트의 마지막 데이터를 삭제했습니다.]\n\n");
                    printList(L);
                }
                break;
            case 2:
                if(L->head == NULL){
                    printf("\n[데이터가 존재하지 않습니다. 데이터 삽입부터 해주세요.]\n\n");
                }else{
                    printf("\n[연결 리스트의 특정 위치에 새로운 데이터를 추가합니다. 어느 데이터 뒤에 추가할까요?]\n\n");
                    printf("데이터 선택: ");
                    scanf("%d", &selectNodeData);
                    printf("\n");
                    additNode(L, selectNodeData, &nodeData);
                    printList(L);
                }
                break;
            case 3:
                if(L->head == NULL){
                    printf("\n[데이터가 존재하지 않습니다. 데이터 삽입부터 해주세요.]\n\n");
                }else{
                    printf("\n[연결 리스트에서 특정 데이터를 찾아 삭제합니다. 어떤 데이터를 삭제할까요?]\n\n");
                    printf("데이터 선택: ");
                    scanf("%d", &selectNodeData);
                    printf("\n");
                    deleteitNode(L, selectNodeData);
                    printList(L);
                }
                break;
            case 9:
                printf("\n[종료합니다.]\n");
                break;
            default:
                printf("\n[유효하지 않은 명령입니다. 다른 번호를 입력해주세요.]\n");
                break;
        }
    }
}
~~~
 
** 참고 블로그   
이해가 안되거나 오류가 생겨서 막혔던 부분은 아래 블로그를 참고했다.   
<a href="https://blog.naver.com/simonmatthew/221304432762" target="_blank">https://blog.naver.com/simonmatthew/221304432762</a>   
<a href="https://massy2002.blog.me/12433974" target="_blank">https://massy2002.blog.me/12433974</a>