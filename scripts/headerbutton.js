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

 loginmain.a*/
