export const IO = function (item, options) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          resolve();
        }
      });
    }, options);

    observer.observe(item);
  });
};
