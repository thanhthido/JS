var listStudentsBlock = document.querySelector("#list-students")

var studentApi = "http://localhost:3000/student"
function start() {
  getStudents(randerStudents)
  handleCreateForm()
}

start()

//Functions
function getStudents(callback) {
  fetch(studentApi)
    .then(function (response) {
      return response.json()
    })
    .then(callback)
}

function randerStudents(students) {
  var listStudentsBlock = document.querySelector("#list-students")
  var htmls = students.map(function (student) {
    return `
      <li class="student-item-${student.id}">
          <h4>${student.name}</h4>
          <p>${student.mssv}</p>
          <button onclick="handleDeleteStudent(${student.id})">&times;</button>
          <button onclick="handleEditStudent(${student.id})">Sửa</button>
      </li>
    `
  })
  listStudentsBlock.innerHTML = htmls.join("")
}

function createStudent(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  }
  fetch(studentApi, options)
    .then(function (response) {
      response.json()
    })
    .then(callback)
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create")

  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value
    var mssv = document.querySelector('input[name="mssv"]').value

    var formData = {
      name: name,
      mssv: mssv,
    }

    createStudent(formData, function () {
      getStudents(randerStudents)
    })
  }
}

function handleDeleteStudent(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  fetch(studentApi + "/" + id, options)
    .then(function (response) {
      response.json()
    })

    // xử lý xoá hiển thị ngoài html
    .then(function () {
      var studentItem = document.querySelector(".student-item-" + id)
      if (studentItem) {
        studentItem.remove()
      }
    })
}

function saveStudent(data, callback, id) {
  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  }
  fetch(studentApi + "/" + id, options)
    .then(function (response) {
      return response.json()
    })
    .then(callback)
}

function handleSaveForm(idStudent) {
  var saveBtn = document.querySelector("#save")
  saveBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value
    var mssv = document.querySelector('input[name="mssv"]').value
    var formData = {
      name: name,
      mssv: mssv,
    }
    saveStudent(
      formData,
      function () {
        getStudents(randerStudents)
      },
      idStudent,
    )
    document.querySelector("#create").style.display = "block"
    document.querySelector("#save").style.display = "none"
    function clear() {
      document.querySelector('input[name="name"]').value = ""
      document.querySelector('input[name="mssv"]').value = ""
    }
    clear()
  }
}
// khi click edit: data của course được click hiển thị xuống value của
//input name & description
function handleEditStudent(id, data) {
  var studentItem = document.querySelector(".student-item-" + id)
  var nameItem = studentItem.querySelector("h4").innerText
  var mssvItem = studentItem.querySelector("p").innerText
  document.querySelector('input[name="name"]').value = nameItem
  document.querySelector('input[name="mssv"]').value = mssvItem
  document.querySelector("#create").style.display = "none"
  document.querySelector("#save").style.display = "block"
  handleSaveForm(id)
}
