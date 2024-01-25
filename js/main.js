let lenis;

const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    ease: "linear"
  });
  lenis.on('scroll', () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};
// lenis
initSmoothScrolling();
// splitting
Splitting();
// gsap
gsap.registerPlugin(ScrollTrigger);

// 작업할때
function working() {
  gsap.set(".wrap_deco_box", {
    display: 'none',
    opacity: 0
  });
  gsap.set('body', {
    overflow: "initial"
  });
  gsap.set("main", {
    height: "auto"
  });
  gsap.set('.icon', {
    opacity: 0
  });
  gsap.set('.icon2', {
    opacity: 0
  });
  gsap.set('.home', {
    overflow: 'initial'
  });
  cardHover();
  decoAni();
  header();
  home();
  about()
  cube()
  work()
  contact()
  canvasScroll()
  backgroundColor()
  document.querySelector('.deco-circle').classList.add('active');
  document.querySelectorAll('.mini_sh_img').forEach((e) => {
    e.classList.add('active');
  });

}
// working()

//! ------------------intro-----------------------

function introAni() {
  function typing() {
    document.querySelector('.typing').classList.add('typing_ani')
  }
  let introTl = gsap.timeline({
    onComplete: function () {
      document.querySelector('.deco-circle').classList.add('active');
      document.querySelectorAll('.mini_sh_img').forEach((e) => {
        e.classList.add('active');
      });
      cardHover();
      decoAni();
      header();
      home()
      about()
      cube()
      work()
      contact()
      canvasScroll()
      backgroundColor()
    }
  });
  gsap.set('body', {
    overflow: "hidden"
  });
  gsap.set('.main', {
    overflow: "hidden"
  });
  gsap.set('.icon', {
    opacity: 0
  });
  gsap.set('.icon2', {
    opacity: 0
  });
  gsap.set('.home', {
    transform: `scale(0.6) translateY(-10%) rotate(-360deg)`,
  });
  gsap.set('.home', {
    border: "1px solid #2f2f2f"
  });
  gsap.set('.wrap_deco_box img', {
    opacity: 0,
  });
  gsap.set('.typing', {
    opacity: 0
  })
  //-----------
  introTl.from(".home", {
    y: -150,
    opacity: 0,
    stagger: 1,
    duration: 2
  });
  introTl.from(".console-box", {
    y: 50,
    opacity: 0,
    stagger: 1,
    duration: 2
  }, "<");
  introTl.to(".wrap_deco_box img", {
    stagger: {
      from: "random",
      amount: 0.5,
    },
    opacity: 0.35,
    scale: 0.8,
  });
  introTl.to('.typing', {
    opacity: 1,
    onStart: typing
  })
  introTl.to(".intro_cursor", {
    duration: 2,
    right: '7%',
    bottom: '30%',
  }, "+=5");
  introTl.to(".intro_btn", {
    backgroundColor: '#1f1f1f',
    scale: 1.1
  });
  introTl.to(".wrap_deco_box", 1, {
    display: 'none',
    opacity: 0
  });
  introTl.to(".home", 1, {
    transform: `scale(1) translateY(0%) rotate(360deg)`,
  });
  introTl.to(".home", 0.3, {
    border: "none",
    overflow: "initial"
  });
  introTl.to("main", {
    height: "auto"
  });
  introTl.to("body", {
    overflow: "initial",
  }, ">");
  introTl.to(".main", {
    overflow: "initial",
  }, ">");
}
introAni();
//! ----------------card hover--------------------
function cardHover() {
  let card = document.querySelector('.card_profile');
  let effect = document.querySelector('.card_effect');

  card.addEventListener('mousemove', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let rotateY = -1 / 50 * x + 10;
    let rotateX = 1 / 50 * y - 5;

    effect.style = `background-position: ${x / 10 + y / 10}%`;
    card.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseout', function () {
    effect.style.transition = 'opacity 0.5s ease';
    effect.style.opacity = 0;

    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'perspective(100vw) rotateY(0deg) rotateX(0deg)';
  });
};

