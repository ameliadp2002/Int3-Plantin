import './css/reset.css'
import './css/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let button = document.querySelector(".paris__button");
let plantin = document.querySelector(".plantin");

button.addEventListener("click", () => {
  let isDesktop = window.innerWidth >= 1024;

  gsap.to(plantin, {
    x: isDesktop ? "-100vw" : "100vw", 
    duration: 0.5
  });
});

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(max-width: 800px)", () => {
  gsap.from(".eifeltoren", {
    x:200,
    duration: 4,
    scrollTrigger: {
      trigger: ".paris__text--a",
      start: "top 70%",
      end: "bottom 20%",
      scrub: 0.5, //true
    },
  });

  gsap.to(".plantin", {
    y: () => {
      const startY = document.querySelector(".plantin").offsetTop;
      const endY = document.querySelector(".trapezoid").offsetTop - 100;
      return endY - startY; 
    },
    x: -50,
    duration: 6,
    transform: "scale(0.4) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".paris__text--b",
      start: "top 70%",
      end: "bottom 20%",
      scrub: true,               
      //markers: true             
    }
  });
});

  gsap.from(".workshop__img", {
    x:-200,
    y: -100, 
    transform: "rotate(-10deg)",
    duration: 2,
    scrollTrigger: {
      trigger: ".workshop",
      start: "top 160%",
      end: "bottom 100%",
      scrub: 0.5, //true
    },
  });

gsap.to(".pilars", {
  x: -30,
  duration: 4,
  scrollTrigger: {
    trigger: ".header__text",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});

gsap.to(".workshop__paper--a", {
  x: 30,
  duration: 4,
  scrollTrigger: {
    trigger: ".workshop__text",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});

gsap.to(".workshop__paper", {
  x: 60,
  duration: 4,
  scrollTrigger: {
    trigger: ".workshop__text",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});


gsap.to(".header__title", {
  x: -10,
  duration: 4,
  scrollTrigger: {
    trigger: ".header__text",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});

gsap.to(".press", {
  x: 30,
  duration: 4,
  scrollTrigger: {
    trigger: ".header__text",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});




gsap.from(".family__img--a", {
  x:200,
  duration: 2,
  scrollTrigger: {
    trigger: ".paris__outro",
    start: "top 70%",
    end: "bottom 20%",
    scrub: 0.5, //true
  },
});



gsap.from(".antwerp", {
  x:70,
  duration: 2,
  scrollTrigger: {
    trigger: ".answer",
    start: "top 70%",
    end: "bottom 40%",
    scrub: 0.5, //true
  },
});


mm.add("(min-width: 800px)", () => {
  gsap.to(".plantin", {  
    y: () => {
      const startY = document.querySelector(".plantin").offsetTop;
      const endY = document.querySelector(".trapezoid").offsetTop - 300;
      return endY - startY; 
    },
    duration: 4,
    transform: "scale(0.5) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".paris__text--b",
      start: "top 70%",
      end: "bottom 20%",
      
      scrub: 0.5, //true
    },
  });

  gsap.from(".eifeltoren", {
    x:-200,
    transform: "rotate(-40deg)",
    duration: 4,
    scrollTrigger: {
      trigger: ".paris__text--a",
      start: "top 70%",
      end: "bottom 20%",
      scrub: 0.5, //true
    },
  });

  gsap.from(".workshop__img", {
    x:-700,
    y: -200, 
    transform: "rotate(-20deg)",
    duration: 2,
    scrollTrigger: {
      trigger: ".workshop",
      start: "top 150%",
      end: "bottom 100%",
      scrub: 0.5, //true
    },
  });
});






 const sections = [...document.querySelectorAll("section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);
const inView = (section) => {
  let top = section.offsetTop;
  let height = section.offsetHeight;

  while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    top + height > window.pageYOffset
  );
};

window.onscroll = () => {
  let next = false;

  sections.forEach((section) => {
    const a = getLinkById(section.id);

    if (inView(section) && !next) {
      a.classList.add("nav--current");
      next = true;
    } else {
      a.classList.remove("nav--current");
    }
  });
};

const circleElement = document.getElementById('circle'); // Select the circle element
const mouse = { x: 0, y: 0 }; // Store the current mouse position
const circle = { x: 0, y: 0 }; // Store the circle's position
const speed = 0.15; // Speed factor for the follow animation
const red1 = document.getElementById('red1');
const red2 = document.getElementById('red2');
const red3 = document.getElementById('red3');
const red4 = document.getElementById('red4');
const red5 = document.getElementById('red5');
const red6 = document.getElementById('red6');
const red7 = document.getElementById('red7');
const red8 = document.getElementById('red8');


window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const circleFollowMouse = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;
    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

    // Add mask logic here
    BoxOverlap(red1);
    BoxOverlap(red2);
    BoxOverlap(red3);
    BoxOverlap(red4);
    BoxOverlap(red5);
    BoxOverlap(red6);
    BoxOverlap(red7);
    BoxOverlap(red8);
  
  

    window.requestAnimationFrame(circleFollowMouse);
}

const BoxOverlap = (box) => {
    const boxRect = box.getBoundingClientRect();

    const maskX = circle.x - boxRect.left;
    const maskY = circle.y - boxRect.top;

    const isOverlapping = !(
        circle.x < boxRect.left ||
        circle.x > boxRect.right ||
        circle.y < boxRect.top ||
        circle.y > boxRect.bottom
    );

    if (isOverlapping) {
        box.style.maskImage = `radial-gradient(circle 100px at ${maskX + 10}px ${maskY + 1}px, transparent 100%, black 101%)`;
        box.style.WebkitMaskImage = `radial-gradient(circle 100px at ${maskX + 1}px ${maskY + 1}px, transparent 100%, black 101%)`;
    } else {
        box.style.maskImage = 'none';
        box.style.WebkitMaskImage = 'none';
    }
}

const isDesktop = () => {
  return window.matchMedia("(min-width: 1024px)").matches;
};

if (isDesktop()) {
  circleFollowMouse();
}

  


