// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,
});

// Animation
gsap.from(".ts-toc-card-1", {
  scrollTrigger: ".ts-toc-cards",
  x: -70,
  duration: 1,
  opacity: 0,
});
gsap.from(".ts-toc-card-2", {
  scrollTrigger: ".ts-toc-cards",
  y: 70,
  duration: 1,
  opacity: 0,
});
gsap.from(".ts-toc-card-3", {
  scrollTrigger: ".ts-toc-cards",
  x: 70,
  duration: 1,
  opacity: 0,
});

// Why do you choose

gsap.from(".ts-why-choose-card", {
  scrollTrigger: ".ts-why-choose",
  y: 70,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".ts-products-card--cont", {
  scrollTrigger: ".ts-products",
  y: 70,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  // stagger: {
  //   grid: [2, 4],
  //   from: "center",
  //   amount: 0.2,
  // },
});

gsap.from(".ts-workshop-card--cont", {
  scrollTrigger: ".ts-workshop",
  y: 70,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
