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
function onBtnClickHandle1(){
  setTimeout(function(){ 
  window.location="https://drexel.edu/equity-inclusive-culture/diversity/anti-racism-task-force/"
}, 230); /* nEED TO ADJUST TIME BASED ON onclick animation */
}

function onBtnClickHandle2(){
  setTimeout(function(){ 
  window.location="https://drexel.edu/disability-resources/support-accommodations/employee-resources/"
}, 230);
}

function onBtnClickHandle3(){
  setTimeout(function(){ 
  window.location="https://www.census.gov/newsroom/stories/diversity-awareness.html"
}, 230); 
}

function onBtnClickHandle4(){
  setTimeout(function(){ 
  window.location="https://drexel.edu/equity-inclusive-culture/training/media/"
}, 230);
}


