export const addClassOnIntersection = (element, className) =>
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    });
  };

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
