// click on btn bar
let tbtn = document.querySelector(".bars")

// target menubar
let mnb = document.querySelector(".menubar")

let cbtn =document.querySelector(".closebtn")

tbtn.addEventListener("click", function(){
    mnb.classList.toggle("menutbar")
})

cbtn.addEventListener("click", function(){
    mnb.classList.toggle("menutbar")
})
let dark = document.querySelector(".fa-moon");
dark.addEventListener("click", function()
{
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode") == true){
        dark.classList.remove("fa-moon")
        dark.classList.add("fa-sun") 
    } else {
        dark.classList.remove("fa-sun")
        dark.classList.add("fa-moon")
    }
})