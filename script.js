/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
    document.getElementById("mobile-menu-btn");

const mobileMenu =
    document.getElementById("mobile-menu");


mobileMenuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");

    const icon =
        mobileMenuBtn.querySelector("i");

    if (mobileMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        const icon =
            mobileMenuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active class */

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        /* Filter items */

        portfolioItems.forEach(function (item) {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   PORTFOLIO MODAL
========================================= */

const modal =
    document.getElementById("project-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalCategory =
    document.getElementById("modal-category");

const modalDescription =
    document.getElementById("modal-description");

const modalClose =
    document.getElementById("modal-close");

const modalCloseBottom =
    document.getElementById("modal-close-bottom");


/* Open modal */

portfolioItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const title =
            item.getAttribute("data-title");

        const category =
            item.getAttribute("data-category");

        const description =
            item.getAttribute("data-description");


        modalTitle.textContent = title;

        modalCategory.textContent = category;

        modalDescription.textContent = description;


        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalCloseBottom.addEventListener(
    "click",
    closeModal
);


/* Close when clicking outside */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeModal();

    }

});


/* Close with Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contact-form");

const feedback =
    document.getElementById("form-feedback");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const submitButton =
        contactForm.querySelector(".submit-btn");

    const originalHTML =
        submitButton.innerHTML;


    /* Loading */

    submitButton.disabled = true;

    submitButton.innerHTML =
        '<span>Sending...</span>';


    /* Fake submission */

    setTimeout(function () {

        submitButton.disabled = false;

        submitButton.innerHTML =
            originalHTML;


        /* Show success message */

        feedback.classList.add("show");


        /* Reset form */

        contactForm.reset();


        /* Hide message */

        setTimeout(function () {

            feedback.classList.remove("show");

        }, 6000);

    }, 1200);

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(10, 10, 12, 0.96)";

    } else {

        header.style.background =
            "rgba(10, 10, 12, 0.82)";

    }

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .portfolio-item, .profile-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});