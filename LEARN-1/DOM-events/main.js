/*
var h1Elements = document.querySelectorAll("h1")

for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e.target)
  }
}
console.log(i)
*/

/*
var inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function (e) {
  console.log(e.target.value)
}
*/

/*
document.onkeypress = function (e) {
  console.log(e.which)
  switch (e.which) {
    case 27:
      console.log("EXIT")
      break
    case 13:
      console.log("SEND CHAT")
      break
    case 75:
      console.log("k")
  }
}
*/

//  PreventDefault and StopPropagation
/*
var aElements = document.links

for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://fullstack.edu.vn")) {
      e.preventDefault()
    }
  }
}
*/

/*
var ulElement = document.querySelector("ul")

ulElement.onmousedown = function (e) {
  e.preventDefault()
}

ulElement.onclick = function (e) {
  console.log(e.target)
}
*/

document.querySelector("div").onclick = function () {
  console.log("DIV")
}

document.querySelector("button").onclick = function (e) {
  e.stopPropagation()
  console.log("Click me!")
}
