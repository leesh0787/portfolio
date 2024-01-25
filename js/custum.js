// 마우스커서

function cursor() {
  function addActive() {
    cursor.addClass("active");
    follow.addClass("active");
  };

  function removeActive() {
    cursor.removeClass("active");
    follow.removeClass("active");
  };

  function addActive2() {
    cursor.addClass("active2");
    follow.addClass("active2");
  };

  function removeActive2() {
    cursor.removeClass("active2");
    follow.removeClass("active2");
  };

  let cursor = $(".cursor"),
    follow = $(".follow"),
    posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
      posX += (mouseX - posX) / 7
      posY += (mouseY - posY) / 7

      gsap.set(cursor, {
        css: {
          left: mouseX - 5,
          top: posY - 5
        }
      });
      gsap.set(follow, {
        css: {
          left: posX - 15,
          top: posY - 15
        }
      });
    }
  });

  $(window).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  })

  $(".header_card").on("mousemove", addActive);
  $(".header_card").on("mouseleave", removeActive);
  $(".toggle button").on("mousemove", addActive);
  $(".toggle button").on("mouseleave", removeActive);
  $(".menu_close").on("mousemove", addActive);
  $(".menu_close").on("mouseleave", removeActive);
  $(".menu-link a").on("mousemove", addActive);
  $(".menu-link a").on("mouseleave", removeActive);
  $(".menu_open").on("mousemove", addActive);
  $(".menu_open").on("mouseleave", removeActive);
  $(".contact_social").on("mousemove", addActive);
  $(".contact_social").on("mouseleave", removeActive);
  $(".slide").on("mousemove", addActive2);
  $(".slide").on("mouseleave", removeActive2);
  $(".project_desc_btn a").on("mousemove", addActive2);
  $(".project_desc_btn a").on("mouseleave", removeActive2);
  $(".project_responsive").on("mousemove", addActive2);
  $(".project_responsive").on("mouseleave", removeActive2);
}
cursor();

// header 메뉴

function menu() {
  tl = new TimelineMax({
    paused: true
  });

  tl.to(".menu-left", {
    left: 0,
    ease: "Expo.easeInOut"
  });

  tl.to(".menu-right", {
    right: 0,
    ease: "Expo.easeInOut"
  }, "<");

  tl.staggerFrom(".menu-links > div", 0.8, {
    y: 100,
    opacity: 0,
    ease: "Expo.easeInOut"
  }, "0.1", "-=0.4");

  tl.staggerFrom(".mail > div, .phone > div", 0.8, {
    y: 100,
    opacity: 0,
    ease: "Expo.easeInOut"
  }, "0.1", "-=0.1");

  tl.from(".menu_close", 1, {
    scale: 0,
    opacity: 1,
    ease: "Expo.easeInOut"
  }, "-=1");

  tl.to(".hr", 0.4, {
    scaleY: 1,
    transformOrigin: "0% 50%",
    ease: "Power2.ease"
  }, "-=2")

  tl.eventCallback("onComplete", function () {
    $('.cursor').css({
      'background-color': 'gold',
    });
    $('.follow').css({
      'border-color': 'gold',
    });
  });

  tl.eventCallback("onReverseComplete", function () {
    $('.cursor').css({
      'background-color': '',
    });
    $('.follow').css({
      'border-color': '',
    });
  });

  tl.reverse();
  $(document).on("click", ".menu_open", function () {
    tl.reversed(!tl.reversed());
  });
  $(document).on("click", ".menu_close", function () {
    tl.reversed(!tl.reversed());
  });
  $(document).on("click", ".menu-link a", function () {
    tl.reversed(!tl.reversed());
  });

  let lastScrollTop = 0;

  $(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();

    if (scrollPosition > lastScrollTop) {
      $('.header_cards').css({
        "transform": "translateY(-150%) translateZ(0)",
      });
    } else {
      $('.header_cards').css({
        "transform": "translateY(0%) translateZ(0)",
      });
    }

    lastScrollTop = scrollPosition;
  });

}
menu()


