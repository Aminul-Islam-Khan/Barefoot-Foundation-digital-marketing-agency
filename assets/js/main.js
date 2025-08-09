(function($) {
    "use strict";

    $(document).ready(function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });

        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();


        //>> Hero Slider 1 Start <<//
        const sliderActive2 = ".hero-slider";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function() {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);

        //>> Hero-3 Slider Start <<//
        const sliderActive1 = ".hero-slider-2";
        const sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 2000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },

        });
        // content animation when active start here
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function() {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);

        //>> Brand Slider Start <<//
        if ($('.brand-slider').length > 0) {
            const brandeSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.brand-slider-2').length > 0) {
            const brandeSlider2 = new Swiper(".brand-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Project Slider Start <<//
        if ($('.project-slider').length > 0) {
            const projectSlider = new Swiper(".project-slider", {
                spaceBetween: 5,
                speed: 2000,
                loop: true,
                // autoplay: {
                //     delay: 1000,
                //     disableOnInteraction: false,
                // },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.project-slider-2').length > 0) {
            const projectSlider = new Swiper(".project-slider-2", {
                spaceBetween: 5,
                speed: 2000,
                loop: true,
                // autoplay: {
                //     delay: 1000,
                //     disableOnInteraction: false,
                // },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if ($('.testimonial-slider').length > 0) {
            const projectSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.testimonial-slider-2').length > 0) {
            const projectSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
            });
        }

        if ($('.text-move-slider').length > 0) {
            const textMoveSlider = new Swiper(".text-move-slider", {
                slidesPerView: 'auto',
                spaceBetween: 35,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 6000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }


        // Search Popup
        $(".search-trigger").on("click", function(e) {
            e.preventDefault();
            $(".search-wrap").fadeToggle(500);
            $(".nav-search, #search-close").toggleClass("open");
        });

        $(".search-close").on("click", function(e) {
            e.preventDefault();
            $(".search-wrap").fadeOut(500);
            $(".nav-search, #search-close").removeClass("open");
        });

        //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });

        //>> Back To Top Slider Start <<//
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });

        $(document).on('click', '#back-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


    }); // End Document Ready Function

    //>> Prealoader Start <<//
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }

    loader();

})(jQuery); // End jQuery