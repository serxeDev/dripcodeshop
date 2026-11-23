/**
 * ============================================================
 * PAGE-SPECIFIC TRANSLATIONS (Mikasa // Art Page)
 * ============================================================
 */
I18N.addDict({
  en: {
    meta: { title: "Drippy CodeShop // Mikasa // Crimson Hood Studio" },
    tagline: "Classic GFX Vault",
    navHome: "Home",
    navGuild: "Guild",
    navCollabs: "Collabs",
    navAbout: "About",
    navHowTo: "How to Equip Codes",
    navTerms: "Terms & Conditions",
    navPrivacy: "Privacy Policy",
    navSaved: "Saved",
    language: "Language",
    artBadge: "Artist",
    artBackToCollabs: "Back to Collabs",
    artGalleryTitle: "Art Gallery",
    artPieces: "3",
    mikasaName: "Mikasa",
    mikasaTagline: "Crimson Hood Studio",
    mikasaBio:
      "Mysterious hooded silhouettes and crimson accents. Mikasa paints the dark corners of the vault where the rare drops live.",
    collabSocials: "Socials",
    collabArtCount: "art pieces",
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
    meta: { title: "Drippy CodeShop // Mikasa // Estudio Capucha Carmesí" },
    tagline: "Bóveda de GFX Clásicos",
    navHome: "Inicio",
    navGuild: "Gremio",
    navCollabs: "Colabs",
    navAbout: "Sobre mí",
    navHowTo: "Cómo Equipar Códigos",
    navTerms: "Términos y Condiciones",
    navPrivacy: "Política de Privacidad",
    navSaved: "Guardados",
    language: "Idioma",
    artBadge: "Artista",
    artBackToCollabs: "Volver a Colabs",
    artGalleryTitle: "Galería de Arte",
    artPieces: "3",
    mikasaName: "Mikasa",
    mikasaTagline: "Estudio de Capucha Carmesí",
    mikasaBio:
      "Siluetas encapuchadas y misteriosas con detalles carmesí. Mikasa pinta las esquinas oscuras de la bóveda.",
    collabSocials: "Redes",
    collabArtCount: "piezas de arte",
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
 * MIKASA ART GALLERY
 * The artwork pieces of this artist, shown as large tiles.
 * Every tile can be downloaded with a right click ("Save image as").
 * ============================================================
 */
const mikasaArt = [
  {
    src: "img/mikasahead (2).gif",
    title: "Hood Study",
    note: "Animated sprite sheet",
    sprite: true,
  },
  { src: "img/collabs/art-mikasa-1.png", title: "Crimson Banner" },
  { src: "img/collabs/art-mikasa-2.png", title: "Night Patrol" },
  { src: "img/collabs/art-mikasa-3.png", title: "Quiet Corner" },
];

/** Render the artwork tiles into the page. */
function renderMikasaArt() {
  const grid = document.getElementById("mikasaArtGrid");
  if (!grid) return;

  grid.innerHTML = mikasaArt
    .map(
      (piece) => `
      <figure class="mikasa-art-item fade-item">
        <img
          src="${piece.src}"
          alt="${piece.title}"
          class="${piece.sprite ? "is-sprite" : ""}"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span class="font-pixel text-[11px] uppercase tracking-wider text-[#F3F1EC]">${piece.title}</span>
          ${
            piece.note
              ? `<span class="block text-[10px] uppercase tracking-wider text-[#8E8D88] mt-1">${piece.note}</span>`
              : `<span class="block text-[10px] uppercase tracking-wider text-[#8E8D88] mt-1">Mikasa</span>`
          }
        </figcaption>
      </figure>
    `
    )
    .join("");

  FADE_REVEAL.setup(grid, ".fade-item", 90);
}

// Re-render when the language changes
I18N.onChange(() => {
  renderMikasaArt();
});

// Initial render
renderMikasaArt();
SAVED_CODES.updateBadges();
DRAWER.init();
FADE_REVEAL.setup(document.body, ".fade-item", 90);
