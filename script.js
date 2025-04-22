// Loading Animation


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

var sections = document.querySelectorAll(".sec-right");

sections.forEach(function (elem) {
  const video = elem.querySelector("video");

  elem.addEventListener("mouseenter", function () {
    video.style.opacity = "1";
    video.play();
  });

  elem.addEventListener("mouseleave", function () {
    video.style.opacity = "0";
    video.load(); // resets the video
  });
});
loadingAnimation();
page6Animations();
