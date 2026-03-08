<template>
  <section id="about">
    <span class="section-title">{{ t(i18n.about.sectionTitle) }}</span>
    <hr class="section-divider" />

    <div class="about-grid">
      <div class="about-text nes-container with-title">
        <p class="title">{{ t(i18n.about.bioTitle) }}</p>
        <p v-for="(line, i) in t(i18n.about.bio)" :key="i" v-html="line"></p>
        <div class="about-actions">
          <a href="/cv.pdf" download="cv.pdf" class="nes-btn is-primary">
            {{ t(i18n.about.btnCv) }}
          </a>
          <a :href="'mailto:' + socials.email" class="nes-btn">
            {{ t(i18n.about.btnContact) }}
          </a>
        </div>
      </div>

      <div class="about-info">
        <div class="nes-container with-title info-card">
          <p class="title">{{ t(i18n.about.infoTitle) }}</p>
          <ul class="info-list">
            <li v-for="item in info" :key="t(item.label)">
              <span class="info-label">{{ t(item.label) }}:</span>
              <span class="info-value">{{ t(item.value) }}</span>
            </li>
          </ul>
        </div>

        <div class="nes-container with-title xp-card">
          <p class="title">{{ t(i18n.about.expTitle) }}</p>
          <div v-for="xp in experience" :key="t(xp.role)" class="xp-item">
            <h3>{{ t(xp.role) }}</h3>
            <p class="xp-company">{{ xp.company }} · {{ t(xp.period) }}</p>
            <p class="xp-desc">{{ t(xp.desc) }}</p>
          </div>
        </div>

        <div class="nes-container with-title edu-card">
          <p class="title">{{ t(i18n.about.eduTitle) }}</p>
          <div v-for="edu in education" :key="t(edu.degree)" class="xp-item">
            <h3>{{ t(edu.degree) }}</h3>
            <p class="xp-company">{{ edu.institution }} · {{ edu.period }}</p>
            <p class="xp-desc">{{ t(edu.desc) }}</p>
            <p v-if="edu.thesis" class="xp-desc thesis-line">
              {{ t(i18n.about.thesisLabel) }}
              <a v-if="edu.thesisUrl" :href="edu.thesisUrl" target="_blank" rel="noopener" class="thesis-link">{{ edu.thesis }}</a>
              <span v-else>{{ edu.thesis }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'
import { info, experience, education } from '~/data/about.js'
import { socials } from '~/data/socials.js'

const { t } = useLocale()
</script>

<style scoped>
#about { padding-top: 6rem; }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}
.about-text p { font-size: 1.3rem; }
.about-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.about-actions .nes-btn {
  font-size: 0.6rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.info-list { list-style: none; padding: 0; }
.info-list li {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
  font-size: 1.25rem;
  flex-wrap: wrap;
}
.info-label { color: var(--color-muted); flex-shrink: 0; }
.info-value { color: var(--color-text); }

.xp-card { margin-top: 1.5rem; }
.edu-card { margin-top: 1.5rem; }
.xp-item { margin-bottom: 1.5rem; }
.xp-item:last-child { margin-bottom: 0; }
.xp-company {
  font-size: 1.1rem;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}
.xp-desc { font-size: 1.15rem; color: var(--color-muted); }
.thesis-line { margin-top: 0.4rem; }
.thesis-link {
  color: var(--color-accent);
  text-decoration: underline;
}
.thesis-link:hover { color: var(--color-yellow); }

@media (max-width: 700px) {
  .about-grid { grid-template-columns: 1fr; }
}
</style>
