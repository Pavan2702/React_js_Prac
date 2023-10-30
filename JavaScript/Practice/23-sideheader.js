// click on btn bar
let tbtn = document.querySelector(".bars")

// target menubar
let mnb = document.querySelector(".menubar")

let closebtn =document.querySelector("#cbtn")

tbtn.addEventListener("click", function(){
    mnb.classList.toggle("menu-tbar")
})

closebtn.addEventListener("click", function(){
    mnb.classList.remove("menu-tbar")
})