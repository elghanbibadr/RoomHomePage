const navBg=document.querySelector('.nav__white-bg');
 const collapsibleLogo=document.querySelectorAll('.collapsibleLogo');

// functionalitty
export function showNav(navBg,collapsibleLogo){
    collapsibleLogo.forEach(logo=>{
       logo.addEventListener('click',()=>{
           navBg.classList.toggle('hideList');
           navBg.classList.add('transition');
       })
   })  
}
