"use strict";

const email = "johndoe@gmail.com";

const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");

const mouseFollower = document.querySelector(".mouse-follower");
const contactBtns = document.querySelectorAll(".contact-email");

const tehcnologies = document.querySelectorAll(".technology");
const projects = document.querySelectorAll(".projects > div");
const aboutMeParagraphs = document.querySelectorAll(".about-me p");
const timeLineTextBoxes = document.querySelectorAll(".time-line__text-box");

const lazyLoadable = [
  ...tehcnologies,
  ...projects,
  ...aboutMeParagraphs,
  ...timeLineTextBoxes,
];

lazyLoadable.forEach((t) => {
  t.style.transition = "all 0.2s";
  t.classList.add("lazy-load");
});

console.log(tehcnologies);

const contactForm = `
    <div class="modal">
      <div class="backdrop">
        <form class="contact">
          <h2 class="contact__header">Kontakt</h2>

          <label for="#subject" class="contact__subject">Zadeva</label>
          <input
            type="text"
            class="contact__input"
            placeholder="Zadeva"
            id="#subject"
          />
          <p class="contact__subject-error"></p>

          <label for="#message" class="contact__message">Sporočilo</label>
          <textarea
            class="contact__textarea"
            placeholder="Sporočilo"
            id="#message"
          ></textarea>
          <p class="contact__message-error"></p>

          <button class="contact__button">Pošlji</button>
        </form>
      </div>
    </div>`;

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) return navbar.classList.add("hidden");
      navbar.classList.remove("hidden");
    });
  },
  { threshold: 0.5 }
);

const footerObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    });
  },
  { threshold: 0.1 }
);

const lazyLoadObserver = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.remove("lazy-load");
    });
  },
  { threshold: 0.5 }
);

// const lazyLoadObserver = new IntersectionObserver(
//   function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) entry.classList.remove("hidden");
//       console.log("interesecting");
//     });
//   },
//   { threshold: 0.5 }
// );

window.addEventListener("mousemove", function (event) {
  const { height, width } = mouseFollower.getBoundingClientRect();
  const { clientX, clientY } = event;

  mouseFollower.style.left = clientX - width / 2 + "px";
  mouseFollower.style.top = clientY - height / 2 + "px";
});

contactBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", contactForm);
    window.document.body.classList.add("disable-scroll");

    const subject = document.querySelector(".contact__input");
    const message = document.querySelector(".contact__textarea");
    const subjectError = document.querySelector(".contact__subject-error");
    const messageError = document.querySelector(".contact__message-error");
    const formButton = document.querySelector(".contact__button");
    const backdrop = document.querySelector(".backdrop");

    const reset = () => {
      document.querySelector(".modal").remove();
      backdrop.removeEventListener("click", handleBackdropClick);
      window.document.body.classList.remove("disable-scroll");
    };

    function handleBackdropClick(e) {
      if (e.target !== backdrop) return;
      reset();
    }

    backdrop.addEventListener("click", handleBackdropClick);

    function handleFormSubmit(e) {
      e.preventDefault();

      const subjectText = subject.value;
      const messageText = message.value;

      if (!subjectText) subjectError.textContent = "Zadeva je obvezna";
      else subjectError.textContent = "";

      if (!messageText) messageError.textContent = "Sporočilo je obvezno";
      else messageError.textContent = "";

      if (!subject.value || !message.value) return;

      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(messageText)}`;

      reset();
    }

    formButton.addEventListener("click", handleFormSubmit);
  })
);

navObserver.observe(hero);
footerObserver.observe(footer);
lazyLoadable.forEach((t) => lazyLoadObserver.observe(t));
