const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const tabs = Array.from(document.querySelectorAll(".feature-tab"));
const panels = Array.from(document.querySelectorAll(".feature-panel"));

function activateTab(nextTab) {
  tabs.forEach((tab) => {
    const active = tab === nextTab;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  panels.forEach((panel) => {
    const active = panel.id === `panel-${nextTab.dataset.tab}`;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
}

function activateFromHash(hash) {
  if (!hash) return;
  const nextTab = tabs.find((tab) => tab.getAttribute("href") === hash);
  if (nextTab) activateTab(nextTab);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    history.replaceState(null, "", tab.getAttribute("href") || "#product");
    activateTab(tab);
  });
  tab.addEventListener("keydown", (event) => {
    const horizontalKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!horizontalKeys.includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") {
      tabs[0].focus();
      activateTab(tabs[0]);
      return;
    }

    if (event.key === "End") {
      const last = tabs[tabs.length - 1];
      last.focus();
      activateTab(last);
      return;
    }

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex]);
  });
});

window.addEventListener("hashchange", () => activateFromHash(window.location.hash));
activateFromHash(window.location.hash);
