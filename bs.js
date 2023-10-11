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


 const toggleBtn=document.querySelector('.toogle-btn'),
        navUl=document.querySelector('nav ul'),
        toggleBtnIcon=document.querySelector('.toogle-btn i');
         
        toggleBtn.onclick=function(){
            navUl.classList.toggle('open');
            const isOpen=navUl.classList.contains('open');

            toggleBtnIcon.classList= isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }