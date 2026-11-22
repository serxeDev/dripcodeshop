/**
 * ============================================================
 * SHARED APP MODULES
 * Used by every page (index.html, guild.html, ...).
 * Page-specific code lives in its own file and runs after this.
 * ============================================================
 */

/**
 * Shared SVG icon paths (24x24 viewBox, filled with currentColor).
 * Keeping them here means every page can reuse the same set.
 */
const ICONS = {
  tiktok: `<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>`,
  discord: `<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>`,
  twitch: `<path d="M4.3 3L2 6.4v12.6h5.1v-4.2h2.6v4.2h5.1V6.4L13.4 3H4.3zm10.5 14.1h-1.3v-5.3h2.6v3.6l-1.3 1.7zM14.3 3h-1.3v5.3h1.3V3z"/>`,
  email: `<path d="M3 5h18v14H3V5zm2 2v.4l7 4.6 7-4.6V7H5zm14 12H5v-9.2l7 4.6 7-4.6V19z"/>`,
  instagram: `<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32zm0 6.87a2.71 2.71 0 1 1 0-5.42 2.71 2.71 0 0 1 0 5.42zm4.33-7.04a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0z"/>`,
  twitter: `<path d="M18.9 2.25h3.68l-8.04 9.19L24 21.75h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 2.25h7.6l5.24 6.93 6.06-6.93zm-1.3 17.66h2.04L6.49 4.02H4.3l13.3 15.89z"/>`,
  youtube: `<path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>`,
};

/**
 * Translation registry.
 * Every page adds its own strings with
 * I18N.addDict({ en: {...}, es: {...} })
 * so the shared engine can serve them all from one place.
 *
 * The strings below are the ones used by the markup that app.js injects
 * into every page (the guide modal and the toast), so they live here
 * instead of in a single page dictionary.
 */
const I18N_DICT = {
  en: {
    guideTitle: "HOW TO EQUIP GRAAL CODES",
    guideStep1:
      "Click the <strong class='text-[#F3F1EC]'>Copy</strong> button on any shield or sword card in the archive.",
    guideStep2:
      "Open <strong class='text-[#F3F1EC]'>GraalOnline Classic</strong> and tap your character to open your <strong class='text-[#F3F1EC]'>Profile Status</strong> (or type directly in chat).",
    guideStep3:
      "Paste the code (e.g., <code class='font-pixel text-[#F59E0B]'>setshield obsidian_aegis.png</code>) and save your status.",
    guideStep4:
      "Your character will immediately equip the custom shield or sword graphic!",
    gotIt: "GOT IT",
  },
  es: {
    guideTitle: "CÓMO EQUIPAR CÓDIGOS DE GRAAL",
    guideStep1:
      "Haz clic en el botón <strong class='text-[#F3F1EC]'>Copy</strong> de cualquier tarjeta de escudo o espada del archivo.",
    guideStep2:
      "Abre <strong class='text-[#F3F1EC]'>GraalOnline Classic</strong> y toca tu personaje para abrir tu <strong class='text-[#F3F1EC]'>Profile Status</strong> (o escribe directamente en el chat).",
    guideStep3:
      "Pega el código (p. ej., <code class='font-pixel text-[#F59E0B]'>setshield obsidian_aegis.png</code>) y guarda tu estado.",
    guideStep4:
      "¡Tu personaje equipará al instante el gráfico de escudo o espada personalizado!",
    gotIt: "ENTENDIDO",
  },
};