//! --------------time , cursor-------------------
function decoAni() {
  document.addEventListener('mousemove', (e) => {
    document.querySelector('.deco-wrap .mouse .x').innerHTML = `${e.clientX}`
    document.querySelector('.deco-wrap .mouse .y').innerHTML = `${e.clientY}`
  });

  setInterval(() => {
    const date = new Date();
    const h = ('0' + date.getHours()).slice(-2);
    const m = ('0' + date.getMinutes()).slice(-2);
    const s = ('0' + date.getSeconds()).slice(-2);
    const time = h + ':' + m + ':' + s;

    document.querySelector('.deco-wrap .time').innerHTML = time
  }, 1000);
}

//! -----------------header-----------------------
function header() {
  const card3 = document.querySelector('#header_card3');
  const toggleBtn = document.querySelector('.toggle button');
  const cards = document.querySelectorAll('.header_card');
  const toggleDiv = document.querySelector('.toggle');
  const wrap = document.querySelector('.wrap');

  let isCardOpen = false;

  card3.addEventListener("click", () => {
    if (!isCardOpen) {
      gsap.to(cards, {
        top: "0px",
        duration: 1,
        ease: "power4.inOut"
      });
      gsap.to(toggleDiv, {
        delay: 0.4,
        display: "flex",
        opacity: 1,
        duration: 0.4,
        ease: "power4.inOut"
      });
      gsap.to(wrap, {
        filter: "blur(20px)",
        duration: 0.75,
        ease: "power4.inOut"
      });

      isCardOpen = true
    }
  });

  toggleBtn.addEventListener("click", () => {
    if (isCardOpen) {
      gsap.to("#header_card1", {
        top: "0px",
        duration: 1,
        ease: "power4.inOut"
      });
      gsap.to("#header_card2", {
        top: "-100px",
        duration: 1,
        ease: "power4.inOut"
      });
      gsap.to("#header_card3", {
        top: "-200px",
        duration: 1,
        ease: "power4.inOut"
      });
      gsap.to(toggleDiv, {
        delay: 0,
        display: "none",
        opacity: 0,
        duration: 0.4,
        ease: "power4.inOut"
      });
      gsap.to(wrap, {
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.inOut"
      });
      isCardOpen = false;
    }
  });


}

//! -----------------home-------------------------
function home() {
  gsap.to('.icon', {
    opacity: 1
  })
  gsap.to('.icon2', {
    opacity: 1
  })
  gsap.to('.icon', 0.7, {
    opacity: 0
  })
  gsap.to('.icon2', 0.9, {
    opacity: 0
  })

  let circle = new TimelineMax()

    .to('.title_circle', 0.5, {
      width: '15vw',
      delay: 1,
      borderColor: "#fff"
    })
    .to('.title_circle', 0.5, {
      width: '5vw',
      delay: 1.5
    })
    .repeat(-1)

  let word = new TimelineMax()
    .addLabel('b')
    .to('.home_char', 0.7, {
      visibility: 'visible'
    }, 'b')
    .to('.home_char', 0.7, {
      opacity: 1
    }, 'b')

    .addLabel('a')
    .to('.home_char', 0.7, {
      opacity: 0
    }, 'a')
    .to('.icon', 0.7, {
      opacity: 1
    }, 'a')

    .repeat(-1);

  let char2 = new TimelineMax()
    .addLabel('b')
    .to('.home_char2', 0.7, {
      visibility: 'visible',
      delay: 0.5
    }, 'b')
    .to('.home_char2', 0.7, {
      opacity: 1,
      delay: 0.5
    }, 'b')

    .addLabel('a')
    .to('.home_char2', 0.7, {
      opacity: 0,
      delay: 0.5
    }, 'a')
    .to('.icon2', 0.7, {
      opacity: 1,
      delay: 0.5
    }, 'a')

    .repeat(-1);

  gsap.to('.title_box:nth-child(1)', {
    scrollTrigger: {
      trigger: '.title_box:nth-child(1)',
      start: 'bottom 30%',
      scrub: 0.5
    },
    xPercent: -20,
  });
  gsap.to('.title_box:nth-child(2)', {
    scrollTrigger: {
      trigger: '.title_box:nth-child(1)',
      start: 'bottom 30%',
      scrub: 0.5
    },
    xPercent: 20,
  });
  gsap.to('.title_box:nth-child(3)', {
    scrollTrigger: {
      trigger: '.title_box:nth-child(1)',
      start: 'bottom 30%',
      scrub: 0.5
    },
    xPercent: -10
  });
  gsap.to('.card_profile', {
    scrollTrigger: {
      trigger: '.title_box:nth-child(1)',
      start: 'bottom 30%',
      scrub: 1.5
    },
    yPercent: -20,
    xPercent: -10
  });

  gsap.from('.line', {
    scrollTrigger: {
      trigger: '.line',
      start: 'top 90%',
      scrub: 1
    },
    height: 0,
  });
}

