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