const I18N = (() => {
      const listeners = [];
      let locale = "en";

      /** Resolve a dotted key path against a dictionary object. */
      function resolve(dict, path) {
        return path.split(".").reduce((acc, part) => (acc == null ? acc : acc[part]), dict);
      }

      /** Get a translation for the current locale. */
      function t(path, fallback) {
        const dict = I18N_DICT[locale] || I18N_DICT.en;
        let value = resolve(dict, path);

        // Case-insensitive fallback for the last segment
        // (e.g. "common.Dark" -> "common.dark")
        if (value === undefined) {
          const parts = path.split(".");
          const last = parts.pop();
          const lower = parts.concat(last.toLowerCase()).join(".");
          value = resolve(dict, lower);
        }

        if (value === undefined) value = resolve(I18N_DICT.en, path);
        if (value === undefined) return fallback !== undefined ? fallback : path;
        return value;
      }

      /** Translate every [data-i18n] element inside the given root. */
      function apply(root) {
        const scope = root || document;
        scope.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          const value = t(key, null);
          if (value !== null) el.innerHTML = value;
        });

        // Attributes that hold text too (icon-only buttons, for example)
        scope.querySelectorAll("[data-i18n-title]").forEach((el) => {
          const key = el.getAttribute("data-i18n-title");
          const value = t(key, null);
          if (value !== null) el.setAttribute("title", value);
        });

        scope.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
          const key = el.getAttribute("data-i18n-aria-label");
          const value = t(key, null);
          if (value !== null) el.setAttribute("aria-label", value);
        });
      }

      /** Switch locale, persist it, repaint the DOM and notify subscribers. */
      function set(next) {
        if (!I18N_DICT[next]) return;
        locale = next;

        document.documentElement.setAttribute("lang", next);

        // Active state on the EN / ES buttons
        document.querySelectorAll(".lang-btn").forEach((btn) => {
          btn.classList.toggle("active", btn.getAttribute("data-lang") === next);
        });

        // Page title
        const pageTitle = document.querySelector("title");
        if (pageTitle) {
          pageTitle.textContent = t("meta.title");
        }

        try {
          localStorage.setItem("drippy-lang", next);
        } catch (err) {
          /* storage unavailable — ignore */
        }

        apply();
        listeners.forEach((fn) => fn(next));
      }

      /** Subscribe to locale changes. */
      function onChange(fn) {
        listeners.push(fn);
      }

      /**
       * Merge a page's translations into the shared registry.
       * @param {Object} dict  { en: {...}, es: {...} }
       */
      function addDict(dict) {
        if (!dict) return;
        Object.keys(dict).forEach((lang) => {
          if (!I18N_DICT[lang]) I18N_DICT[lang] = {};
          Object.assign(I18N_DICT[lang], dict[lang]);
        });
      }

      /** Restore the saved locale (defaults to EN). */
      function init() {
        let saved = null;
        try {
          saved = localStorage.getItem("drippy-lang");
        } catch (err) {
          /* storage unavailable — ignore */
        }
        set(saved === "es" ? "es" : "en");
      }

      return {
        t,
        set,
        apply,
        onChange,
        onChange,
        addDict,
        init,
        get locale() {
          return locale;
        },
      };
    })();

    // Wire up the language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        I18N.set(btn.getAttribute("data-lang"));
      });
    });

