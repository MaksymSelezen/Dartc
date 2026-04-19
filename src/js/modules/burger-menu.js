const openButton = document.querySelector(".js-open-burger-menu");
const closeButton = document.querySelector(".js-close-burger-menu");
const menu = document.querySelector(".js-burger-menu");
const menuInner = document.querySelector(".burger-menu__inner");

if (openButton && closeButton && menu && menuInner) {
  const setMenuState = (isOpen) => {
    menu.hidden = !isOpen;
    menu.setAttribute("aria-hidden", String(!isOpen));
    openButton.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  openButton.addEventListener("click", () => {
    setMenuState(true);
  });

  closeButton.addEventListener("click", () => {
    setMenuState(false);
  });

  menu.addEventListener("click", (event) => {
    if (!menuInner.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      setMenuState(false);
    }
  });
}
