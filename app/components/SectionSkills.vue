<template>
  <section id="skills">
    <span class="section-title">{{ t(i18n.skills.sectionTitle) }}</span>
    <hr class="section-divider" />

    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.key" class="skill-category nes-container with-title">
        <p class="title">{{ t(i18n.skills[group.key]) }}</p>
        
        <div class="badge-cloud">
          <span v-for="skill in group.items" :key="skill.name" class="skill-badge">
            {{ skill.icon }} {{ skill.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Soft skills -->
    <div class="soft-skills-section">
      <h2 class="column-title">{{ t(i18n.skills.softTitle) }}</h2>
      <div class="soft-skills-grid">
        <div v-for="soft in softSkills" :key="t(soft.name)" class="nes-container soft-card px-2">
          <span class="soft-icon">{{ soft.icon }}</span>
          <h3 class="soft-name">{{ t(soft.name) }}</h3>
          <p class="soft-desc">{{ t(soft.desc) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'
import { skillGroups, softSkills } from '~/data/skills.js'

const { t } = useLocale()
</script>

<style scoped>
#skills { padding-top: 6rem; padding-bottom: 6rem; }
.column-title {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--color-accent-2);
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.skill-category {
  padding: 1.5rem 1rem 1rem 1rem !important;
}

.badge-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-badge {
  padding: 0.2rem 0.5rem;
  border: 2px solid var(--color-text);
  background: var(--color-bg);
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.skill-badge:hover {
  background: var(--color-accent);
  color: #fff;
}

.soft-skills-section { margin-top: 2rem; }
.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.soft-card {
  text-align: center;
  padding: 1.25rem 0.5rem !important;
  transition: transform 0.15s, box-shadow 0.15s;
}

.soft-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 5px 5px 0 var(--color-accent-2);
}

.soft-icon { font-size: 2.2rem; display: block; margin-bottom: 0.6rem; }
.soft-name {
  font-family: var(--font-body) !important;
  font-size: 1.05rem;
  font-weight: bold;
  color: var(--color-yellow) !important;
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
}
.soft-desc { font-size: 0.95rem; color: var(--color-muted); }

@media (max-width: 900px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
