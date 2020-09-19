# juicygangmom
강남엄마 주니어 프론트엔드 과제
## **프로젝트**

juicygangmom([Live Demo](http://ec2-15-164-98-92.ap-northeast-2.compute.amazonaws.com:8081))

### 소개

- Vue, Typescript, Nuxt
- UI 프레임웤 없이 진행
- Responsive web
- BEM 방법론 지키려 최대한 노력
- Atomic Design 적용
- Docker build 및 EC2 DEMO 배포

### 기능

- 학원 리뷰 웹에서는 리스트 모바일에서는 Carousel
- 권한 없을시 첫 리뷰만 보이고 나머지는 Blur

![image](https://user-images.githubusercontent.com/46892438/93492991-64a84e00-f946-11ea-9099-0ef6609e8346.png)

---
## env(.env) 

```
BASE_URL=https://AAAAAAAAAA.BBBB.CCCC
```

---

## Repos

[juicyjusung/juicygangmom](https://github.com/juicyjusung/juicygangmom)

---

## 프로젝트 스크린샷

![image](https://user-images.githubusercontent.com/46892438/93492906-4cd0ca00-f946-11ea-859d-da82be24271f.png)


## 리뷰

- Nuxt는 처음 써보는데 굉장히 편한 프레임웤 같다.~~(Next 보다..)~~
- 맨날 UI프레임웤만 사용하다가 안쓰려니까 UI프레임웤 만드신 분들이 정말 장인이라는걸 알게 되었고, 내가 기초가 많이 부족하다는걸 다시한번 느꼈다. 공부가 많이 되었다.
- 일부 데이터만 보여주고 유저의 액션을 유도하는 간보기(?)식 구현에 대해 생각해본적이 없는데 프로덕션에서는 권한에따라 서버에서 가라 데이터를 보내주거나, 개수만큼 default 이미지를 랜더링하면 될거 같은데 더 좋은 방법이 없나 고민해보아야겠다.
