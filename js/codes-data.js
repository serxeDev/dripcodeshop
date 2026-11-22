/**
 * ============================================================
 * SHARED CODE DATA
 * The list of shield and sword codes used by the archive page and
 * by the saved-codes page, so both always show the same entries.
 * ============================================================
 */
const graalCodesData = [
      {
        id: 1,
        name: "Obsidian Knight Aegis",
        type: "shield",
        tag: "Dark",
        code: "setshield obsidian_aegis.png",
        image: "img/shields/drippy-shield-094-smooth-full.gif",
        views: 3420,
        addedOrder: 10,
        note: "Heavy dark-steel kite shield with cobalt trim.",
        badges: ["SETSHIELD", "DARK", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1H13V3H14V9H13V11H12V13H10V14H9V15H7V14H6V13H4V11H3V9H2V3H3V1Z" fill="#0F1013"/>
            <path d="M4 2H12V4H13V9H12V11H10V13H9V14H7V13H6V11H4V9H3V4H4V2Z" fill="#3B82F6"/>
            <path d="M5 3H11V8H10V10H9V12H7V10H6V8H5V3Z" fill="#1E2025"/>
            <path d="M7 4H9V10H7V4Z" fill="#F3F1EC"/>
            <path d="M6 6H10V7H6V6Z" fill="#F3F1EC"/>
          </svg>
        `
      },
      {
        id: 2,
        name: "Ember Dragon Blade",
        type: "sword",
        tag: "Elemental",
        code: "setsword ember_dragon.png",
        views: 4185,
        addedOrder: 9,
        note: "Molten amber broadsword forged for Battle Arena.",
        badges: ["SETSWORD", "ELEMENTAL", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1H15V4H14V5H13V6H12V7H11V8H10V9H9V10H10V11H9V12H8V11H7V12H6V13H5V14H4V15H2V13H3V12H4V11H5V10H4V9H5V8H6V9H7V8H8V7H9V6H10V5H11V4H12V1Z" fill="#0F1013"/>
            <path d="M13 2H14V4H13V5H12V6H11V7H10V8H9V9H8V8H9V7H10V6H11V5H12V4H13V2Z" fill="#F59E0B"/>
            <path d="M12 3H13V4H12V5H11V6H10V7H9V6H10V5H11V4H12V3Z" fill="#FDE68A"/>
            <path d="M5 8H6V9H7V10H8V11H7V10H6V9H5V8Z" fill="#EF4444"/>
            <path d="M3 13H5V14H3V13ZM4 12H6V13H4V12Z" fill="#8E8D88"/>
          </svg>
        `
      },
      {
        id: 3,
        name: "Solar Paladin Crest",
        type: "shield",
        tag: "Royal",
        code: "setshield solar_paladin.png",
        image: "img/shields/drippy-pochita-096-full.gif",
        views: 2890,
        addedOrder: 8,
        note: "Warm gold royal shield with alabaster inlay.",
        badges: ["SETSHIELD", "ROYAL", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H14V8H13V11H11V13H9V15H7V13H5V11H3V8H2V2Z" fill="#0F1013"/>
            <path d="M3 3H13V8H12V10H10V12H9V13H7V12H6V10H4V8H3V3Z" fill="#F59E0B"/>
            <path d="M4 4H12V7H11V9H9V11H7V9H5V7H4V4Z" fill="#F3F1EC"/>
            <path d="M7 5H9V9H7V5Z" fill="#D97706"/>
            <path d="M6 6H10V8H6V6Z" fill="#D97706"/>
          </svg>
        `
      },
      {
        id: 4,
        name: "Cobalt Pulse Katana",
        type: "sword",
        tag: "Cyber",
        code: "setsword cobalt_katana.png",
        views: 3110,
        addedOrder: 7,
        note: "Sleek cyber-forged edge with crisp blue core.",
        badges: ["SETSWORD", "CYBER", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1H15V3H14V4H13V5H12V6H11V7H10V8H9V9H8V10H9V11H7V10H6V11H5V12H4V13H3V14H1V12H2V11H3V10H4V9H5V8H6V7H7V6H8V5H9V4H10V3H11V2H13V1Z" fill="#0F1013"/>
            <path d="M13 2H14V3H13V4H12V5H11V6H10V7H9V8H8V9H7V8H8V7H9V6H10V5H11V4H12V3H13V2Z" fill="#3B82F6"/>
            <path d="M12 3H13V4H12V5H11V6H10V7H9V6H10V5H11V4H12V3Z" fill="#93C5FD"/>
            <path d="M5 8H8V9H5V8Z" fill="#F59E0B"/>
            <path d="M2 12H4V13H2V12ZM3 11H5V12H3V11Z" fill="#F3F1EC"/>
          </svg>
        `
      },
      {
        id: 5,
        name: "Classic Hylian Buckler",
        type: "shield",
        tag: "Classic",
        code: "setshield retro_buckler.png",
        image: "img/shields/drippy-music-instruments-097-full.gif",
        views: 2540,
        addedOrder: 6,
        note: "Old-school Graal round buckler with steel rivets.",
        badges: ["SETSHIELD", "CLASSIC", "ONNET"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2H11V3H13V5H14V11H13V13H11V14H5V13H3V11H2V5H3V3H5V2Z" fill="#0F1013"/>
            <path d="M5 3H11V4H12V5H13V11H12V12H11V13H5V12H4V11H3V5H4V4H5V3Z" fill="#8E8D88"/>
            <path d="M6 4H10V5H11V6H12V10H11V11H10V12H6V11H5V10H4V6H5V5H6V4Z" fill="#2E3138"/>
            <path d="M7 6H9V10H7V6Z" fill="#F59E0B"/>
            <path d="M6 7H10V9H6V7Z" fill="#F59E0B"/>
          </svg>
        `
      },
      {
        id: 6,
        name: "Shadow Reaper Scimitar",
        type: "sword",
        tag: "Dark",
        code: "setsword shadow_scimitar.png",
        views: 1980,
        addedOrder: 5,
        note: "Curved nocturnal blade favored by spar veterans.",
        badges: ["SETSWORD", "DARK", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1H14V3H15V6H14V8H12V9H10V10H8V11H7V12H6V13H4V14H2V12H3V11H4V10H5V9H6V8H8V7H10V6H11V4H10V1Z" fill="#0F1013"/>
            <path d="M11 2H13V3H14V6H13V7H11V8H9V9H7V8H9V7H11V6H12V3H11V2Z" fill="#8E8D88"/>
            <path d="M12 3H13V6H12V7H10V6H12V3Z" fill="#F3F1EC"/>
            <path d="M5 8H7V10H5V8Z" fill="#F59E0B"/>
            <path d="M3 12H5V13H3V12Z" fill="#3B82F6"/>
          </svg>
        `
      },
      {
        id: 7,
        name: "Glacier Rune Barrier",
        type: "shield",
        tag: "Elemental",
        code: "setshield glacier_rune.png",
        image: "img/shields/drippy-sweeping-098-full.gif",
        views: 1765,
        addedOrder: 4,
        note: "Frosted crystalline tower shield with ice core.",
        badges: ["SETSHIELD", "ELEMENTAL", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1H12V3H13V12H11V14H9V15H7V14H5V12H3V3H4V1Z" fill="#0F1013"/>
            <path d="M5 2H11V4H12V11H10V13H9V14H7V13H6V11H4V4H5V2Z" fill="#93C5FD"/>
            <path d="M6 3H10V10H9V12H7V10H6V3Z" fill="#3B82F6"/>
            <path d="M7 5H9V9H7V5Z" fill="#F3F1EC"/>
          </svg>
        `
      },
      {
        id: 8,
        name: "Royal Sovereign Rapier",
        type: "sword",
        tag: "Royal",
        code: "setsword sovereign_rapier.png",
        views: 1620,
        addedOrder: 3,
        note: "Fine golden basket-hilt rapier for duelists.",
        badges: ["SETSWORD", "ROYAL", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1H15V3H14V4H13V5H12V6H11V7H10V8H9V9H8V11H6V12H5V13H4V14H2V12H3V11H4V10H5V8H7V7H8V6H9V5H10V4H11V3H12V2H13V1Z" fill="#0F1013"/>
            <path d="M13 2H14V3H13V4H12V5H11V6H10V7H9V8H8V7H9V6H10V5H11V4H12V3H13V2Z" fill="#F3F1EC"/>
            <path d="M6 8H8V10H6V8ZM5 9H6V11H5V9Z" fill="#F59E0B"/>
            <path d="M3 12H4V13H3V12Z" fill="#F59E0B"/>
          </svg>
        `
      },
      {
        id: 9,
        name: "Cyber Grid Deflector",
        type: "shield",
        tag: "Cyber",
        code: "setshield cyber_deflector.png",
        image: "img/shields/drippy-dancing-skeleton-099-full.gif",
        views: 1490,
        addedOrder: 2,
        note: "Hex-framed tactical barrier with amber visor.",
        badges: ["SETSHIELD", "CYBER", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2H12L14 5V11L12 14H4L2 11V5L4 2Z" fill="#0F1013"/>
            <path d="M5 3H11L13 6V10L11 13H5L3 10V6L5 3Z" fill="#2E3138"/>
            <path d="M6 4H10L12 7V9L10 12H6L4 9V7L6 4Z" fill="#141518"/>
            <path d="M5 7H11V9H5V7Z" fill="#3B82F6"/>
            <path d="M7 6H9V10H7V6Z" fill="#F59E0B"/>
          </svg>
        `
      },
      {
        id: 10,
        name: "Onnet Town Wooden Sword",
        type: "sword",
        tag: "Classic",
        code: "setsword onnet_training.png",
        views: 1345,
        addedOrder: 1,
        note: "Nostalgic starter blade inspired by classic Graal.",
        badges: ["SETSWORD", "CLASSIC", "ONNET"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2H14V4H13V5H12V6H11V7H10V8H9V9H8V10H9V11H7V10H6V11H5V12H4V13H2V11H3V10H4V9H5V8H6V7H7V6H8V5H9V4H10V3H12V2Z" fill="#0F1013"/>
            <path d="M12 3H13V4H12V5H11V6H10V7H9V8H8V9H7V8H8V7H9V6H10V5H11V4H12V3Z" fill="#D97706"/>
            <path d="M11 4H12V5H11V6H10V7H9V6H10V5H11V4Z" fill="#F59E0B"/>
            <path d="M5 8H8V9H5V8Z" fill="#8E8D88"/>
            <path d="M3 11H5V12H3V11Z" fill="#78350F"/>
          </svg>
        `
      },
      {
        id: 11,
        name: "Stormbreaker Bulwark",
        type: "shield",
        tag: "Storm",
        code: "setshield stormbreaker_bulwark.png",
        image: "img/shields/drippy-spooky-witch-100-full.gif",
        views: 1290,
        addedOrder: 13,
        note: "Tower shield crackling with a trapped thunderhead.",
        badges: ["SETSHIELD", "STORM", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1H13V3H14V12H12V14H10V15H6V14H4V12H2V3H3V1Z" fill="#0F1013"/>
            <path d="M4 2H12V4H13V11H11V13H9V14H7V13H5V11H3V4H4V2Z" fill="#3B82F6"/>
            <path d="M5 3H11V11H10V12H9V13H7V12H6V11H5V3Z" fill="#1E2025"/>
            <path d="M9 4H10V6H9V7H10V9H9V11H8V9H7V7H8V6H9V4Z" fill="#FDE68A"/>
            <path d="M5 5H6V10H5V5Z" fill="#93C5FD"/>
          </svg>
        `
      },
      {
        id: 12,
        name: "Void Reaver Greatsword",
        type: "sword",
        tag: "Void",
        code: "setsword void_reaver.png",
        views: 1185,
        addedOrder: 12,
        note: "Heavy greatsword drinking the light around its edge.",
        badges: ["SETSWORD", "VOID", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1H15V4H14V5H13V6H12V7H11V8H10V9H9V10H10V11H9V12H8V11H7V12H6V13H5V14H4V15H2V13H3V12H4V11H5V10H4V9H5V8H6V9H7V8H8V7H9V6H10V5H11V4H12V1Z" fill="#0F1013"/>
            <path d="M13 2H14V4H13V5H12V6H11V7H10V8H9V9H8V8H9V7H10V6H11V5H12V4H13V2Z" fill="#2E3138"/>
            <path d="M12 3H13V4H12V5H11V6H10V7H9V6H10V5H11V4H12V3Z" fill="#A78BFA"/>
            <path d="M5 8H6V9H7V10H8V11H7V10H6V9H5V8Z" fill="#8B5CF6"/>
            <path d="M3 13H5V14H3V13ZM4 12H6V13H4V12Z" fill="#8E8D88"/>
          </svg>
        `
      },
      {
        id: 13,
        name: "Emerald Grove Ward",
        type: "shield",
        tag: "Emerald",
        code: "setshield emerald_grove.png",
        image: "img/shields/drippy-warning-ban-101-full.gif",
        views: 1042,
        addedOrder: 11,
        note: "Round buckler carved with a living emerald leaf crest.",
        badges: ["SETSHIELD", "EMERALD", "ONNET"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2H13V3H14V8H13V11H11V13H9V15H7V13H5V11H3V8H2V3H3V2Z" fill="#0F1013"/>
            <path d="M4 3H12V4H13V8H12V10H10V12H9V13H7V12H6V10H4V8H3V4H4V3Z" fill="#10B981"/>
            <path d="M5 4H11V8H10V10H9V11H7V10H6V8H5V4Z" fill="#1E2025"/>
            <path d="M7 5H9V7H10V8H9V9H7V8H6V7H7V5Z" fill="#34D399"/>
            <path d="M4 4H5V6H4V4Z" fill="#6EE7B7"/>
          </svg>
        `
      },
      {
        id: 14,
        name: "Crimson Warden Bulwark",
        type: "shield",
        tag: "Crimson",
        code: "setshield crimson_warden.png",
        image: "img/shields/drippy-angel-eyes-102-full.webp",
        views: 970,
        addedOrder: 14,
        note: "Blood-red tower shield with a crossed warden chevron.",
        badges: ["SETSHIELD", "CRIMSON", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1H13V3H14V10H13V12H11V14H9V15H7V14H5V12H3V10H2V3H3V1Z" fill="#0F1013"/>
            <path d="M4 2H12V4H13V10H11V12H9V14H7V12H5V10H3V4H4V2Z" fill="#DC2626"/>
            <path d="M5 3H11V9H10V11H8V13H7V11H6V9H5V3Z" fill="#1E2025"/>
            <path d="M6 5H10V7H6V5Z" fill="#F87171"/>
            <path d="M7 8H9V11H7V8Z" fill="#F87171"/>
          </svg>
        `
      },
      {
        id: 15,
        name: "Thunder Fang Katana",
        type: "sword",
        tag: "Storm",
        code: "setsword thunder_fang.png",
        views: 915,
        addedOrder: 15,
        note: "Narrow storm-lit katana with a pale lightning edge.",
        badges: ["SETSWORD", "STORM", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1H15V3H14V4H13V5H12V6H11V7H10V8H9V9H8V10H10V11H9V12H8V11H7V12H6V13H5V14H3V13H4V12H5V11H6V10H7V9H8V8H9V7H10V6H11V5H12V4H13V1Z" fill="#0F1013"/>
            <path d="M13 2H14V3H13V4H12V5H11V6H10V7H9V8H8V9H7V10H6V9H7V8H8V7H9V6H10V5H11V4H12V3H13V2Z" fill="#E0F2FE"/>
            <path d="M4 11H8V12H4V11Z" fill="#3B82F6"/>
            <path d="M3 13H5V14H3V13Z" fill="#8E8D88"/>
          </svg>
        `
      },
      {
        id: 16,
        name: "Frostbite Kite Shield",
        type: "shield",
        tag: "Frost",
        code: "setshield frostbite_kite.png",
        image: "img/shields/drippy-sexyskye-vient-motion.webp",
        views: 860,
        addedOrder: 16,
        note: "Rimed-over kite shield with a frozen spearhead core.",
        badges: ["SETSHIELD", "FROST", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1H12V3H13V13H11V15H5V13H3V3H4V1Z" fill="#0F1013"/>
            <path d="M5 2H11V4H12V12H10V14H6V12H4V4H5V2Z" fill="#BAE6FD"/>
            <path d="M6 3H10V12H9V13H7V12H6V3Z" fill="#1E2025"/>
            <path d="M7 4H9V8H10V10H9V12H7V10H6V8H7V4Z" fill="#38BDF8"/>
          </svg>
        `
      },
      {
        id: 17,
        name: "Desert Nomad Saber",
        type: "sword",
        tag: "Desert",
        code: "setsword desert_nomad.png",
        views: 805,
        addedOrder: 17,
        note: "Sun-bleached curved saber carried across the dunes.",
        badges: ["SETSWORD", "DESERT", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1H15V3H14V5H13V7H12V9H11V10H10V11H9V12H8V13H7V12H6V13H5V14H3V13H4V12H5V11H6V10H7V9H8V8H9V7H10V6H11V5H12V4H13V2H14Z" fill="#0F1013"/>
            <path d="M14 2H15V3H14V5H13V7H12V9H11V10H10V11H9V12H8V11H9V10H10V9H11V7H12V5H13V3H14V2Z" fill="#FDE68A"/>
            <path d="M11 5H12V6H13V7H12V8H11V9H10V10H9V10H10V9H11V8H12V6H11V5Z" fill="#F59E0B"/>
            <path d="M4 12H7V13H4V12Z" fill="#8E8D88"/>
          </svg>
        `
      },
      {
        id: 18,
        name: "Verdant Sentinel Ward",
        type: "shield",
        tag: "Emerald",
        code: "setshield verdant_sentinel.png",
        image: "img/shields/drippy-halloween-spirits-103-full.webp",
        views: 760,
        addedOrder: 18,
        note: "Living emerald round shield sprouting a leaf crest.",
        badges: ["SETSHIELD", "EMERALD", "PROFILE STATUS"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2H13V3H14V9H13V11H11V13H9V15H7V13H5V11H3V9H2V3H3V2Z" fill="#0F1013"/>
            <path d="M4 3H12V4H13V9H12V10H10V12H9V13H7V12H6V10H4V9H3V4H4V3Z" fill="#10B981"/>
            <path d="M5 4H11V8H10V10H9V11H7V10H6V8H5V4Z" fill="#1E2025"/>
            <path d="M7 5H9V7H10V8H9V10H7V9H6V7H7V5Z" fill="#6EE7B7"/>
          </svg>
        `
      },
      {
        id: 19,
        name: "Phantom Twin Fang",
        type: "sword",
        tag: "Void",
        code: "setsword phantom_twin.png",
        views: 705,
        addedOrder: 19,
        note: "Twin void fangs that drink the light around them.",
        badges: ["SETSWORD", "VOID", "BATTLE ARENA"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1H14V3H13V5H12V7H11V9H10V10H9V11H8V12H7V11H6V12H5V13H4V14H2V12H3V11H4V10H5V9H6V8H7V7H8V6H9V5H10V3H11V1Z" fill="#0F1013"/>
            <path d="M12 2H13V3H12V5H11V7H10V9H9V10H8V11H7V10H8V9H9V8H10V6H11V3H12V2Z" fill="#A78BFA"/>
            <path d="M4 11H6V12H4V11Z" fill="#6D28D9"/>
            <path d="M3 13H5V14H3V13Z" fill="#8E8D88"/>
          </svg>
        `
      },
      {
        id: 20,
        name: "Ancient Runed Aegis",
        type: "shield",
        tag: "Ancient",
        code: "setshield ancient_runed.png",
        image: "img/shields/kizzu-banana-shield-smooth-full.gif",
        views: 640,
        addedOrder: 20,
        note: "Weathered bronze aegis carved with a glowing rune.",
        badges: ["SETSHIELD", "ANCIENT", "ONNET"],
        svg: `
          <svg viewBox="0 0 16 16" class="w-24 h-24 pixel-art" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1H13V3H14V10H13V12H11V14H9V15H7V14H5V12H3V10H2V3H3V1Z" fill="#0F1013"/>
            <path d="M4 2H12V4H13V10H11V12H9V14H7V12H5V10H3V4H4V2Z" fill="#A16207"/>
            <path d="M5 3H11V9H10V11H8V13H7V11H6V9H5V3Z" fill="#1E2025"/>
            <path d="M7 4H9V6H10V8H9V10H7V8H6V6H7V4Z" fill="#FCD34D"/>
          </svg>
        `
      }
];
