// let obj = {
//     name: "test",
//     age: 30
// }
//obj.name


let o = {
    a: { d: 10 }, b: 20, c: 30
}
let x = "a"
console.log("🚀 ~ file: object.js:12 ~ x:", o[x].d)
// console.log("🚀 ~ file: object.js:11 ~ o:", o.d)

let ob= {
    name : "test",
    age : 80
}

let values = Object.values(ob)
console.log("🚀 ~ file: object.js:21 ~ values:", values)
let key = Object.keys(ob)
console.log("🚀 ~ file: object.js:24 ~ key:", key)
let ent = Object.entries(ob)
console.log("🚀 ~ file: object.js:26 ~ values2:", ent)