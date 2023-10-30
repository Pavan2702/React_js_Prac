let PROMISE = new Promise((resolve,reject) => {


    if (true) {
        setTimeout(() => {
            resolve({name:"Pavan"})
        }, 3000);
    }
    else {
        reject("Errpr");
    }
});
PROMISE.then((name) => {
    console.log("Name-->", name);
    return { ...name, surname: "Patil" }
})
.then((Surname) => {
    setTimeout(() => {
        console.log("Surname:- ", Surname)
    }, 3000)
})
.catch((err) => {
    console.log("err--->", err);
});