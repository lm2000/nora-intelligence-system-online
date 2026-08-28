(() => {
  const dropdowns = [...document.querySelectorAll(".site-nav .nav-dropdown")];
  if (!dropdowns.length) return;

  const closeOthers = (current) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== current) dropdown.removeAttribute("open");
    });
  };

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) closeOthers(dropdown);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-nav .nav-dropdown")) {
      dropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
    }
  });
})();
