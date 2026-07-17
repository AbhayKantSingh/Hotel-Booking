const numTag = document.querySelector(".options ul li span");
const listElement = document.querySelector(".options ul li");
const hamburger  = document.getElementById("ham")
const options = document.querySelector(".options")
const navDown =document.querySelector(".nav-down")
const main = document.querySelector("main")

listElement.addEventListener("mouseenter",()=>{
    numTag.classList.remove("hide")
})

listElement.addEventListener("mouseleave",()=>{
    numTag.classList.add("hide")
})

hamburger.addEventListener("click",()=>{
    options.classList.toggle("hideOptions")
    navDown.classList.toggle("hideNav-down")
    main.classList.toggle("pos")
})