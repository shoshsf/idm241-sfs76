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

/*---On Click button automated---
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


// function onBtnClickHandle1(){
//   setTimeout( function() { 
//   window.open ("https://drexel.edu/equity-inclusive-culture/diversity/anti-racism-task-force/", '_blank');
// }, 2000); /* nEED TO ADJUST TIME BASED ON onclick animation */
// }

// function onBtnClickHandle2(){
//   setTimeout( function() { 
//   window.open ("https://drexel.edu/disability-resources/support-accommodations/employee-resources/", '_blank');
// }, 2000); /* nEED TO ADJUST TIME BASED ON onclick animation */
// }

// function onBtnClickHandle3(){
//   setTimeout( function() { 
//   window.open ("https://www.census.gov/newsroom/stories/diversity-awareness.html", '_blank');
// }, 2000); /* nEED TO ADJUST TIME BASED ON onclick animation */
// }

// function onBtnClickHandle4(){
//   setTimeout( function() { 
//   window.open ("https://drexel.edu/equity-inclusive-culture/training/media/", '_blank');
// }, 2000); /* nEED TO ADJUST TIME BASED ON onclick animation */
// }



// /* For button Load animation */

// const btn = document.querySelector(".button");

// btn.classList.add("button--loading");
// btn.classList.remove("button--loading");
// /*--------------------------------*/

// ---------------Loading Spinner----------------------
      // selecting the button and user feedback box
      const button1 = document.querySelector('#js-start-anim1')
      const userFeedback1 = document.querySelector('.loading1')

      // the CSS animation end event listener
      userFeedback1.addEventListener('animationend', () => {
        // userFeedback.textContent = ' Learn More'
        userFeedback1.classList.remove('loading--anim1')
        // userFeedback.classList.add('user-feedback--anim-done')
        window.open ("https://drexel.edu/equity-inclusive-culture/diversity/anti-racism-task-force/", '_blank', 2000)
      })

      // the button click adds / starts the CSS animation
      button1.addEventListener('click', () => {
        // userFeedback.classList.add('button--loading');
        userFeedback1.classList.add('loading--anim1');
      })


      // -------------------------------------------


      // selecting the button and user feedback box
      const button2 = document.querySelector('#js-start-anim2')
      const userFeedback2 = document.querySelector('.loading2')

      // the CSS animation end event listener
      userFeedback2.addEventListener('animationend', () => {
        // userFeedback.textContent = ' Learn More'
        userFeedback2.classList.remove('loading--anim2');
        // userFeedback.classList.add('user-feedback--anim-done')
        window.open ("https://drexel.edu/disability-resources/support-accommodations/employee-resources/", '_blank', 2000);
      })

      // the button click adds / starts the CSS animation
      button2.addEventListener('click', () => {
        // userFeedback.classList.add('button--loading');
        userFeedback2.classList.add('loading--anim2');
      })


      // -------------------------------------------


      // selecting the button and user feedback box
      const button3 = document.querySelector('#js-start-anim3');
      const userFeedback3 = document.querySelector('.loading3');

      // the CSS animation end event listener
      userFeedback3.addEventListener('animationend', () => {
        // userFeedback.textContent = ' Learn More'
        userFeedback3.classList.remove('loading--anim3');
        // userFeedback.classList.add('user-feedback--anim-done')
        window.open ("https://www.census.gov/newsroom/stories/diversity-awareness.html", '_blank', 2000);
      });

      // the button click adds / starts the CSS animation
      button3.addEventListener('click', () => {
        // userFeedback.classList.add('button--loading');
        userFeedback3.classList.add('loading--anim3');
      });


      // -------------------------------------------


      // selecting the button and user feedback box
      const button4 = document.querySelector('#js-start-anim4');
      const userFeedback4 = document.querySelector('.loading4');

      // the CSS animation end event listener
      userFeedback4.addEventListener('animationend', () => {
        // userFeedback.textContent = ' Learn More'
        userFeedback4.classList.remove('loading--anim4');
        // userFeedback.classList.add('user-feedback--anim-done')
      });

      // the button click adds / starts the CSS animation
      button4.addEventListener('click', () => {
        // userFeedback.classList.add('button--loading');
        userFeedback4.classList.add('loading--anim4');
        window.open ("https://drexel.edu/equity-inclusive-culture/training/media/", '_blank', 2000);
      });

//---------------Loading Spinner End----------------------