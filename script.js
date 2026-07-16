const numTag = document.querySelector(".options ul li span");
const listElement = document.querySelector(".options ul li");

listElement.addEventListener("mouseenter",()=>{
    numTag.classList.remove("hide")
})

listElement.addEventListener("mouseleave",()=>{
    numTag.classList.add("hide")
})