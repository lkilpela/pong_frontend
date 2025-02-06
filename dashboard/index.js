const menuBtn = document.querySelector('.menu-btn')
      backBtn = document.querySelector('.back-btn')
      menu = document.querySelector('nav');
      
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})

backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
})

// Optional, prefer put !important in css for easier fix
window.addEventListener('resize', event => {
    if(document.body.clientWidth >= 1000)
        menu.style.transform = 'translateX(0)'
    else
        menu.style.transform = 'translateX(-100%)'
})