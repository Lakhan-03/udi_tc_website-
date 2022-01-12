// Action button
// const figuButton = document.querySelector('.figu1');
// const body2 = document.querySelector('.body2');
// const body1 = document.querySelector('.body1');
// // const nextBtn = document.querySelector('.next');
// // const prevBtn = document.querySelector('.prev');
// // const slides = document.querySelectorAll('.slide');
// let isOpen = false;
// figuButton.addEventListener('click', () => {
//     body2.classList.toggle('opened');
//     if(isOpen) 
//     {

//         body1.style.maxWidth = '100vw';
        
//         isOpen = false;
//     }
//     else
//     {
//         body1.style.maxWidth = '60vw';
//         isOpen = true;
//     }
// });
const figbutton=document.querySelector('.figu1');
const body2=document.querySelector('.body2');
const body1=document.querySelector('.body1');
let isOpen=false;
figbutton.addEventListener('click',()=>{
    console.log("hello")
    if(isOpen){
        body2.style.minWidth='25vw';
        body1.style.width='75vw';
        isOpen=false;
    }
    else{
        body2.style.minWidth='0';
        body1.style.width='100vw';
        isOpen=true;
    }
});

// // Slider Component

// const nextSlide = (currentSlide) => {
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
//     })
// }
// //declarative  //0, 1, 2
// let currentSlide = 0;
// slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${index * 100}%)`;
// })

// nextBtn.addEventListener('click', () => {
//     if(currentSlide == slides.length - 1)
//     {
//         currentSlide = 0;
//     }
//     else
//     {
//         currentSlide++;
//     }
//     nextSlide(currentSlide);
//     console.log("hello");
// });