const navslide = ()=>{
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav__list")
    const body = document.querySelector("body")

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
        body.classList.toggle("disabled")
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