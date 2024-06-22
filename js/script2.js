
var swiper0 = new Swiper(".intro-swipper",{
    loop: true,
    effect: "fade",
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    slideShadows: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    })
    var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });

    var swiper2 = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
        slidesPerView: 1
        },
        450: {
        slidesPerView: 2
        },
        768: {
        slidesPerView: 3
        },
        1024: {
        slidesPerView: 4
        }
    }
    });

    var mq = window.matchMedia("(max-width: 450px)");

    if(mq.matches){
    var swiper3 = new Swiper(".single-packages-slider", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
    
        // pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });

    }else{
    var swiper3 = new Swiper(".single-packages-slider", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
    
        // pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
    }


    var searchForm = document.querySelector(".search-form");

    document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    };

    let loginForm = document.querySelector(".login-form-container");
    document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    };

    document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
    };

    window.onscroll = () => {
    searchForm.classList.remove("active");

    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
    };