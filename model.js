import { toast as toastHTML } from "./view.js";

export const removeClassOnIntersection = (className) =>
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.remove(className);
    });
  };

export const handleMouseMove = (mouseFollower) => (event) => {
  const { height, width } = mouseFollower.getBoundingClientRect();
  const { clientX, clientY } = event;

  mouseFollower.style.left = clientX - width / 2 + "px";
  mouseFollower.style.top = clientY - height / 2 + "px";
};

export const handleCardClick = (card) =>
  function () {
    document.body.insertAdjacentHTML("beforeend", card);
    window.document.body.classList.add("disable-scroll");

    const backdrop = document.querySelector(".backdrop");
    backdrop.addEventListener("click", handleBackdropClick);

    const reset = () => {
      document.querySelector(".modal").remove();
      backdrop.removeEventListener("click", handleBackdropClick);
      window.document.body.classList.remove("disable-scroll");
    };

    function handleBackdropClick(e) {
      if (e.target !== backdrop) return;
      reset();
    }
  };

export function createToast(message, toastDuration) {
  window.document.body.insertAdjacentHTML("beforeend", toastHTML(message));
  const toast = document.querySelector(".toast");

  setTimeout(() => {
    toast.classList.remove("hidden");

    setTimeout(() => {
      toast.classList.add("hidden");
      toast.addEventListener("transitionend", function deleteToast() {
        toast.remove();
        toast.removeEventListener("transitionend", deleteToast);
      });
    }, toastDuration);
  }, 100);
}

export const addRemoveClassOnIntersection = (element, className) =>
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) return element.classList.add(className);
      element.classList.remove(className);
    });
  };

export const handleContactBtn = (contactForm, toastDuration, email) => (btn) =>
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

      createToast("Sporočilo je bilo poslano", toastDuration);
      reset();
    }

    backdrop.addEventListener("click", handleBackdropClick);
    formButton.addEventListener("click", handleFormSubmit);
  });
