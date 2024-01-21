const cartbutton = document.querySelector('.addtocart');

let cartnumber = document.querySelector('.cart-number');

console.log(JSON.parse(localStorage.getItem('messge')));

let nftcurrent = document.querySelector('.club');

nfname = nftcurrent.innerHTML;

 let add = document.querySelector('.added')
cartbutton.addEventListener('click',() => {
 cartbutton.innerHTML = "Added"
cartnumber.innerHTML++;

localStorage.setItem('messge',JSON.stringify(cartnumber.innerHTML));
 cartbutton.style.display = "none";
  add.innerHTML = "Added"
 add.style.visibility= "visible";
 alert(`${nfname} Nft is added to your cart`)
});

/*
cartbutton.addEventListener('onmouseover',() => {
 
 cartnumber.innerHTML-- ;
   cartbutton.innerHTML = "Add to cart";
   cartbutton.removeAttribute("class",'addtocart');
   //cartbutton.classList.remove('addtocart')
   cartbutton.setAttribute("class",'cartsaved')
  });*/
let arrowback =document.querySelector('.back-page ');

arrowback.addEventListener('click',() => {
   window.location.href="index.html"
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

 
document.querySelector('.create').addEventListener('click',() => {
  window.location.href="mintnft.html"
})