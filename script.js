// Loading Animation
function loadingAnimation() {
  const tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 1.5,
    ease: "expo.out"
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  });
}

// Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Mouse Circle Follower
let timeout;
function circleChaptaKaro() {
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector("#minicircle").style.transform =
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale = 1, yscale = 1) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

// Navbar Hide on Scroll Down, Show on Scroll Up (Smooth)
let lastScroll = 0;
let navVisible = true;
let ticking = false;

scroll.on("scroll", (obj) => {
  const currentScroll = obj.scroll.y;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollDiff = currentScroll - lastScroll;

      if (Math.abs(scrollDiff) > 5) {
        const nav = document.querySelector("nav");

        if (scrollDiff > 0 && navVisible) {
          // Scrolling down
          nav.style.top = "-100px";
          navVisible = false;
        } else if (scrollDiff < 0 && !navVisible) {
          // Scrolling up
          nav.style.top = "0";
          navVisible = true;
        }
      }

      lastScroll = currentScroll;
      ticking = false;
    });

    ticking = true;
  }
});

// Image Rotate Hover Effect
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

document.querySelectorAll(".elem1").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

// Page 6 Animation
function page6Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true
    }
  });
}
const dropdown = document.querySelector(".dropdown");
const backdrop = document.querySelector("#nav-backdrop");

dropdown.addEventListener("mouseenter", () => {
  backdrop.style.display = "block";
});

dropdown.addEventListener("mouseleave", () => {
  backdrop.style.display = "none";
});
var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

// Init Everything
circleChaptaKaro();
circleMouseFollower();
loadingAnimation();
page6Animations();
