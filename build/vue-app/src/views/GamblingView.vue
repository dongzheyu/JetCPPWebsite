<template>
  <div class="gambling-page">
    <section class="test-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.gambling.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.gambling.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.gambling.description') }}
              {{ t('tests.gambling.instruction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid px-4 test-body">
      <div v-if="!showResult">
        <p class="freq-instruction mb-5" style="padding-left: 5%;">{{ t('tests.gambling.questionInstruction') }}</p>
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
            <span class="score-total">/ 27</span>
          </div>
          <div class="score-info">
            <div class="score-level" :style="`color: ${result.color}`">{{ result.level }}</div>
            <p class="score-desc">{{ result.description }}</p>
          </div>
        </div>

        <div class="impairment-section mb-5">
          <h3 class="review-title">{{ t('tests.gambling.detailAnalysis') }}</h3>
          <div class="detail-grid">
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.gambling.testExplanation') }}</h4>
              <p class="detail-block-text">{{ result.analysis }}</p>
            </div>
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.gambling.suggestedActions') }}</h4>
              <ul class="detail-list">
                <li v-for="s in result.suggestions" :key="s">{{ s }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="important-notice mb-5">
          <i class="bi bi-exclamation-triangle notice-icon"></i>
          <div>
            <strong>{{ t('tests.gambling.importantNotice') }}</strong>
            <p>{{ t('tests.gambling.noticeText') }}</p>
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
  { value: 0, label: '从不' },
  { value: 1, label: '有时' },
  { value: 2, label: '大多数时候' },
  { value: 3, label: '几乎总是' },
]

const questions = ref([
  { id: 1, text: t('tests.gambling.questions.0') },
  { id: 2, text: t('tests.gambling.questions.1') },
  { id: 3, text: t('tests.gambling.questions.2') },
  { id: 4, text: t('tests.gambling.questions.3') },
  { id: 5, text: t('tests.gambling.questions.4') },
  { id: 6, text: t('tests.gambling.questions.5') },
  { id: 7, text: t('tests.gambling.questions.6') },
  { id: 8, text: t('tests.gambling.questions.7') },
  { id: 9, text: t('tests.gambling.questions.8') },
])

const answers = ref<Record<number, number>>({})
const showResult = ref(false)
const result = ref<any>(null)

const answeredCount = computed(() => questions.value.filter(q => answers.value[q.id] !== undefined).length)
const totalScore = computed(() => questions.value.reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0))

const getScoreClass = (score: number) => {
  if (score === 0) return 'score-none'
  if (score === 1) return 'score-low'
  if (score === 2) return 'score-mid'
  return 'score-high'
}

const calculateResult = () => {
  const score = totalScore.value
  // PGSI 分级：0 无风险，1-2 低风险，3-7 中等风险，8+ 高风险
  
  if (score === 0) {
    result.value = {
      level: '无赌博问题',
      color: '#52b788',
      description: '你的赌博行为在正常范围内，没有出现赌博问题。',
      analysis: 'PGSI 得分 0 分表明你没有出现赌博问题。保持健康的娱乐方式，避免赌博即可。',
      suggestions: ['继续保持不赌博的健康习惯', '了解赌博的风险和危害', '如未来出现赌博冲动，可重新评估'],
    }
  } else if (score <= 2) {
    result.value = {
      level: '低风险赌博',
      color: '#f48c06',
      description: '你存在一些赌博行为，但尚未构成问题赌博，值得关注。',
      analysis: 'PGSI 得分 1-2 分属于低风险范围。你可能偶尔赌博，但尚未出现明显的问题。建议设定明确的赌博限制，避免进一步发展。',
      suggestions: ['设定具体的赌博时间和金额限制', '避免使用信用卡或借款赌博', '寻找替代的娱乐活动', '了解问题赌博的预警信号'],
    }
  } else if (score <= 7) {
    result.value = {
      level: '中等风险赌博',
      color: '#ff8c42',
      description: '你的赌博行为已达到中等风险水平，很可能存在赌博问题，建议寻求帮助。',
      analysis: 'PGSI 得分 3-7 分达到中等风险标准。在这个水平，赌博可能已经开始影响你的生活和心理健康。赌博障碍是可以通过治疗有效管理的。',
      suggestions: ['建议预约心理咨询师或成瘾专科医生', '参加赌博问题支持团体', '使用自我排除工具禁止进入赌场或赌博网站', '寻求财务咨询帮助'],
    }
  } else {
    result.value = {
      level: '问题赌博（高风险）',
      color: '#ef233c',
      description: '你的赌博行为显示高风险，很可能符合赌博障碍诊断，建议立即寻求专业帮助。',
      analysis: 'PGSI 得分 ≥8 分属于问题赌博（高风险）范围。在这个水平，赌博很可能已经严重影响你的生活、健康和人际关系。赌博障碍需要系统的专业治疗干预。',
      suggestions: ['请尽快就诊成瘾医学专科或精神科', '如实告诉医生你的赌博情况和财务问题', '考虑住院治疗或强化门诊治疗选项', '危机时刻请拨打赌博问题援助热线 400-161-9995'],
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
/* 赌博障碍测试主色调：深棕色 */
.gambling-page {
  min-height: 100vh;
  --test-accent: #6d4c41;
  --test-accent-rgb: 109, 76, 65;
}
.test-hero-sub { color: #6d4c41; }
</style>