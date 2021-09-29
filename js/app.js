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

// nav section active on scroll

const sections = document.querySelectorAll("section")
const navlink = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", ()=>{
  let current = ""
  sections.forEach( section =>{
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if(scrollY >= sectionTop - sectionHeight/3){
      current = section.getAttribute("id")
    }
  })

  navlink.forEach( a =>{
    a.classList.remove("active")
    if(a.classList.contains(current+"__link")){
      a.classList.add("active")
    }
  })
})









const sticky = () =>{
    window.addEventListener("scroll", ()=>{
        var header = document.querySelector(".header")
        header.classList.toggle("sticky", window.scrollY > 0)
    })
}

sticky()

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const body = document.querySelector("body")
const burger = document.querySelector(".burger")

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.classList.add("disabled")
  burger.classList.add("hide")
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.classList.add("disabled")
    burger.classList.add("hide")
  }

  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.classList.add("disabled")
    burger.classList.add("hide")
  }

  img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    body.classList.add("disabled")
    burger.classList.add("hide")
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("disabled")
  burger.classList.remove("hide")
}