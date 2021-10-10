let allImages = ["https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"];

let landinPage = document.querySelector(".landing-page");
let next = document.querySelector(".right");
let pre = document.querySelector(".left");
let index = 0;
// console.log(landinPage)
// console.log(next)
// console.log(pre)

next.onclick = nextImage;

function nextImage() {
    for (let i = 0; i < allImages.length; i++) {
        let randomImages = Math.floor(Math.random() * allImages.length);
        landinPage.style.backgroundImage = `url(${allImages[randomImages]})`

        // console.log(randomImages)
        // console.log(allImages[randomImages])
    }
}

setInterval(nextImage, 20000)


pre.onclick = prevImage;

function prevImage() {
    
        let randomImages = Math.floor(Math.random() * allImages.length);
        landinPage.style.backgroundImage = `url(${allImages[randomImages]})`

        // console.log(randomImages)
        // console.log(allImages[randomImages])
    
}
setInterval(prevImage, 20000);

// body

// let body = document.querySelector("body");

// window.onload = function (){
//     body.classList.add("active")
// }

// Show navBar 
let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector(".linkes");

hamburger.onclick = showNav;
function showNav(){
     nav.classList.toggle("down");
    
}

// loading page
window.onload = function (){



 let lod =  setTimeout(function(){
   let loadPage = document.querySelector(".loading");
       loadPage.style.display = "flex"  
   },0)


    // clearTimeout(lod)
  setTimeout(function(){
   let loadPage = document.querySelector(".loading");
       loadPage.style.display = "none"  
   },2700)
}

