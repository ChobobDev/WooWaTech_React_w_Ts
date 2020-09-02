## Typescript 에서의 Type에 관하여
* * *
### 1.`Type 추론`을 통한 암시적 **Type** 지정
```TS
let foo = 10;
```
위 코드는 타입을 명시하지 않아도 에러가 나지 않는다.  
이는 Compiler가 `타입 추론`을 통하여 암시적으로 타입을 지정하기 때문이다.

```TS
let foo = 10;
foo = false;
```
위 코드와 같은 경우, `foo` 라는 `Variable`에 `number` 라는 `Type` 이 지정되어 있다.  
따라서 `foo` 에 `false` 라는 `Boolean` 이라는 `Type`을 대입하려고 하면 에러가 난다.

* * *
### 2.명시적으로 **Type**을 지정
```TS
let foo : number = 10;
```
위 코드는 명시적으로 `Type`을 지정하는 코드의 예제이다.  
`Typsescript`에서는 이와 같이 `let 변수명: type; ` 로 지정해 줄 수 있다.  
위와 같이 `Type`을 지정해주면 **가독성**`Readability`를 향상시킨다.  
https://www.typescriptlang.org/docs/handbook/basic-types.html 에서 `Typescript`의 `Type`들을 확인 할 수 있다

* * *
### 3. `Type Alias`를 이용하여 `Type`지정
```TS
let age: number = 10;
let weight: number = 57;
```
위와 같이 두 변수의 `Type`을 `number`로 지정해 줄 수 있다.  
위 코드의 가독성은 `Type Alias`를 통하여 향상 시킬 수 있다.  
```TS
type Age = number;
let age: Age = 10;
let weight: number = 57;
```
위와 같이 `Type Alias`를 이용한다면 `number`라는 `Type`의 별칭을 정해줄 수 있다.  
`age`라는 변수의 `Type`을 `Age`로 지정하여 가독성을 향상시킬 수 있다.  
 * * *