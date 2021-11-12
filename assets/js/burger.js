// $(".burger").click(function () {
//   $(this).toggleClass('burger-clicked');
//   $('.mask').toggleClass('mob-active');
//   $('.nav-mob').toggleClass('mob-active');
//   $(document.body).toggleClass('oh');
// });

// let mask = document.querySelector('.body-mask');
// let burger = document.querySelector('.burger');
// let nav = document.querySelector('.nav-mob');
// let menuFixed = document.querySelector('.nav-fixed');
// let menu = document.querySelector('.nav');
// let links = document.querySelectorAll('.nav-link');
// let mobLinks = document.querySelectorAll('.nav-fixed-link');
// let introBtn = document.querySelectorAll('.slider-btn a');
// let aboutBtn = document.querySelector('.about-btn a');
// let dleftBtn = document.querySelector('.duplex-left-btn a');
// let drightBtn = document.querySelector('.duplex-right-btn a');
// let tabBtn = document.querySelector('.portfolio-btn a');

// for(let i = 0; i < introBtn.length; i++){
//   introBtn[i].addEventListener('click', function(e){

//     // console.log(e.target);
//     e.preventDefault();
//     scrollToTarget(e.target.hash);
//   })
// }

// aboutBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// tabBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// dleftBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

// drightBtn.addEventListener('click', function(e){
  
//   e.preventDefault();
//   scrollToTarget(e.target.hash);
// })

menuFixed.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-fixed-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
    if(mask.classList.contains('mob-active')){
      mask.classList.remove('mob-active');
      document.body.classList.remove('oh');
      burger.classList.remove('burger-clicked');
      nav.classList.remove('mob-active');
    }
  }
})

menu.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }
})

function scrollToTarget(id){
  let target = document.querySelector(id);
  let pos = target.offsetTop;

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}


// mediaBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   scrollToTarget(mediaBtn.hash);
// })

// let mobSub = document.querySelector('.nav-fixed-pos');
// let mobSubTarget = document.querySelector('.nav-fixed-sub');

// mobSub.addEventListener('click', function(e){

//   // e.preventDefault();

//   if(e.target.parentNode.classList.contains('nav-fixed-pos')){

//     mobSubTarget.classList.toggle('sub-menu-show');
//   }
// })