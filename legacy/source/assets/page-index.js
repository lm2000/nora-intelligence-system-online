(() => {
  const main = document.querySelector("main");
  if (!main) return;
  if (main.dataset.pageIndex === "custom") return;

  const sections = [...main.querySelectorAll(':scope > section:not([data-page-index="false"])')];
  if (sections.length < 2) return;

  const index = document.createElement("nav");
  index.className = "page-index";
  index.setAttribute("aria-label", "Page sections");

  const list = document.createElement("ol");
  index.append(list);

  const entries = sections.map((section, position) => {
    if (!section.id) section.id = `section-${position + 1}`;
    const label = section.dataset.indexLabel
      || (position === 0 ? "Overview" : "")
      || section.querySelector(".section-label, .case-section__eyebrow, .case-kicker")?.textContent?.trim()
      || section.querySelector("h2, h1")?.textContent?.trim()
      || `Section ${position + 1}`;

    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = label.replace(/\.$/, "");
    link.dataset.indexTarget = section.id;
    item.append(link);
    list.append(item);
    return { section, link };
  });

  document.body.append(index);

  const activate = (id) => {
    for (const entry of entries) {
      const active = entry.section.id === id;
      entry.link.toggleAttribute("aria-current", active);
    }
  };

  activate(entries[0].section.id);
  const observer = new IntersectionObserver((observed) => {
    const visible = observed
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) activate(visible.target.id);
  }, { rootMargin: "-18% 0px -64% 0px", threshold: [0.05, 0.2, 0.5] });

  entries.forEach(({ section }) => observer.observe(section));
})();
