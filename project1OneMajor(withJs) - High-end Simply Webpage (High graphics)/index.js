const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function mouseSkew() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 1;
  var yprev = 1;
  var timeout = null;
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xsacle = gsap.utils.clamp(0.7, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.7, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    ease: Expo.easeInOut,
    opacity: 0,
    duration: 1,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.5,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 0.5,
      ease: Expo.easeInOut,
    });
}

function circleMouseFollower(xsacle, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xsacle},${yscale})`;
  });
}

circleMouseFollower();
firstPageAnim();
mouseSkew();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
      duration:0.5,
    });
  });

});

document.querySelectorAll(".elem").forEach(function (elem) {
  var diff = 0;
  var rotate = 0;
  elem.addEventListener("mousemove", function (details) {
    // elem.getBoundingClientRect
    // used to get the details of elem, from the screen like bottom, top, right widht, heigth etc.
    // see bottom part
    var mouseAtY = details.clientY - elem.getBoundingClientRect().top;
    diff = details.clientX - rotate;
    rotate = details.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: mouseAtY,
      bottom:"auto",
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff),
    });
  });
});

// bottom
// :
// 574.84375
// height
// :
// 156.28125
// left
// :
// 0
// right
// :
// 1161.09375
// top
// :
// 418.5625
// width
// :
// 1161.09375
// x
// :
// 0
// y
// :
// 418.5625
// [[Prototype]]
