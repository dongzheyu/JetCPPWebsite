<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <h1 class="about-title mb-4 animate-slide-up" :class="{ 'visible': isVisible }">
              {{ t('about.title') }}
            </h1>
            <p class="about-subtitle mb-4 animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.2s">
              {{ t('about.description') }}
            </p>
          </div>
          <div class="col-lg-4">
            <div class="hero-illustration animate-float" :class="{ 'visible': isVisible }" style="animation-delay: 0.4s">
              <i class="bi bi-person-circle display-1" style="color: var(--color-primary); opacity: 0.3;"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content">
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="about-card card border-0 shadow-sm animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.3s">
              <div class="card-body p-4 p-md-5">
                <h2 class="card-title fw-bold mb-4">{{ t('about.intro.title') }}</h2>
                <p class="card-text text-muted mb-4">
                  {{ t('about.intro.content') }}
                </p>

                <h3 class="h5 fw-bold mb-3">{{ t('about.skills.title') }}</h3>
                <div class="skills-grid mb-4">
                  <div class="skill-tag" v-for="skill in skills" :key="skill" :style="`background-color: ${getSkillColor(skill)}18; color: ${getSkillColor(skill)}`">
                    {{ skill }}
                  </div>
                </div>

                <h3 class="h5 fw-bold mb-3">{{ t('about.contact.title') }}</h3>
                <div class="contact-info">
                  <div class="contact-item mb-2">
                    <i class="bi bi-github me-2"></i>
                    <a href="https://github.com/dongzheyu" target="_blank" class="text-decoration-none">GitHub: @dongzheyu</a>
                  </div>
                  <div class="contact-item mb-2">
                    <i class="bi bi-envelope me-2"></i>
                    <span>Email: youmao2023@outlook.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="stats-card card border-0 shadow-sm animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.5s">
              <div class="card-body p-4">
                <h4 class="card-title fw-bold mb-4">{{ t('about.stats.title') }}</h4>
                <div class="stat-item mb-3">
                  <div class="stat-number">5+</div>
                  <div class="stat-label">{{ t('about.stats.projects') }}</div>
                </div>
                <div class="stat-item mb-3">
                  <div class="stat-number">3+</div>
                  <div class="stat-label">{{ t('about.stats.years') }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100+</div>
                  <div class="stat-label">{{ t('about.stats.commits') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { isVisible } = useAnimations()

const skills = ref([
  'C++', 'C#', 'Qt', 'WinUI 3', 'Vue.js', 'TypeScript', 'Python', 'Git'
])

const skillColors: Record<string, string> = {
  'C++': '#00599C',
  'C#': '#239120',
  'Qt': '#41CD52',
  'WinUI 3': '#0078D4',
  'Vue.js': '#4FC08D',
  'TypeScript': '#3178C6',
  'Python': '#3776AB',
  'Git': '#F05032'
}

const getSkillColor = (skill: string) => skillColors[skill] || '#666'
</script>

<style scoped>
.about-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  max-width: 540px;
  line-height: 1.7;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.contact-info {
  color: var(--color-text-secondary);
}

.contact-item a {
  color: var(--color-primary);
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: var(--color-bg-secondary);
  border-radius: 12px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
</style>
