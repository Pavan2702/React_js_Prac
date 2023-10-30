function FistName(call) {
    setTimeout(()=>{
        console.log("Pavan")
    call()

    },2000)
}
function LastName() {
    console.log("Patil")
}
FistName(LastName)
