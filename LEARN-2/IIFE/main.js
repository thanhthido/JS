// Function Expression
/*
const callNow = function () {
    console.log('NOW')
}
callNow()
*/

// IIFE
;(function () {
    console.log('NOW NOW')
})()

// Truyền tham số
;(function (message) {
    console.log('Message: ', message)
})('Chào bạn!')

// Around function
;(() => {
    console.log('NOW!')
})()

// 3. IIFE là hàm "private"
let i = 0
;(function myFunc() {
    i++
    console.log(i)
    if (i < 10) {
        myFunc()
    }
})()

// 5. Các cách tạo ra một IIFE
// C1
;(function () {
    console.log('NOW 1')
})()

// C2
;(function () {
    console.log('NOW 2')
})()

// C3
;+(function () {
    console.log('NOW 3.1')
})()

//
;-(function () {
    console.log('NOW 3.2')
})()

//
!(function () {
    console.log('NOW 3.3')
})()

// 6. Ví dụ sử dụng IIFE
/*
const app = {
    cars: [],
    add(car) {
        this.cars.push(car)
    },
    edit(index, car) {
        this.cars[index] = car
    },
    delete(index) {
        this.cars.splice(index, 1)
    },
}
*/
// => IIFE
const app = (function () {
    // private
    const cars = []

    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        },
    }
})()
