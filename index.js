let currentIndex4 = 0;

function moveCarousel4(direction) {
  const carouselInner4 = document.querySelector(".carousel4-inner");
  const items4 = document.querySelectorAll(".carousel4-item");
  const totalItems4 = items4.length;

  currentIndex4 += direction;

  if (currentIndex4 < 0) {
    currentIndex4 = totalItems4 - 1;
  } else if (currentIndex4 >= totalItems4) {
    currentIndex4 = 0;
  }

  const offset4 = -currentIndex4 * 100;
  carouselInner4.style.transform = `translateX(${offset4}%)`;

  updateDots4();
}

function autoMoveCarousel4() {
  if (window.innerWidth < 768) {
    moveCarousel4(1);
  }
}

function createDots4() {
  const items4 = document.querySelectorAll(".carousel4-item");
  items4.forEach((item, itemIndex) => {
    const carouselDots4 = item.querySelector(".carousel4-dots");

    // Clear existing dots
    carouselDots4.innerHTML = "";

    items4.forEach((_, dotIndex) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel4-dot");
      dot.addEventListener("click", () => moveToSlide4(dotIndex));
      carouselDots4.appendChild(dot);
    });
  });
}

function updateDots4() {
  const items4 = document.querySelectorAll(".carousel4-item");
  items4.forEach((item, itemIndex) => {
    const dots4 = item.querySelectorAll(".carousel4-dot");
    dots4.forEach((dot, dotIndex) => {
      if (dotIndex === currentIndex4) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
}

function moveToSlide4(index) {
  currentIndex4 = index;
  const offset4 = -currentIndex4 * 100;
  const carouselInner4 = document.querySelector(".carousel4-inner");
  carouselInner4.style.transform = `translateX(${offset4}%)`;
  updateDots4();
}

window.addEventListener("load", () => {
  createDots4();
  updateDots4();
  setInterval(autoMoveCarousel4, 5000);
});
