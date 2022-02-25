'use strict'
var fullName = 'Nguyen Van A' // Tạo ra biến fullName ở phạm vi global

function testFunc() {
    // 'use strict'
    var age = 18 // Tạo ra biến age ở phạm vi global
}

testFunc()

console.log(fullName)
// console.log(age)

// Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
const student1 = {
    fullName: 'Nguyen Van A',
}
// Writable: true

student1.fullName = 'Nguyen Van B'

console.log(student1)

// ===

const student2 = Object.freeze({
    fullName: 'Nguyen Van A',
})
// Writable: false

// student2.fullName = 'Nguyen Van B'

console.log(student2)

// ===
const student3 = {}
Object.defineProperty(student3, 'fullName', {
    value: 'Nguyen Van C',
    writable: false,
    // mặc định là false
})
// student3.fullName = 'Thanh Thi'
console.log(student3)

//Xoá những thứ không được xoá
const student = {
    fullName: 'Thanh Thi',
}
// delete student
console.log(student)

// Báo lỗi khi hàm có tham số trùng tên

/*
function sum(a, a) {
    return a + a
}

console.log(sum(6, 9))
*/

// Khai báo hàm trong `code block` thì hàm sẽ thuộc phạm vi `code block`
/*
{
    function sum(a, b) {
        return a + b
    }
}
console.log(sum(9, 6))
*/

// Không đặt tên biến, tên hàm bằng một số từ khoá "nhạy cảm" của ngôn ngữ
/*
const private = 123
console.log(private)
*/
