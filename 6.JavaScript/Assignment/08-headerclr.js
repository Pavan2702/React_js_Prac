let togglebt =  document.querySelector(".bars")
let nav = document.querySelector(".navbar")
let icon = document.querySelector(".fa-bars")

togglebt.addEventListener("click",function(){
    nav.classList.toggle("nav-bar")
    if(  nav.classList.contains("nav-bar")==true){
        icon.classList.add("fa-close")
        icon.classList.remove("fa-bars")
    }
    else{
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-close")
    }
})

window.addEventListener("scroll", function(){

let bgclr = document.getElementById("h1")

let scroll = window.scrollY

if(scroll>0){
    bgclr.classList.add("header-fix")
}
else{
    bgclr.classList.remove("header-fix")
}
})
