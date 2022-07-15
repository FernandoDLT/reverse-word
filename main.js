// Funtion reverse a string
function reverseStr(str) {
    let newStr = ""
    for(let char of str) {
        newStr = char + newStr
    }
    return newStr
}
console.log(reverseStr('abc'))
console.log(reverseStr('car'))
console.log(reverseStr('tar'))
console.log(reverseStr('mom'))