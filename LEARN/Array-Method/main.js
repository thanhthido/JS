/*
//Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName
  this.lastName = lastName
  this.avatar = avatar

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}

var author = new User("Sơn", "Đặng", "Avatar")
var user = new User("Thi", "Đỗ", "Avatar")

author.title = "Chia sẻ dạo tại F8"
user.comment = "Rất tuyệt vời"

console.log(author.getName())
console.log(user.getName())

console.log(author.constructor)
console.log(author.constructor === User)
*/

/*
var date = new Date()
console.log(Date.parse("04 Dec 1995 00:12:00 GMT"))
*/

/*
// Tạo đối tượng date ứng với thời gian hiện tại
new Date()

// Tạo đối tượng date ứng với đối số truyền vào
new Date(milliseconds)
new Date(date string)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

// timestamp = milliseconds / 1000

/*
// Lấy timestamp hiện tại
let timestamp = Math.floor(Date.now() / 1000)

// hoặc
const date = new Date()
timestamp = Math.floor(date.getTime() / 1000)

// hoặc
timestamp = Math.floor(+ new Date() / 1000)

// Lấy timestamp mốc thời gian cụ thể
const date = new Date('00:00:00 01/01/2021')
timestamp = Math.floor(date.getTime() / 1000)

// hoặc
timestamp = Math.floor(+ new Date('00:00:00 01/01/2021') / 1000)
*/

/*
var date = new Date()
function getCurrentYear() {
  // return new Date().getFullYear
  console.log(new Date().getFullYear())
}
getCurrentYear()
*/

/*
const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce(function (total, number) {
  return total + number
})
console.log(result)
*/

var couses = [
  {
    id: 1,
    name: "Javascript",
    coin: 0,
  },
  {
    id: 2,
    name: "PHP",
    coin: 500,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 200,
  },
]

Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    // ktra xem có nằm kề nhau k, để loại bỏ các phần tử trong proto
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this)
    }
  }
}

couses.forEach2(function (course, index, array) {
  // console.log(course, index, array)
})

Array.prototype.filter2 = function (callback) {
  var output = []
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this)
      if (result) {
        output.push(this[index])
      }
    }
  }
  return output
}

var a = couses.filter2(function (course, i, array) {
  // console.log(course, i, array)
  return course.coin > 100
})
// console.log(a)

Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true
      }
    }
  }
  return false
}

var isFree = couses.some2(function (course, index, array) {
  return course.coin === 0
})

// console.log(isFree)

Array.prototype.every2 = function (callback) {
  var output = true
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this)
      if (!result) {
        output = false
        break
      }
    }
  }
  return output
}

var isAllFree = couses.every2(function (course, index, array) {
  return course.coin === 0
})
// console.log(isAllFree)

console.log(document)
document.write("Hello world")
