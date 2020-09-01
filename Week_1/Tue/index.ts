//let foo = 10;
// let foo: number = 10; 라고 표시 할 수 있으며, 이는 명시적인 표현방식이라고 함
// https://www.typescriptlang.org/docs/handbook/basic-types.html 에서 Type들을 확인 할 수 있음


type Age = number; // Type Alias 를 정해 줄 수 있다 a.k.a Giving a Nickname to the Types in Typescript
// Type Alias는 Compile time에만 작동한다

let age: Age = 10; // age라는 Variable을 Type Alias를 통하여 Defined된 Number 라는 Type에 Alias를 주어 Readability를 상승시킨다.
let weight: number = 57;

type Bernie = {
    age: number; // age: Age; 라고 해도 무관하다
    name: string;
}
// 객체형식이 보편적이다

interface Bar{
    age: Age;
    name: String;
}
// Interface를 사용하는 방식

const bernie: Bernie ={
    age: 20,
    name: "Cho"
}
// Primitive type 에 대한 예시



const bar: Bar ={
    age: 20,
    name: "Cho"
}
// Interface를 사용한 방식이다
