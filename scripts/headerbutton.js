function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

/*
let art =document.querySelector('.js-button-2');
art.addEventListener("click",() => {
   mainpage1.innerHTML = `      
   <div class="notablecollections art">
     <div class="Notable-Collections  js-art
     ">
       Trending in Art
     </div>

     <div class="notablecollections-nfts">
       <div class="notablecollections-nft">
         <div class="image-container">
           <img class="image-ape" src="art/ape.png">
         </div>
         <div class="nft-description">
            <p class="FIFA">Ape Collection</p>
            <img class="bluetick" src="symbols/bluetick.png">
           <div class="nft-stats">
             <div class="nft-floor" >
               <p class="Floor">Floor</p>
               <p class="MATIC">0.002 ETH</p>
             </div>
             <div class="nft-volume ">
               <p class="Total-Volume">
                 Total Volume
               </p>
               <p class="ETH">
                 2 ETH
               </p>
             </div>
           </div>
         </div>
         <button class="addbuttonhome">Add to Cart</button>
       </div>



       <div class="notablecollections-nft">
         <div class="image-container">
           <img class="image" src="categories/art.png">
         </div>
         <div class="nft-description">
            <p class="FIFA">Art side</p>
            <img class="bluetick" src="symbols/bluetick.png">
           <div class="nft-stats">
             <div class="nft-floor" >
               <p class="Floor">Floor</p>
               <p class="MATIC">11.45 ETH</p>
             </div>
             <div class="nft-volume ">
               <p class="Total-Volume">
                 Total Volume
               </p>
               <p class="ETH">
                 243K ETH
               </p>
             </div>
           </div>
         </div>
         <button class="addbuttonhome">Add to Cart</button>
       </div>



       <div class="notablecollections-nft">
         <div class="image-container">
           <img class="image" src="Notable-collections/letters.png">
         </div>
         <div class="nft-description">
            <p class="FIFA">Letters</p>
            <img class="bluetick" src="symbols/bluetick.png">
           <div class="nft-stats">
             <div class="nft-floor" >
               <p class="Floor">Floor</p>
               <p class="MATIC">0.31 ETH</p>
             </div>
             <div class="nft-volume ">
               <p class="Total-Volume">
                 Total Volume
               </p>
               <p class="ETH">
                 3,405 ETH
               </p>
             </div>
           </div>
         </div>
         <button class="addbuttonhome">Add to Cart</button>
       </div>





       <div class="notablecollections-nft">
         <div class="image-container">
           <img class="image" src="Notable-collections/ducks.png">
         </div>
         <div class="nft-description">
            <p class="FIFA">SupDucks</p>
            <img class="bluetick" src="symbols/bluetick.png">
           <div class="nft-stats">
             <div class="nft-floor" >
               <p class="Floor">Floor</p>
               <p class="MATIC">0.08 ETH</p>
             </div>
             <div class="nft-volume ">
               <p class="Total-Volume">
                 Total Volume
               </p>
               <p class="ETH">
                 25K ETH
               </p>
             </div>
           </div>
         </div>
         <button class="addbuttonhome">Add to Cart</button>
       </div>



       <div class="notablecollections-nft">
         <div class="image-container">
           <img class="image" src="Notable-collections/homes.png">
         </div>
         <div class="nft-description">
            <p class="FIFA">ZTX homes</p>
            <img class="bluetick" src="symbols/bluetick.png">
           <div class="nft-stats">
             <div class="nft-floor" >
               <p class="Floor">Floor</p>
               <p class="MATIC">0.44 ETH</p>
             </div>
             <div class="nft-volume ">
               <p class="Total-Volume">
                 Total Volume
               </p>
               <p class="ETH">
                 891 ETH
               </p>
             </div>
           </div>
         </div>
         <button class="addbuttonhome">Add to Cart</button>
       </div>



     </div>

     
      
     
   </div>`
})




let gaming  =document.querySelector('.js-button-3');
gaming.addEventListener("click",() => {
   mainpage1.innerHTML = `  <div class="notablecollections gaming">
   <div class="Notable-Collections
   ">
     Trending in Gaming
   </div>
     
   <div class="notablecollections-nfts">
     <div class="notablecollections-nft">
       <div class="image-container">
         <img class="image" src="gaming/beacon.png">
       </div>
       <div class="nft-description">
          <p class="FIFA">Beacon Beast</p>
          <img class="bluetick" src="symbols/bluetick.png">
         <div class="nft-stats">
           <div class="nft-floor" >
             <p class="Floor">Floor</p>
             <p class="MATIC">30 ETH</p>
           </div>
           <div class="nft-volume ">
             <p class="Total-Volume">
               Total Volume
             </p>
             <p class="ETH">
               16K ETH
             </p>
           </div>
         </div>
       </div>
       <button class="addbuttonhome">Add to Cart</button>
     </div>



     <div class="notablecollections-nft">
       <div class="image-container">
         <img class="image" src="gaming/xp.png">
       </div>
       <div class="nft-description">
          <p class="FIFA">XP overpower</p>
          <img class="bluetick" src="symbols/bluetick.png">
         <div class="nft-stats">
           <div class="nft-floor" >
             <p class="Floor">Floor</p>
             <p class="MATIC">16 ETH</p>
           </div>
           <div class="nft-volume ">
             <p class="Total-Volume">
               Total Volume
             </p>
             <p class="ETH">
               200K ETH
             </p>
           </div>
         </div>
       </div>
       <button class="addbuttonhome">Add to Cart</button>
     </div>



     <div class="notablecollections-nft">
       <div class="image-container">
         <img class="image" src="gaming/dgp.png">
       </div>
       <div class="nft-description">
          <p class="FIFA">DGP worldPlaza</p>
          <img class="bluetick" src="symbols/bluetick.png">
         <div class="nft-stats">
           <div class="nft-floor" >
             <p class="Floor">Floor</p>
             <p class="MATIC">0.9 ETH</p>
           </div>
           <div class="nft-volume ">
             <p class="Total-Volume">
               Total Volume
             </p>
             <p class="ETH">
               3K ETH
             </p>
           </div>
         </div>
       </div>
       <button class="addbuttonhome">Add to Cart</button>
     </div>





     <div class="notablecollections-nft">
       <div class="image-container">
         <img class="image" src="gaming/azra.png">
       </div>
       <div class="nft-description">
          <p class="FIFA">AZRA </p>
          <img class="bluetick" src="symbols/bluetick.png">
         <div class="nft-stats">
           <div class="nft-floor" >
             <p class="Floor">Floor</p>
             <p class="MATIC">10 ETH</p>
           </div>
           <div class="nft-volume ">
             <p class="Total-Volume">
               Total Volume
             </p>
             <p class="ETH">
               20K ETH
             </p>
           </div>
         </div>
       </div>
       <button class="addbuttonhome">Add to Cart</button>
     </div>



     <div class="notablecollections-nft">
       <div class="image-container">
         <img class="image" src="gaming/hero.png">
       </div>
       <div class="nft-description">
          <p class="FIFA">The METAHEROES</p>
          <img class="bluetick" src="symbols/bluetick.png">
         <div class="nft-stats">
           <div class="nft-floor" >
             <p class="Floor">Floor</p>
             <p class="MATIC">0.5 ETH</p>
           </div>
           <div class="nft-volume ">
             <p class="Total-Volume">
               Total Volume
             </p>
             <p class="ETH">
               80K ETH
             </p>
           </div>
         </div>
       </div>
       <button class="addbuttonhome">Add to Cart</button>
     </div>



   </div>

   
    
   
 </div>`
})*/

