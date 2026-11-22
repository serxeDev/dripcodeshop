/**
 * ============================================================
 * PAGE-SPECIFIC TRANSLATIONS (Saved Codes)
 * ============================================================
 */
I18N.addDict({
  en: {
    meta: { title: "Drippy CodeShop // Saved Codes" },
    tagline: "Classic GFX Vault",
    navHome: "Home",
    navGuild: "Guild",
    navBrands: "Brands",
    navAbout: "About",
    navHowTo: "How to Equip Codes",
    navTerms: "Terms & Conditions",
    navPrivacy: "Privacy Policy",
    navSaved: "Saved",
    language: "Language",
    savedBadge: "Your collection",
    savedTitle: "Saved Codes",
    savedSubtitle:
      "Every shield and sword you bookmark is kept right here in your browser.",
    savedCountLabel: "Saved codes",
    savedListTitle: "Your Collection",
    savedFilterAll: "ALL",
    savedFilterShields: "SHIELDS",
    savedFilterSwords: "SWORDS",
    savedClearAll: "CLEAR ALL",
    savedEmptyTitle: "Nothing saved yet",
    savedEmptyText: "Tap the bookmark icon on any code to keep it here for later.",
    savedEmptyBtn: "Browse Codes",
    savedRemove: "Remove",
    savedRemovedToast: "Removed from your collection",
    savedClearedToast: "Your collection is now empty",
    copy: "COPY",
    copied: "COPIED!",
    saveLabel: "Save this code",
    savedButtonLabel: "SAVED",
    unsaveLabel: "Remove from saved",
    savedToast: "Saved to your collection",
    unsavedToast: "Removed from your collection",
    aboutMe: "ABOUT ME",
    aboutText:
      "Hey Graalians! I'm a pixel artist and longtime GraalOnline Classic player curating clean, ready-to-use shield and sword GFX codes so your character always stands out in Battle Arena and Onnet.",
    quickLinks: "QUICK LINKS",
    legalTitle: "LEGAL",
    followMe: "FOLLOW ME",
    followText:
      "Follow for daily Graal GFX drops, custom upload tutorials, and community code requests.",
  },
  es: {
    meta: { title: "Drippy CodeShop // Códigos Guardados" },
    tagline: "Bóveda de GFX Clásicos",
    navHome: "Inicio",
    navGuild: "Gremio",
    navBrands: "Marcas",
    navAbout: "Sobre mí",
    navHowTo: "Cómo Equipar Códigos",
    navTerms: "Términos y Condiciones",
    navPrivacy: "Política de Privacidad",
    navSaved: "Guardados",
    language: "Idioma",
    savedBadge: "Tu colección",
    savedTitle: "Códigos Guardados",
    savedSubtitle:
      "Cada escudo y espada que marques se queda aquí, en tu navegador.",
    savedCountLabel: "Códigos guardados",
    savedListTitle: "Tu Colección",
    savedFilterAll: "TODOS",
    savedFilterShields: "ESCUDOS",
    savedFilterSwords: "ESPADAS",
    savedClearAll: "BORRAR TODO",
    savedEmptyTitle: "Todavía no hay nada guardado",
    savedEmptyText:
      "Toca el icono de marcador en cualquier código para tenerlo aquí para más tarde.",
    savedEmptyBtn: "Explorar Códigos",
    savedRemove: "Quitar",
    savedRemovedToast: "Quitado de tu colección",
    savedClearedToast: "Tu colección ya está vacía",
    copy: "COPIAR",
    copied: "¡COPIADO!",
    saveLabel: "Guardar este código",
    savedButtonLabel: "GUARDADO",
    unsaveLabel: "Quitar de guardados",
    savedToast: "Guardado en tu colección",
    unsavedToast: "Quitado de tu colección",
    aboutMe: "SOBRE MÍ",
    aboutText:
      "¡Hola Graalians! Soy un artista de pixel art y jugador de larga trayectoria de GraalOnline Classic que selecciona escudos y espadas GFX limpios y listos para usar, para que tu personaje siempre destaque en Battle Arena y Onnet.",
    quickLinks: "ENLACES RÁPIDOS",
    legalTitle: "LEGAL",
    followMe: "SÍGUEME",
    followText:
      "Sígueme para lanzamientos diarios de GFX de Graal, tutoriales de subidas y peticiones de códigos de la comunidad.",
  },
});