//! -----------------about-------------------------
function about() {

  gsap.set('.content-box1', {
    clipPath: 'inset(30% 0% round 10%)'
  });
  gsap.set('.content-box2', {
    clipPath: `polygon(0 0, 100% 0, 100% 0, 0 0)`
  });

  gsap.set('.about_cont', {
    yPercent: -30
  });

  const commonScrollTrigger = {
    start: "center center",
    end: "+=1000",
    scrub: true,
  };

  // about_cont1
  let tl1 = gsap.timeline({});
  tl1.to('.content-box1', {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont1",
      duration: 2,
      pin: true
    },
    clipPath: `inset(0px 0px round 0px)`,
    filter: `blur(0px)`
  });

  tl1.to(".about_cont1 .text_desc .char", {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont1",
    },
    stagger: 0.05,
    color: "#000"
  }, ">");
  tl1.to(".about_cont1 .text_tit .char", {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont1",
    },
    stagger: 0.05,
    color: "#000"
  }, ">");

  // about_cont2

  let tl2 = gsap.timeline({});
  tl2.to('.content-box2', {
    scrollTrigger: {
      ...commonScrollTrigger,
      pin: true,
      trigger: ".about_cont2",
      duration: 2
    },
    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
    filter: `blur(0px)`,
    yPercent: 10
  });

  tl2.to(".about_cont2 .text_desc .char", {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont2",
    },
    stagger: 0.05,
    color: "#000"
  }, ">");
  tl2.to(".about_cont2 .text_tit .char", {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont2",
    },
    stagger: 0.05,
    color: "#000"
  }, ">");

  gsap.from('.tit', {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".line",
      start: 'bottom 80%',
      scrub: 1.9,
      ease: "Expo.easeInOut"
    },
    yPercent: 50
  });

  gsap.from('.content-box1', {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont1",
      start: 'top 80%',
      end: '30% 20%',
      scrub: 1.9,
    },
    yPercent: 30
  });

  gsap.from('.content-box2', {
    scrollTrigger: {
      ...commonScrollTrigger,
      trigger: ".about_cont2",
      start: 'top 80%',
      end: '30% 20%',
    },
    yPercent: 30
  });
  //----my-ab 

  gsap.from('.my-ab1', 1, {
    scrollTrigger: {
      trigger: ".my-ab1",
      start: 'top 80%',
      end: "+=600",
      scrub: 1.9,
    },
    opacity: 0,
    yPercent: 50,
  })
  gsap.from('.my-ab2', 1, {
    scrollTrigger: {
      trigger: ".my-ab2",
      start: 'top 80%',
      end: "+=600",
      scrub: 1.9,
    },
    opacity: 0,
    yPercent: 50,
  })

  gsap.defaults({
    overwrite: "auto",
  });

  gsap.fromTo(".ab-pic", {
    y: -25
  }, {
    duration: 1,
    y: 25,
    ease: "sine.inOut",
    stagger: {
      each: 0.1,
      yoyo: true,
      repeat: -1
    }
  });

  gsap.fromTo(".ab-pic", {
    rotationY: -90
  }, {
    scrollTrigger: {
      trigger: ".ab-pic",
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    },
    rotationY: 90,
    ease: "none",
    stagger: 0.03
  });

  gsap.fromTo(".ab-pic", {
    opacity: 0.2
  }, {
    scrollTrigger: {
      trigger: ".ab-pic",
      scrub: true,
      start: "top bottom",
      end: "bottom center"
    },
    opacity: 1,
    ease: "none",
    stagger: 0.03
  });

  let mqTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".muquree-txt1",
      start: "top 90%",
      end: "180% 90%",
      scrub: true,
    }
  })

  mqTl.to(".strip-r", {
    marginLeft: "-50%"
  }, "green")
  mqTl.to(".strip-l", {
    marginLeft: "0%"
  }, "green")
}

