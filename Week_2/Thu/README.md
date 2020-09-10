## 우아한 테크러닝 React&Typescript 4회차
* * *
상태디자인
```JS
#Index.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const sessionList = [
  { title: "1회차 : Overview" },
  { title: "2회차 : Redux 만들기" },
  { title: "3회차 : React 만들기" },
  { title: "4회차 : 컴포넌트 디자인 & 비동기" }
];

ReactDOM.render(
  <React.StrictMode>
    <App store={{ sessionList }} />
  </React.StrictMode>,
  rootElement
);

```

```JS
#App.js
const App = (props) => {
  const {sessionList} = props.store;
  return (
    <div>
      <header>
        <h1> React & TypeScript </h1>
      </header>

      <ul>
        {sessionList.map((session)=>(<li>{session.title}</li>))}
      </ul>
    </div>
  );
};

export default App;
```
이런 방식이 있다

비구조화 는 아래에

```JS
#App.js
import React from "react";

const SessionItem = ({ title }) => <li>{title}</li>;

const App = (props) => {
  const { sessionList } = props.store;
  return (
    <div>
      <header>
        <h1> React & TypeScript </h1>
      </header>

      <ul>
        {sessionList.map((session) => (
          <SessionItem title={session.title} />
        ))}
      </ul>
    </div>
  );
};
export default App;
```

이렇게도 나타낼 수 있다.

아래 코드에는 상태를 추가해 봄
정렬상태에 (오름차순 , 내림차순) 이라는 상태를 만들어봄
```JS
import React from "react";
const SessionItem = ({ title }) => <li>{title}</li>;

//class component로 바꾸어 주어 render를 새로 하도록 한다
class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOrder: "ASC"
    };
  }
  onToggleDisplayOrder() {
    this.setState({
      displayOrder: displayOrder === "ASC" ? "DESC" : "ASC"
    });
  }

  toggleDisplayOrder = () => {
    this.setState({
      displayOrder: displayOrder === "ASC" ? "DESC" : "ASC"
    });
  };

  render() {
    return (
      <div>
        this point
        <button onClick={this.onToggleDisplayOrder}> 재정렬 </button>
      </div>
    );
  }
}

const App = (props) => {
  // 리엑트 훅인 유즈 스테이트
  const [displayOrder, toggleDisplayOrder] = React.useState("ASC");
  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i
  }));

  const onToggleDisplayOrder = () => {
    toggleDisplayOrder(displayOrder === "ASC" ? "DESC" : "ASC");
  };

  return (
    <div>
      <header>
        <h1> React & TypeScript </h1>
      </header>
      <p>전체 세션 갯수: 4개 {displayOrder}</p>
      <button onClick={onToggleDisplayOrder}> 재정렬 </button>
      <ul>
        {orderedSessionList.map((session) => (
          <SessionItem title={session.title} />
        ))}
      </ul>
    </div>
  );
};

export default App;
```
위와 같이 class function으로 따로 정의를 해주어 상태변화가 있을시 상태가 랜더링 되도록 하였다.

함수형 이 상태를 가질 수 없다를 훅을 이용하여 상채를 가질 수 있도록 해주었다.

GC / Garbage Collector (알아보기)
Mark and Sweep algorithm 

비동기와 제너레이터

```JS
class function* foo(){
    ...
}
```
제너레이터 펑션

```JS
async function bar() {

}
```
비동기 펑션

lazy function에 대하여 알아보기.

호이스팅(?) 찾아보기