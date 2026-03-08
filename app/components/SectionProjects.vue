<template>
  <section id="projects">
    <span class="section-title">{{ t(i18n.projects.sectionTitle) }}</span>
    <hr class="section-divider" />

    <div class="filter-bar">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="skill-badge"
        :class="{ active: activeTag === tag }"
        @click="activeTag = activeTag === tag ? null : tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in filteredProjects"
        :key="project.title"
        class="nes-container project-card"
      >
        <div class="project-header">
          <span class="project-icon">{{ project.icon }}</span>
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
        <p class="project-desc">{{ t(project.desc) }}</p>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="skill-badge small">{{ tag }}</span>
        </div>
        <div class="project-links">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="nes-btn is-primary project-btn">
            {{ t(i18n.projects.btnGithub) }}
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="nes-btn project-btn">
            {{ t(i18n.projects.btnDemo) }}
          </a>
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="nes-btn is-success project-btn">
            {{ t(i18n.projects.btnSite) }}
          </a>
        </div>
      </div>
    </div>

    <p v-if="filteredProjects.length === 0" class="no-results">
      {{ t(i18n.projects.noResults) }}
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocale } from '~/composables/useLocale.js'
import { i18n } from '~/data/i18n.js'
import { projects } from '~/data/projects.js'

const { t } = useLocale()
const activeTag = ref(null)

const allTags = [...new Set(projects.flatMap(p => p.tags))].sort()

const filteredProjects = computed(() =>
  activeTag.value
    ? projects.filter(p => p.tags.includes(activeTag.value))
    : projects
)
</script>

<style scoped>
#projects { padding-top: 6rem; }

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.skill-badge.active {
  background: var(--color-accent);
  color: #000;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 6px 6px 0 var(--color-accent);
}
.project-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.project-icon { font-size: 1.5rem; }
.project-title {
  font-size: 1rem;
  color: var(--color-yellow);
  margin: 0;
}
.project-desc { font-size: 1.05rem; color: var(--color-text); flex: 1; }
.project-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.skill-badge.small { font-size: 0.35rem; padding: 2px 6px; }
.project-links { display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap; }
.project-btn {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  padding: 6px 10px;
}
.no-results {
  text-align: center;
  color: var(--color-muted);
  font-size: 1.2rem;
  margin-top: 2rem;
}
</style>
