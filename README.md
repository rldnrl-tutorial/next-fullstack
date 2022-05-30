# Next.js Fullstack Web App

## Motivation

Frontend 개발자인데, 서비스를 만들려면 백엔드가 필요합니다. Next.js가 Server Side Rendering을 해준다는 것은 Server로서의 역할을 충분히 할 수 있지 않을까해서 시작하게 되었습니다.

## Tech Stack

### Language and Library

- TypeScript
- Next.js
- Prisma
- React Query
- Chakra UI

### Infra

- DB: Heroku PostgresQL

## Route Driven Development

Next.js는 자동으로 Routing을 해줍니다. 그래서 이번 프로젝트를 하면서 폴더 구조를 다음과 같이 해봤습니다.

### 나의 관심사는 Pages

```
src
├─ feedbacks
│   ├─ FeedbackPage.tsx
│   ├─ apis
│   ├─ components
│   └─ types
├─ home
│   ├─ HomePage.tsx
│   ├─ apis
│   ├─ hooks
│   └─ types
```

```
libs
├─ config
├─ ui
```

`libs` 폴더에는 공통적으로 사용하는 것들을 넣습니다. (ex `ui`, `config`, `hooks` 등등)

공통적이라는 건 어떤 의미일까요?
2개 이상 사용한다면 공통입니다.

프로젝트가 커지면 커질수록 고민이 되는 부분은 다음과 같습니다.

1. 관심사 분리를 어떻게 할 것인가
2. 어떻게 결합도를 낮출 것인가
3. 어떻게 폴더를 찾는데 걸리는 시간을 줄일까.

그래서 저는 `pages`를 기준으로 폴더 이름을 지었고, 페이지에서만 사용하는 것들을 모아두었습니다. 이렇게 작업을 했더니 확실히 관심사가 분리되었습니다. 이렇게 작업하는 것이 익숙하지는 않지만, 개인 프로젝트할 때는 이렇게 작업해야겠습니다.
