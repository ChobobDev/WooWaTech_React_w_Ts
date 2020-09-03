
const person = {
    name: '조성빈',
    getName(){
        return this.name;
    }
}

console.log(person.getName())

const man = person.getName;

console.log(man())

//함수한테 함수주는 callback function