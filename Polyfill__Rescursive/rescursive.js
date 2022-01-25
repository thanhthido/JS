/*
var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log(new Set(array))
*/

/**
 * 1. Xác định điểm dừng
 * 2. Logic handle => Tạo ra điểm dừng
 */

/*
function countDown(num) {
    if (num > 0) {
        console.log(num)
        return countDown(num - 1)
    }
    return num
}

countDown(10)
*/

/*
function loop(start, end, callback) {
    if (start < end) {
        callback(start)
        return loop(start + 1, end, callback)
    }
}

var array = ['JavaScript', 'PHP', 'Ruby']

loop(0, array.length, function (index) {
    console.log(array[index])
})
*/

// Loop
/*
function giaiThua(num) {
    var output = 1
    for (var i = num; i > 0; i--) {
        output = output * i
    }
    return output
}
console.log(giaiThua(6))
*/

// Rescursive
/*
function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1)
    }
    return 1
}
console.log(giaiThua(6))
*/

function run(x, y) {
    if (y - x === 2) {
        return [x + 1]
    } else {
        var list = run(x, y - 1)
        list.push(y - 1)
        return list
    }
}
