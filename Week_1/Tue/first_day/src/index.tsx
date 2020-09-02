import React from 'react';
import ReactDOM from 'react-dom';

/** 
function App(props){
  return (
    <h1>props.title</h1>
  )
}
이 방법은 Typescript에서는 불가능 한 방법이다
*/

interface AppProps {
  title: string;
  color: string;
}
//interface를 이용한 Type설정(?)

function App(props: AppProps){
  return (
    <h1>{props.title}</h1>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App title="WOOWA TECH LEARNING" color="red"/> 
  </React.StrictMode>,
  document.getElementById('root')
);
// 가장 기본적인 Component를 만드는 방법