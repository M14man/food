    // Slider


    const sliderContent = document.querySelector('.offer__slider'),
          slides = sliderContent.querySelectorAll('.offer__slide'),
          nextSlide = sliderContent.querySelector('.offer__slider-next'),
          prevSlide = sliderContent.querySelector('.offer__slider-prev'),
          currentSlide = document.querySelector('#current'),
          totalSlide = document.querySelector('#total');

    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        totalSlide.textContent = `0${slides.length}`;
    } else {
        totalSlide.textContent = slides.length;
    }


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex; 
        }
        slides.forEach(item => {
            item.classList.add('hiden'); 
        });
        slides[slideIndex - 1].classList.remove('hiden');
        slides[slideIndex - 1].classList.add('fade');
    }

    function clickSlide(n) {
        showSlides(slideIndex += n);
    }

    nextSlide.addEventListener('click', () => {
        clickSlide(1);
    });

    prevSlide.addEventListener('click', () => {
        clickSlide(-1);
    });