const FADE_REVEAL = (() => {
      const DEFAULT_STAGGER_MS = 90; // Delay between each element in the same batch
      const ROOT_MARGIN = "0px 0px -40px 0px"; // Reveal a touch before it is fully visible
      // One observer per container so several sections can animate independently
      const observers = new Map();

      /** Reveal a single element with the given delay. */
      function revealElement(el, delayMs) {
        el.style.setProperty("--fade-delay", `${delayMs}ms`);
        el.classList.add("is-revealed");
      }

      /** Stop watching the elements of a single container. */
      function reset(container) {
        if (!container) {
          observers.forEach((observer) => observer.disconnect());
          observers.clear();
          return;
        }
        const observer = observers.get(container);
        if (observer) {
          observer.disconnect();
          observers.delete(container);
        }
      }

      /**
       * Failsafe: reveal every `.fade-item` that is currently inside the
       * viewport but has not been revealed yet. Guarantees that content is
       * never stuck invisible, whatever happens with the observer.
       */
      function revealVisibleNow() {
        document.querySelectorAll(".fade-item:not(.is-revealed)").forEach((item) => {
          const rect = item.getBoundingClientRect();
          const inViewport =
            rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0;
          if (inViewport) revealElement(item, 0);
        });
      }

      /**
       * Wire up the fade-in for every matching element inside `container`.
       * @param {HTMLElement} container  element that holds the items
       * @param {string} selector         which items to animate
       * @param {number} staggerMs        delay between each revealed item
       */
      function setup(container, selector = ".fade-item", staggerMs = DEFAULT_STAGGER_MS) {
        if (!container) return;

        // Drop any observer still watching the previous batch of items
        reset(container);

        const items = Array.from(container.querySelectorAll(selector));
        if (items.length === 0) return;

        // Graceful fallback: no IntersectionObserver -> show everything at once
        if (typeof IntersectionObserver === "undefined") {
          items.forEach((item) => revealElement(item, 0));
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            // Only the items that just entered the viewport, in visual order
            const entering = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

            entering.forEach((entry, index) => {
              observer.unobserve(entry.target);
              revealElement(entry.target, index * staggerMs);
            });
          },
          { threshold: 0, rootMargin: ROOT_MARGIN }
        );

        observers.set(container, observer);

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          // Already scrolled above the viewport -> reveal it right away
          if (rect.bottom < 0) {
            revealElement(item, 0);
            return;
          }
          observer.observe(item);
        });
      }

      return { setup, reset, revealVisibleNow };
    })();

