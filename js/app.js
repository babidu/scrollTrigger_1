let timeLine = gsap.timeline();

timeLine.from(".home_page nav,.home_page nav ul li, .logo, .home_page nav h5", {
   y: -100,
   duration: 1,
   stagger: 0.5,
   opacity: 0

})

timeLine.from(".home_content h1", {
   x: -500,
   duration: 0.9,
   opacity: 0,
   stagger:0.5,
})

timeLine.from(".right img", {
   scale: 0.5,
   opacity: 0,
   duration: 0.5
})

// scrollTrigger

// gsap.from(".page_2 .box", {
//    scale: 0,
//    opacity: 0,
//    duration: 0.5,
//    stagger: 0.5,
//    scrollTrigger: {
//       trigger: ".page_2 .box",
//       scroller: "body",
//       markers: true,
//       start: "top 70%",
//       end: "top 20%",
//       scrub: 3,
//    }
// })

document.querySelectorAll(".page_2 .boxes").forEach(box => {
   gsap.from(box, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      scrollTrigger: {
         trigger: ".page_2 .box",
         scroller: "body",
         // markers: true,
         start: "top 70%",
         end: "top 20%",
         scrub: 3,
      }
   })
})