//! -----------------work--------------------------
function work() {
  let slides = document.querySelectorAll('.slide');

  gsap.to(slides, {
    xPercent: -120 * (slides.length - 1),
    scrollTrigger: {
      trigger: '.page',
      start: 'top top',
      end: "+=5000",
      scrub: 1,
      pin: true,
    }
  });
  gsap.to('.waiking', {
    scrollTrigger: {
      trigger: '.page',
      start: 'top top',
      end: "+=5000",
      scrub: 1,
    },
    left: '100%'
  });

  let character = document.querySelector('.waiking img')

  //🏳스크롤감지
  function checkScrolling(character) {
    let scrolling
    let preScrollTop = 0;

    window.addEventListener('scroll', () => {
      let nextScrollTop = window.scrollY;

      if (preScrollTop < nextScrollTop) {
        character.classList.remove('rotate')
      } else { // (preScrollTop > nextScrollTop)
        character.classList.add('rotate')
      }
      preScrollTop = nextScrollTop;

      if (!scrolling) {
        character.classList.add('run')
        character.src = `img/어몽어스.gif`
        if (character.classList.contains('rotate')) {
          character.src = `img/어몽어스_back.gif`
        }
      }

      // 일정시간(250ms) 뒤에 스크롤 동작 멈춤을 감지
      clearTimeout(scrolling);
      scrolling = setTimeout(() => {

        character.classList.remove('run')

        character.src = `img/어몽어스_stop.png`
        if (character.classList.contains('rotate')) {
          character.src = `img/어몽어스_stop_back.png`
        }

        scrolling = undefined;

      }, 100);

    })
  }

  checkScrolling(character)

  // sticky
  projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.project_container',
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
    },
    ease: 'none',
  });

  projectTl
    .to('.project_sticky .project1', {
      bottom: '100%'
    })
    .to('.project_sticky .project2', {
      bottom: '100%'
    })
    .to('.project_sticky .project3', {
      bottom: '100%'
    })
    .to('.project_sticky .project4', {
      bottom: '100%'
    })

  gsap.from('.work_line', {
    scrollTrigger: {
      trigger: '.work_line',
      start: 'top 90%',
      scrub: 1
    },
    height: 0,
  });

}

//! -----------------cube--------------------------
function cube() {
  // 큐브 돌아가는 애니메이션
  const cubecontainers = document.querySelectorAll('.cube_container');
  const items = document.querySelectorAll('.cube_item');
  const projectNames = ['Molang', 'Keyboard', 'ice cream', 'linear'];

  function updateCubes(scrollY) {
    const yRotation = (scrollY / 2) % 360;
    const scrollOffset = scrollY * 0.25;

    cubecontainers.forEach((container, containerIndex) => {
      const cubes = container.querySelectorAll('.cube');

      cubes.forEach((cube, cubeIndex) => {
        let rotationDirection = cubeIndex % 2 === 0 ? 1 : -1;
        cube.style.transform =
          `translateZ(100px) rotateX(${yRotation * rotationDirection}deg)`;
      });

    });
  }

  window.onload = function () {
    updateCubes(window.scrollY);
  };

  let ticking = false;

  document.addEventListener('scroll', function (e) {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateCubes(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  });

  // 큐브 텍스트
  gsap.to(".cube_text", {
    scrollTrigger: {
      trigger: ".project-1",
      start: "center top",
      end: "bottom top",
      scrub: true
    },
    marginTop: `-6vw`
  });
  gsap.to(".cube_text", {
    scrollTrigger: {
      trigger: ".project-2",
      start: "center top",
      end: "bottom top",
      scrub: true
    },
    y: `-6vw`
  });
  gsap.to(".cube_3d", {
    scrollTrigger: {
      trigger: ".project-1",
      start: "center top",
      end: "bottom top",
      scrub: true
    },
    marginTop: `-5.2vw`
  });
  gsap.to(".cube_3d", {
    scrollTrigger: {
      trigger: ".project-2",
      start: "center top",
      end: "bottom top",
      scrub: true
    },
    y: `-5.2vw`
  });


}

//! -----------------matter------------------------

let custumFont;
let canvas;
let engine;
let world;
let words = [];
let ground, wallLeft, wallRight;
let wordsToDisplay = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "JQUERY",
  "FIGMA",
  "PHOTOSHOP",
  "ILLUSTRATOR",
  "REACT",
];
let isDragging = false;
let draggedWord = null;

