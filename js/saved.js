/**
 * ============================================================
 * SAVED CODES (FAVOURITES)
 * The list of bookmarked codes lives in the browser's local
 * storage, so it survives a reload and never leaves the device.
 *
 * Storage key: "drippy-saved" -> JSON array of code ids
 * ============================================================
 */
const SAVED_CODES = (() => {
  const STORAGE_KEY = "drippy-saved";

  /** Read the saved ids from local storage (empty list on error). */
  function read() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // Keep only numbers so a corrupted entry can never break the page
      return parsed.filter((id) => typeof id === "number");
    } catch (err) {
      return [];
    }
  }

  /** Write the saved ids back to local storage. */
  function write(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (err) {
      /* storage unavailable — ignore */
    }
  }

  /** All saved code ids. */
  function getAll() {
    return read();
  }

  /** How many codes are saved. */
  function count() {
    return read().length;
  }

  /** Is this code saved? */
  function isSaved(itemId) {
    return read().indexOf(itemId) !== -1;
  }

  /**
   * Save or unsave a code.
   * @param {number} itemId
   * @returns {boolean} true when the code ends up saved
   */
  function toggle(itemId) {
    const ids = read();
    const index = ids.indexOf(itemId);

    if (index === -1) {
      ids.push(itemId);
    } else {
      ids.splice(index, 1);
    }

    write(ids);
    updateBadges();

    return index === -1;
  }

  /** Remove a code from the saved list. */
  function remove(itemId) {
    const ids = read().filter((id) => id !== itemId);
    write(ids);
    updateBadges();
  }

  /** Remove every saved code. */
  function clearAll() {
    write([]);
    updateBadges();
  }

  /**
   * Refresh every "saved count" badge on the page.
   * Any element with [data-saved-count] shows the current total.
   */
  function updateBadges() {
    const total = count();
    document.querySelectorAll("[data-saved-count]").forEach((el) => {
      el.textContent = total.toString();
      // Hide the badge entirely while nothing is saved
      el.classList.toggle("hidden", total === 0);
    });
  }

  return { getAll, count, isSaved, toggle, remove, clearAll, updateBadges };
})();

/**
 * ============================================================
 * SAVE BUTTON
 * The bookmark icon used on the code cards and in the code modal.
 * @param {number} itemId
 * @returns {boolean} true when the code ends up saved
 */
function toggleSavedCode(itemId) {
  const nowSaved = SAVED_CODES.toggle(itemId);
  refreshSaveButtons(itemId);
  showToast(
    nowSaved
      ? I18N.t("savedToast", "Saved to your collection")
      : I18N.t("unsavedToast", "Removed from your collection")
  );
  return nowSaved;
}

/** Update every save button that belongs to the given code. */
function refreshSaveButtons(itemId) {
  const isSaved = SAVED_CODES.isSaved(itemId);

  document.querySelectorAll(`[data-save-btn="${itemId}"]`).forEach((btn) => {
    btn.classList.toggle("is-saved", isSaved);
    btn.setAttribute("aria-pressed", isSaved ? "true" : "false");

    // Screen-reader label
    btn.setAttribute(
      "aria-label",
      isSaved ? I18N.t("unsaveLabel", "Remove from saved") : I18N.t("saveLabel", "Save this code")
    );

    // Outline when not saved, solid shape once it is saved.
    // The `fill` attribute has to be toggled because it wins over CSS.
    const path = btn.querySelector("svg path");
    if (path) path.setAttribute("fill", isSaved ? "currentColor" : "none");

    // Visible text label (the modal button has one, the small icon ones do not)
    const text = btn.querySelector("span[data-i18n]");
    if (text) {
      const key = isSaved ? "savedButtonLabel" : "saveLabel";
      text.setAttribute("data-i18n", key);
      text.textContent = I18N.t(key, isSaved ? "SAVED" : "Save this code");
    }
  });
}

/** Refresh every save button on the page. */
function refreshAllSaveButtons() {
  document.querySelectorAll("[data-save-btn]").forEach((btn) => {
    refreshSaveButtons(parseInt(btn.getAttribute("data-save-btn"), 10));
  });
}
