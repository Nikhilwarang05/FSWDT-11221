/*

Assignement orerators

let age = 80;

age = 12 
console.log (age)

const age1 = 80;

age1 = 12 
console.log (age)


*/ 

/*
comparison operator

let a = 10
let b = 15

console.log(a > b)
console.log(a < b)
console.log(a <= b)
console.log(a >= b)


let a = 10
let b = '10'

console.log(a == b)
console.log(a === b)

*/ 



/*

let a = 10
let b = '10'

console.log(Number(b)+a)


*/ 


/*

fuctions

greet1()
greet2()

function greet1() {
    console.log("Good morning")
}

let greet2 = function () {
    console.log("Bonjour")
}

let greet3 =  () => {
    console.log("hi")
}

greet1()
greet2()
greet3()

*/ 


let greet2 = function (name) {
    return "Hi " + name;
}

let greet3 =  (name) => "Hi " + name

console.log(greet2("John"))
console.log(greet3("John"))