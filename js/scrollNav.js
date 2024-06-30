const navE1 = document.querySelector('.navbar');
const navLE1 = document.querySelector('.HnavL');


window.addEventListener('scroll',()=>{
    
    if(window.scrollY >= 112){

        navE1.classList.add('navbar_scrolled');

    }else if(window.scrollY < 112){

        navE1.classList.remove('navbar_scrolled');
        navLE1.style.color = '#fff';

    }

});