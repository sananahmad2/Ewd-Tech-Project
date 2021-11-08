
/*! creativebranddesign v0.0.1 | (c) 2021 Tyler Hounsome | https://cbwebsitedesign.co.uk */
/*!
 * creativebranddesign v0.0.1
 * EWD TECH
 * (c) 2021 Tyler Hounsome
 * https://cbwebsitedesign.co.uk
 */



let origTitle = document.title;
function oldTitle() {
    document.title = origTitle
}
// function newTitle() {
//     document.title = "👋 Hi! Still need a Website?"
// }
// function onLoad() {
//     document.body.classList.add("loaded")
// }
// window.onblur = newTitle,
// window.onfocus = oldTitle,
document.addEventListener("DOMContentLoaded", (function() {
    if (document.querySelector("#features-expand")) {
        const e = '\n        <div class="bg bg-up"></div>\n        <div class="bg bg-down"></div>\n        <div class="icon"></div>\n        <h2 class="title"></h2>\n        <h3 class="subtitle"></h3>\n        <div class="content"></div>\n        <button class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg></button>\n        ';
        let t = document.body.appendChild(document.createElement("div"));
        t.classList.add("expand-details"),
        t.innerHTML = e,
        function() {
            let e = document.querySelector(".expand-details .bg-up")
              , o = document.querySelector(".expand-details .bg-down")
              , n = document.querySelector(".expand-details .icon")
              , r = document.querySelector(".expand-details .title")
              , a = document.querySelector(".expand-details .subtitle")
              , i = document.querySelector(".expand-details .content")
              , l = document.querySelector(".expand-details .close");
            document.addEventListener("click", (function(c) {
                (c.target.matches("#features-expand .item") || c.target.closest("#features-expand .item")) && (t.classList.add("open"),
                r.innerHTML = c.target.closest("#features-expand .item").querySelector("h4").innerHTML,
                c.target.closest("#features-expand .item").querySelector("h5") && (a.innerHTML = c.target.closest("#features-expand .item").querySelector("h5").innerHTML),
                i.innerHTML = c.target.closest("#features-expand .item").querySelector(".content").innerHTML,
                n.innerHTML = c.target.closest("#features-expand .item").querySelector(".icon").innerHTML,
                gsap.to(e, .1, {
                    autoAlpha: 1
                }),
                gsap.to(o, .25, {
                    scaleY: 1,
                    autoAlpha: 1
                }),
                gsap.to(n, 1.25, {
                    scaleX: 1,
                    scaleY: 1,
                    autoAlpha: 1,
                    ease: "elastic.out(1, 0.5)"
                }),
                gsap.to(r, .25, {
                    y: 0,
                    autoAlpha: 1,
                    delay: .1
                }),
                gsap.to(a, .25, {
                    y: 0,
                    autoAlpha: 1,
                    delay: .15
                }),
                gsap.to(i, .25, {
                    y: 0,
                    autoAlpha: 1,
                    delay: .2
                }),
                gsap.to(l, .25, {
                    scaleX: 1,
                    scaleY: 1,
                    autoAlpha: 1
                }))
            }
            )),
            l.addEventListener("click", (function(t) {
                document.querySelector(".expand-details").classList.remove("open"),
                gsap.to(e, .1, {
                    autoAlpha: 0,
                    delay: .2
                }),
                gsap.to(o, .25, {
                    scaleY: 0,
                    autoAlpha: 0
                }),
                gsap.to(n, .25, {
                    scaleX: 0,
                    scaleY: 0,
                    autoAlpha: 0
                }),
                gsap.to(r, .25, {
                    y: 40,
                    autoAlpha: 0
                }),
                gsap.to(a, .25, {
                    y: 40,
                    autoAlpha: 0
                }),
                gsap.to(i, .25, {
                    y: 40,
                    autoAlpha: 0
                }),
                gsap.to(l, .25, {
                    scaleX: 0,
                    scaleY: 0,
                    autoAlpha: 0
                })
            }
            ))
        }()
    }
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector("#hero .wave-bg") && gsap.to("#hero .wave-bg", 40, {
        backgroundPosition: "-5120px bottom",
        force3D: !0,
        rotation: .01,
        z: .01,
        repeat: -1,
        ease: "none"
    })
}
)),
WebFontConfig = {
    typekit: {
        id: "aaj0yxc"
    }
},
// function(e) {
//     var t = e.createElement("script")
//       , o = e.scripts[0];
//     t.src = "https://cbwebsitedesign.co.uk/assets/webfontloader.min.js",
//     t.async = !0,
//     o.parentNode.insertBefore(t, o)
// }(document),
// document.addEventListener("DOMContentLoaded", (function() {
//     const e = document.querySelector("#logo #svgContainer")
//       , t = document.querySelector("#menu-logo #svgMenuContainer")
//       , o = (lottie.loadAnimation({
//         container: e,
//         renderer: "svg",
//         loop: !1,
//         animationData: JSON.parse(animationData)
//     }),
//     lottie.loadAnimation({
//         container: t,
//         renderer: "svg",
//         loop: !1,
//      autoplay: true,
//         animationData: JSON.parse(animationData)
//     }));
//     document.querySelector(".menu-toggle").addEventListener("click", (function() {
//         o.goToAndPlay(40)
//     }
//     ))
// }
// )),
document.addEventListener("DOMContentLoaded", (function() {
    if ((window.innerWidth || document.documentElement.clientWidth) >= 500 && document.querySelector("#particles-js")) {
        const e = document.querySelector("#particles-js").dataset.particles;
        particlesJS.load("particles-js", e)
    }
}
)),
// document.addEventListener("DOMContentLoaded", (function() {
//     document.querySelector(".menu-toggle").addEventListener("click", (function(e) {
//         document.body.classList.toggle("menu-open")
//     }
//     )),
//     document.querySelector(".close-menu-button").addEventListener("click", (function(e) {
//         document.body.classList.remove("menu-open"),
//         document.querySelector("#popout-menu .submenu").classList.remove("open"),
//         gsap.to("#popout-menu .submenu", .3, {
//             height: 0,
//             marginTop: 0
//         })
//     }
//     )),
//     document.querySelector("#popout-menu .menu li .submenu + a").addEventListener("click", (function(e) {
//         e.preventDefault();
//         let t = this.previousElementSibling;
//         t.classList.contains("open") ? (t.classList.remove("open"),
//         gsap.to(t, .3, {
//             height: 0,
//             marginTop: 0
//         })) : (t.classList.add("open"),
//         gsap.to(t, .3, {
//             height: "auto",
//             marginTop: "1rem"
//         }))
//     }
//     ))
// }
// )),
window.attachEvent ? window.attachEvent("onload", onLoad) : window.addEventListener ? window.addEventListener("load", onLoad, !1) : document.addEventListener("load", onLoad, !1),
document.addEventListener("DOMContentLoaded", (function() {
    let e = window.innerWidth || document.documentElement.clientWidth;
    function t(e, t={}) {
        const o = e.getBoundingClientRect()
          , n = window.innerHeight || document.documentElement.clientHeight
          , r = window.innerWidth || document.documentElement.clientWidth
          , a = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            ...t
        };
        return o.right >= -a.left && o.bottom >= -a.top && o.left <= r + a.right && o.top <= n + a.bottom
    }
    [].forEach.call(document.querySelectorAll('a[href^="#"]:not([href="#"]):not([data-bs-toggle="tab"])'), (function(e) {
        e.addEventListener("click", (function(t) {
            t.preventDefault();
            let o = e.getAttribute("href");
            gsap.to("#body-wrap", 1, {
                scrollTo: {
                    y: o,
                    offsetY: 20
                }
            })
        }
        ))
    }
    )),
    document.querySelector("#body-wrap").onscroll = function(o) {
        if ([].forEach.call(document.querySelectorAll(".lottie-graphic"), (function(e) {
            let o = e.dataset.anim
              , n = t(e) ? "bottom top" : "top 80%"
              , r = lottie.loadAnimation({
                container: e,
                renderer: "svg",
                rendererSettings: {
                    filterSize: {
                        width: "400%",
                        height: "400%",
                        x: "-85%",
                        y: "-85%"
                    },
                    preserveAspectRatio: "xMidYMid slice"
                },
                loop: !1,
                autoplay: !0,
                path: o
            });
            if (r.setSpeed(1.2),
            ScrollTrigger.create({
                trigger: e,
                scroller: "#body-wrap",
                start: n,
                end: "bottom top",
                onEnter: ()=>r.goToAndPlay(1),
                onEnterBack: ()=>r.goToAndPlay(1)
            }),
            e.closest(".tab-pane")) {
                let t = e.closest(".tab-pane").getAttribute("id");
                document.querySelector(`.content-toggles a[href='#${t}']`).addEventListener("show.bs.tab", (function(e) {
                    r.goToAndPlay(1)
                }
                ))
            }
        }
        )),
        [].forEach.call(document.querySelectorAll(".smoothie-bg"), (function(e) {
            var t, o, n, r, a = !0;
            if (o = document.querySelector(".smoothie-bg"),
            n = null,
            r = null,
            t = document.body,
            255,
            o.getContext("2d")) {
                var i = o.width
                  , l = o.height;
                (n = o.getContext("2d")).clearRect(0, 0, i, l),
                n.save(),
                (r = n.createRadialGradient(0, 0, 0, 0, 0, i)).addColorStop(0, "rgba(0,164,154,1)"),
                r.addColorStop(1, "#0077d5"),
                n.fillStyle = r,
                n.fillRect(0, 0, i, l),
                n.save(),
                t.onmousemove = function(e) {
                    var t, o, c, s, d, u;
                    if (a)
                        return s = window.innerWidth,
                        t = window.innerHeight,
                        d = e.clientX,
                        u = e.clientY,
                        o = i * d / s,
                        c = l * u / t,
                        ~~(256 * d / s),
                        ~~(256 * u / t),
                        (r = n.createRadialGradient(o, c, 0, o, c, i)).addColorStop(0, "rgba(0,164,154,1)"),
                        r.addColorStop(1, ["#0077d5"].join("")),
                        n.fillStyle = r,
                        n.fillRect(0, 0, i, l)
                }
                ,
                t.onclick = function(e) {
                    a = !a
                }
            }
        }
        )),
        [].forEach.call(document.querySelectorAll('.content-toggles a[data-bs-toggle="tab"]'), (function(e) {
            e.addEventListener("show.bs.tab", (function(e) {
                [].forEach.call(document.querySelectorAll(".content-toggles li"), (function(e) {
                    e.classList.remove("active")
                }
                )),
                e.target.closest("li").classList.add("active")
            }
            ))
        }
        )),
        document.querySelector(".accred-swiper")) {
            new Swiper(".accred-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: !0,
                delay: 400,
                speed: 1400,
                parallax: !0,
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0
                }
            })
        }
        if (document.querySelector(".features-swiper")) {
            new Swiper(".features-swiper .swiper-container",{
                loop: !1,
                slidesPerView: 1,
                spaceBetween: 60,
             autoplay: true,
                delay: 900,
                speed: 1400,
                grabCursor: !0,
                pagination: {
                    el: ".features-swiper .swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    }
                }
            })
        }
        if (document.querySelector(".features-expand-swiper")) {
            new Swiper(".features-expand-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 60,
             autoplay: true,
                delay: 900,
                speed: 1400,
                grabCursor: !0,
                pagination: {
                    el: ".features-expand-swiper .swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 60
                    }
                }
            })
        }
        if (document.querySelector(".reviews-swiper")) {
            new Swiper(".reviews-swiper .swiper-container",{
                loop: !1,
                slidesPerView: 1,
                spaceBetween: 60,
             autoplay: true,
                delay: 900,
                speed: 1400,
                grabCursor: !0,
                pagination: {
                    el: ".reviews-swiper .swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    }
                }
            })
        }
        if (document.querySelector(".image-fade-swiper")) {
            new Swiper(".image-fade-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: !0,
                delay: 900,
                speed: 1400,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0,
                    checkInView: !0,
                    scrollingElement: "#body-wrap"
                }
            })
        }
        if (document.querySelector(".logos-swiper")) {
            new Swiper(".logos-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: !0,
                delay: 900,
                speed: 1400,
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0,
                    checkInView: !0,
                    scrollingElement: "#body-wrap"
                },
                watchSlidesProgress: !0,
                watchSlidesVisibility: !0,
                breakpoints: {
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 60
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 60
                    }
                }
            })
        }
        if (document.querySelector("#side-carousel")) {
            let t = new Swiper(".side-image-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 30,
                initialSlide: -1,
                autoplay: {
                    reverseDirection: !0,
                    delay: 1e4
                },
                speed: 400,
                grabCursor: !0,
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 2
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        initialSlide: -1
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        initialSlide: -3
                    }
                }
            });
            t.lazy.load();
            let o = new Swiper(".side-content-swiper .swiper-container",{
                loop: !1,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 400,
                effect: "fade",
                fadeEffect: {
                    crossFade: !1
                }
            });
            t.on("slideChange", (function() {
                if (e >= 1025) {
                    let e = t.slides.length - 7 - t.realIndex - 2;
                    e = e >= 0 ? e : e + t.slides.length - 6,
                    o.slideTo(e)
                } else if (e >= 600 && e < 1025) {
                    let e = t.slides.length - 5 - t.realIndex;
                    o.slideTo(e)
                } else {
                    let e = t.slides.length - 3 - t.realIndex;
                    o.slideTo(e)
                }
            }
            ))
        }
        if (document.querySelector(".team-swiper")) {
            new Swiper(".team-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: !0,
                delay: 900,
                speed: 1400,
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0
                },
                pagination: {
                    el: ".team-swiper .swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }
            })
        }
        if (document.querySelector(".images-carousel-swiper")) {
            new Swiper(".images-carousel-swiper .swiper-container",{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 60,
                centeredSlides: !0,
                autoplay: !0,
                delay: 900,
                speed: 1400,
                grabCursor: !0,
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0
                },
                pagination: {
                    el: ".images-carousel-swiper .swiper-pagination",
                    type: "bullets",
                    clickable: !0
                }
            })
        }
        for (const e of document.querySelectorAll(".images-full-swiper")) {
            new Swiper(e,{
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 60,
                centeredSlides: !0,
                autoplay: !0,
                delay: 900,
                speed: 1400,
                grabCursor: !0,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0
                }
            })
        }
        e >= 700 && setTimeout((function() {
            [].forEach.call(document.querySelectorAll("[data-fade-left]"), (function(e) {
                let o = t(e) ? "top 105%" : "top 80%";
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        scroller: "#body-wrap",
                        start: o,
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    x: 100,
                    duration: 1
                })
            }
            )),
            [].forEach.call(document.querySelectorAll("[data-fade-right]"), (function(e) {
                let o = t(e) ? "top 105%" : "top 80%";
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        scroller: "#body-wrap",
                        start: o,
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    x: -100,
                    duration: 1
                })
            }
            )),
            [].forEach.call(document.querySelectorAll("[data-fade-up]"), (function(e) {
                let o = t(e) ? "top 105%" : "top 80%";
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        scroller: "#body-wrap",
                        start: o,
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 100,
                    duration: 1
                })
            }
            )),
            [].forEach.call(document.querySelectorAll("[data-fade-down]"), (function(e) {
                let o = t(e) ? "top 105%" : "top 80%";
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        scroller: "#body-wrap",
                        start: o,
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: -100,
                    duration: 1
                })
            }
            )),
            [].forEach.call(document.querySelectorAll("[data-fade]"), (function(e) {
                let o = t(e) ? "top 105%" : "top 80%";
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        scroller: "#body-wrap",
                        start: o,
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    duration: 1
                })
            }
            ))
        }
        ), 1),
        document.querySelector(".tiles-gallery") && (gsap.to(".tiles-gallery .tiles-line:nth-child(2n)", 1, {
            scrollTrigger: {
                trigger: ".tiles-gallery",
                scroller: "#body-wrap",
                scrub: 2,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse"
            },
            xPercent: 10
        }),
        gsap.to(".tiles-gallery .tiles-line:nth-child(2n-1)", 1, {
            scrollTrigger: {
                trigger: ".tiles-gallery",
                scroller: "#body-wrap",
                scrub: 2,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse"
            },
            xPercent: -10
        })),
        o.target.onscroll = null
    }
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    if (document.querySelector(".img-parallax")) {
        var e = document.getElementsByClassName("img-parallax");
        new simpleParallax(e,{
            scale: 1.2,
            delay: .6,
            transition: "cubic-bezier(0,0,0,1)",
            customContainer: document.querySelector("#body-wrap")
        })
    }
    if (document.querySelector(".mockups-parallax")) {
        var t = document.querySelector(".mockups-parallax:first-child");
        new simpleParallax(t,{
            scale: 1.4,
            delay: .6,
            transition: "cubic-bezier(0,0,0,1)",
            overflow: !0,
            customContainer: document.querySelector("#body-wrap")
        });
        var o = document.querySelector(".mockups-parallax:nth-child(2)");
        new simpleParallax(o,{
            scale: 1.4,
            delay: .6,
            transition: "cubic-bezier(0,0,0,1)",
            overflow: !0,
            orientation: "down",
            customContainer: document.querySelector("#body-wrap")
        });
        var n = document.querySelector(".mockups-parallax:nth-child(3)");
        new simpleParallax(n,{
            scale: 1,
            delay: .6,
            transition: "cubic-bezier(0,0,0,1)",
            overflow: !0,
            customContainer: document.querySelector("#body-wrap")
        })
    }
    if (document.querySelector(".image-stack-scroll") && gsap.to(".image-stack-scroll img", 1, {
        scrollTrigger: {
            trigger: ".image-stack-scroll",
            scroller: "#body-wrap",
            scrub: !0,
            start: "top 120%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 0
    }),
    document.querySelector(".tiles-gallery") && (gsap.to(".tiles-gallery .tiles-line:nth-child(2n)", 1, {
        scrollTrigger: {
            trigger: ".tiles-gallery",
            scroller: "#body-wrap",
            scrub: 2,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse"
        },
        xPercent: 10
    }),
    gsap.to(".tiles-gallery .tiles-line:nth-child(2n-1)", 1, {
        scrollTrigger: {
            trigger: ".tiles-gallery",
            scroller: "#body-wrap",
            scrub: 2,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse"
        },
        xPercent: -10
    })),
    document.querySelector("#post-section .sidebar")) {
        !function(e) {
            let t = document.querySelector("#post-section .sidebar")
              , o = document.querySelector("header").offsetHeight + 30
              , n = o + t.offsetHeight
              , r = window.innerWidth || document.documentElement.clientWidth;
            r >= 700 && e.offsetHeight > t.offsetHeight && ScrollTrigger.create({
                trigger: e,
                scroller: "#body-wrap",
                pin: t,
                pinType: "fixed",
                anticipatePin: 1,
                start: `top ${o}px`,
                end: `bottom ${n}px`
            }),
            window.addEventListener("resize", ()=>{
                r >= 700 && e.offsetHeight > t.offsetHeight && ScrollTrigger.create({
                    trigger: e,
                    scroller: "#body-wrap",
                    pin: t,
                    pinType: "fixed",
                    anticipatePin: 1,
                    start: `top ${o}px`,
                    end: `bottom ${n}px`
                })
            }
            )
        }(document.querySelector("#post-section .post-content"))
    }
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    [].forEach.call(document.querySelectorAll(".polygons-bg"), (function(e) {
        var t = e;
        var o, n, r, a, i, l, c, s = {
            width: "1.2",
            height: "1.2",
            depth: "10",
            segments: (window.innerWidth || document.documentElement.clientWidth) >= 640 ? 16 : 6,
            slices: "8",
            xRange: "0.3",
            yRange: "0.3",
            zRange: 1,
            ambient: "#000000",
            diffuse: "#ffffff",
            speed: "0.0001"
        }, d = {
            count: "1",
            xyScalar: 1,
            zOffset: "77",
            ambient: "#b321c8",
            diffuse: "#ff5400",
            speed: "0.0005",
            gravity: 500,
            dampening: .95,
            minLimit: 10,
            maxLimit: null,
            minDistance: 20,
            maxDistance: 400,
            autopilot: "true",
            draw: !1,
            bounds: FSS.Vector3.create(),
            step: FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
        }, u = Date.now(), p = FSS.Vector3.create(), m = FSS.Vector3.create(), g = t, f = t;
        function y() {
            var e, t;
            for (r.remove(a),
            n.clear(),
            i = new FSS.Plane(s.width * n.width,s.height * n.height,s.segments,s.slices),
            l = new FSS.Material(s.ambient,s.diffuse),
            a = new FSS.Mesh(i,l),
            r.add(a),
            e = i.vertices.length - 1; e >= 0; e--)
                (t = i.vertices[e]).anchor = FSS.Vector3.clone(t.position),
                t.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)),
                t.time = Math.randomInRange(0, Math.PIM2)
        }
        function S(e, t) {
            n.setSize(e, t),
            FSS.Vector3.set(p, n.halfWidth, n.halfHeight),
            y()
        }
        function w() {
            o = Date.now() - u,
            function() {
                var e, t, n, a, l, c, u, g = s.depth / 2;
                FSS.Vector3.copy(d.bounds, p),
                FSS.Vector3.multiplyScalar(d.bounds, d.xyScalar),
                FSS.Vector3.setZ(m, d.zOffset),
                d.autopilot && (e = Math.sin(d.step[0] * o * d.speed),
                t = Math.cos(d.step[1] * o * d.speed),
                FSS.Vector3.set(m, d.bounds[0] * e, d.bounds[1] * t, d.zOffset));
                for (a = r.lights.length - 1; a >= 0; a--) {
                    l = r.lights[a],
                    FSS.Vector3.setZ(l.position, d.zOffset);
                    var f = Math.clamp(FSS.Vector3.distanceSquared(l.position, m), d.minDistance, d.maxDistance)
                      , y = d.gravity * l.mass / f;
                    FSS.Vector3.subtractVectors(l.force, m, l.position),
                    FSS.Vector3.normalise(l.force),
                    FSS.Vector3.multiplyScalar(l.force, y),
                    FSS.Vector3.set(l.acceleration),
                    FSS.Vector3.add(l.acceleration, l.force),
                    FSS.Vector3.add(l.velocity, l.acceleration),
                    FSS.Vector3.multiplyScalar(l.velocity, d.dampening),
                    FSS.Vector3.limit(l.velocity, d.minLimit, d.maxLimit),
                    FSS.Vector3.add(l.position, l.velocity)
                }
                for (c = i.vertices.length - 1; c >= 0; c--)
                    u = i.vertices[c],
                    e = Math.sin(u.time + u.step[0] * o * s.speed),
                    t = Math.cos(u.time + u.step[1] * o * s.speed),
                    n = Math.sin(u.time + u.step[2] * o * s.speed),
                    FSS.Vector3.set(u.position, s.xRange * i.segmentWidth * e, s.yRange * i.sliceHeight * t, s.zRange * g * n - g),
                    FSS.Vector3.add(u.position, u.anchor);
                i.dirty = !0
            }(),
            h(),
            requestAnimationFrame(w)
        }
        function h() {
            var e, t, o, a;
            if (n.render(r),
            d.draw)
                for (e = r.lights.length - 1; e >= 0; e--)
                    t = (a = r.lights[e]).position[0],
                    o = a.position[1],
                    n.context.lineWidth = .5,
                    n.context.beginPath(),
                    n.context.arc(t, o, 10, 0, Math.PIM2),
                    n.context.strokeStyle = a.ambientHex,
                    n.context.stroke(),
                    n.context.beginPath(),
                    n.context.arc(t, o, 4, 0, Math.PIM2),
                    n.context.fillStyle = a.diffuseHex,
                    n.context.fill()
        }
        function v(e) {
            S(g.offsetWidth, g.offsetHeight),
            h()
        }
        c = new FSS.CanvasRenderer,
        n && f.removeChild(n.element),
        (n = c).setSize(g.offsetWidth, g.offsetHeight),
        f.append(n.element),
        r = new FSS.Scene,
        y(),
        function() {
            var e, t;
            for (e = r.lights.length - 1; e >= 0; e--)
                t = r.lights[e],
                r.remove(t);
            for (n.clear(),
            e = 0; e < d.count; e++)
                (t = new FSS.Light(d.ambient,d.diffuse)).ambientHex = t.ambient.format(),
                t.diffuseHex = t.diffuse.format(),
                r.add(t),
                t.mass = Math.randomInRange(.5, 1),
                t.velocity = FSS.Vector3.create(),
                t.acceleration = FSS.Vector3.create(),
                t.force = FSS.Vector3.create(),
                t.ring = document.createElementNS(FSS.SVGNS, "circle"),
                t.ring.setAttributeNS(null, "stroke", t.ambientHex),
                t.ring.setAttributeNS(null, "stroke-width", "0.5"),
                t.ring.setAttributeNS(null, "fill", "none"),
                t.ring.setAttributeNS(null, "r", "10"),
                t.core = document.createElementNS(FSS.SVGNS, "circle"),
                t.core.setAttributeNS(null, "fill", t.diffuseHex),
                t.core.setAttributeNS(null, "r", "4")
        }(),
        window.addEventListener("resize", v),
        S(g.offsetWidth, g.offsetHeight),
        w()
    }
    ))
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    var e = !1;
    document.querySelector("#body-wrap").addEventListener("scroll", t=>{
        e = !0
    }
    , {
        capture: !0,
        passive: !0
    }),
    setInterval((function() {
        e && (e = !1,
        document.querySelector("#body-wrap").scrollTop >= document.querySelector("#body-wrap").offsetHeight / 1.7 ? (document.body.classList.add("scrolled"),
        document.querySelector("#cookieconsent") && document.querySelector("#cookieconsent").classList.add("hide")) : document.body.classList.remove("scrolled"))
    }
    ), 250),
    document.querySelector("#cookieconsent") && document.querySelector("#cookieconsent .close").addEventListener("click", (function(e) {
        document.querySelector("#cookieconsent").classList.add("hide")
    }
    ))
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    if (document.querySelector(".team-overlay")) {
        let e = -100
          , t = -100;
        const o = document.querySelector(".team-overlay .cursor")
          , n = document.querySelector(".team-overlay .cursor svg")
          , r = document.querySelector(".team-overlay")
          , a = ()=>{
            var n = r.getBoundingClientRect();
            r.addEventListener("mousemove", o=>{
                e = o.clientX - n.left,
                t = o.clientY - n.top
            }
            ),
            r.addEventListener("dragover", r=>{
                e = r.clientX - n.left,
                t = r.clientY - n.top,
                gsap.set(o, {
                    x: e,
                    y: t
                })
            }
            );
            const a = ()=>{
                gsap.set(o, {
                    x: e,
                    y: t
                }),
                requestAnimationFrame(a)
            }
            ;
            requestAnimationFrame(a)
        }
        ;
        window.innerWidth >= 1025 && document.querySelector("#team .single").addEventListener("click", a());
        const i = gsap.to(n, .3, {
            scale: 1
        });
        r.addEventListener("mouseenter", ()=>{
            i.play()
        }
        ),
        r.addEventListener("mouseleave", ()=>{
            i.reverse()
        }
        )
    }
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector("#team") && [].forEach.call(document.querySelectorAll("#team .single"), (function(e) {
        (new Image).src = e.dataset.img
    }
    )),
    [].forEach.call(document.querySelectorAll("#team .single"), (function(e) {
        e.addEventListener("click", (function() {
            let e = this.dataset.name
              , t = this.dataset.title
              , o = this.dataset.desc
              , n = this.dataset.img;
            document.querySelector(".team-overlay h2").textContent = e,
            document.querySelector(".team-overlay .title").textContent = t,
            document.querySelector(".team-overlay .desc").innerHTML = o,
            document.querySelector(".team-overlay .image").style.backgroundImage = `url(${n})`,
            document.querySelector(".team-overlay").classList.add("open")
        }
        ))
    }
    )),
    document.querySelector(".team-overlay") && document.querySelector(".team-overlay").addEventListener("click", (function() {
        document.querySelector(".team-overlay").classList.remove("open")
    }
    ))
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    var e = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver"in window) {
        var t = new IntersectionObserver((function(e, o) {
            e.forEach((function(e) {
                if (e.isIntersecting) {
                    for (var o in e.target.children) {
                        var n = e.target.children[o];
                        "string" == typeof n.tagName && "SOURCE" === n.tagName && (n.src = n.dataset.src)
                    }
                    e.target.load(),
                    e.target.classList.remove("lazy"),
                    t.unobserve(e.target)
                }
            }
            ))
        }
        ));
        e.forEach((function(e) {
            t.observe(e)
        }
        ))
    }
}
));