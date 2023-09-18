window.addEventListener("scroll", function(){
    var nav =this.document.querySelector('nav');
    nav.classList.toggle("sticky",window.scrollY >0)
})

// product Scroll

// const productMainContainer= [document.querySelectorAll('.product-main-container')];
// const nxtBtn= [document.querySelectorAll('.nxt-btn')];
// const preBtn= [document.querySelectorAll('.pre-btn')];

// productMainContainer.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientReact();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })

const proMC=document.querySelectorAll('.product-main-container');
const productContainer = proMC.querySelectorAll('.product-container')[0];
const arrowIcons = document.querySelectorAll(".btn button");

 let productContainerWidth = productContainer.clientWidth ;

 arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=>{
        proMC.scrollLeft += icon.id == "left" ? -productContainerWidth : productContainerWidth;
    });
 });


 const nav=document.querySelector('nav');
 const navUl=document.querySelector('nav ul');

//  window.addEventListener(function(){
//     window.
//  })

window.addEventListener("scroll", function () {
    if (window.scrollY >= 650) {
        nav.style.backgroundColor = "#ddd";
    } else {
        nav.style.backgroundColor = "";
    }

    // if(window.scrollY >=850) {
    //     up.classList.add("active");
    // } else {
    //     up.classList.remove("active");
    // }

    // if(window.scrollY >=850) up.classList.add("active");
    // else up.classList.remove("active");

    // condition ? true : false

    window.scrollY >=850 ? up.classList.add("active") : up.classList.remove("active");
    
})
