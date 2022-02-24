# Hoisting - Kéo lên / đưa lên

> Đưa phần khai báo lên trên đầu phạm vi

---

## Hoisting với `var`, `function declaration`

> Phần khai báo được đưa lên, phần gán không được đưa lên

### `var`

```js
console.log(age) // undefined
console.log(fullName) // ReferenceError: fullName is not defined
var age = 16
```

    =>

```js
var age
console.log(age) // undefined
console.log(fullName) // ReferenceError: fullName is not defined
age = 16
console.log(age) // 16
```

### `function declaration`

```js
console.log(sum(6, 9)) // 15
function sum(a, b) {
    return a + b
}
```

## Hoisting với `let`, `const`

> Khai báo với biến "let", "const" khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone"

### `let`

```js
{
    console.log(fullName) // ReferenceError: Cannot access 'fullName' before initialization
    let fullName = 'Nguyen Van A'
}
```

### `const`

```js
const counter1 = makeCounter()
console.log(counter1) // 1
function makeCounter() {
    let counter = 0
    return increase
    function increase() {
        return ++counter
    }
}
```

Link page: https://thanhthido.github.io/JS/LEARN-2/Hoisting/
