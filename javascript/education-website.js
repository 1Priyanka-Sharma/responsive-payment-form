minbar= document.querySelector('.min-bar');
navbar= document.querySelector('.navbar');
navlist= document.querySelector('.nav-list');
rightnav= document.querySelector('.right-nav');


minbar.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-hidden');
    rightnav.classList.toggle('v-hidden');

})