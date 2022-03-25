// Value types
let a = 1
let b = a

a = 2

console.log(b)

// Reference types
let c = {
    name: 'Mercedes',
}

let d = c

c.name = 'BMW'

console.log(d)

// Data types with functions
function sum(a, b) {
    console.log(a, b)
}

const e = 1
const f = 2
sum(e, f)

// Side effect

function func(obj) {
    obj.name = 'Mercedes'
    console.log(obj)
}

const g = {
    name: 'BMW',
}

func(g)
console.log(g)

//
function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj)) // * Tạo ra object mới trong vùng nhớ mới
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW',
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)
