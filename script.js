let slideIndex = 0;
const intervalTime = 3000; // Change slide every 3 seconds
let slideInterval;

function startSlide() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, intervalTime);
}

function stopSlide() {
  clearInterval(slideInterval);
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slides img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  slides[slideIndex].classList.remove("hidden");
}

function changeSlide(n) {
  stopSlide(); // Stop the current interval
  slideIndex += n;
  showSlide(slideIndex);
  startSlide(); // Start a new interval after changing slide
}

startSlide(); // Start the slideshow initially
