
// -> make one array who have value from 1 to 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1. print 9th and 10th index of array
function FindIndex(arr) {
  let Index = arr[9]
  return Index
}
console.log("🚀 ~ file: task3.js:7 ~ Sarr:", FindIndex(arr))
function FindIndex1(arr) {
  let Index1 = arr[10]
  return Index1
}
console.log("🚀 ~ file: task3.js:7 ~ Sarr:", FindIndex1(arr))

// 2. print every element of array by map and for loop
function PrintArray() {
  arr.forEach((e) => {
    return e
  })
  return arr
}
console.log("🚀 ~ file: task3.js:23 ~ PrintArray ~ arr:", PrintArray(arr))

function PrintArrayMap() {
  arr.map((e) => {
    return e
  })
  return arr
}
console.log("🚀 ~ file: task3.js:23 ~ PrintArrayMap ~ arr:", PrintArrayMap(arr))

// 3. change a value of 6th index with 100
function ChangeValue(a) {
  arr[a] = 100;
  console.log("chnVal:", arr)
}
ChangeValue(6)
// 4. print a array till element value not grater then 100
function GraterValue(a) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      break;
    }
    console.log("100 still", arr[i]);
  }
}
GraterValue(100)
// 5. add 1 in every element of an array

let addArr = arr.map((e) => {
  return e + 1
})
console.log(" addArr:", addArr)

// 6. add 0 in start of array
function AddValue(a) {
  arr.unshift(a)
  console.log("🚀 ~ file: task3.js:46 ~ unshiftarr:", arr)
}
AddValue(0)
// 7. add  99 in end of array

arr.push(99)
console.log("🚀 ~ file: task3.js:46 ~ shiftArr:", arr)

// 8. remove 1 element from start of  array

arr.shift()
console.log("🚀 ~ file: task3.js:46 ~ shiftArr:", arr)

// 9. remove 1 element from end of array

arr.pop()
console.log("🚀 ~ file: task3.js:46 ~ shiftArr:", arr)


// 10. do sum of all value of an array with use of map, reduce and for-loop
function totalSum() {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
console.log('for loop: ', totalSum(arr));

// 11. sort a array in acending decending
function Sorting() {
  let SortArr = arr.sort((a, b) => a - b)
  return SortArr
}
console.log("🚀 ~ file: task3.js:77 ~ SortArr:", Sorting())



// 12. reverce an array with use of method
function Reverse() {
  arr.reverse()
  return arr
}
console.log("🚀 ~ file: task3.js:82 ~ arr:", Reverse())


// 13. reverce an array with use of for-loop
function ReverseArray() {
  let reversed_array = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed_array.push(arr[i]);
    return reversed_array
  }
}
console.log("🚀 ~ file: task3.js:88 ~ reversed_array:", ReverseArray())


// ___________________________________________________________________________________

// task-2
let Arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

// 1. give all value which can devided by 2 - not use filter
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] % 2 == 0) {
    console.log("🚀 ~ file: task3.js:103 ~ i:", Arr[i])
  }
}

// 2. give all value above 3 by use of filter

let FillArr = Arr.filter((e) => {
  return e > 3
})
console.log("🚀 ~ file: task3.js:112 ~ FillArr ~ FillArr:", FillArr)

// 3. give index of 56

let FindArr = Arr.findIndex((e) => {
  return e == 56
})
console.log("🚀 ~ file: task3.js:117 ~ FindArr:", FindArr)

// 4. give true/false result when check given value is exists in array or not

let check = arr.map((e) => {
  return e == 7
})
console.log("🚀 ~ file: task3.js:126 ~ check ~ check:", check)

// ___________________________________________________________________________________
// task-3

// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']


let str = ['i', 'am', 'urvish']

//Revres a string by loop

let reversed_String = []
for (let i = str.length - 1; i >= 0; i--) {
  reversed_String.push(str[i]);
}
console.log("🚀 ~ file: task3.js:137 ~ reversed_String:", reversed_String)

// by map
let reversed_String_1 = str.map((str) => {
  return str; // or any logic you want to perform
}).reverse();

console.log("🚀 ~ file: task3.js:147 ~ str.forEach ~ reversed_String_1:", reversed_String_1)

// 2. want "i am urvish" without use join method


let ToString = str.toString().replace(/\,/g, " ")
console.log("🚀 ~ file: task4.js:18 ~ ToString:", ToString)
/*

___________________________________________________________________________________

task-4

['i','am', 'urvish'] ==> want ['hsivru','ma','i']
by use of loop
*/
let Name = ['i', 'am', 'urvish']
for (let i = Name.length - 1; i >= 0; i--) {
  let ame = Name[i].split(" ")
  console.log("🚀 ~ file: task3.js:183 ~ Name:", ame)
}
