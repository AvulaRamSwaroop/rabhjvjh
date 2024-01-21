const cartbutton = document.querySelector('.addtocart');
let cartnumber = document.querySelector('.cart-number');

 let addart  = document.querySelector
 ('.added')
 cartbutton.addEventListener('click',() => {
 
 cartnumber.innerHTML++;
 cartbutton.style.display = "none"
 addart.style.visibility = "visible";
 addart.innerHTML="Added"
 
});
 
let arrowback =document.querySelector('.back-page ');

arrowback.addEventListener('click',() => {
   window.location.href="art.html"
})
let logojs = document.querySelector(".left-section");

logojs.addEventListener('click',() => {
 window.location.href = 'index.html'
}
)

let loginmain =document.querySelector('.login-button');

loginmain.addEventListener('click',() => {
 window.location.href="login.html"
})

 
