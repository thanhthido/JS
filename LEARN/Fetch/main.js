// var postApi = "https://jsonplaceholder.typicode.com/albums"

/*
fetch(postApi)
  .then(function (response) {
    return response.json()
    // JSON.parse: JSON -> JavaScript
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li>
            <h2>${post.title}</h2>
            <p>${post.body,}</p>
        </li>`
    })

    var html = htmls.join("")
    document.getElementById("post-block").innerHTML = html
  })
  .catch(function (err) {
    console.log("Có lỗi")
  })
  */

/*
var fetchCity = fetch(cityApi).then(function (response) {
  return response.json()
})

var fetchDistrict = fetch(districtApi).then(function (response) {
  return response.json()
})

Promise.all([fetchCity, fetchDistrict])
  .then(function (result) {
    var cities = result[0]
    var districts = result[1]
    var html1 = cities.map(function (city) {
      return `<li>
                <h2>${city.name}</h2>
                <p>Mã tỉnh: ${city.code}</p>
                <p>Mã điện thoại: ${city.phone_code}</p>
          </li>`
    })
    // var html2 = districts.map(function (district) {
    //   var city = cities.filter(function (city) {
    //     return district.province_code === city.code
    //   })

    //   return `<li>${district.name}</li>`
    // })

    var 

    var html = html1.join("")
    var htmls = html2.join("")
    // console.log(html)
    document.getElementById("city-list").innerHTML = html
    document.getElementById("district-list").innerHTML = htmls
  })
  .catch(function (err) {
    console.log("404 NOT FOUND")
  })
  */

/*
var cityApi = "https://provinces.open-api.vn/api/"
var districtApi = "https://provinces.open-api.vn/api/d/"

fetch(cityApi)
  .then(function (response) {
    return response.json()
  })
  .then(function (cityResponse) {
    var cities = cityResponse.map(function (city) {
      return {
        id: city.code,
        name: city.name,
      }
    })

    return fetch(districtApi)
      .then(function (response) {
        return response.json()
      })
      .then(function (districtResponse) {
        var districts = districtResponse.map(function (district) {
          return {
            districtCode: district.province_code,
            name: district.name,
          }
        })
        // console.log(cities)
        // console.log(districts)
        return {
          cityList: cities,
          districtList: districts,
        }
      })
  })
  .then(function (data) {
    var html = ""
    data.cityList.forEach(function (city) {
      var result = data.districtList.filter(function (district) {
        return district.province_code === city.code
      })
      console.log(result)

      result.forEach(function (item) {
        return (html += `<li>
        <p>${city.name}</p>
        <ul><li>${item.name}</li></ul>
      </li>`)
      })
    })
    document.getElementById("city-list").innerHTML = html
  })
  */

var usersApi = 'https://jsonplaceholder.typicode.com/users',
    commentsApi = 'https://jsonplaceholder.typicode.com/comments'

fetch(usersApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (users) {
        // Đã lấy ra danh sách user là users
        var userIds = users.map(function (user) {
            return user.id
        })
        // Đã lấy ra array ID là userIds
        return fetch(commentsApi)
            .then(function (response) {
                return response.json()
            })
            .then(function (comments) {
                // Đã lấy ra danh sách comment là comments
                var comments = comments.filter(function (comment) {
                    return userIds.includes(comment.postId)
                })
                return {
                    userList: users,
                    commentList: comments,
                }
            })
        // Đã tạo object gồm danh sách user và danh sách comment
    })
    .then(function (data) {
        var html = ''
        var commentBlock = document.getElementById('comment-block')
        data.commentList.forEach(function (comment) {
            var user = data.userList.find(function (user) {
                return user.id === comment.postId
            })
            html += `<li>
            <h2>${user.name}</h2>
            <h4>${user.email}</h4>
            <p>${comment.body}</p>
        </li>`
        })
        commentBlock.innerHTML = html
    })
