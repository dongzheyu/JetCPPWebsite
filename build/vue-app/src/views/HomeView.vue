<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useAnimations'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = computed(() => [
  {
    icon: 'bi bi-controller',
    title: t('home.features.minecraft.title'),
    description: t('home.features.minecraft.description'),
    color: '#ff8c42'
  },
  {
    icon: 'bi bi-wrench-adjustable-circle',
    title: t('home.features.tools.title'),
    description: t('home.features.tools.description'),
    color: '#52b788'
  },
  {
    icon: 'bi bi-journal-richtext',
    title: t('home.features.blog.title'),
    description: t('home.features.blog.description'),
    color: '#f48c06'
  },
  {
    icon: 'bi bi-globe2',
    title: t('home.features.website.title'),
    description: t('home.features.website.description'),
    color: '#e85d04'
  },
  {
    icon: 'bi bi-mortarboard-fill',
    title: t('home.features.education.title'),
    description: t('home.features.education.description'),
    color: '#ffba08'
  },
  {
    icon: 'bi bi-rocket-takeoff-fill',
    title: t('home.features.learning.title'),
    description: t('home.features.learning.description'),
    color: '#ef233c'
  }
])

const isVisible = ref(false)
const { observe } = useScrollAnimation()

onMounted(() => {
  // Hero 区域立即显示
  setTimeout(() => { isVisible.value = true }, 80)

  // 滚动触发动画
  requestAnimationFrame(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observe(el as HTMLElement)
    })
  })
})
</script>

<template>
  <!-- Hero Section — 真正的左重非对称 -->
  <section class="hero-section position-relative overflow-hidden">
    <div class="hero-bg-animation"></div>
    <div class="container-fluid position-relative z-2">
      <!-- 使用 CSS Grid 实现真正的非对称 -->
      <div class="hero-grid">
        <!-- 左侧：主要内容，占据 60% -->
        <div class="hero-main">
          <div class="logo-container mb-5" :class="{ 'animate-fade-in': isVisible }">
            <img src="/logo.png" alt="dongle Logo" class="hero-logo">
          </div>

          <h1 class="hero-title mb-4 animate-slide-up" :class="{ 'visible': isVisible }">
            {{ t('home.hero.greeting') }}<br>
            <span class="text-gradient">{{ t('home.hero.name') }}</span>
          </h1>

          <p class="hero-subtitle mb-4 animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.15s">
            {{ t('home.hero.tagline') }}
          </p>

          <p class="hero-desc mb-5 animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.3s">
            {{ t('home.hero.description') }}
          </p>

          <div class="hero-buttons animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.45s">
            <router-link to="/about" class="btn btn-light btn-lg me-3">
              <i class="bi bi-person me-2"></i>{{ t('home.hero.aboutBtn') }}
            </router-link>
            <router-link to="/projects" class="btn btn-outline-light btn-lg me-3">
              <i class="bi bi-folder2-open me-2"></i>{{ t('home.hero.projectsBtn') }}
            </router-link>
            <router-link to="/blog" class="btn btn-outline-light btn-lg">
              <i class="bi bi-journal-text me-2"></i>{{ t('home.hero.blogBtn') }}
            </router-link>
          </div>
        </div>

        <!-- 右侧：装饰元素，向右偏移而非居中 -->
        <div class="hero-decoration" :class="{ 'visible': isVisible }" style="opacity:0; animation: fadeIn 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) forwards;">
          <div class="floating-elements">
            <div class="floating-element" style="--duration: 5s;">
              <i class="bi bi-code-slash fs-1"></i>
            </div>
            <div class="floating-element" style="--duration: 6s;">
              <i class="bi bi-gear-wide-connected fs-1"></i>
            </div>
            <div class="floating-element" style="--duration: 5.5s;">
              <i class="bi bi-lightning-charge fs-1"></i>
            </div>
            <div class="floating-element" style="--duration: 7s;">
              <i class="bi bi-cpu fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部暖色渐变过渡 -->
    <div class="hero-fade"></div>
  </section>

  <!-- Features Section — 错位卡片网格 -->
  <section class="features-section">
    <div class="container-fluid">
      <!-- 标题左偏，符合"反主流" -->
      <div class="section-header animate-on-scroll">
        <h2 class="section-title">{{ t('home.features.minecraft.title') }}</h2>
        <p class="section-desc">
          {{ t('home.features.tools.description') }}
        </p>
      </div>

      <!-- 使用 Bootstrap row 结构，保持与 main.css 样式兼容 -->
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="(feature, index) in features" :key="index">
          <div class="feature-card border-0 shadow-sm animate-on-scroll"
               :style="`animation-delay: ${index * 0.08}s`">
            <div class="card-body p-4">
              <div class="feature-icon mb-3" :style="`background-color: ${feature.color}18; color: ${feature.color}`">
                <i :class="feature.icon + ' fs-3'"></i>
              </div>
              <h5 class="card-title fw-bold mb-3">{{ feature.title }}</h5>
              <p class="card-text text-muted">{{ feature.description }}</p>
              <div class="feature-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section — 左文右按钮，非居中 -->
  <section class="cta-section py-5 text-white">
    <div class="container-fluid">
      <div class="cta-content">
        <div class="cta-text">
          <h2 class="fw-bold mb-3 cta-title animate-on-scroll">
            {{ t('home.hero.greeting') }}<br>{{ t('home.hero.description') }}
          </h2>
          <p class="lead text-white-50 animate-on-scroll" style="animation-delay: 0.1s">
            {{ t('home.features.learning.description') }}
          </p>
        </div>
        <div class="cta-action">
          <a href="https://github.com/dongzheyu" target="_blank"
             class="btn btn-light btn-lg animate-on-scroll" style="animation-delay: 0.2s">
            <i class="bi bi-github me-2"></i>GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero 区域 — 真正的非对称 Grid */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
  width: 100%;
}

.hero-main {
  padding-left: 4%;
}

.hero-decoration {
  position: relative;
  height: 400px;
}

/* Hero 标题 — 大而有力 */
.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 480px;
  line-height: 1.7;
}

/* Hero 底部渐变过渡 */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none;
}

/* Features 区域 */
.features-section {
  padding: var(--section-gap) 0;
}

.section-header {
  margin-bottom: 48px;
  padding-left: 5%;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 48px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.section-desc {
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin-top: 16px;
  max-width: 500px;
}

/* 奇数行向下错位，偶数行向上错位 */
/* 注意：这些样式已在 main.css 中定义，此处仅作备份 */
/* .features-section .row > :nth-child(2),
.features-section .row > :nth-child(5) {
  transform: translateY(32px);
} */

/* CTA 区域 */
.cta-section {
  background: var(--gradient-ember);
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  gap: 48px;
}

.cta-title {
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.cta-action {
  flex-shrink: 0;
}

/* 滚动触发动画初始状态（轻量版 — 移除 will-change） */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 450ms var(--ease-out-expo),
    transform 450ms var(--ease-out-expo);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式 */
@media (max-width: 991.98px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-decoration {
    display: none;
  }

  .hero-main {
    padding-left: 0;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
</style>