// Restore the saved language (default EN)
I18N.init();

/**
 * ============================================================
 * SAVED CODES PAGE
 * Lists every code the visitor bookmarked in this browser.
 * ============================================================
 */
let savedFilter = "all";

/** Find a code by its id. */
function findSavedCode(itemId) {
  return graalCodesData.find((entry) => entry.id === itemId);
}

/**
 * Render the saved codes into the grid.
 */
function renderSavedCodes() {
  const grid = document.getElementById("savedGrid");
  const emptyState = document.getElementById("savedEmpty");
  const clearBtn = document.getElementById("savedClearAllBtn");
  if (!grid || !emptyState) return;

  // Only keep ids that still exist in the code list
  const ids = SAVED_CODES.getAll();
  const items = ids
    .map((id) => findSavedCode(id))
    .filter(Boolean)
    .filter((item) => savedFilter === "all" || item.type === savedFilter);

  // Show the empty state when nothing matches
  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    if (clearBtn) clearBtn.classList.toggle("hidden", SAVED_CODES.count() === 0);
    return;
  }

  emptyState.classList.add("hidden");
  if (clearBtn) clearBtn.classList.remove("hidden");

  grid.innerHTML = items
    .map((item) => {
      const isShield = item.type === "shield";
      const badgeColorClass = isShield
        ? "text-[#F59E0B] border-[#F59E0B]/40 bg-[#F59E0B]/10"
        : "text-[#3B82F6] border-[#3B82F6]/40 bg-[#3B82F6]/10";

      const sprite = item.image
        ? `<img src="${item.image}" alt="" aria-hidden="true" class="sprite-image" loading="lazy" decoding="async" />`
        : item.svg;

      return `
        <article class="fade-item bg-[#1E2025] border border-[#2E3138] hover:border-[#8E8D88] rounded-lg flex flex-col justify-between transition-colors overflow-hidden">
          <!-- Card Top Header: Category Pill + Remove Button -->
          <div class="px-3 pt-3 pb-2 sm:px-4 sm:pt-4 sm:pb-3 flex items-center justify-between gap-1.5 sm:gap-2">
            <div class="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <span class="font-pixel text-[10px] sm:text-[11px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded border shrink-0 ${badgeColorClass}" data-i18n="common.${item.type}">
                ${I18N.t("common." + item.type, item.type)}
              </span>
            </div>

            <!-- Remove from the collection -->
            <button
              type="button"
              data-save-btn="${item.id}"
              onclick="toggleSavedCode(${item.id})"
              aria-pressed="true"
              aria-label="${I18N.t("unsaveLabel", "Remove from saved")}"
              title="${I18N.t("unsaveLabel", "Remove from saved")}"
              class="save-btn is-saved inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded shrink-0"
            >
              <svg class="w-3.5 h-3.5" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 4a2 2 0 012-2h10a2 2 0 012 2v18l-7-4-7 4V4z" />
              </svg>
            </button>
          </div>

          <!-- Pixel Sprite Preview -->
          <div class="mx-2 sm:mx-4 rounded border border-[#2E3138] sprite-stage flex items-center justify-center relative overflow-hidden" style="aspect-ratio: 1 / 1;">
            <div class="flex items-center justify-center w-full h-full">
              ${sprite}
            </div>
          </div>

          <!-- Title & Badges -->
          <div class="px-3 pt-3 pb-2 sm:px-4 sm:pt-3.5 sm:pb-3">
            <h3 class="font-pixel text-sm sm:text-lg font-bold text-[#F3F1EC] leading-snug mb-2 break-words" data-i18n="items.${item.id}.name">
              ${I18N.t("items." + item.id + ".name", item.name)}
            </h3>
            <div class="flex flex-wrap gap-1 sm:gap-1.5">
              ${item.badges
                .map(
                  (badge, i) => `
                  <span class="font-pixel text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded border ${
                    i === 0
                      ? "text-[#3B82F6] border-[#3B82F6]/40 bg-[#3B82F6]/10"
                      : "text-[#8E8D88] border-[#2E3138] bg-[#141518]"
                  }" data-i18n="common.${badge}">
                    ${I18N.t("common." + badge, badge)}
                  </span>`
                )
                .join("")}
            </div>
          </div>

          <!-- Code Box & Copy Button -->
          <div class="px-3 pb-3 sm:px-4 sm:pb-4 mt-auto">
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 bg-[#141518] border border-[#2E3138] rounded p-1.5">
              <code class="font-pixel text-[10px] sm:text-[13px] text-[#F3F1EC] truncate select-all flex-1 min-w-0 sm:pl-1.5" title="${item.code}">
                ${item.code}
              </code>
              <button
                type="button"
                id="saved-copy-btn-${item.id}"
                onclick="copySavedCode(${item.id})"
                class="btn-flat shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#3B82F6] hover:bg-[#2563EB] text-[#F3F1EC] font-pixel text-xs font-semibold tracking-wide"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span data-i18n="copy">COPY</span>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Fade the fresh cards in one by one
  FADE_REVEAL.setup(grid, ".fade-item", 90);

  // Reflect the saved state on the remove buttons
  refreshAllSaveButtons();
}


/**
 * Copy a saved code to the clipboard.
 */
function copySavedCode(itemId) {
  const item = findSavedCode(itemId);
  if (!item) return;

  const tempInput = document.createElement("textarea");
  tempInput.value = item.code;
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Copy failed", err);
  }
  document.body.removeChild(tempInput);

  // Button feedback
  const btn = document.getElementById(`saved-copy-btn-${item.id}`);
  if (btn) {
    btn.classList.remove("bg-[#3B82F6]", "hover:bg-[#2563EB]");
    btn.classList.add("bg-[#F59E0B]", "text-[#141518]");
    btn.innerHTML = `<span>${I18N.t("copied", "COPIED!")}</span>`;

    setTimeout(() => {
      btn.classList.remove("bg-[#F59E0B]", "text-[#141518]");
      btn.classList.add("bg-[#3B82F6]", "hover:bg-[#2563EB]");
      btn.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span>${I18N.t("copy", "COPY")}</span>
      `;
    }, 1600);
  }

  showToast(`Copied: ${item.code}`);
}

