## 250113 월별평가 피드백

1. 필요한 컬럼(속성)들이 댓글의 의미에 맞게 제대로 정의되었는가? (10점)

피드백: 없음

2. 각 컬럼(속성)의 데이터 타입이 적절하게 설정되었는가? (10점)

피드백: 없음

3. Express를 사용하여 서버를 구축했는가? (10점)

피드백: 없음

4. 디렉토리를 잘 구분했는가? (4점)

첫 번째 피드백:

```js
app.use (comment)
```

띄어쓰기 문법 지키셔야 합니다.
=> 타자 능력
=> 머릿속에 정리를 하는 동시에 코드를 작성하려다 보니 문법적 오류보다는, 관례가 지켜지지 않음.

두 번째 피드백:

```js
router.get('/list',comments.getdatalist)
router.post('/write',comments.postdatwrite)
router.post('/update/:id',comments.postUpdate)
router.post('/delete/:id',comments.postslice)
```

메서드 명 카멜케이스든 스네이크든 지켜지지 않음.  
이러한 메서드 작명법은 협업자에게 큰 혼란이 올 수 있음.
=> 10분 소요할거 2시간 걸릴 수 있음
메서드 명으로도 설명이 가능하게끔 작명해야 함.  

세 번째 피드백:

알맞은 디렉토리 작명 이름 미흡

controllers/controllers.js => controllers/comment.controller.js
service/sevice.js => services/comment.service.js

작명에 대한 납득 미흡으로 보임 => 이것 또한 교강사 개인적인 판단으로는, 머릿속이
정리가 안되어있는 상태에서 평가를 진행하려다 보니 지켜지지 않은 것으로 보임.

주변 학우분들에게 질문을 자주 한 것으로 보아, 아주 많이 미흡함.

5. 모듈마다 요청을 처리하는 라우팅이 잘 구성되었는가? (10점)

네 번째 피드백:

이건 교강사의 실수입니다.

화면에 대한 작명에 대해서, 학생분들에게 혼동을 야기할법한 내용입니다.

다음과 같이 변경

- write.html => update.html

6. 미들웨어를 사용하여 요청/응답 처리 및 예외 처리를 잘 수행했는가? (0점)

- 미들웨어 디렉토리 자체가 존재하지 않음.
- 미들웨어 역할을 하는 함수가 존재하지 않음.
- 예외 처리 코드가 존재하지 않음.

7. 댓글 생성이 잘 구현했는가? (0점)

다섯 번째 피드백:

```js
app.use (express.static("views"));
```

1. views안에 실행 시킨다.

근데 list.html에서의 외부 파일 불러오는 경로는 다음과 같음

```js
    <link href="/css/index.css" rel="stylesheet" />
```

## 현재 디렉토리 구조

```
250113_monthTest_Hyesung
├─ .gitignore
├─ controllers
│  └─ controllers.js
├─ monthTest3.md
├─ package.json
├─ README.md
├─ repository
│  ├─ comments.repository.js
│  └─ db.js
├─ routers
│  ├─ comment.routers.js
│  └─ index.js
├─ server.js
├─ service
│  └─ service.js
├─ test.md
└─ views
   ├─ css
   │  └─ views.css
   ├─ list.html
   └─ write.html
```

위의 디렉토리로 보아, css파일 이름은 views.css인데 HTML에서 경로 끌고온거 보면
index.css로 되어있습니다. 그래서 css가 적용이 안되죠.
=> 외부 파일 끌고오는 경로 지식 부족 =>  기초지식 부족

여섯 번째 피드백:

댓글 기능 작성 테스트 중 다음과 같은 오류 발생

```js
/mnt/c/Users/KGA/Documents/monthTest3/250113_monthTest_Hyesung/service/service.js:12
    const [result] = await commetrepository.datawrite(data)
                     ^

TypeError: (intermediate value) is not iterable
    at Object.datawrite (/mnt/c/Users/KGA/Documents/monthTest3/250113_monthTest_Hyesung/service/service.js:12:22)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async postdatwrite (/mnt/c/Users/KGA/Documents/monthTest3/250113_monthTest_Hyesung/controllers/controllers.js:13:24)

Node.js v22.12.0
```

에러 문구 번역 => TypeError: (중간 값)은 반복할 수 없습니다.
=> 이 말의 뜻은 그대로 받아들이면 안됌
=> "너 반복이 안돼! 데이터 구조 타입 자체가 다름!"
=> "너 지금 코드 보니까 배열에 대한 반복 코드를 작성했는데 너가 지금 보내준 데이터는 객체야. 오류 보내줄게"

어디서?

[text](service/service.js) 12:0
```js
const datawrite = async(data) => {
    const [result] = await commetrepository.datawrite(data)
    return result
}
```

8. 댓글 조회를 잘 구현했는가? (0점)

```js
const getdatalist = async (req,res)=>{
    const boardList = await commetrepository.datalist()
    res.render('list.html',{
        boardList
    })
}
```

```html
  <li>
        {% for item in commentList %}
        <div class="comment-row-list">
        <div>{{ item.user_id }}</div>
        <div class="comment-content">
            <div>
            <a href="/comment/update/{{ item.id }}">{{ item.content }}</a>
            </div>
            <form method="post" action="/comment/delete/{{ item.id }}">
            <button type="submit">삭제</button>
            </form>
        </div>
        <div>{{ item.created_at }}</div>
        </div>
        {% endfor %}
    </li>
```

9. 댓글 수정을 잘 구현했는가? (0점)

- router에 댓글 생성하는 GET 요청에 따른 라우트가 존재하지 않음

10. 댓글 삭제를 잘 구현했는가? (0점)

```js
    const result =await pool.query(`DELETE INTO comments where id= ${id}`)
```

- 문법 오류

총 점수 44점

재시험

피드백 다시 드립니다