const MOBILE_FILTER = (() => {
      const MOBILE_QUERY = "(max-width: 1023px)"; // below the lg breakpoint
      const mql = window.matchMedia(MOBILE_QUERY);

      let sidebar = null; // the <aside> that holds the real controls
      let slot = null; // its placeholder inside the grid
      let modalBody = null; // where it lives while the sheet is open
      let isMobile = false;
      let sheetOpen = false;
      let cardObserver = null;

      /** Move the sidebar between its home slot and the mobile sheet. */
      function placeSidebar(inModal) {
        if (!sidebar || !slot || !modalBody) return;

        if (inModal) {
          if (sidebar.parentElement !== modalBody) modalBody.appendChild(sidebar);
        } else {
          if (sidebar.parentElement !== slot) slot.appendChild(sidebar);
        }

        // The wrapper grid slot must collapse while the card lives in the sheet
        slot.classList.toggle("hidden", inModal);
      }

      /** Switch between mobile and desktop layout. */
      function sync() {
        const next = mql.matches;
        if (next === isMobile) return;
        isMobile = next;

        // On mobile the card stays inline and fades out on scroll.
        // On desktop it is a normal sticky sidebar.
        closeSheet();
        placeSidebar(false);
        sidebar.classList.remove("is-faded-out");

        // Re-apply the fade reveal to the sidebar in its new home
        FADE_REVEAL.setup(sidebar, ".fade-item", 90);

        // Watch the card so it can fade out when it leaves the view
        observeCard();
      }

      /** Open the bottom sheet with the filter controls inside it. */
      function open() {
        const modal = document.getElementById("filterModal");
        if (!modal || !sidebar) return;

        placeSidebar(true);
        sheetOpen = true;

        // The card must be fully visible inside the sheet
        sidebar.classList.remove("is-faded-out");

        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden";

        // Re-observe the controls now that they are laid out again
        FADE_REVEAL.setup(sidebar, ".fade-item", 60);
        observeCard();
      }

      /** Close the bottom sheet and put the card back in the page. */
      function close() {
        const modal = document.getElementById("filterModal");
        if (!modal) return;

        closeSheet();

        if (isMobile) {
          placeSidebar(false);
          observeCard();
          updateButton();
        }
      }

      /** Hide the sheet without touching the page layout. */
      function closeSheet() {
        const modal = document.getElementById("filterModal");
        if (!modal) return;
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "";
        sheetOpen = false;
      }

      /**
       * Fade the filter card out when it leaves the viewport and show
       * the floating button instead. When it comes back into view the
       * card fades in again and the button hides.
       */
      function updateButton() {
        const btn = document.getElementById("mobileFilterBtn");
        if (!btn || !sidebar) return;

        const hideButton = () => {
          btn.classList.add("opacity-0", "pointer-events-none", "translate-y-3");
        };
        const showButton = () => {
          btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-3");
        };

        // Desktop: the sticky sidebar is always visible, no button needed
        if (!isMobile) {
          hideButton();
          sidebar.classList.remove("is-faded-out");
          return;
        }

        // While the sheet is open the button is not needed
        if (sheetOpen) {
          hideButton();
          return;
        }

        const rect = sidebar.getBoundingClientRect();
        const cardVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (cardVisible) {
          // The card is on screen -> show it, hide the button
          sidebar.classList.remove("is-faded-out");
          hideButton();
        } else {
          // The card scrolled away -> fade it out, show the button
          sidebar.classList.add("is-faded-out");
          showButton();
        }
      }

      /**
       * Watch the filter card with an IntersectionObserver so it fades
       * out exactly when it leaves the field of view.
       */
      function observeCard() {
        if (cardObserver) {
          cardObserver.disconnect();
          cardObserver = null;
        }
        if (!sidebar || typeof IntersectionObserver === "undefined") return;

        cardObserver = new IntersectionObserver(
          (entries) => {
            const visible = entries.some((entry) => entry.isIntersecting);
            if (!isMobile || sheetOpen) return;

            if (visible) {
              sidebar.classList.remove("is-faded-out");
            } else {
              sidebar.classList.add("is-faded-out");
            }
            updateButton();
          },
          { threshold: 0 }
        );

        cardObserver.observe(sidebar);
      }

      function init() {
        sidebar = document.querySelector("aside[aria-label='Filter codes']");
        slot = document.getElementById("filterSlot");
        modalBody = document.getElementById("filterModalBody");
        if (!sidebar || !slot || !modalBody) return;

        sync();

        // React to breakpoint changes (rotation, resize)
        if (typeof mql.addEventListener === "function") {
          mql.addEventListener("change", sync);
        } else if (typeof mql.addListener === "function") {
          mql.addListener(sync);
        }

        window.addEventListener("scroll", updateButton, { passive: true });
        window.addEventListener("resize", updateButton, { passive: true });

        // Close the sheet when the backdrop is tapped
        const modal = document.getElementById("filterModal");
        if (modal) {
          modal.addEventListener("click", (e) => {
            if (e.target.id === "filterModal") close();
          });
        }

        // Close the sheet with Escape
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            const modal = document.getElementById("filterModal");
            if (modal && !modal.classList.contains("hidden")) close();
          }
        });

        updateButton();
      }

      return { init, open, close };
    })();
    /** Open the mobile filter sheet (called from the floating button). */
    function openFilterModal() {
      MOBILE_FILTER.open();
    }

    /** Close the mobile filter sheet. */
    function closeFilterModal() {
      MOBILE_FILTER.close();
    }

