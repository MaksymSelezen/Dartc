const openButton = document.querySelector(".js-open-burger-menu");
const closeButton = document.querySelector(".js-close-burger-menu");
const menu = document.querySelector(".js-burger-menu");
const menuInner = document.querySelector(".burger-menu__inner");

if (openButton && closeButton && menu && menuInner) {
  const ANIMATION_DURATION = 300;
  let isClosing = false;

  const openMenu = () => {
    if (isClosing) return;

    menu.hidden = false;

    requestAnimationFrame(() => {
      menu.classList.add("burger-menu_is-open");
      menu.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    });
  };

  const closeMenu = () => {
    if (isClosing || menu.hidden) return;

    isClosing = true;
    menu.classList.remove("burger-menu_is-open");
    menu.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    setTimeout(() => {
      menu.hidden = true;
      isClosing = false;
    }, ANIMATION_DURATION);
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  menu.addEventListener("click", (event) => {
    if (!menuInner.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      closeMenu();
    }
  });
}
