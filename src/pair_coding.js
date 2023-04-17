// write a function that converts an object into an array.
//


function toArray(obj) {
    return Object.entries(obj)
}

console.log(toArray({classroom: 215, poscode: 7010}))
