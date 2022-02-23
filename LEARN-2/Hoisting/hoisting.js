// ===== var =====
var age
console.log(age)
// console.log(fullName)
age = 16
console.log(age)

// ===== function declaration =====
console.log(sum(6, 9))
function sum(a, b) {
    return a + b
}

// ===== let =====
/*
{
    console.log(fullName)
    let fullName = 'Nguyen Van A'
}
*/

let fullName = 'Nguyen Van A'

{
    let fullName = 'Nguyen Van B'
    {
        {
            console.log(fullName)
            // let fullName = 'Nguyen Van C'
        }
    }
}

// ===== const =====
const counter1 = makeCounter()

console.log(counter1())

function makeCounter() {
    let counter = 0

    return increase

    function increase() {
        return ++counter
    }
}
