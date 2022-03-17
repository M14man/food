function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

    // Slider

    const slider = document.querySelector(container),
        slides = document.querySelectorAll(slide),
        nextSlide = document.querySelector(nextArrow),
        prevSlide = document.querySelector(prevArrow),
        currentSlide = document.querySelector(currentCounter),
        totalSlide = document.querySelector(totalCounter),
        sliderWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(sliderWrapper).width;

    let slideIndex = 1,
        counter = 0,
        // widthOfSlide = width.slice(0, width.length - 2),
        // widthOfSlide = width.replace(/\D/g, ''),
        widthOfAllSlides = deleteNotDigits(width) * slides.length;

    slidesField.style.width = slides.length * 100 + '%';


    const dotsWrapper = document.createElement('ol'),
          dots = [];

    slider.style.position = 'relative';
    
    dotsWrapper.classList.add('carousel-indicators');
    slider.append(dotsWrapper);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        dots.push(dot);
        dotsWrapper.append(dot);
        if (i == 0) {
            dots[i].style.opacity = 1;
        }
    }

    function deleteNotDigits(string) { /*Функція яка залишає тільки чило а видаляє букви*/
        return +string.replace(/\D/g, '');
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
            counter = widthOfAllSlides - deleteNotDigits(width);
        }
        dots.forEach(dot => {
            dot.style.opacity = 0.5; 
        });
        dots[slideIndex - 1].style.opacity = 1;
        slidesField.style.transform = `translateX(-${counter}px)`;
    }

    nextSlide.addEventListener('click', () => {
       slideAll(slideIndex + 1, deleteNotDigits(width));
    });

    prevSlide.addEventListener('click', () => {
        slideAll(slideIndex - 1, +`-${deleteNotDigits(width)}`);
    });


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            let slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            console.log(slideTo);
            currentSlideFn();
            dots.forEach(dot => {
            dot.style.opacity = 0.5; 
            });
            dots[slideIndex - 1].style.opacity = 1;
            counter = (deleteNotDigits(width) * (slideIndex - 1));
            slidesField.style.transform = `translateX(-${counter}px)`;
            
        }); 
    });


    currentSlideFn();
    totalSlideFn();
    sliderWrapperFn();
}

export default slider;