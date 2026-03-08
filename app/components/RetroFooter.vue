<template>
  <footer class="retro-footer">
    <div class="footer-inner">
      <p class="footer-text">
        © {{ new Date().getFullYear() }} Francesco
        <span class="cursor"></span>
      </p>
      <div class="footer-links">
        <a :href="socials.github" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="nes-icon github is-small"></i>
        </a>
        <a :href="socials.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="nes-icon linkedin is-small"></i>
        </a>
        <a :href="'mailto:' + socials.email" aria-label="Email">
          <i class="nes-icon gmail is-small"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'
import { socials } from '~/data/socials.js'
const { t } = useLocale()
</script>

<style scoped>
.retro-footer {
  border-top: 3px solid var(--color-border);
  padding: 2rem 1.5rem;
  text-align: center;
  background: var(--color-bg-panel);
}
.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.footer-text {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--color-muted);
}
.footer-links { display: flex; gap: 1.5rem; align-items: center; }
.footer-links a { color: var(--color-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--color-accent); }
.footer-sub { font-size: 1rem; color: var(--color-muted); margin: 0; }
</style>
