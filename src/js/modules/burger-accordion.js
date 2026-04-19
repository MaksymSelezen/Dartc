import Accordion from "accordion-js";

const burgerAccordion = document.querySelector(".js-burger-accordion");

if (burgerAccordion) {
  new Accordion(burgerAccordion, {
    duration: 300,
    showMultiple: false,
    collapse: true,
    openOnInit: [2],
    elementClass: "burger-menu__accordion-item",
    headerClass: "burger-menu__accordion-header",
    triggerClass: "burger-menu__button",
    panelClass: "burger-menu__panel",
    activeClass: "burger-menu__accordion-item_open",
  });
}
