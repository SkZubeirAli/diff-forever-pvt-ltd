 

 AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    delay: 0
});


document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("menuToggle");
    const navMenu = document.getElementById("headerNav");
    const closeBtn = document.getElementById("menu_close");

    // OPEN / TOGGLE MENU
    toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        navMenu.classList.add("active");
    });

    // CLOSE MENU BY CLOSE BUTTON
    closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        navMenu.classList.remove("active");
    });

    // CLICK OUTSIDE MENU TO CLOSE
    document.addEventListener("click", function (e) {

        if (
            navMenu.classList.contains("active") &&
            !navMenu.contains(e.target) &&
            !toggleBtn.contains(e.target)
        ) {
            navMenu.classList.remove("active");
        }

    });

});

window.addEventListener("scroll", function () {

    const header = document.getElementById("siteHeader");

    if (window.scrollY > 150) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }

});




document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".count");
    let started = false;

    function startCounting() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 100;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                startCounting();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(document.querySelector("#stats-section"));

});



    var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  grabCursor: true,
});


document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 200) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});





document.getElementById('quoteForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Your request has been submitted!');
      this.reset();
    });