/**
 * Remove every saved code.
 */
function clearSavedCodes() {
  if (SAVED_CODES.count() === 0) return;

  SAVED_CODES.clearAll();
  renderSavedCodes();
  SAVED_CODES.updateBadges();
  showToast(I18N.t("savedClearedToast", "Your collection is now empty"));
}
// ---- Filter buttons -------------------------------------------------------

document.querySelectorAll("[data-saved-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    savedFilter = btn.getAttribute("data-saved-filter");

    // Highlight the active filter
    document.querySelectorAll("[data-saved-filter]").forEach((other) => {
      const isActive = other.getAttribute("data-saved-filter") === savedFilter;
      other.className = isActive
        ? "saved-filter-btn active font-pixel text-[11px] px-3 py-1.5 transition-colors bg-[#3B82F6] text-[#F3F1EC]"
        : "saved-filter-btn font-pixel text-[11px] px-3 py-1.5 transition-colors text-[#8E8D88] hover:text-[#F3F1EC]";
      if (other.getAttribute("data-saved-filter") !== "all") {
        other.classList.add("border-l", "border-[#2E3138]");
      }
    });

    renderSavedCodes();
  });
});

// ---- Init -----------------------------------------------------------------

// Re-render when the language changes
I18N.onChange(() => {
  renderSavedCodes();
});

// Initial render
renderSavedCodes();
SAVED_CODES.updateBadges();
DRAWER.init();
FADE_REVEAL.setup(document.body, ".fade-item", 90);