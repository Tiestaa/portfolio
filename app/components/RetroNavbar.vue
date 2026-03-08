<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <span class="navbar-logo" @click="scrollTo('home')">
        <span class="pixel-bracket">[</span>F<span class="pixel-bracket">]</span>
      </span>
      <ul class="navbar-links">
        <li v-for="link in links" :key="link.id">
          <a :href="'#' + link.id" @click.prevent="scrollTo(link.id)">
            <span class="link-prefix">></span> {{ t(link.label) }}
          </a>
        </li>
      </ul>
      <button class="mobile-toggle nes-btn" @click="menuOpen = !menuOpen">
        {{ menuOpen ? '✕' : '☰' }}
      </button>

      <button class="lang-toggle desk-lang" @click="toggleLocale()" :title="locale === 'it' ? 'Switch to English' : 'Passa all\'italiano'">
        <span class="lang-flag">{{ locale === 'it' ? '🇬🇧' : '🇮🇹' }}</span>
        <span class="lang-label">{{ locale === 'it' ? 'EN' : 'IT' }}</span>
      </button>
    </div>
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="link in links"
        :key="link.id"
        :href="'#' + link.id"
        @click.prevent="scrollTo(link.id); menuOpen = false"
      >
        > {{ t(link.label) }}
      </a>

      <!-- Mobile Language Toggle -->
      <button class="lang-toggle mob-lang" @click="toggleLocale(); menuOpen = false">
        <span class="lang-flag">{{ locale === 'it' ? '🇬🇧' : '🇮🇹' }}</span>
        <span class="lang-label">{{ locale === 'it' ? 'EN' : 'IT' }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'

const { locale, setLocale, t } = useLocale()

const links = [
  { id: 'home',     label: i18n.nav.home },
  { id: 'about',   label: i18n.nav.about },
  { id: 'projects',label: i18n.nav.projects },
  { id: 'skills',  label: i18n.nav.skills },
]

const isScrolled = ref(false)
const menuOpen = ref(false)

function toggleLocale() {
  setLocale(locale.value === 'it' ? 'en' : 'it')
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(13, 13, 26, 0.85);
  backdrop-filter: blur(6px);
  border-bottom: 3px solid var(--color-border);
  transition: border-color 0.3s;
  padding-top: env(safe-area-inset-top);
}
.navbar.scrolled {
  border-bottom-color: var(--color-accent);
  box-shadow: 0 2px 20px rgba(0, 229, 255, 0.15);
}
.navbar-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  padding-top: calc(1rem + env(safe-area-inset-top));
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.navbar-logo {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: var(--color-accent);
  cursor: pointer;
  text-shadow: 0 0 12px rgba(0, 229, 255, 0.5);
  flex-shrink: 0;
}
.pixel-bracket { color: var(--color-accent-2); }
.navbar-links {
  display: flex;
  list-style: none;
  gap: 0.5rem 1.5rem;
  flex-wrap: wrap;
  margin: 0 0 0 auto;
  padding: 0;
}
.navbar-links a {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--color-text);
  padding: 4px 0;
  transition: color 0.15s;
}
.navbar-links a:hover { color: var(--color-accent); }
.link-prefix { color: var(--color-accent-2); margin-right: 2px; }
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: transparent;
  border: 2px solid var(--color-border);
  cursor: pointer;
  font-family: var(--font-pixel);
  color: var(--color-text);
  transition: border-color 0.15s, color 0.15s;
  flex-shrink: 0;
}
.mob-lang { display: none; margin-top: 1rem; align-self: flex-start; }
.lang-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.lang-flag { font-size: 1.1rem; line-height: 1; }
.lang-label { font-size: 0.55rem; letter-spacing: 1px; }
.mobile-toggle {
  display: none;
  font-size: 0.8rem;
  padding: 4px 8px;
  background: transparent !important;
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: var(--color-bg);
  border-top: 2px solid var(--color-border);
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: var(--color-text);
}
.mobile-menu a:hover { color: var(--color-accent); }

@media (max-width: 600px) {
  .navbar-links, .desk-lang { display: none; }
  .mobile-toggle { display: inline-block; order: 3; }
  .navbar-inner { justify-content: space-between; gap: 0; }
  .mob-lang { display: flex; }
}
</style>
