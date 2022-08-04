const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let acitveSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    acitveSlideIndex++;
    if (acitveSlideIndex > slidesLength - 1) {
      acitveSlideIndex = 0;
    }
  } else if (direction === "down") {
    acitveSlideIndex--;
    if (acitveSlideIndex < 0) {
      acitveSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    acitveSlideIndex * sliderHeight
  }px)`;

  slideLeft.style.transform = `translateY(${
    acitveSlideIndex * sliderHeight
  }px)`;
};
