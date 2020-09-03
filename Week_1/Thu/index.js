
//자바스크립트는 무조건 반환을 한다
// 값이 있던 Undefined 이던 무조건 반환을 한다.
function foo(){
    return 0;
}
//값이 아니기 때문에 ; 가 불필요

// new foo() instance 객체 

const bar = function bar(){

};
//함수 정의 식, 함수를 값이라고 정의함
//함수를 값으로 취급할때에는 이름을 생략 할 수 있다
//값으로 취급할때에는 ()를 사용한다

(function(){

})()
//immediate function call, 이름이 없어도 실행이 될 수 있으며, 바로 호출이 되어야 함
//단 한번만 실행이 가능하다


bar() //함수가 아닌 const bar를 뜻함

function foo_1(x){
    return 0;
}

foo_1(function(){

})
//함수를 전할수 있다.


function foo_2(x){
    x();
    return function(){

    };
}

const y = foo_2(function(){

})
//위와 같이 함수를 리턴 받을 수 있다.할 수 있다.

//함수를 인자로 받는 함수
//Imeddiate function call
//일반 함수
//함수를 리턴하는 함수

//ES6이후의 문법의 변형

//재귀호출
const foo_3 = function foo_3(){
    foo_3() //함수가 호출됨, 이 경우 함수의 이름이 생량 불가
};

const foo_4 = function(){
    //이경우는 이름이 생략 가능
};

// 모든 자바스크립트는 식과 문으로 나눌 수 있다.
// 값을 retun 한다면 -> 식 (1+10+foo_3)
// 값의 마무리는 ;
// 문 (if statemnet, loop ) conditional statement ( if & switch ) loop( while, foe , do while)
// 함수는 인자를 받고 무언가를 return한다
const foo_5 = (x) =>{
    // Arrow functino 이다.
    // 함수가 값을 반환을 할때 ,,,,
}

const x = 10;
const y =() => 10;

console.log(x,y()); // y는 함수 이기 때문에 호출방법이 다름
//둘다 식임

const y = (x,y) => {
    return x*2;
}


//자바스크립트의 변형은 아주 많다,,,
//new 연산자
// 동적 바인딩 찾아보기 ,,
// instance object
function foo_6(){
    this.name = 10;
}

const a = new foo_6();
//명시하지 않아도 return 함

if(a instanceof foo_6){

}

class barbar{
    constructor(){
        this.name = 10;
    }
}

console.log(new bar())