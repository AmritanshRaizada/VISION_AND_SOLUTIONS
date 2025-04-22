var tl = gsap.timeline()

tl.from(".nav h2,h1",{
  y:30,
  opacity:0,
  duration:0.3,
})

tl.from(".nav p",{
    y:30,
    opacity:0,
    duration:0.3,
  })

  tl.from(".nav button",{
    y:30,
    opacity:0,
    duration:0.3,
  })

//   tl.from(".results h1",{
//     y:30,
//     opacity:0,
//     duration:0.6,
//   })


  tl.from(".results h2",{
    y:-30,
    opacity:0,
  })

  tl.from(".results h3,.text  ",{
    y:30,
    opacity:0,
    duration:0.1
  })

  tl.from(".results svg",{
    x:30,
    opacity:0,
    duration:0.1
  })


function cursor3Animation(){

  const div = document.querySelector(".main1");
  const cursor3 = document.querySelector(".cursor3");
  
  div.addEventListener("mousemove", function (dets) {
    gsap.to(cursor3, {
      x: dets.x,
      y: dets.y,
      duration: 0.1,
      ease: "power2.out"
    });
  });
  
  div.addEventListener("mouseenter", function () {
    cursor3.innerHTML = "Let's talk" ;
    gsap.to(cursor3, {
      opacity: 1
    });
  });
  
  div.addEventListener("mouseleave", function () {
    cursor3.innerHTML = "";
    gsap.to(cursor3, {
      opacity: 0
    });
  });
  
}

cursor3Animation()
 