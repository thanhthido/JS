// npm start
/*
var courseApi = "http://localhost:3000/courses"
fetch(courseApi)
  .then(function (response) {
    return response.json()
  })
  .then(function (courses) {
    console.log(courses)
  })
*/

// JSON Sever
// - CRUD
//    - Create: Tạo mới -> POST
//    - Read: Lấy dữ liệu -> GET
//    - Update: Chỉnh sửa -> PUT / PATCH
//    - Delete: Xoá -> DELETE

var listCoursesBlock = document.querySelector('#list-courses')

var courseApi = 'http://localhost:3000/courses'
function start() {
    // getCourses(function (courses) {
    //   randerCourse(courses)
    // })
    getCourses(randerCourses) // 2function cùng đối số thì truyền thẳng vào

    handleCreateForm()
}

start()

// functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function randerCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function (course) {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">&times;</button>
            <button onclick="handleEditCourse(${course.id})">Sửa</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    }
    fetch(courseApi, options)
        .then(function (response) {
            response.json()
        })
        .then(callback)
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector(
            'input[name="description"]',
        ).value

        var formData = {
            name: name,
            description: description,
        }

        // gửi đi yêu cầu tạo mới dữ liệu
        createCourse(formData, function () {
            getCourses(randerCourses)
        })
    }
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            response.json()
        })

        // xử lý xoá hiển thị ngoài html
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove()
            }
        })
}

function saveCourse(data, callback, id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    }
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function handleSaveForm(idCourse) {
    var saveBtn = document.querySelector('#save')
    saveBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector(
            'input[name="description"]',
        ).value
        var formData = {
            name: name,
            description: description,
        }
        saveCourse(
            formData,
            function () {
                getCourses(randerCourses)
            },
            idCourse,
        )
        document.querySelector('#create').style.display = 'block'
        document.querySelector('#save').style.display = 'none'
        function clear() {
            document.querySelector('input[name="name"]').value = ''
            document.querySelector('input[name="description"]').value = ''
        }
        clear()
    }
}
// khi click edit: data của course được click hiển thị xuống value của
//input name & description
function handleEditCourse(id, data) {
    var courseItem = document.querySelector('.course-item-' + id)
    var nameItem = courseItem.querySelector('h4').innerText
    var descriptionItem = courseItem.querySelector('p').innerText
    document.querySelector('input[name="name"]').value = nameItem
    document.querySelector('input[name="description"]').value = descriptionItem
    document.querySelector('#create').style.display = 'none'
    document.querySelector('#save').style.display = 'block'
    handleSaveForm(id)
}
