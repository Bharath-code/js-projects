function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
    attr: (name, value) => {
      if (value === null) {
        self.element.getAttribute(name);
      } else {
        self.element.setAttribute(name, value);
      }
    },
  };
  return self;
}

console.log($("h2").on("click", () => alert("click")));
console.log($("h2").hide());
console.log($("h3").attr("class", "functionClass"));
