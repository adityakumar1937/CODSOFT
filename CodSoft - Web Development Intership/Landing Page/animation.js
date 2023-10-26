var tl = gsap.timeline();

tl.from(".navbar .logo, .navbar .nav-item, .navbar .btn", {
  y: -80,
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
  stagger: 0.3,
});

tl.from(".section-1 .left .hero-heading, .left .hero-para", {
  x: -100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
});

tl.from(".section-1 .left span #email, .left #email", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
});

tl.from(".section-1 .left span #email, .left .btn", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
});

tl.from(".section-1 .right .photo-1", {
  x: 100,
  opacity: 0,
});


//   Section 2
gsap.from(".section-2 .left .photo-2", {
  x: -100,
  opacity: 0,
  delay: 1,
  duration: .5,
  scrollTrigger: {
    trigger: ".section-2 .left .photo-2",
    scroller: "body"
  },
});

gsap.from(
  ".section-2 .right h2, .section-2 .right p, .section-2 .right .btn-2",
  {
    x: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.3,
    scrollTrigger: {
      trigger:
        ".section-2 .right h2, .section-2 .right p, .section-2 .right .btn-2",
      scroller: "body"
    },
  }
);

//   Section 3

gsap.from(
    ".section-3 .left h2, .section-3 .left p, .section-3 .left .btn-2",
    {
      x: -100,
      opacity: 0,
      duration: .5,
      stagger: 0.3,
      scrollTrigger: {
        trigger:
          ".section-3 .left h2, .section-3 .left p, .section-3 .left .btn-2",
        scroller: "body"
      },
    }
  );

gsap.from(".section-3 .right .photo-3", {
    x: 100,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".section-3 .right .photo-3",
      scroller: "body"
    },
  });
  


 

//   Section 4
  gsap.from(".section-4 .left .photo-4", {
    x: -100,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: ".section-4 .left .photo-4",
      scroller: "body"
    },
  });
  

  gsap.from(
    ".section-4 .right h2, .section-4 .right p, .section-4 .right .btn-2",
    {
      x: 100,
      opacity: 0,
      duration: .5,
      stagger: 0.3,
      scrollTrigger: {
        trigger:
          ".section-4 .right h2, .section-4 .right p, .section-4 .right .btn-2",
        scroller: "body"
      },
    }
  );


  gsap.from(
    ".section-4 .right span #email2, .section-4 .right span .btn-4",
    {
      scale: 0,
      opacity: 0,
      delay: .5,
      duration: .5,
      stagger: 0.3,
      scrollTrigger: {
        trigger:
          ".section-4 .right span #email2, .section-4 .right span .btn-4",
        scroller: "body"
      },
    }
  );

  gsap.from(
    ".footer-logo, .footer-logo p",
    {
      x: -100,
      opacity: 0,
      duration: .5,
      stagger: .3,
      scrollTrigger: {
        trigger:
          ".footer-logo, .footer-logo p",
        scroller: "body"
      },
    }
  );

  gsap.from(
    ".footer-links h3",
    {
      scale: 0,
      opacity: 0,
      duration: .5,
      scrollTrigger: {
        trigger:
          ".footer-links h3",
        scroller: "body"
      },
    }
  );

  gsap.from(
    ".quick-links span",
    {
      opacity: 0,
      delay: .3,
      duration: .2,
      stagger: 0.2,
      scrollTrigger: {
        trigger:
          ".quick-links span",
        scroller: "body"
      },
    }
  );