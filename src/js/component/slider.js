let slider = () => {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn'),
        autoplay = true;

    let ShowSlide = (n) => {
        if (n > slides.length) {
            slideIndex = 1; 
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = '';
    }  
    ShowSlide(slideIndex); 

    let plusSlide = (n) => {
        ShowSlide(slideIndex += n);
    }

    let currentSlide = (n) => {
        ShowSlide(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlide(-1);
        currentSlide(slideIndex);
    });

    next.addEventListener('click', () => {
        plusSlide(1);
        currentSlide(slideIndex);
    });

    let autoplaySlides = (sec) =>{
        if (autoplay == true) {
            setTimeout(function playSlide() {
                plusSlide(1);
                currentSlide(slideIndex);
                setTimeout( playSlide, sec*1000 );
            }, sec*1000);
        } 
    }  

    autoplaySlides(5);
}

module.exports = slider;