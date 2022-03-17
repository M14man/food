    // Slider


     const sliderContent = document.querySelector('.offer__slider'),
        slides = sliderContent.querySelectorAll('.offer__slide'),
        nextSlide = sliderContent.querySelector('.offer__slider-next'),
        prevSlide = sliderContent.querySelector('.offer__slider-prev'),
        currentSlide = document.querySelector('#current'),
        totalSlide = document.querySelector('#total'),
        sliderWrapper = sliderContent.querySelector('.offer__slider-wrapper'),
        slidesField = sliderContent.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(sliderWrapper).width;

    let slideIndex = 1,
        counter = 0,
        widthOfSlide = width.slice(0, width.length - 2),
        widthOfAllSlides = widthOfSlide * slides.length;

    slidesField.style.width = slides.length * 100 + '%';

    sliderContent.style.position = 'relative';

    const dotsWrapper = document.createElement('ol'),
          dots = [];

    dotsWrapper.classList.add('carousel-indicators');
    sliderContent.append(dotsWrapper);

    
    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotsWrapper.append(dot);
        dots.push(dot);
    }


    function currentSlideFn() {
        currentSlide.textContent = slideIndex;
        if (slideIndex < 10) {
        currentSlide.textContent = `0${slideIndex}`;
        }   
    }
    
    
    function totalSlideFn() {
        totalSlide.textContent = slides.length;
        if (slides.length < 10) {
            totalSlide.textContent = `0${slides.length}`;
        }
    }

    function sliderWrapperFn() {
        sliderWrapper.style.overflow = 'hidden';
        slides.forEach(item => {
            item.style.width = width; 
        });
        slidesField.style.transition = '1s all';
    }

    function slideAll(n, f) {
        slideIndex = n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex == 0) {
            slideIndex = slides.length;
        }
        currentSlideFn();
        counter += f;
        if (counter == widthOfAllSlides) {
            counter = 0;
        }
        if (counter < 0) {
            counter = widthOfAllSlides - widthOfSlide;
        }
        slidesField.style.transform = `translateX(-${counter}px)`;
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    nextSlide.addEventListener('click', () => {
       slideAll(slideIndex + 1, +widthOfSlide);
    });

    prevSlide.addEventListener('click', () => {
        slideAll(slideIndex - 1, +`-${widthOfSlide}`);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            console.log(e.target);
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            console.log(slideTo);
            counter = +widthOfSlide * (slideIndex - 1);
            slidesField.style.transform = `translateX(-${counter}px)`;
            console.log(counter);
            currentSlideFn();
            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = '1';
        }); 
    });