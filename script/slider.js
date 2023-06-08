const slider = () => {
  const slide = document.querySelectorAll(".slider-item"),
    slider = document.querySelector(".main-slider");
  let input = document.querySelector(".current-value");

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    input.value = currentSlide + 1;
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    input.value = currentSlide + 1;
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, "active-slide");

    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide, "active-slide");
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;

    prevSlide(slide, currentSlide, "active-slide");

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, "active-slide");
  });

  slider.addEventListener("mouseover", (event) => {
    if (event.target.matches(".slider-item") || event.target.matches(".arrow")) {
      stopSlide();
    }
  });

  slider.addEventListener("mouseout", (event) => {
    if (event.target.matches(".slider-item") || event.target.matches(".arrow")) {
      startSlide();
    }
  });

  startSlide(1500);
};

slider();
