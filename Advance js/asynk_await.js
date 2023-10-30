function fun1(){
    return new Promise((resolve, reject) => {
        throw new Error("Data not found")
        setTimeout(() => {
            resolve("----->Resolve....")            
        }, 3000)   
    });
}

async function asyncAwait(params) {
    try {
        let x = await fun1()
        console.log("🚀 ~ file: asynk_await.js:8 ~ asyncAwait ~ x:", x)        
    } catch (error) {
        console.log("------->",error);
    }
}
asyncAwait()
