var users = [
  {
    id: 1,
    name: "Thanh Thi",
  },
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 3,
    name: "Son Hoang",
  },
]

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Bài học hay quá!",
  },
  {
    id: 2,
    user_id: 2,
    content: "Cảm ơn em!",
  },
  {
    id: 3,
    user_id: 3,
    content: "Mong anh ra thêm video nữa ạ!",
  },
]
// 1. Lấy comments
// 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng
// Fake API: mô phỏng hàm thực hiện back end lấy ra url
/*
function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments)
    }, 1000) //fake tốc độ tải của mạng là 1s
  })
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id)
    })
    setTimeout(function () {
      resolve(result)
    }, 1000)
  })
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id
    })

    return getUsersByIds(userIds).then(function (user) {
      return {
        users: users,
        comments: comments,
      }
    })
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block")

    var html = ""
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id
      })
      html += `<li>${user.name}: ${comment.content}</li>`
    })

    commentBlock.innerHTML = html
  })
*/

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments)
    }, 1000)
  })
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id)
    })
    setTimeout(function () {
      resolve(result)
    }, 1000)
  })
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id
    })

    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      }
    })
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block")

    var html = ""
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id
      })
      html += `<li>${user.name}: ${comment.content}</li>`
    })

    commentBlock.innerHTML = html
  })
