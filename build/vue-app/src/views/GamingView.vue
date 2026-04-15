<template>
  <div class="gaming-page">
    <section class="test-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.gaming.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.gaming.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.gaming.description') }}
              {{ t('tests.gaming.instruction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid px-4 test-body">
      <div v-if="!showResult">
        <p class="freq-instruction mb-5" style="padding-left: 5%;">{{ t('tests.gaming.questionInstruction') }}</p>
        <div
          v-for="(q, index) in questions"
          :key="q.id"
          class="question-card mb-4"
          :class="{ answered: answers[q.id] !== undefined }"
        >
          <div class="question-number">{{ index + 1 }} / {{ questions.length }}</div>
          <p class="question-text">{{ q.text }}</p>
          <div class="freq-options">
            <button
              v-for="opt in freqOptions"
              :key="opt.value"
              class="freq-btn"
              :class="{ selected: answers[q.id] === opt.value }"
              @click="answers[q.id] = opt.value; answers = { ...answers }"
            >
              <span class="freq-score">{{ opt.value }}</span>
              <span class="freq-label">{{ opt.label }}</span>
            </button>
          </div>
        </div>
        <div class="submit-section mt-4">
          <p v-if="answeredCount < questions.length" class="submit-hint">{{ t('tests.remainingQuestions', { count: questions.length - answeredCount }) }}</p>
          <button class="btn btn-primary btn-animate btn-lg" :disabled="answeredCount < questions.length" @click="calculateResult">{{ t('tests.viewResult') }}</button>
        </div>
      </div>

      <div v-if="showResult" class="result-section">
        <div class="score-card mb-5">
          <div class="score-circle" :style="`--score-color: ${result.color}`">
            <span class="score-num">{{ totalScore }}</span>
            <span class="score-total">/ 80</span>
          </div>
          <div class="score-info">
            <div class="score-level" :style="`color: ${result.color}`">{{ result.level }}</div>
            <p class="score-desc">{{ result.description }}</p>
          </div>
        </div>

        <div class="impairment-section mb-5">
          <h3 class="review-title">{{ t('tests.gaming.detailAnalysis') }}</h3>
          <div class="detail-grid">
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.gaming.testExplanation') }}</h4>
              <p class="detail-block-text">{{ result.analysis }}</p>
            </div>
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.gaming.suggestedActions') }}</h4>
              <ul class="detail-list">
                <li v-for="s in result.suggestions" :key="s">{{ s }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="important-notice mb-5">
          <i class="bi bi-exclamation-triangle notice-icon"></i>
          <div>
            <strong>{{ t('tests.gaming.importantNotice') }}</strong>
            <p>{{ t('tests.gaming.noticeText') }}</p>
          </div>
        </div>

        <div class="text-center" style="text-align: left !important;">
          <button class="btn btn-animate me-3" @click="resetTest">{{ t('tests.resetTest') }}</button>
          <RouterLink to="/tests" class="btn btn-primary btn-animate">{{ t('tests.viewOtherTests') }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const freqOptions = [
  { value: 0, label: '完全不符合' },
  { value: 1, label: '不太符合' },
  { value: 2, label: '有点符合' },
  { value: 3, label: '比较符合' },
  { value: 4, label: '完全符合' },
]

const questions = ref([
  { id: 1, text: t('tests.gaming.questions.0') },
  { id: 2, text: t('tests.gaming.questions.1') },
  { id: 3, text: t('tests.gaming.questions.2') },
  { id: 4, text: t('tests.gaming.questions.3') },
  { id: 5, text: t('tests.gaming.questions.4') },
  { id: 6, text: t('tests.gaming.questions.5') },
  { id: 7, text: t('tests.gaming.questions.6') },
  { id: 8, text: t('tests.gaming.questions.7') },
  { id: 9, text: t('tests.gaming.questions.8') },
  { id: 10, text: t('tests.gaming.questions.9') },
  { id: 11, text: t('tests.gaming.questions.10') },
  { id: 12, text: t('tests.gaming.questions.11') },
  { id: 13, text: t('tests.gaming.questions.12') },
  { id: 14, text: t('tests.gaming.questions.13') },
  { id: 15, text: t('tests.gaming.questions.14') },
  { id: 16, text: t('tests.gaming.questions.15') },
  { id: 17, text: t('tests.gaming.questions.16') },
  { id: 18, text: t('tests.gaming.questions.17') },
  { id: 19, text: t('tests.gaming.questions.18') },
  { id: 20, text: t('tests.gaming.questions.19') },
])

const answers = ref<Record<number, number>>({})
const showResult = ref(false)
const result = ref<any>(null)

const answeredCount = computed(() => questions.value.filter(q => answers.value[q.id] !== undefined).length)
const totalScore = computed(() => questions.value.reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0))

const getScoreClass = (score: number) => {
  if (score === 0) return 'score-none'
  if (score <= 1) return 'score-low'
  if (score <= 2) return 'score-mid'
  return 'score-high'
}

const calculateResult = () => {
  const score = totalScore.value
  // IGD-20 阈值：≥71 高风险
  
  if (score <= 30) {
    result.value = {
      level: '健康游戏习惯',
      color: '#52b788',
      description: '你的游戏习惯基本健康，没有出现游戏障碍风险。',
      analysis: '总得分 ≤30 分表明你的游戏习惯在健康范围内。你能够控制游戏时间，游戏不太可能影响你的生活。',
      suggestions: ['继续保持健康的游戏习惯', '设定明确的游戏时间限制', '保持游戏与其他活动的平衡'],
    }
  } else if (score <= 50) {
    result.value = {
      level: '风险游戏行为',
      color: '#f48c06',
      description: '你有一些风险游戏行为，值得关注但可能未达到障碍水平。',
      analysis: '总得分 31-50 分表明存在一些风险游戏行为。你可能在某些方面过度游戏，但尚未构成障碍。建议主动管理游戏时间。',
      suggestions: ['设定具体的每日游戏时间限制', '寻找替代的娱乐活动', '记录游戏时间和影响', '避免使用游戏逃避现实问题'],
    }
  } else if (score <= 70) {
    result.value = {
      level: '中度游戏障碍风险',
      color: '#ff8c42',
      description: '你的游戏行为显示中度风险，很可能存在游戏障碍，建议寻求专业评估。',
      analysis: '总得分 51-70 分达到中度风险标准。在这个水平，游戏很可能已经开始影响你的生活和功能。游戏障碍可以通过行为干预有效改善。',
      suggestions: ['建议预约心理咨询师或成瘾专科医生', '了解认知行为疗法对行为成瘾的效果', '参加数字健康支持团体', '使用应用程序监控和限制游戏时间'],
    }
  } else {
    result.value = {
      level: '重度游戏障碍风险',
      color: '#ef233c',
      description: '你的游戏行为显示高风险，很可能符合游戏障碍诊断，建议立即寻求专业帮助。',
      analysis: '总得分 ≥71 分属于重度游戏障碍风险范围。在这个水平，游戏很可能已经严重影响你的生活、健康和人际关系。游戏障碍需要系统的专业治疗干预。',
      suggestions: ['请尽快就诊成瘾医学专科或精神科', '如实告诉医生你的游戏情况和影响', '考虑住院治疗或强化门诊治疗选项', '危机时刻请拨打行为成瘾援助热线 400-161-9995'],
    }
  }
  showResult.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetTest = () => {
  answers.value = {}
  showResult.value = false
  result.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* 游戏障碍测试主色调：青色 */
.gaming-page {
  min-height: 100vh;
  --test-accent: #06d6a0;
  --test-accent-rgb: 6, 214, 160;
}
.test-hero-sub { color: #06d6a0; }
</style>