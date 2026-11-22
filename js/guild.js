/**
 * ============================================================
 * PAGE-SPECIFIC TRANSLATIONS (Guild)
 * ============================================================
 */
I18N.addDict({
  en: {
    meta: { title: "Drippy CodeShop // Guild Members" },
    tagline: "Classic GFX Vault",
    navHome: "Home",
    navGuild: "Guild",
    navBrands: "Brands",
    navAbout: "About",
    navSaved: "Saved",
    saveLabel: "Save this code",
    savedButtonLabel: "SAVED",
    unsaveLabel: "Remove from saved",
    savedToast: "Saved to your collection",
    unsavedToast: "Removed from your collection",
    navTerms: "Terms & Conditions",
    navPrivacy: "Privacy Policy",
    language: "Language",
    guildTitle: "The Drippy Guild",
    guildSubtitle:
      "Meet the crew behind the codes. Every member brings their own style and signature shield or blade to the vault.",
    guildRoster: "Member Roster",
    memberEmptyTitle: "No members found",
    memberEmptyText: "Try a different name.",
    memberReset: "RESET",
    memberRole: "Role",
    memberJoined: "Joined",
    memberStatusOnline: "Online now",
    memberStatusOffline: "Offline",
    memberSearchPlaceholder: "Search member...",

    // Footer (shared across every page)
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
    meta: { title: "Drippy CodeShop // Miembros del Gremio" },
    tagline: "Bóveda de GFX Clásicos",
    navHome: "Inicio",
    navGuild: "Gremio",
    navBrands: "Marcas",
    navAbout: "Sobre mí",
    navSaved: "Guardados",
    saveLabel: "Guardar este código",
    savedButtonLabel: "GUARDADO",
    unsaveLabel: "Quitar de guardados",
    savedToast: "Guardado en tu colección",
    unsavedToast: "Quitado de tu colección",
    navTerms: "Términos y Condiciones",
    navPrivacy: "Política de Privacidad",
    language: "Idioma",
    guildTitle: "El Gremio Drippy",
    guildSubtitle:
      "Conoce al equipo detrás de los códigos. Cada miembro trae su propio estilo y escudo o espada a la bóveda.",
    guildRoster: "Lista de Miembros",
    memberEmptyTitle: "No se encontraron miembros",
    memberEmptyText: "Prueba con otro nombre.",
    memberReset: "REINICIAR",
    memberRole: "Rol",
    memberJoined: "Se unió",
    memberStatusOnline: "En línea",
    memberStatusOffline: "Desconectado",
    memberSearchPlaceholder: "Buscar miembro...",

    // Footer (shared across every page)
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

/**
 * ============================================================
 * GUILD MEMBER DATA
 * Edit this array to add, remove or update your members.
 *   id       unique number
 *   name     display name
 *   role     job title inside the guild
 *   online   true = green dot, false = grey dot
 *   joined   YYYY-MM-DD
 *   avatar   two letters shown in the pixel avatar block
 *   color    accent colour (avatar, role text, glow)
 *   bio      short description shown in the profile
 *   art      the member's own artwork (their piece, not a code sprite)
 *   gallery  extra artwork pieces shown inside the profile
 * ============================================================
 */
const guildMembers = [
  {
    id: 1,
    name: "Drippy",
    role: "Guild Master",
    online: true,
    joined: "2024-01-15",
    avatar: "DR",
    handle: "drippy",
    email: "drippy@drippycodes.com",
    cover: "img/shields/drippy-shield-094-smooth-full.gif",
    color: "#3B82F6",
    bio: "Founder of the vault. Pixel artist, shield collector and the one who keeps the archive tidy.",
  },
  {
    id: 2,
    name: "Kizzu",
    role: "Shield Artist",
    online: true,
    joined: "2024-03-02",
    avatar: "KZ",
    handle: "kizzu",
    email: "kizzu@drippycodes.com",
    cover: "img/shields/drippy-pochita-096-full.gif",
    color: "#F59E0B",
    bio: "Smooth-shield specialist. If it has a curve, Kizzu can probably pixel it.",
  },
  {
    id: 3,
    name: "ShadowByte",
    role: "Blade Artist",
    online: false,
    joined: "2024-06-21",
    avatar: "SB",
    handle: "shadowbyte",
    email: "shadowbyte@drippycodes.com",
    cover: "img/shields/drippy-dancing-skeleton-099-full.gif",
    color: "#A78BFA",
    bio: "Night-time blade work and stealthy silhouettes. Rarely seen online, always busy drawing.",
  },
  {
    id: 4,
    name: "Pochita",
    role: "Sprite Master",
    online: true,
    joined: "2024-09-10",
    avatar: "PC",
    handle: "pochita",
    email: "pochita@drippycodes.com",
    cover: "img/shields/drippy-music-instruments-097-full.gif",
    color: "#10B981",
    bio: "Cute sprites, deadly blades. Keeps the member avatars looking sharp.",
  },
  {
    id: 5,
    name: "GrimReaper",
    role: "Event Master",
    online: false,
    joined: "2025-01-05",
    avatar: "GR",
    handle: "grimreaper",
    email: "grimreaper@drippycodes.com",
    cover: "img/shields/drippy-spooky-witch-100-full.gif",
    color: "#EF4444",
    bio: "Runs the guild events and the Halloween sprite drops every single year.",
  },
  {
    id: 6,
    name: "FrostyPixel",
    role: "Junior Artist",
    online: true,
    joined: "2025-04-18",
    avatar: "FP",
    handle: "frostypixel",
    email: "frostypixel@drippycodes.com",
    cover: "img/shields/drippy-warning-ban-101-full.gif",
    color: "#38BDF8",
    bio: "The newest recruit. Learning the trade one ice-blue pixel at a time.",
  },
];

/**
 * ============================================================
 * MEMBER DIRECTORY
 * ============================================================
 */
const memberGrid = document.getElementById("memberGrid");
const memberEmpty = document.getElementById("memberEmpty");
const memberSearch = document.getElementById("memberSearch");

let memberQuery = "";

/** Format a date as "Jan 2024" */
function formatJoined(iso) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parts = iso.split("-");
  const month = months[parseInt(parts[1], 10) - 1] || parts[1];
  return `${month} ${parts[0]}`;
}

/** Render the member cards */
function renderMembers() {
  if (!memberGrid) return;

  const q = memberQuery.trim().toLowerCase();

  const filtered = guildMembers.filter((m) => {
    const matchesQuery =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.bio.toLowerCase().includes(q);
    return matchesQuery;
  });

  // Empty state
  if (filtered.length === 0) {
    memberGrid.innerHTML = "";
    if (memberEmpty) memberEmpty.classList.remove("hidden");
    return;
  }
  if (memberEmpty) memberEmpty.classList.add("hidden");

  memberGrid.innerHTML = filtered
    .map(
      (m) => `
            <button
              type="button"
              onclick="openMemberModal(${m.id})"
              class="member-card fade-item w-full bg-[#1E2025] border border-[#2E3138] hover:border-[#8E8D88] rounded-lg overflow-hidden text-left"
              style="color:${m.color}"
            >
              <!-- Cover image -->
              <div class="member-cover">
                <div class="member-cover-img">
                  <img src="${m.cover}" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                </div>
                <div class="member-cover-scrim"></div>

                <!-- Avatar badge sits over the bottom edge of the cover -->
                <div class="avatar-frame member-avatar">
                  <span style="color:${m.color}">${m.avatar}</span>
                  <span class="member-status ${m.online ? "bg-[#10B981]" : "bg-[#2E3138]"}"></span>
                </div>
              </div>

              <!-- Name -->
              <h3 class="font-pixel text-base font-bold text-[#F3F1EC] truncate">${m.name}</h3>

              <!-- Role -->
              <p class="text-[11px] uppercase tracking-wider truncate" style="color:${m.color}">${m.role}</p>
            </button>
          `
    )
    .join("");

  setupFadeReveal();
}

/**
 * ============================================================
 * FADE-IN REVEAL (ONE BY ONE)
 * ============================================================
 */
let fadeObserver = null;

function setupFadeReveal() {
  if (fadeObserver) {
    fadeObserver.disconnect();
    fadeObserver = null;
  }

  const items = Array.from(document.querySelectorAll(".fade-item"));
  if (items.length === 0) return;

  if (typeof IntersectionObserver === "undefined") {
    items.forEach((el) => {
      el.style.setProperty("--fade-delay", "0ms");
      el.classList.add("is-revealed");
    });
    return;
  }

  fadeObserver = new IntersectionObserver(
    (entries) => {
      const entering = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

      entering.forEach((entry, index) => {
        fadeObserver.unobserve(entry.target);
        entry.target.style.setProperty("--fade-delay", `${index * 90}ms`);
        entry.target.classList.add("is-revealed");
      });
    },
    { threshold: 0, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.bottom < 0) {
      item.style.setProperty("--fade-delay", "0ms");
      item.classList.add("is-revealed");
      return;
    }
    fadeObserver.observe(item);
  });
}

/** Reset the member filters */
function resetMemberFilters() {
  memberQuery = "";
  if (memberSearch) memberSearch.value = "";
  renderMembers();
}

// Search listener
if (memberSearch) {
  memberSearch.addEventListener("input", (e) => {
    memberQuery = e.target.value;
    renderMembers();
  });
}

/**
 * Social buttons for a member profile.
 */
function memberSocials(member) {
  const btn = (href, icon, label) => `
        <a
          href="${href}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${label}"
          title="${label}"
          class="btn-flat inline-flex items-center justify-center w-10 h-10 rounded bg-[#141518] border border-[#2E3138] hover:border-[#F3F1EC] text-[#F3F1EC] transition-colors"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>
        </a>
      `;

  return `
        <div class="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-[#2E3138]">
          ${btn(
            `https://www.tiktok.com/@${member.handle.toLowerCase()}`,
            ICONS.tiktok,
            "TikTok"
          )}
          ${btn(
            `https://discord.com/users/${member.handle}`,
            ICONS.discord,
            "Discord"
          )}
          ${btn(
            `https://twitch.tv/${member.handle.toLowerCase()}`,
            ICONS.twitch,
            "Twitch"
          )}
          ${btn(`mailto:${member.email}`, ICONS.email, "Email")}
        </div>
      `;
}

/**
 * Open a member's profile
 */
function openMemberModal(id) {
  const member = guildMembers.find((m) => m.id === id);
  if (!member) return;

  const profile = document.getElementById("memberProfile");
  if (!profile) return;

  const row = (label, value) => `
        <div class="flex items-center justify-between gap-3 py-2 border-b border-[#2E3138] last:border-b-0">
          <span class="text-xs uppercase tracking-wider text-[#8E8D88]">${label}</span>
          <span class="text-sm text-[#F3F1EC] font-medium text-right">${value}</span>
        </div>
      `;

  const statusText = member.online
    ? I18N.t("memberStatusOnline", "Online now")
    : I18N.t("memberStatusOffline", "Offline");

  profile.innerHTML = `
        <!-- Cover banner -->
        <div class="member-modal-cover mb-4">
          <div class="member-cover-img">
            <img src="${member.cover}" alt="" aria-hidden="true" decoding="async" />
          </div>
          <div class="member-cover-scrim"></div>
        </div>

        <div class="avatar-frame w-24 h-24 rounded-lg border border-[#2E3138] mx-auto mb-4 flex items-center justify-center relative -mt-14 z-10 bg-[#1E2025]">
          <span class="font-pixel text-3xl font-bold" style="color:${member.color}">${member.avatar}</span>
          <span class="member-status ${member.online ? "bg-[#10B981]" : "bg-[#2E3138]"}"></span>
        </div>

        <h3 class="font-pixel text-xl font-bold text-[#F3F1EC] leading-snug">${member.name}</h3>

        <div class="flex items-center justify-center gap-2 mt-2 mb-4">
          <span class="w-2 h-2 rounded-full ${member.online ? "bg-[#10B981]" : "bg-[#2E3138]"}"></span>
          <span class="text-xs text-[#8E8D88]">${statusText}</span>
        </div>

        <div class="inline-block font-pixel text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border mb-4"
             style="color:${member.color}; border-color:${member.color}40; background-color:${member.color}1A">
          ${member.role}
        </div>

        <p class="text-sm text-[#8E8D88] leading-relaxed mb-5 text-left">${member.bio}</p>

        <div class="text-left">
          ${row(I18N.t("memberRole", "Role"), member.role)}
          ${row(I18N.t("memberJoined", "Joined"), formatJoined(member.joined))}
        </div>

        ${memberSocials(member)}
      `;

  const modal = document.getElementById("memberModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

/** Close the member profile */
function closeMemberModal() {
  const modal = document.getElementById("memberModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// Close the profile when the backdrop is tapped
document.getElementById("memberModal").addEventListener("click", (e) => {
  if (e.target.id === "memberModal") closeMemberModal();
});

// Close the profile with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("memberModal");
    if (modal && !modal.classList.contains("hidden")) closeMemberModal();
  }
});

// Re-render the members when the locale changes
I18N.onChange(() => {
  renderMembers();
});

// Restore the saved language (default EN)
I18N.init();

// Initial render
renderMembers();
setupFadeReveal();
DRAWER.init();
