/*
    Custom Main Js file Buld By JeanDoe
*/

/* Active Header when starts scroll on Top */

let header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    header.classList.toggle('active', scrollY > 0)
})




// /* Custom js slides */

// const initSlider = () =>{
//     const imageList = document.querySelector('.review .slides');
//     const slideButtons = document.querySelectorAll('.review button');
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

//     // Slides images according to the slide button clicks
//     slideButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const direction = button.id === 'prev-slide' ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
//         });
//     })

//     //Show or hide slide buttons based on scroll position
//     const handleSlideButtons = () =>{
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
//     }

//     // Call this functions when images list scrolls
//     imageList.addEventListener('scroll', () => {
//         handleSlideButtons();
//     });
// }

// window.addEventListener('resize', initSlider);
// window.addEventListener('load', initSlider);