const DRAWER = (() => {
      let drawer = null;
      let toggle = null;

      /** Open the drawer. */
      function open() {
        if (!drawer) return;
        drawer.classList.add("is-open");
        if (toggle) {
          toggle.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
          toggle.setAttribute("aria-label", "Close menu");
        }
        document.body.style.overflow = "hidden";
      }

      /** Close the drawer. */
      function close() {
        if (!drawer) return;
        drawer.classList.remove("is-open");
        if (toggle) {
          toggle.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
        document.body.style.overflow = "";
      }

      /** Flip between open and closed. */
      function toggleDrawer() {
        if (!drawer) return;
        if (drawer.classList.contains("is-open")) {
          close();
        } else {
          open();
        }
      }

      /**
       * Highlight the link of the section currently on screen.
       * On the archive page the highlight follows the scroll position.
       * On every other page it follows the page that is open.
       */
      function markCurrent() {
        if (!drawer) return;

        const links = drawer.querySelectorAll("#drawerNav a");
        const archive = document.getElementById("archive");
        const footer = document.getElementById("footer-about");

        let current = "home";

        if (archive && footer) {
          // The archive page: highlight by scroll position
          const archiveTop = archive.getBoundingClientRect().top;
          if (archiveTop < window.innerHeight * 0.4) current = "archive";
          if (footer.getBoundingClientRect().top < window.innerHeight * 0.4) current = "about";
        } else {
          // Any other page: highlight the link that matches the open page
          const page = window.location.pathname.split("/").pop() || "index.html";
          current =
            page === "index.html"
              ? "home"
              : page.replace(/\.html$/i, "").toLowerCase();
        }

        links.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("data-nav") === current);
        });
      }

      function init() {
        drawer = document.getElementById("mobileDrawer");
        toggle = document.getElementById("drawerToggle");
        if (!drawer) return;

        // Close the drawer with the Escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
        });

        // Keep the highlighted link in sync while scrolling
        window.addEventListener("scroll", markCurrent, { passive: true });
        window.addEventListener("resize", markCurrent, { passive: true });
        markCurrent();
      }

      return { init, open, close, toggle: toggleDrawer };
    })();
/** Open / close the mobile drawer (called from the hamburger button). */
    function toggleDrawer() {
      DRAWER.toggle();
    }

    /** Close the mobile drawer. */
    function closeDrawer() {
      DRAWER.close();
    }

/**
 * ============================================================
 * STICKY TABLE OF CONTENTS — SCROLL SPY
 * Highlights the table-of-contents entry that matches the section
 * the reader is currently looking at. Used by the legal pages.
 * ============================================================
 */
const DOC_TOC = (() => {
  let toc = null;
  let links = [];
  let sections = [];
  let activeId = null;

  /** Pick the section that sits closest to the top of the viewport. */
  function pickActiveSection() {
    const offset = 140; // a bit below the fixed header

    let current = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });

    // Before the very first section, keep the first entry selected
    if (!current && sections.length) current = sections[0];

    return current;
  }

  /** Reflect the active section on the table of contents links. */
  function update() {
    const section = pickActiveSection();
    if (!section) return;

    const id = section.id;
    if (id === activeId) return;
    activeId = id;

    links.forEach((link) => {
      const isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
    });
  }

  /**
   * Wire up the table of contents.
   * @param {string} selector  the table-of-contents element
   */
  function init(selector = ".doc-toc") {
    toc = document.querySelector(selector);
    if (!toc) return;

    links = Array.from(toc.querySelectorAll('a[href^="#"]'));
    sections = links
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);

    if (sections.length === 0) return;

    update();

    // The listener is passive: it never blocks the scrolling itself
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
  }

  return { init, update };
})();

