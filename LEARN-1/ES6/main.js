/*
function logger(log, type = "log") {
  console[type](log)
  console.log(type)
}
logger("Message...")
*/

/*
function logger(...params) {
  console.log(...params)
}
logger(1, 2, 3, 4, 5, 6, 7, 8)
*/

/*
function highlight([first, ...strings], ...values) {
  // console.log(values)
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [first],
    )
    .join("")
}

var brand = "F8"
var course = "Javascript"

const html = highlight`Học lập trình ${course} tại ${brand}!`
console.log(html)
*/

/*
import logger, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./logger.js"

logger("Test mesage...")
*/

const obj = {
  name: "Alice",
  cat: {
    name: "Dinah",
    cat2: {
      name: "Dinah2",
      cat3: {
        name: "Dinah3",
      },
    },
  },
}

if (obj.cat?.cat2?.cat3) {
  console.log(obj.cat.cat2.cat3.name)
}
