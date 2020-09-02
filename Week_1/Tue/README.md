## Typescript 에서의 Type에 관하여
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

```TS
let foo : number = 10;
```
위 코드는 타입을 명시해주는 