/**
 * ============================================================
 * STICKY HEADER — TRANSPARENT AT TOP, SOLID ON SCROLL
 * ============================================================
 */
    const siteHeader = document.getElementById("siteHeader");
    const HEADER_SCROLL_THRESHOLD = 24;

    function updateHeaderOnScroll() {
      if (!siteHeader) return;
      siteHeader.classList.toggle("is-scrolled", window.scrollY > HEADER_SCROLL_THRESHOLD);
    }

    updateHeaderOnScroll();
    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

    /**
     * Copy Discord handle from Footer button
     */
    function copyDiscordTag() {
      const discordHandle = "graalcodes#0001";
      const tempInput = document.createElement("textarea");
      tempInput.value = discordHandle;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
      } catch (err) {}
      document.body.removeChild(tempInput);

      const label = document.getElementById("discordBtnLabel");
      if (label) {
        label.textContent = "Copied Tag!";
        setTimeout(() => {
          label.textContent = "Discord";
        }, 1800);
      }
      showToast(`Discord username copied: ${discordHandle}`);
    }

    /**
     * Show flat toast message
     */
    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById("toastNotification");
      const toastMsg = document.getElementById("toastMessage");
      if (!toast || !toastMsg) return;
      toastMsg.textContent = message;
      toast.classList.remove("hidden");
      toast.classList.add("flex");

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
      }, 2400);
    }

    /* =======================================================================
       SHARED MODAL / TOAST MARKUP
       Every page needs the toast and the "how to equip" guide modal.
       They are injected here so the markup lives in ONE place instead of
       being duplicated in every HTML file.
       ======================================================================= */
    const SHARED_MARKUP = `
      <!-- TOAST NOTIFICATION -->
      <div
        id="toastNotification"
        class="fixed bottom-5 right-5 z-50 hidden items-center gap-2.5 px-4 py-3 rounded bg-[#1E2025] border border-[#3B82F6] text-[#F3F1EC] text-sm"
      >
        <span class="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
        <span id="toastMessage" class="font-pixel">Copied code to clipboard!</span>
      </div>

      <!-- MODAL: HOW TO USE CODES -->
      <div id="guideModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-[#141518]/85 p-4">
        <div class="bg-[#1E2025] border border-[#2E3138] rounded-lg max-w-lg w-full p-6">
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#2E3138]">
            <h3 class="font-pixel text-xl font-bold text-[#F3F1EC]" data-i18n="guideTitle">
              HOW TO EQUIP GRAAL CODES
            </h3>
            <button type="button" onclick="closeGuideModal()" class="text-[#8E8D88] hover:text-[#F3F1EC] font-pixel text-lg px-2">
              [X]
            </button>
          </div>
          <ol class="space-y-3 text-sm text-[#8E8D88] list-decimal list-inside mb-6">
            <li data-i18n="guideStep1">
              Click the <strong class="text-[#F3F1EC]">Copy</strong> button on any shield or sword card in the archive.
            </li>
            <li data-i18n="guideStep2">
              Open <strong class="text-[#F3F1EC]">GraalOnline Classic</strong> and tap your character to open your <strong class="text-[#F3F1EC]">Profile Status</strong> (or type directly in chat).
            </li>
            <li data-i18n="guideStep3">
              Paste the code (e.g., <code class="font-pixel text-[#F59E0B]">setshield obsidian_aegis.png</code>) and save your status.
            </li>
            <li data-i18n="guideStep4">
              Your character will immediately equip the custom shield or sword graphic!
            </li>
          </ol>
          <div class="flex justify-end">
            <button
              type="button"
              onclick="closeGuideModal()"
              class="btn-flat px-4 py-2 rounded bg-[#3B82F6] text-[#F3F1EC] font-pixel text-sm"
            >
              <span data-i18n="gotIt">GOT IT</span>
            </button>
          </div>
        </div>
      </div>
    `;

    /** Inject the shared markup once, right before </body>. */
    function injectSharedMarkup() {
      if (document.getElementById("toastNotification")) return; // already present
      const holder = document.createElement("div");
      holder.innerHTML = SHARED_MARKUP;
      while (holder.firstChild) {
        document.body.appendChild(holder.firstChild);
      }

      // The injected markup carries data-i18n keys, so translate it now
      // in case the saved locale is not English.
      I18N.apply();
    }

    /**
     * Open the "how to equip codes" guide modal.
     */
    function openGuideModal() {
      const modal = document.getElementById("guideModal");
      if (!modal) return;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    /**
     * Close the guide modal.
     */
    function closeGuideModal() {
      const modal = document.getElementById("guideModal");
      if (!modal) return;
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }

    /** Close the guide modal when clicking the backdrop. */
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "guideModal") closeGuideModal();
    });

    /** Close the guide modal with Escape. */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeGuideModal();
    });


    // Inject the shared markup as soon as the DOM is ready.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectSharedMarkup);
    } else {
      injectSharedMarkup();
    }
