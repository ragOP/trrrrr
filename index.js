let currentIndex5 = 0;

function moveCarousel5() {
  const carouselInner5 = document.querySelector(".carousel5-inner");
  const items5 = document.querySelectorAll(".main-header");
  const totalItems5 = items5.length;

  currentIndex5++;

  if (currentIndex5 >= totalItems5) {
    currentIndex5 = 0;
  }

  const offset5 = -currentIndex5 * 100;
  carouselInner5.style.transform = `translateX(${offset5}%)`;
}

// function autoMoveCarousel5() {
//   setInterval(moveCarousel5, 5000);
// }

window.addEventListener("load", () => {
  setInterval(moveCarousel5, 5000);
});

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

let currentIndex2 = 0;

function moveCarousel2(direction) {
  const carouselInner2 = document.querySelector(".carousel2-inner");
  const items2 = document.querySelectorAll(".leadershipn-bottom-single");
  const totalItems2 = items2.length;

  currentIndex2 += direction;

  if (currentIndex2 < 0) {
    currentIndex2 = totalItems2 - 1;
  } else if (currentIndex2 >= totalItems2) {
    currentIndex2 = 0;
  }

  const offset2 = -currentIndex2 * 80;
  carouselInner2.style.transform = `translateX(${offset2}%)`;
}

function resetCarousel2() {
  currentIndex2 = 0;
  const carouselInner2 = document.querySelector(".carousel2-inner");
  carouselInner2.style.transform = `translateX(0%)`;
  updateDots2();
}

function autoMoveCarousel2() {
  if (window.innerWidth < 850) {
    moveCarousel2(1);
  } else {
    resetCarousel2();
  }
}

window.addEventListener("load", () => {
  setInterval(autoMoveCarousel2, 8000);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    resetCarousel2();
  }
});

let currentIndex3 = 0;

function moveCarousel3(direction) {
  const carouselInner3 = document.querySelector(".carousel3-inner");
  const items3 = document.querySelectorAll(".leadership-bottom-single");
  const totalItems3 = items3.length;

  currentIndex3 += direction;

  if (currentIndex3 < 0) {
    currentIndex3 = totalItems3 - 1;
  } else if (currentIndex3 >= totalItems3) {
    currentIndex3 = 0;
  }

  const offset3 = -currentIndex3 * 80;
  carouselInner3.style.transform = `translateX(${offset3}%)`;
}

function resetCarousel3() {
  currentIndex3 = 0;
  const carouselInner3 = document.querySelector(".carousel3-inner");
  carouselInner3.style.transform = `translateX(0%)`;
  updateDots3();
}

function autoMoveCarousel3() {
  if (window.innerWidth < 850) {
    moveCarousel3(1);
  } else {
    resetCarousel3();
  }
}

window.addEventListener("load", () => {
  setInterval(autoMoveCarousel3, 8000);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    resetCarousel3();
  }
});
