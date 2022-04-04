const navBg=document.querySelector('.nav__white-bg');
const collapsibleLogo=document.querySelectorAll('.collapsibleLogo');

// functionalitty
collapsibleLogo.forEach(logo=>{
    logo.addEventListener('click',()=>{
        navBg.classList.toggle('hideList');
        navBg.classList.add('transition');
    })
})