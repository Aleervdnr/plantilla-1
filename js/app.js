const navslide = ()=>{
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav__list")

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
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