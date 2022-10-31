/* for slides */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*---On Click button animation---
const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	this.classList.toggle('active');
}

function addClass() {
	this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);
----------------------*/


/* FOR LOADING PAGE DELAY */

      /*template for script*/
        // function onBtnClickHandle(){
        //   setTimeout(function(){ 
        //   window.location=""
        // }, 1000);
        // }
      /*-------------------*/


function onBtnClickHandle1(){
  setTimeout( function() { 
  window.open ("https://drexel.edu/equity-inclusive-culture/diversity/anti-racism-task-force/", '_blank');
}, 1000); /* nEED TO ADJUST TIME BASED ON onclick animation */
}

function onBtnClickHandle2(){
  setTimeout( function() { 
  window.open ("https://drexel.edu/disability-resources/support-accommodations/employee-resources/", '_blank');
}, 1000); /* nEED TO ADJUST TIME BASED ON onclick animation */
}

function onBtnClickHandle3(){
  setTimeout( function() { 
  window.open ("https://www.census.gov/newsroom/stories/diversity-awareness.html", '_blank');
}, 1000); /* nEED TO ADJUST TIME BASED ON onclick animation */
}

function onBtnClickHandle4(){
  setTimeout( function() { 
  window.open ("https://drexel.edu/equity-inclusive-culture/training/media/", '_blank');
}, 1000); /* nEED TO ADJUST TIME BASED ON onclick animation */
}



/* For button Load animation */

const btn = document.querySelector(".button");

btn.classList.add("button--loading");
btn.classList.remove("button--loading");
/*--------------------------------*/


