! function (e) {
    "use strict";
    (new WOW).init();
    var i = e(window),
        s = i.width(),
        n = e(".header-sticky"),
        o = (e("html"), e("body"));
    i.on("scroll", function () {
            var e = i.scrollTop(),
                o = n.height();
            s >= 320 && (e < o ? n.removeClass("is-sticky") : n.addClass("is-sticky"))
        }),
        function () {
            var i = e("#scroll-top"),
                s = 0,
                n = e(window);
            n.on("scroll", function () {
                var o = e(this).scrollTop();
                o > s ? i.removeClass("show") : n.scrollTop() > 200 ? i.addClass("show") : i.removeClass("show"), s = o
            }), i.on("click", function (i) {
                e("html, body").animate({
                    scrollTop: 0
                }, 600), i.preventDefault()
            })
        }(), i.on("load", function () {
            (e(".preloader-activate").removeClass("preloader-active"), localStorage.getItem("infilon_day")) ? "#000000" == localStorage.getItem("infilon_day") && e("#search-overlay-trigger").click(): localStorage.setItem("infilon_day", "#1d5280")
        }), jQuery(window).on("load", function () {
            setTimeout(function () {
                jQuery(".open_tm_preloader").addClass("loaded"), jQuery(".single-blog-item img").each(function () {
                    e(this).error(function () {
                        e(this).hide()
                    })
                })
            }, 500)
        });
    var t = e(".navigation-menu--onepage").height() - 60;
    e(".navigation-menu--onepage ul").onePageNav({
        currentClass: "active",
        scrollOffset: t
    });
    var a = e(".header-area").height();
    (e(".offcanvas-navigation--onepage ul").onePageNav({
        currentClass: "active",
        scrollOffset: a
    }), e(".has-children--multilevel-submenu").find(".submenu").length) && e(".has-children--multilevel-submenu").find(".submenu").each(function () {
        var s = e(this).offset().left,
            n = e(this).width();
        i.height();
        s + n <= i.width() - 10 || e(this).addClass("left")
    });
    e("#mobile-menu-trigger").on("click", function () {
        e("#mobile-menu-overlay").addClass("active"), o.addClass("no-overflow")
    }), e("#mobile-menu-close-trigger").on("click", function () {
        e("#mobile-menu-overlay").removeClass("active"), o.removeClass("no-overflow")
    }), e(".offcanvas-navigation--onepage ul li a").on("click", function () {
        e("#mobile-menu-overlay").removeClass("active"), o.removeClass("no-overflow")
    }), o.on("click", function (i) {
        var s = i.target;
        e(s).is(".mobile-menu-overlay__inner") || e(s).parents().is(".mobile-menu-overlay__inner") || e(s).is("#mobile-menu-trigger") || e(s).is("#mobile-menu-trigger i") || (e("#mobile-menu-overlay").removeClass("active"), o.removeClass("no-overflow")), e(s).is(".search-overlay__inner") || e(s).parents().is(".search-overlay__inner") || e(s).is("#search-overlay-trigger") || e(s).is("#search-overlay-trigger i") || (e("#search-overlay").removeClass("active"), o.removeClass("no-overflow"))
    });
    var l = window.location.pathname,
        r = l.substr(l.lastIndexOf("/") + 1),
        c = window.location.hash.substr(1);
    ("" != r && "/" != r && "admin" != r || "" != c) && (e(".navigation-menu li").each(function () {
        e(this).removeClass("active")
    }), "" != c ? e(".navigation-menu li a[href*='" + c + "']").parents("li").addClass("active") : e(".navigation-menu li a[href*='" + r + "']").parents("li").addClass("active")), e(".openmenu-trigger").on("click", function (i) {
        i.preventDefault(), e(".open-menuberger-wrapper").addClass("is-visiable")
    }), e(".page-close").on("click", function (i) {
        i.preventDefault(), e(".open-menuberger-wrapper").removeClass("is-visiable")
    }), e("#open-off-sidebar-trigger").on("click", function () {
        e("#page-oppen-off-sidebar-overlay").addClass("active"), o.addClass("no-overflow")
    }), e("#menu-close-trigger").on("click", function () {
        e("#page-oppen-off-sidebar-overlay").removeClass("active"), o.removeClass("no-overflow")
    }), e("#search-overlay-trigger").on("click", function () {
        e("#search-overlay").addClass("active"), e("html").toggleClass("nightmode"), f();
        var i = "#1d5280" == e('meta[name="theme-color"]').attr("content") ? "#000000" : "#1d5280";
        e('meta[name="theme-color"]').attr("content", i), localStorage.setItem("infilon_day", i)
    }), e("#search-close-trigger").on("click", function () {
        e("#search-overlay").removeClass("active"), o.removeClass("no-overflow")
    }), e("#hidden-icon-trigger").on("click", function () {
        e("#hidden-icon-wrapper").toggleClass("active")
    }), e("#newsletter-popup-close-trigger").on("click", function () {
        e("#newsletter-popup").removeClass("active")
    }), e(".share-icon").on("click", function (i) {
        i.preventDefault(), e(".entry-post-share").toggleClass("opened")
    }), o.on("click", function () {
        e(".entry-post-share").removeClass("opened")
    }), e(".entry-post-share").on("click", function (e) {
        e.stopPropagation()
    });
    var p = e(".offcanvas-navigation"),
        d = p.find(".sub-menu");
    d.parent().prepend('<span class="menu-expand"><i></i></span>'), d.slideUp(), p.on("click", "li a, li .menu-expand", function (i) {
        var s = e(this);
        s.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === s.attr("href") || s.hasClass("menu-expand")) && (i.preventDefault(), s.siblings("ul:visible").length ? (s.parent("li").removeClass("active"), s.siblings("ul").slideUp()) : (s.parent("li").addClass("active"), s.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"), s.closest("li").siblings("li").find("ul:visible").slideUp(), s.siblings("ul").slideDown()))
    }), e(".projects-masonary-wrapper").imagesLoaded(function () {
        e(".messonry-button").on("click", "button", function () {
            var s = e(this).attr("data-filter");
            e(this).siblings(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked"), i.isotope({
                filter: s
            })
        });
        var i = e(".mesonry-list").isotope({
            percentPosition: !0,
            transitionDuration: "0.7s",
            layoutMode: "masonry"
        })
    }), e(".masonry-activation").imagesLoaded(function () {
        e(".masonry-wrap").isotope({
            itemSelector: ".masonary-item",
            percentPosition: !0,
            transitionDuration: "0.7s",
            masonry: {
                columnWidth: 2,
                percentPosition: !0
            }
        })
    }), e(".bg-img").each(function (i, s) {
        var n = e(s),
            o = n.data("bg");
        n.css("background-image", "url(" + o + ")")
    }), e("#feel-the-wave , .feel-the-wave").length && e("#feel-the-wave , .feel-the-wave").wavify({
        height: 80,
        bones: 5,
        amplitude: 100,
        color: "rgba(224,238,255,0.5)",
        speed: .15
    }), e("#feel-the-wave-two , .feel-the-wave-two").length && e("#feel-the-wave-two , .feel-the-wave-two").wavify({
        height: 120,
        bones: 4,
        amplitude: 60,
        color: "rgba(224,238,255,0.4)",
        speed: .25
    }), e(document).ready(function () {
        new Swiper(".__-hero-slider__container", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !1,
            speed: 150,
            allowTouchMove: !1,
            spaceBetween: 0,
            autoplay: {
                delay: 4e7
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-t01",
                type: "bullets",
                clickable: !0
            },
            breakpoints__: {
                1499: {
                    slidesPerView: 1
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        });
        e(".hero-slider__container").hover(function () {}, function () {});
        new Swiper(".brand-logo-slider__container", {
            slidesPerView: 7,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            autoplay: {
                delay: 5e3
            },
            breakpoints: {
                1499: {
                    slidesPerView: 6
                },
                991: {
                    slidesPerView: 4
                },
                767: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 2
                }
            }
        }), new Swiper(".top-info-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".single-flexible__container", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".service-infi-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 2500,
            autoplay: !0,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-service",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                991: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                575: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }
        }), new Swiper(".service-slider__container", {
            slidesPerView: 4,
            slidesPerGroup: 4,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-service",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                991: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                575: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }
        }), new Swiper(".service-slider__project-active", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-service",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 1
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".three-flexible__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-3",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".auto--center-flexible__container", {
            slidesPerView: "auto",
            centeredSlides: !0,
            freeMode: !1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-auto",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".auto--per-flexible__container", {
            slidesPerView: "auto",
            centeredSlides: !1,
            freeMode: !0,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-5",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".carousel-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-9",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".projects-slider__container__", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-project",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".projects-slider__three", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 40,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-project",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".testimonial-slider__container", {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay:{
                delay:3e3
            },
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-t01",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".testimonial-slider__container-two", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centeredSlides: !0,
            loop: !0,
            speed: 1e3,
            spaceBetween: 50,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-t0",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".testimonial-slider-machine", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-machine",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 1
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        })
    }), e("#fullpage").length && e("#fullpage").fullpage({
        scrollBar: !1,
        navigation: !0,
        loopBottom: !1,
        sectionSelector: "section",
        scrollingSpeed: 1e3,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        afterLoad: function () {
            e(".fp-viewing-3").addClass("tm-one-page-footer-expanded")
        }
    }), e(".chart-progress , .chart-progress__box").appear(function () {
        e(".chart-progress, .chart-progress__box").circleProgress({
            startAngle: -Math.PI / 4 * 2
        })
    }), e("[data-countdown]").each(function () {
        var i = e(this),
            s = e(this).data("countdown");
        i.countdown(s, function (e) {
            i.html(e.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'))
        })
    }), e(window).on("load", function () {});
    var u = e(".demo-option-container");
    e(".quick-option").on("click", function (e) {
        e.preventDefault(), u.toggleClass("open")
    }), e(".tabs a").on("click", function () {
        return e(".tabs a, .inner-tabs .tabs-in").removeClass("active"), e(this).addClass("active"), e(".tab-" + e(this).attr("data-tab")).addClass("active"), !1
    }), e(".counter").counterUp({
        delay: 10,
        time: 1e3
    }), e(".single-svg-icon-box").each(function () {
        var i = e(this),
            s = i.find(".svg-icon"),
            n = s.attr("id"),
            o = s.data("svg-icon"),
            t = new Vivus(n, {
                duration: 100,
                file: o
            });
        i.on("mouseenter", function () {
            t.reset().play()
        })
    }), e("#DateCountdown").TimeCircles({
        animation: "smooth",
        bg_width: .6,
        fg_width: .025,
        circle_bg_color: "#eeeeee",
        time: {
            Days: {
                text: "Days",
                color: "#086AD8",
                show: !0
            },
            Hours: {
                text: "Hours",
                color: "#086AD8",
                show: !0
            },
            Minutes: {
                text: "Minutes",
                color: "#086AD8",
                show: !0
            },
            Seconds: {
                text: "Seconds",
                color: "#086AD8",
                show: !0
            }
        }
    }), e(".slide-scroll-bg").height(".slide-scroll-bg").scrollie({
        scrollOffset: 0,
        scrollingInView: function (i) {
            console.log(i);
            var s = i.data("background");
            e(".bg-body-color").css("background-color", s)
        }
    }), e(".popup-images").lightGallery(), e(".video-popup").lightGallery(), e("#showcoupon").on("click", function () {
        e("#checkout-coupon").slideToggle(500)
    }), e("#chekout-box-2").on("change", function () {
        e(".ship-box-info").slideToggle("100")
    });
    var w = e(".reveal-footer"),
        v = w.closest("#main-wrapper"),
        g = e(window);

    function b() {
        var e = w.outerHeight(),
            i = g.width();
        i > 991 ? v.css({
            "padding-bottom": e + "px"
        }) : i <= 991 && v.css({
            "padding-bottom": "0px"
        })
    }

    function f() {
        e("canvas.background").length && (window.onload = function () {
            e(window).width() < 768 ? Particles.init({
                selector: ".background",
                maxParticles: 30,
                connectParticles: 1,
                sizeVariations: 5,
                color: "#ffffff"
            }) : Particles.init({
                selector: ".background",
                maxParticles: 120,
                connectParticles: 1,
                sizeVariations: 5,
                color: "#ffffff"
            })
        }, setTimeout(function () {
//            e("html").hasClass("nightmode") ? (console.log("nightmode"), Particles.options.color = "#555555", Particles._refresh()) : (Particles.options.color = "#ffffff", Particles._refresh())
        }, 500))
    }
    b(), e(window).on("resize", function () {
        b()
    }), e("#particles-js").length && particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }), e("#nasa-js").length && particlesJS("nasa-js", {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#008000"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 1,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 4,
                    size_min: .3,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 1,
                direction: "right",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "remove"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    }), f()
}(jQuery);
