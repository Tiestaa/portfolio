<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-avatar-wrapper">
        <div class="pixel-avatar-svg" aria-label="Francesco avatar"></div>
      </div>
      <div class="hero-text">
        <p class="hero-greeting">{{ t(i18n.home.greeting) }}</p>
        <h1 class="hero-name">Francesco<span class="cursor"></span></h1>
        <div class="hero-typewriter">
          <span class="typing-text">{{ currentRole }}</span>
        </div>
        <p class="hero-desc">{{ t(i18n.home.desc) }}</p>
        <div class="hero-cta">
          <a href="#about" @click.prevent="scrollTo('about')" class="nes-btn is-primary">
            {{ t(i18n.home.ctaAbout) }}
          </a>
          <a href="#projects" @click.prevent="scrollTo('projects')" class="nes-btn">
            {{ t(i18n.home.ctaProjects) }}
          </a>
        </div>
      </div>
    </div>
    <div class="pixel-deco deco-1">★</div>
    <div class="pixel-deco deco-2">♦</div>
    <div class="pixel-deco deco-3">●</div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'

const { locale, t } = useLocale()

const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

function getRoles() {
  return i18n.home.roles[locale.value] ?? i18n.home.roles.it
}

function type() {
  const roles = getRoles()
  const target = roles[roleIndex % roles.length]
  if (!isDeleting) {
    currentRole.value = target.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === target.length) {
      isDeleting = true
      timer = setTimeout(type, 1800)
      return
    }
  } else {
    currentRole.value = target.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % getRoles().length
    }
  }
  timer = setTimeout(type, isDeleting ? 60 : 100)
}

// Reset typewriter when locale changes
watch(locale, () => {
  clearTimeout(timer)
  currentRole.value = ''
  charIndex = 0
  isDeleting = false
  timer = setTimeout(type, 300)
})

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => { timer = setTimeout(type, 500) })
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 1.5rem 4rem;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.hero-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
}
.hero-avatar-wrapper { flex-shrink: 0; }
.pixel-avatar-svg {
  width: 128px;
  height: 128px;
  background: transparent;
  border: 4px solid var(--color-accent);
  box-shadow: 0 0 24px rgba(0, 229, 255, 0.4);
  image-rendering: pixelated;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%230d0d1a'/%3E%3Crect x='24' y='8' width='80' height='8' fill='%232d1e0f'/%3E%3Crect x='16' y='16' width='96' height='8' fill='%232d1e0f'/%3E%3Crect x='16' y='24' width='8' height='16' fill='%232d1e0f'/%3E%3Crect x='104' y='24' width='8' height='16' fill='%232d1e0f'/%3E%3Crect x='24' y='24' width='80' height='48' fill='%23f5c9a0'/%3E%3Crect x='36' y='36' width='12' height='12' fill='%23222'/%3E%3Crect x='80' y='36' width='12' height='12' fill='%23222'/%3E%3Crect x='38' y='38' width='4' height='4' fill='%23fff'/%3E%3Crect x='82' y='38' width='4' height='4' fill='%23fff'/%3E%3Crect x='44' y='56' width='40' height='4' fill='%23c8845a'/%3E%3Crect x='40' y='52' width='8' height='4' fill='%23c8845a'/%3E%3Crect x='80' y='52' width='8' height='4' fill='%23c8845a'/%3E%3Crect x='8' y='72' width='112' height='56' fill='%231a5fb4'/%3E%3Crect x='44' y='92' width='40' height='24' fill='%231050a0'/%3E%3Crect x='48' y='68' width='32' height='8' fill='%23f5c9a0'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  background-repeat: no-repeat;
}

.hero-text { flex: 1; min-width: 260px; }
.hero-greeting {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--color-muted);
  margin-bottom: 0.5rem;
}
.hero-name {
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: var(--color-accent);
  text-shadow: 4px 4px 0 rgba(0, 229, 255, 0.2);
  margin-bottom: 0.75rem;
}
.hero-typewriter {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--color-accent-2);
  min-height: 2em;
  margin-bottom: 1.5rem;
}
.hero-desc {
  font-size: 1.3rem;
  color: var(--color-muted);
  max-width: 480px;
  margin-bottom: 2rem;
}
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero-cta .nes-btn { font-family: var(--font-pixel); font-size: 0.5rem; }

.pixel-deco {
  position: absolute;
  font-family: var(--font-pixel);
  color: var(--color-accent);
  opacity: 0.15;
  user-select: none;
  pointer-events: none;
  animation: float 3s ease-in-out infinite;
}
.deco-1 { font-size: 2rem; top: 15%; right: 5%; animation-delay: 0s; }
.deco-2 { font-size: 1.5rem; bottom: 20%; right: 10%; animation-delay: 1s; color: var(--color-accent-2); }
.deco-3 { font-size: 1rem; top: 40%; left: 2%; animation-delay: 0.5s; color: var(--color-yellow); }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 640px) {
  .hero-content { flex-direction: column; text-align: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-cta { justify-content: center; }
}
</style>
