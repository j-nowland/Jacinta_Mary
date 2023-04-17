// Create a function that returns true if the first array values is subst of the second array values
// Otherwise return false
// arraySubset ([3,2,5][5,3,7,9,2])

function arraySubset(arr1, arr2) {
    let counter = 0
    for(let i =0, i < arr1.length, i++) {
        if(arr2.includes(arr1[i])){
            counter++
        }
if (counter === arr1.length)
        return true
    } else {
        return false
    }


}