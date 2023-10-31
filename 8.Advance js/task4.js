let str = "i am Developer"
 console.log("🚀 ~ file: task4.js:2 ~ str:", str)
let Stype = typeof(str)
console.log("🚀 ~ file: task4.js:4 ~ Stype:", Stype)

// convert To ARRAY

let ToArray = str.split(" ")
console.log("🚀 ~ file: task4.js:9 ~ ToArray:", ToArray)

//  To check type 
let Atype = typeof(ToArray)
console.log("🚀 ~ file: task4.js:12 ~ Atype:", Atype)

// reverse an array
let RevresArray = ToArray.reverse()
console.log("🚀 ~ file: task4.js:15 ~ RevresArray:", RevresArray)

// convert to string 
let ToString = RevresArray.toString().replace(/\,/g," ")
console.log("🚀 ~ file: task4.js:18 ~ ToString:", ToString)