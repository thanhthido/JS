# Strict mode - Chế độ nghiêm ngặt

> Chế độ giúp code JavaScript trở nên an toàn hơn. Khi bật chế độ này lên, trong một số trường hợp sẽ giúp chúng ta tránh được lỗi do sơ ý có thể để nó xảy ra. Đây là tính năng được ra mắt từ phiên bản ES6 nhằm cải thiện một vài hạn chế có mặt trong quá khứ của các phiên bản cũ của ngôn ngữ này.

> Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẫn

## Cách sử dụng

1. Thêm `"use strict";` vào đầu file.js
2. Thêm `"use strict";` vào ngay sau thẻ mở `<script>`
    > _`<script> "use strict" </script>`_
3. Thêm `"use strict";` vào đầu phạm vi hàm

## Đặc trưng

-   Không thể khai báo biến mà không sử dụng từ khoá `var`, `let`, `const`

```js
fullName = 'Nguyen Van A' // Tạo ra biến fullName ở phạm vi global

function testFunc() {
    age = 18 // Tạo ra biến age ở phạm vi global
}

testFunc()
```

```js
'use strict'
fullName = 'Nguyen Van A' // Lỗi: ReferenceError: fullName is not defined

function testFunc() {
    age = 18 // Lỗi: ReferenceError: age is not defined
}

testFunc()
```

-   Báo lỗi khi gán lại giá trị cho thuộc tính có `writable: false`

```js
const student3 = {}
Object.defineProperty(student3, 'fullName', {
    value: 'Nguyen Van C',
    writable: false,
    // mặc định là false
})
student3.fullName = 'Thanh Thi'
console.log(student3) // Nguyen Van C
```

```js
'use strict'
const student3 = {}
Object.defineProperty(student3, 'fullName', {
    value: 'Nguyen Van C',
    writable: false,
    // mặc định là false
})
student3.fullName = 'Thanh Thi'
console.log(student3) // Lỗi: TypeError: Cannot assign to read only property 'fullName' of object '#<Object>'
```

-   Báo lỗi khi hàm có tham số trùng tên

```js
function sum(a, a) {
    return a + a
}

console.log(sum(6, 9)) // Ghi đè nên a + a = 9 + 9 = 18
```

```js
'use strict'
function sum(a, a) {
    return a + a
}

console.log(sum(6, 9)) // Lỗi: SyntaxError: Duplicate parameter name not allowed in this context.
```

-   Khai báo hàm trong `code block` thì hàm sẽ thuộc phạm vi `code block`

```js
{
    function sum(a, b) {
        return a + b
    }
}
console.log(sum(9, 6)) // 15
```

```js
'use strict'
{
    function sum(a, b) {
        return a + b
    }
}
console.log(sum(9, 6)) // Lỗi: ReferenceError: sum is not defined
```

-   Không đặt tên biến, tên hàm bằng một số từ khoá "nhạy cảm" của ngôn ngữ

```js
const private = 123
console.log(private) // 123
```

```js
const private = 123
console.log(private) // Lỗi: SyntaxError: Unexpected strict mode reserved word
```

## Công dụng

1. Tránh "quên" từ khoá khai báo biến
2. Tránh trùng tên biến dẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
