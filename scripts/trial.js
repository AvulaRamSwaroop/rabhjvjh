let cartquantity = document.querySelector(".cart-number");
 
let addbutton1= document.querySelector(".js-add-1");
 addbutton1.addEventListener("click",() => {
    cartquantity.innerHTML++;
   });


let addbutton4= document.querySelector(".js-add-4");
 addbutton4.addEventListener("click",() => {
    cartquantity.innerHTML++;
   });


   let addbutton2= document.querySelector(".js-add-2");
 addbutton2.addEventListener("click",() => {
    cartquantity.innerHTML++;
   });

   let addbutton3= document.querySelector(".js-add-3");
 addbutton3.addEventListener("click",() => {
    cartquantity.innerHTML++;
   });
   let addbutton5= document.querySelector(".js-add-5");
 addbutton5.addEventListener("click",() => {
    cartquantity.innerHTML++;
   });

let  html = function page(image,club,owner,categor){
let   page2html =  
   ` 
  <div class="nft-listing">

 <div class="listing-top">

     <div class="listing-left-top"> 
       <img src="Notable-collections/${image}.png">
     </div>

     <div class="listing-right-top">
       <div class="listing-right-top-top">
         <p class="club">${club}</p>
         <p class="owner">Owned by <span>${owner}</span></p>
         <p class="views">Views :  30K</p>
         <p class="type">Category : ${categor}</p>
       </div>
       <div class="listing-right-top-bottom">
         <p class="sales">Sale ends on :</p>
         <p class="time">11 February 2024 at 8:50</p>
         <p class="price">Current Price :</p>
         <p class="amount"><span>0.2 ETH</span>
         $521.21</p>
    
         <button class="addtocart">Add To Cart</button>
       </div>

     </div>
 </div>

 <div class="listing-bottom">
   <h1>Listing : </h1>
     <div class="listing-bottom-top">
       <div>Price</div>
       <div>USD Price</div>
       <div>Quantity</div>
       <div>Expiration</div>
       <div>From</div>
     </div>

    <div class="listing-bottom-bottom-1">
       <div>0.2 ETH</div>
       <div> $521.21</div>
       <div> 1 piece</div>
       <div>in 7 days</div>
       <div>daniel.eth</div>
    </div>
    <div class="listing-bottom-bottom-2">
     <div>0.1 ETH</div>
     <div> $262.21</div>
     <div> 1 piece</div>
     <div>in 10 days</div>
     <div>a3.matic</div>
  </div>
 
  <div class="listing-bottom-bottom-2">
   <div>0.08 ETH</div>
   <div> $202.21</div>
   <div> 1 piece</div>
   <div>in 15 days</div>
   <div> abcs.has</div>
</div>
 </div>




</div>`;
return page2html;

let button = document.getElementsByClassName("addtocart")[0]
console.log(button)
}

html();

  let md1 =document.querySelector(".md1");


//  let mainpage1 = document.querySelector(".main-page-1");
  //let mainpage2 = document.querySelector(".main-page-2");


  let backdiv = document.querySelector(".back-div");



  md1.addEventListener("click",() => {
   mainpage2.innerHTML+=html("fifa","Football-club","daniel.eth","Memberships");
   mainpage1.innerHTML = '';
     mainpage1.classList.remove("nft-grid");
     mainpage2.classList.add("nft-listing");
     backdiv.innerHTML = `<img class="back-arrow js-back" src="back.png">`;
  })
 

  let md2 =document.querySelector(".md2");


  md2.addEventListener("click",() => {
   mainpage2.innerHTML+=html("penguins","Penguin supers","Pengo.matic","Art");
   mainpage1.innerHTML = '';
     mainpage1.classList.remove("nft-grid");
     mainpage2.classList.add("nft-listing");
     backdiv.innerHTML = `<img class="back-arrow js-back" src="back.png">`;
  })
 
  let md3 =document.querySelector(".md3");
  md3.addEventListener("click",() => {
   mainpage2.innerHTML+=html("letters","Pen power","Faraday.eth","Music");
   mainpage1.innerHTML = '';
     mainpage1.classList.remove("nft-grid");
     mainpage2.classList.add("nft-listing");
     backdiv.innerHTML = `<img class="back-arrow js-back" src="back.png">`;
  })
 
  let md4 =document.querySelector(".md4");
  md4.addEventListener("click",() => {
   mainpage2.innerHTML+=html("ducks","Duck Heroes","kumar.123","Gaming");
   mainpage1.innerHTML = '';
     mainpage1.classList.remove("nft-grid");
     mainpage2.classList.add("nft-listing");
     backdiv.innerHTML = `<img class="back-arrow js-back" src="back.png">`;
  })
 
  let md5 =document.querySelector(".md5");
  md5.addEventListener("click",() => {
   mainpage2.innerHTML+=html("homes","ZtX club","abcd.100","PFP");
   mainpage1.innerHTML = '';
     mainpage1.classList.remove("nft-grid");
     mainpage2.classList.add("nft-listing");
 
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


  
