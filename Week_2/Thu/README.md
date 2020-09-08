## 우아한 테크러닝 React&Typescript 3회차
* * *
오늘 테크러닝의 주 목적은 React를 직접 구현해 보는 것이었다.  
I have been using React.js for about 6 month and never questioned about how it actually works.  
```JS
const list = [
  { title: 'I will Master React' },
  { title: 'I will Master Redux' },
  { title: 'I will Master Typescript' },
];

const rootElement = document.getElementById("root");

function app () {
  rootElement.innerHTML = `
  <ul>
    ${ list.map(item => `<li>${item.title}</li>`).join('')}
  </ui>
  `;
}

app();
```
as you can see from the code above, we can use the `innerHTML`property from `rootElement` to render  `elements` over `HTML`.  
