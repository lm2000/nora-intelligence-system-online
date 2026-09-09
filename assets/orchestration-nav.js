(() => {
  const nav = document.querySelector("[data-orchestration-nav]");
  if (!nav) return;

  const legacyAnchors = {
    "#section-1": "#understand",
    "#section-2": "#coordinate",
    "#section-3": "#decide",
    "#section-4": "#act",
    "#section-5": "#learn"
  };
  if (legacyAnchors[window.location.hash]) {
    const target = legacyAnchors[window.location.hash];
    history.replaceState(null, "", target);
    requestAnimationFrame(() => document.querySelector(target)?.scrollIntoView());
  }

  const hero = nav.closest(".hero, .case-hero");
  const links = [...nav.querySelectorAll("a[href^='#']")];
  const sections = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((entry) => entry.section);

  const activate = (id) => {
    for (const { link, section } of sections) {
      link.toggleAttribute("aria-current", section.id === id);
    }
  };

  const observer = new IntersectionObserver((observed) => {
    const visible = observed
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) activate(visible.target.id);
  }, { rootMargin: "-18% 0px -64% 0px", threshold: [0.05, 0.2, 0.5] });

  sections.forEach(({ section }) => observer.observe(section));
  activate(sections[0]?.section.id);

  let dockAnimation;

  const dock = () => {
    const shouldDock = window.scrollY > hero.offsetHeight - 150;
    const isDocked = nav.classList.contains("is-docked");
    if (shouldDock === isDocked) return;

    const first = nav.getBoundingClientRect();
    nav.classList.toggle("is-docked", shouldDock);
    document.documentElement.classList.toggle("has-docked-orchestration", shouldDock);
    const last = nav.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width;
    const sy = first.height / last.height;

    dockAnimation?.cancel();
    dockAnimation = nav.animate([
      {
        transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
        opacity: 0.88
      },
      {
        transform: "translate(0, 0) scale(1)",
        opacity: 1
      }
    ], {
      duration: 720,
      easing: "cubic-bezier(.16, 1, .3, 1)",
      fill: "none"
    });
  };
  dock();
  window.addEventListener("scroll", dock, { passive: true });
})();
