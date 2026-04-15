<template>
  <div class="tests-page">
    <section class="tests-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <h1 class="tests-title mb-4 animate-slide-up" :class="{ 'visible': isVisible }">
              {{ t('tests.title') }} <span class="text-gradient">— {{ t('tests.subtitle') }}</span>
            </h1>
            <p class="tests-subtitle mb-4 animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.15s">
              {{ t('tests.description') }}
            </p>
            <p class="tests-desc animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.3s">
              {{ t('tests.disclaimer') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tests-cards-section">
      <div class="container-fluid px-4">
        <div class="row g-4">
          <div
            v-for="(test, index) in tests"
            :key="test.id"
            class="col-md-4 animate-slide-up"
            :class="{ 'visible': isVisible }"
            :style="`animation-delay: ${0.1 + index * 0.15}s`"
          >
            <RouterLink :to="test.path" class="test-card-link">
              <div class="test-card card h-100 border-0">
                <div class="test-card-header" :style="`background: ${test.gradient}`">
                  <i :class="test.icon + ' test-card-icon'"></i>
                  <span class="test-badge">{{ test.badge }}</span>
                </div>
                <div class="card-body p-4">
                  <h5 class="test-card-title mb-2">{{ test.title }}</h5>
                  <p class="test-card-desc mb-3">{{ test.description }}</p>
                  <div class="test-meta d-flex gap-3">
                    <span class="meta-item">
                      <i class="bi bi-list-check me-1"></i>{{ test.questions }} {{ t('tests.questions') }}
                    </span>
                    <span class="meta-item">
                      <i class="bi bi-clock me-1"></i>{{ test.minutes }} {{ t('tests.minutes') }}
                    </span>
                  </div>
                </div>
                <div class="card-footer border-0 p-4 pt-0">
                  <span class="btn btn-animate w-100 text-center" :style="`--btn-color: ${test.color}`"
                        :class="`btn-test-${test.id}`">
                    {{ t('tests.startTest') }}
                  </span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="tests-disclaimer">
      <div class="container-fluid px-4">
        <div class="disclaimer-box animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.6s">
          <i class="bi bi-info-circle disclaimer-icon"></i>
          <div>
            <strong>{{ t('tests.footerDisclaimer') }}</strong>
            <p>{{ t('tests.footerText') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAnimations } from '@/composables/useAnimations'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { isVisible } = useAnimations()

const tests = computed(() => [
  {
    id: 'mbti',
    path: '/tests/mbti',
    title: t('tests.mbti.title'),
    description: t('tests.mbti.description'),
    icon: 'bi bi-diagram-3',
    badge: 'MBTI',
    gradient: 'linear-gradient(135deg, rgba(255,140,66,0.15) 0%, rgba(244,140,6,0.08) 100%)',
    color: '#ff8c42',
    questions: 93,
    minutes: 15
  },
  {
    id: 'depression',
    path: '/tests/depression',
    title: t('tests.depression.title'),
    description: t('tests.depression.description'),
    icon: 'bi bi-heart-pulse',
    badge: 'PHQ-9',
    gradient: 'linear-gradient(135deg, rgba(239,35,60,0.12) 0%, rgba(217,4,41,0.06) 100%)',
    color: '#ef233c',
    questions: 9,
    minutes: 5
  },
  {
    id: 'sunshine',
    path: '/tests/sunshine',
    title: t('tests.sunshine.title'),
    description: t('tests.sunshine.description'),
    icon: 'bi bi-sun',
    badge: t('tests.sunshine.badge'),
    gradient: 'linear-gradient(135deg, rgba(255,186,8,0.15) 0%, rgba(244,140,6,0.08) 100%)',
    color: '#f48c06',
    questions: 15,
    minutes: 8
  },
  {
    id: 'anxiety',
    path: '/tests/anxiety',
    title: t('tests.anxiety.title'),
    description: t('tests.anxiety.description'),
    icon: 'bi bi-shield-exclamation',
    badge: 'GAD-7',
    gradient: 'linear-gradient(135deg, rgba(244,140,6,0.15) 0%, rgba(232,93,4,0.08) 100%)',
    color: '#f48c06',
    questions: 7,
    minutes: 3
  },
  {
    id: 'bipolar',
    path: '/tests/bipolar',
    title: t('tests.bipolar.title'),
    description: t('tests.bipolar.description'),
    icon: 'bi bi-arrow-up-down',
    badge: 'MDQ',
    gradient: 'linear-gradient(135deg, rgba(114,9,183,0.15) 0%, rgba(123,44,191,0.08) 100%)',
    color: '#7209b7',
    questions: 13,
    minutes: 5
  },
  {
    id: 'phobia',
    path: '/tests/phobia',
    title: t('tests.phobia.title'),
    description: t('tests.phobia.description'),
    icon: 'bi bi-emoji-dizzy',
    badge: 'SPIN',
    gradient: 'linear-gradient(135deg, rgba(22,138,173,0.15) 0%, rgba(32,156,192,0.08) 100%)',
    color: '#168aad',
    colorDark: '#5acce6',
    questions: 22,
    minutes: 7
  },
  {
    id: 'ptsd',
    path: '/tests/ptsd',
    title: t('tests.ptsd.title'),
    description: t('tests.ptsd.description'),
    icon: 'bi bi-lightning',
    badge: 'PCL-5',
    gradient: 'linear-gradient(135deg, rgba(157,2,8,0.15) 0%, rgba(177,32,38,0.08) 100%)',
    color: '#9d0208',
    questions: 20,
    minutes: 6
  },
  {
    id: 'ocd',
    path: '/tests/ocd',
    title: t('tests.ocd.title'),
    description: t('tests.ocd.description'),
    icon: 'bi bi-arrow-repeat',
    badge: 'OCI-R',
    gradient: 'linear-gradient(135deg, rgba(58,12,163,0.15) 0%, rgba(88,42,193,0.08) 100%)',
    color: '#3a0ca3',
    questions: 18,
    minutes: 5
  },
  {
    id: 'eating',
    path: '/tests/eating',
    title: t('tests.eating.title'),
    description: t('tests.eating.description'),
    icon: 'bi bi-heart-half',
    badge: 'EAT-26',
    gradient: 'linear-gradient(135deg, rgba(255,93,143,0.15) 0%, rgba(255,113,163,0.08) 100%)',
    color: '#ff5d8f',
    questions: 26,
    minutes: 6
  },
  {
    id: 'substance',
    path: '/tests/substance',
    title: t('tests.substance.title'),
    description: t('tests.substance.description'),
    icon: 'bi bi-droplet-half',
    badge: 'AUDIT',
    gradient: 'linear-gradient(135deg, rgba(232,93,4,0.15) 0%, rgba(242,113,24,0.08) 100%)',
    color: '#e85d04',
    questions: 20,
    minutes: 5
  },
  {
    id: 'gambling',
    path: '/tests/gambling',
    title: t('tests.gambling.title'),
    description: t('tests.gambling.description'),
    icon: 'bi bi-dice-6',
    badge: 'PGSI',
    gradient: 'linear-gradient(135deg, rgba(109,76,65,0.15) 0%, rgba(129,96,85,0.08) 100%)',
    color: '#6d4c41',
    questions: 9,
    minutes: 3
  },
  {
    id: 'gaming',
    path: '/tests/gaming',
    title: t('tests.gaming.title'),
    description: t('tests.gaming.description'),
    icon: 'bi bi-controller',
    badge: 'IGD-20',
    gradient: 'linear-gradient(135deg, rgba(6,214,160,0.15) 0%, rgba(26,234,180,0.08) 100%)',
    color: '#06d6a0',
    questions: 20,
    minutes: 6
  },
  {
    id: 'adhd',
    path: '/tests/adhd',
    title: t('tests.adhd.title'),
    description: t('tests.adhd.description'),
    icon: 'bi bi-lightning-charge',
    badge: 'ASRS',
    gradient: 'linear-gradient(135deg, rgba(255,209,102,0.15) 0%, rgba(255,229,122,0.08) 100%)',
    color: '#ffd166',
    questions: 18,
    minutes: 5
  },
  {
    id: 'asd',
    path: '/tests/asd',
    title: t('tests.asd.title'),
    description: t('tests.asd.description'),
    icon: 'bi bi-puzzle',
    badge: 'AQ-10',
    gradient: 'linear-gradient(135deg, rgba(76,201,240,0.15) 0%, rgba(96,221,255,0.08) 100%)',
    color: '#4cc9f0',
    questions: 10,
    minutes: 3
  },
  {
    id: 'bpd',
    path: '/tests/bpd',
    title: t('tests.bpd.title'),
    description: t('tests.bpd.description'),
    icon: 'bi bi-heartbreak',
    badge: 'MSI-BPD',
    gradient: 'linear-gradient(135deg, rgba(123,44,191,0.15) 0%, rgba(143,64,211,0.08) 100%)',
    color: '#7b2cbf',
    questions: 10,
    minutes: 3
  },
  {
    id: 'somatic',
    path: '/tests/somatic',
    title: t('tests.somatic.title'),
    description: t('tests.somatic.description'),
    icon: 'bi bi-thermometer',
    badge: 'PHQ-15',
    gradient: 'linear-gradient(135deg, rgba(188,108,37,0.15) 0%, rgba(208,128,57,0.08) 100%)',
    color: '#bc6c25',
    questions: 15,
    minutes: 4
  }
])
</script>

<style scoped>
.tests-hero {
  padding: 80px 0 48px;
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
}

.tests-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--noise-texture);
  opacity: var(--noise-opacity);
  pointer-events: none;
}

.tests-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tests-subtitle {
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 600;
}

.tests-desc {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

.tests-cards-section {
  padding: 64px 0;
}

.test-card-link {
  text-decoration: none;
  display: block;
  height: 100%;
}

.test-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border) !important;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              border-color 0.2s ease;
}

.test-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-hover) !important;
}

.test-card-header {
  padding: 28px 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
}

.test-card-icon {
  font-size: 2.2rem;
  color: var(--color-primary);
}

.test-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  background: var(--color-bg-mute);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

.test-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-heading);
}

.test-card-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

.test-meta {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.meta-item {
  display: flex;
  align-items: center;
}

.tests-disclaimer {
  padding: 0 0 64px;
}

.disclaimer-box {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 24px;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  max-width: 900px;
  margin: 0 auto;
}

.disclaimer-icon {
  font-size: 1.3rem;
  color: var(--color-text-muted);
  flex-shrink: 0;
  margin-top: 2px;
}

.disclaimer-box strong {
  display: block;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 6px;
}

.disclaimer-box p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
}
</style>
