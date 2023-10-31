/*
let promise = new Promise((resolve,reject)=>{
    let x= 5;
    if(x>=6){
        resolve("----->it's True")
    }
    else{
        reject("----->it's False")
    }
})
promise.then((res)=>{
    console.log("Responce.....",res)
}).catch((err)=>{
    console.log("Error",err)
})
*/
let PROMISE = new Promise((resolve, rejct) => {
    let Arr = [1, 2, 3, 4, 5, 6]
    let x = Arr.find((e) => {
        return e > 3
    })
    if (x) {
        if(x===5){
        resolve({massage:"X is Five",x})
        }
        else{
            resolve({massage:"X is ",x})
        }
    }
    else {
        rejct({massage:"False---->",x})
    }
})
PROMISE.then((res) => {
    console.log("Responce.....", res);
}).catch((err) => {
    console.log("Error", err)
})