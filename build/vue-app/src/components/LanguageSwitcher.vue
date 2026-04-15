<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { locale } = useI18n()

const currentLang = computed(() => locale.value)

const langLabel = computed(() => currentLang.value === 'zh-CN' ? '中文' : 'English')
</script>

<template>
  <div class="dropdown">
    <button
      class="lang-toggle-btn dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :title="langLabel"
    >
      <i class="bi bi-translate"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-end lang-dropdown">
      <li>
        <button
          class="dropdown-item d-flex align-items-center gap-2"
          :class="{ active: currentLang === 'zh-CN' }"
          @click="setLocale('zh-CN')"
        >
          <i class="bi bi-check-lg" v-if="currentLang === 'zh-CN'"></i>
          <span>中文</span>
        </button>
      </li>
      <li>
        <button
          class="dropdown-item d-flex align-items-center gap-2"
          :class="{ active: currentLang === 'en-US' }"
          @click="setLocale('en-US')"
        >
          <i class="bi bi-check-lg" v-if="currentLang === 'en-US'"></i>
          <span>English</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 语言切换按钮 - 与主题切换按钮保持一致 */
.lang-toggle-btn {
  width: 38px;
  height: 38px;
  padding: 0 !important;
  border-radius: var(--radius-sm) !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 1px solid var(--color-border) !important;
  background: transparent !important;
  color: var(--color-text-secondary) !important;
  cursor: pointer;
  transition: all var(--transition-base);
}

.lang-toggle-btn:hover {
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  background: rgba(255, 140, 66, 0.08) !important;
}

.lang-toggle-btn::after {
  display: none !important;
}

/* 语言下拉菜单 - 与主题下拉菜单保持一致 */
.lang-dropdown {
  background: var(--color-bg-card) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: var(--radius-sm) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25) !important;
  padding: 6px !important;
  min-width: 140px;
}

.lang-dropdown .dropdown-item {
  color: var(--color-text) !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 0.9rem;
  transition: all var(--transition-base);
}

.lang-dropdown .dropdown-item:hover {
  background: rgba(255, 140, 66, 0.1) !important;
  color: var(--color-primary) !important;
}

.lang-dropdown .dropdown-item.active {
  background: rgba(255, 140, 66, 0.12) !important;
  color: var(--color-primary) !important;
  font-weight: 600;
}
</style>
