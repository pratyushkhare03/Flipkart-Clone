// let slideIndex = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//   });
//   slides[index].classList.add("active");
// }

// function nextSlide() {
//   slideIndex = (slideIndex + 1) % slides.length;
//   showSlide(slideIndex);
// }

// function prevSlide() {
//   slideIndex = (slideIndex - 1 + slides.length) % slides.length;
//   showSlide(slideIndex);
// }

// // Initial slide
// showSlide(slideIndex);

// // Auto slide every 3 seconds
// setInterval(nextSlide, 3000);


let slideIndex = 0;
const slider = document.getElementById("slideid");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Auto-slide
setInterval(() => {
  nextSlide();
}, 3000);

