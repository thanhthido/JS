# Primitive Types & References Types

## Value Types & Reference Types

-   _`Value Types`_ là kiểu tham trị
-   _`Reference Types`_ là kiểu tham chiếu

### 1. Value types (Primitive date types)

> Kiểu dữ liệu nguyên thuỷ, kiểu dữ liệu đơn giản: _Khi gán một giá trị thì nó sẽ lưu giá trị đó. Tại một thời điểm, các kiểu dữ liệu nguyên thuỷ chỉ chứa cụ thể một giá trị_

-   String
-   Value
-   Boolean
-   BigInt
-   Symbol
-   Undefined
-   Null

```js
let a = 1
let b = a

a = 2

console.log(b)
```

> _Giá trị của nó cũng chính là giá trị mà bạn gán cho nó_

### 2. Reference types(Nonprimitive date types)

> Kiểu dữ liệu không nguyên thuỷ, kiểu dữ liệu phức tạp: _Đều thuộc gốc object. Trong đó: `Array` và `Function` thuộc nhóm kiểu dữ liệu `Object` đặc biệt_

-   Object
-   Array
-   Function

> Khi tạo ra một `Object`, `Array` hay một `function` mới thì sẽ có một vùng nhớ mới được tạo ra. Còn khi gán qua gán lại các thuộc tính trong `Object`

## Data types with functions

-   Value types
-   Reference types

> Side effect: Tác dụng phụ, điều xảy ra không mong muốn
