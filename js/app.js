const navslide = ()=>{
    const burger = document.querySelector(".burger")
    const cancelBtn = document.querySelector(".cancel-btn")
    const nav = document.querySelector(".nav__list")
    const body = document.querySelector("body")

    burger.addEventListener("click",()=>{
        nav.classList.add("nav-active")
        body.classList.add("disabled")
        burger.classList.add("hide")
    })

    cancelBtn.addEventListener("click",()=>{
        nav.classList.remove("nav-active")
        body.classList.remove("disabled")
        burger.classList.remove("hide")
    })
}

navslide()

const sticky = () =>{
    window.addEventListener("scroll", ()=>{
        var header = document.querySelector(".header")
        header.classList.toggle("sticky", window.scrollY > 0)
    })
}

sticky()