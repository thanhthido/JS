// Global
var message = 'Hoc ve scope'
console.log(message)

function log() {
    console.log('IN RA LOG')
}

function logger() {
    console.log(message)
    log()
}

logger()

// Code block
{
    // code
    const age = 18
    console.log(age)
}

// Local scope
function logger2() {
    var fullName = 'Thanh Thi'
    console.log(fullName)

    function logger3() {
        console.log('LOG 3')
    }
    logger3()
}

logger2()

// Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
// Phạm vi global
function logger4(first, last) {
    console.log(first, last)
}

// Phạm vi hàm logger
logger4('Thanh', 'Thi')

// Phạm vi hàm logger
logger4('Lap', 'Trinh')

// Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
const fullName = 'Thi Do' // bên ngoài
function logger5() {
    const age = 20 // bên trong
    console.log(age, fullName)
}

logger5()

// Biến trong hàm được tham chiếu bởi 1 hàm?
function makeCouter() {
    let couter = 0
    function increase() {
        return ++couter
    }
    return increase
}

const increase1 = makeCouter()

console.log(increase1())
