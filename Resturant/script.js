
gsap.from('.part1 h1, .part1 h2', {
  x: -500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,

});
gsap.from('.part2 img', {
  scale: 0.1,
  opacity: 0,
  duration: 1,
  ease: "bounce.out",
  stagger: 0.2,

});
gsap.from('.part1 button', {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".part1",
    start: "top 80%",

  }
});
gsap.from('.txt button', {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pg1",
    start: "top 80%",

  }
});
gsap.from('.img img', {
  x: -500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".pg1",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,

  }
});
gsap.from('.txt h1,.txt p', {
  x: 500,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".pg1",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,

  }
});
gsap.from('.txt button', {
  y: 500,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".pg1",
    start: "top 80%",
    end: "top 50%",


  }
});
gsap.from('.boxContainer .box', {
  y: 800,
  opacity: 0,
  ease: "power2.out",
  stagger: 1,
  scrollTrigger: {
    trigger: ".pg2",
    start: "top 30%",
    end: "top 50%",
    scrub: 2,

  }
});
gsap.from('.pg2 button', {
  y: 200,
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".pg2",
    start: "top 10%",
    end: "top 50%",
    scrub: 1
  }
});
gsap.from('.pg2 h1, .pg2 p', {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".pg2",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  }
});
var menu = document.querySelector(".menu")
var close = document.querySelector(".menu img")
var viewmenu = document.querySelector(".pg2 button")
viewmenu.addEventListener("click", () => {
  menu.style.display = "block"

})
close.addEventListener("click", () => {
  menu.style.display = "none"

})


