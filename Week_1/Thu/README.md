## 우아한 테크러닝 React&Typescript 2회차
* * *
### Javascript에서의 Type
Javascript의 타입은 `원시 타입`과 `객체 타입`이 있다.  
```JS
var a = 20;
let b = 20;
const c = 20;
```
위 코드들은 Javascript에서 변수들을 선언하는 방식들이다.

* * *
### Javascript에서의 `식` 과 `문`  
* * *
Javasript코드는 `식`과 `문`으로 나눌 수 있다.
`식`은 영어로 `Expression` 이며 실행하여 `값`이`return`되는 것은 `식`이라고 정의한다.  
`문`은 영어로 `Statement` 이며 `식`이 아닌 모든것들을 뜻한다.  
  
Javascript에서 `변수` 라고 정의된 것들은 `값`을 넣을 수 있다. 
```JS
const c = 20;
```
위 코드는 `변수`에 `값`을 넣는 예제 코드이다.  

Javascript의 함수들은 무조건 값을`return`하며 `return`으로 명시된 `값`이나 `undefined`를 `return`한다.  


* * *
### Javascript 에서의 함수의 선언
* * *

Javascript에 함수를 선언하는 방법에는 `함수 정의문`과 `함수 선언문`이 있다.  
  
`함수 정의문`의 예시 code
```JS
function 함수이름(x){
    return y;
}
```
`함수 선언문` 의 예시 code
```JS
const 변수이름 = function 함수이름(x){
    return y;
}
변수이름();
```


