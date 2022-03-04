// >> The Navigation's Functions:

// ------ Open and close the nav menu Function: 

let others = document.querySelector('.other_links');
let megamenu = document.querySelector('.megamenu');
// let line1 = document.querySelector('.line1');
// let line2 = document.querySelector('.line2');
// let line3 = document.querySelector('.line3');
let open = false;

others.addEventListener("click", function(){
  if (open === true) {
    megamenu.style.display = "none";
    open = false;
  } else {
    megamenu.style.display = "flex";
    // line1.style.transform = translateY("8px"), rotate ("45deg");
    // line1.style.opacity = 0;
    // line1.style.transform = translateY("-8px"), rotate ("-45deg");
    open = true;
  }
}); 






// ------- Search field (input) Function: 

// let search_icon = document.querySelector('#search-icon');
// let input = document.querySelector('#search-form');
// let search = false;

// search_icon.addEventListener("click", function(){
//   if (search === true) {
//       input.style.display = "none";
//       open = false;
//   } else {
//       input.style.display = "block";
//       open = true;
//   }
// });






// ------- nav active link function:

// --------- scroll to the top Function:

let scrollUp = document.querySelector('.scroll-up');

window.onscroll = function () {
    if (window.scrollY >= 600 ) {
      scrollUp.style.display = "block";
    }else {
      scrollUp.style.display = "none";
    }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
};



// Testing the files: 
console.log("Hello from js files");

//# sourceMappingURL=main.js.map
