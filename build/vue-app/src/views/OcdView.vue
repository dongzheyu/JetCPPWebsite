<template>
  <div class="ocd-page">
    <!-- Hero -->
    <section class="test-hero ocd-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.ocd.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.ocd.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.ocd.description') }}
              {{ t('tests.ocd.instruction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 测试部分 -->
    <section class="test-section">
      <div class="container">
        <form @submit.prevent="calculateScore">
          <!-- 题目列表 -->
          <div class="questions-list">
            <div v-for="(question, index) in questions" :key="index" class="question-card">
              <div class="question-header">
                <h3 class="question-number">{{ index + 1 }}. {{ question.text }}</h3>
                <div class="question-hint">{{ question.hint }}</div>
              </div>
              <div class="options-grid">
                <button
                  v-for="(option, optIndex) in options"
                  :key="optIndex"
                  type="button"
                  class="option-btn"
                  :class="{ 
                    'selected': userAnswers[index] === optIndex,
                    'gradient-border': userAnswers[index] === optIndex
                  }"
                  @click="selectAnswer(index, optIndex)"
                >
                  <span class="option-label">{{ option.label }}</span>
                  <span class="option-desc">{{ option.desc }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 提交按钮 -->
          <div class="submit-section">
            <button type="submit" class="btn btn-animate submit-btn" :disabled="!allAnswered">
              {{ allAnswered ? t('tests.viewResult') : t('tests.completeAllQuestions', { answered: answeredCount, total: questions.length }) }}
            </button>
          </div>
        </form>

        <!-- 结果部分 -->
        <div v-if="showResult" class="result-section">
          <h2 class="result-title">{{ t('tests.resultTitle') }}</h2>
          <div class="result-card">
            <div class="score-display">
              <span class="score-label">{{ t('tests.totalScore') }}</span>
              <div class="score-value">{{ totalScore }}</div>
              <div class="score-range">{{ t('tests.maxScore', { score: maxScore }) }}</div>
            </div>
            <div class="result-interpretation">
              <h3>{{ t('tests.resultInterpretation') }}</h3>
              <p v-html="resultInterpretation"></p>
            </div>
            <div class="result-actions">
              <button @click="resetTest" class="btn btn-secondary">{{ t('tests.resetTest') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

// 强迫症 OCI-R 题目
const questions = ref([
  { text: t('tests.ocd.questions.0'), hint: t('tests.ocd.hints.0') },
  { text: t('tests.ocd.questions.1'), hint: t('tests.ocd.hints.1') },
  { text: t('tests.ocd.questions.2'), hint: t('tests.ocd.hints.2') },
  { text: t('tests.ocd.questions.3'), hint: t('tests.ocd.hints.3') },
  { text: t('tests.ocd.questions.4'), hint: t('tests.ocd.hints.4') },
  { text: t('tests.ocd.questions.5'), hint: t('tests.ocd.hints.5') },
  { text: t('tests.ocd.questions.6'), hint: t('tests.ocd.hints.6') },
  { text: t('tests.ocd.questions.7'), hint: t('tests.ocd.hints.7') },
  { text: t('tests.ocd.questions.8'), hint: t('tests.ocd.hints.8') },
  { text: t('tests.ocd.questions.9'), hint: t('tests.ocd.hints.9') },
  { text: t('tests.ocd.questions.10'), hint: t('tests.ocd.hints.10') },
  { text: t('tests.ocd.questions.11'), hint: t('tests.ocd.hints.11') },
  { text: t('tests.ocd.questions.12'), hint: t('tests.ocd.hints.12') },
  { text: t('tests.ocd.questions.13'), hint: t('tests.ocd.hints.13') },
  { text: t('tests.ocd.questions.14'), hint: t('tests.ocd.hints.14') },
  { text: t('tests.ocd.questions.15'), hint: t('tests.ocd.hints.15') },
  { text: t('tests.ocd.questions.16'), hint: t('tests.ocd.hints.16') },
  { text: t('tests.ocd.questions.17'), hint: t('tests.ocd.hints.17') }
])

// 评分选项 (0-4分)
const options = ref([
  { label: '从无', desc: '0分', value: 0 },
  { label: '很少', desc: '1分', value: 1 },
  { label: '有时', desc: '2分', value: 2 },
  { label: '经常', desc: '3分', value: 3 },
  { label: '总是', desc: '4分', value: 4 }
])

const userAnswers = ref<number[]>(Array(questions.value.length).fill(-1))
const showResult = ref(false)

// 计算已答题目数量
const answeredCount = computed(() => {
  return userAnswers.value.filter(answer => answer !== -1).length
})

// 检查是否全部答完
const allAnswered = computed(() => {
  return userAnswers.value.every(answer => answer !== -1)
})

// 总分
const totalScore = computed(() => {
  return userAnswers.value.reduce((sum, answerIndex) => {
    return sum + (answerIndex !== -1 ? options.value[answerIndex].value : 0)
  }, 0)
})

// 最高分
const maxScore = computed(() => {
  return questions.value.length * 4
})

// 结果解读
const resultInterpretation = computed(() => {
  const score = totalScore.value
  
  if (score < 21) {
    return `<strong>${t('tests.ocd.mildSymptoms')}</strong><br>${t('tests.ocd.mildSymptomsDesc')}`
  } else if (score < 41) {
    return `<strong>${t('tests.ocd.moderateSymptoms')}</strong><br>${t('tests.ocd.moderateSymptomsDesc')}`
  } else {
    return `<strong>${t('tests.ocd.severeSymptoms')}</strong><br>${t('tests.ocd.severeSymptomsDesc')}`
  }
})

// 选择答案
const selectAnswer = (questionIndex: number, optionIndex: number) => {
  userAnswers.value[questionIndex] = optionIndex
}

// 计算分数
const calculateScore = () => {
  if (allAnswered.value) {
    showResult.value = true
    window.scrollTo({ top: document.querySelector('.result-section')?.offsetTop || 0, behavior: 'smooth' })
  }
}

// 重置测试
const resetTest = () => {
  userAnswers.value = Array(questions.value.length).fill(-1)
  showResult.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.ocd-hero {
  background: linear-gradient(135deg, rgba(58,12,163,0.15) 0%, rgba(88,42,193,0.08) 100%);
}

.ocd-hero::before {
  background: radial-gradient(ellipse at 30% 50%, rgba(58,12,163,0.25) 0%, transparent 70%);
}

.test-hero-title {
  color: #3a0ca3;
}

.test-hero-sub {
  color: rgba(58,12,163,0.7);
}

.question-card {
  background: var(--color-bg-card);
  border-left: 4px solid #3a0ca3;
}

.option-btn.selected {
  background: linear-gradient(135deg, rgba(58,12,163,0.1) 0%, rgba(88,42,193,0.05) 100%);
  border-color: #3a0ca3;
  color: #3a0ca3;
}

.submit-btn {
  --btn-color: #3a0ca3;
}

.score-value {
  color: #3a0ca3;
  font-size: 3rem;
}

.result-card {
  border-left: 6px solid #3a0ca3;
}
</style>