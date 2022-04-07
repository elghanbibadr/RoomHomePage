// nav.js
const navBg=document.querySelector('.nav__white-bg');
 const collapsibleLogo=document.querySelectorAll('.collapsibleLogo');

// functionalitty

    collapsibleLogo.forEach(logo=>{
       logo.addEventListener('click',()=>{
           navBg.classList.toggle('hideList');
           navBg.classList.add('transition');
       })
   })  

// hero.js
let contentVisible=document.querySelectorAll('.content');
const nav=document.querySelector('.nav');
const previousArrow=document.querySelector('.previous-arrow');
const nextArrow=document.querySelector('.next-arrow');
// functionality
function ChangeBg(){
nav.classList=['nav'];
nav.classList.add(`changeBg${count}`);

}
function ChangeContent(){
    contentVisible.forEach(element=>element.classList.add('hideContent'));
    contentVisible[count-1].classList.remove('hideContent');
    console.log(count,contentVisible);
}



let count=1;
nextArrow.addEventListener('click',()=>{
     if (count==3) {
         count=1;
     }
     else {
         count++;
     } 
    ChangeBg();
ChangeContent();

})
// next arrow
previousArrow.addEventListener('click',()=>{
    if (count==1) {
        count=3;
    }
    else {
        count--;
    } 
    ChangeBg();
    ChangeContent();

})