function preload() {
  custumFont = loadFont("../fonts/Syne-Regular.ttf");
}

const {
  Bodies,
  Body,
  Engine,
  World
} = Matter;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 60);
  canvas.parent('canvas_container'); // Make sure the canvas is a child of the specified container

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width / 2, height - 20, width, 10, {
    isStatic: true,
  });
  wallLeft = Bodies.rectangle(0, height / 2, 10, height, {
    isStatic: true,
  });
  wallRight = Bodies.rectangle(width, height / 2, 10, height, {
    isStatic: true,
  });

  World.add(world, [ground, wallLeft, wallRight]);

  for (let i = 0; i < wordsToDisplay.length; i++) {
    const newY = random(-height, -50);

    if (words[i] && words[i].body) {
      World.remove(world, words[i].body);
    }

    words[i] = new Word(random(width), newY, wordsToDisplay[i]);
  }
}

function draw() {
  background(206, 206, 206);
  Engine.update(engine);

  for (let word of words) {
    word.show();
  }

  if (isDragging && draggedWord) {
    Body.setPosition(draggedWord.body, {
      x: mouseX,
      y: mouseY,
    });
  }
}

class Word {
  constructor(x, y, word) {
    this.body = Bodies.rectangle(x, y, word.length * 40 + 80, 100);
    this.word = word;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    stroke("#2f2f2f");
    strokeWeight(5);
    rect(0, 0, this.word.length * 40 + 80, 100, 60);
    noStroke();
    textFont(custumFont);
    fill("#2f2f2f");
    textSize(40);
    textAlign(CENTER, CENTER);
    text(this.word.toUpperCase(), 0, 0);
    pop();
  }
}

function mouseMoved() {
  for (let word of words) {
    const distance = dist(
      mouseX,
      mouseY,
      word.body.position.x,
      word.body.position.y
    );

    if (distance < 50) {
      Body.applyForce(
        word.body, {
          x: word.body.position.x,
          y: word.body.position.y,
        }, {
          x: random(0.2, 0.2),
          y: random(-0.2, 0.2),
        }
      );
    }
  }
}

function mousePressed() {
  for (let word of words) {
    const distance = dist(
      mouseX,
      mouseY,
      word.body.position.x,
      word.body.position.y
    );
    if (distance < 50) {
      isDragging = true;
      draggedWord = word;
      break;
    }
  }
}

function mouseReleased() {
  isDragging = false;
  draggedWord = null;
}

function canvasScroll() {
  gsap.to("#canvas_container", {
    scrollTrigger: {
      trigger: ".muquree-txt",
      start: "50% top",
      // markers: true,
      onEnter: function () {
        setup();
      },
      once: true,
    },
  });
}

//! -----------------background----------------------
function backgroundColor() {
  // 백그라운드 색
  ScrollTrigger.create({
    trigger: "[data-dark]",
    start: "75% bottom",
    end: "100% 40%",
    toggleClass: {
      targets: "body",
      className: "dark"
    }
  });
}

//! --------------------contact----------------------
function contact() {
  textTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact',
      start: "20% 80%",
      end: "10% 30%",
      // markers: true,
      scrub: 0,
    },
    ease: 'none',
  })
  gsap.set('.contact_box1 p', {
    transform: `translateX(270%)`,
    opacity: 0
  });
  gsap.set('.contact_box2 p', {
    transform: `translateX(-50%)`,
    opacity: 0
  });
  textTl
    .from('.contact_box1', {
      width: 0
    }, 'a')
    .from('.contact_box2', {
      width: 0
    }, 'a')
    .to('.contact_text_left span', {
      xPercent: -85
    }, 'a')
    .to('.contact_text_right span', {
      xPercent: 78
    }, 'a')
    .to('.contact_box1 p', {
      transform: `translateX(0%)`,
      opacity: 1
    }, '-=0.5')
    .to('.contact_box2 p', {
      transform: `translateX(0%)`,
      opacity: 1
    }, '-=0.5');
}