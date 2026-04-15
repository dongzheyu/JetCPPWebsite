<template>
  <div class="bpd-page">
    <section class="test-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.bpd.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.bpd.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.bpd.description') }}
              {{ t('tests.bpd.instruction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid px-4 test-body">
      <div v-if="!showResult">
        <p class="freq-instruction mb-5" style="padding-left: 5%;">{{ t('tests.bpd.questionInstruction') }}</p>
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
            <span class="score-total">/ 10</span>
          </div>
          <div class="score-info">
            <div class="score-level" :style="`color: ${result.color}`">{{ result.level }}</div>
            <p class="score-desc">{{ result.description }}</p>
          </div>
        </div>

        <div class="impairment-section mb-5">
          <h3 class="review-title">{{ t('tests.bpd.detailAnalysis') }}</h3>
          <div class="detail-grid">
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.bpd.testExplanation') }}</h4>
              <p class="detail-block-text">{{ result.analysis }}</p>
            </div>
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.bpd.suggestedActions') }}</h4>
              <ul class="detail-list">
                <li v-for="s in result.suggestions" :key="s">{{ s }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="important-notice mb-5">
          <i class="bi bi-exclamation-triangle notice-icon"></i>
          <div>
            <strong>{{ t('tests.bpd.importantNotice') }}</strong>
            <p>{{ t('tests.bpd.noticeText') }}</p>
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
  { value: 0, label: '否' },
  { value: 1, label: '是' },
]

const questions = ref([
  { id: 1, text: '你是否经常感到空虚？' },
  { id: 2, text: '你是否难以控制愤怒情绪？' },
  { id: 3, text: '你是否经常情绪波动？' },
  { id: 4, text: '你是否难以维持稳定的人际关系？' },
  { id: 5, text: '你是否担心被抛弃，并为此做出极端努力？' },
  { id: 6, text: '你是否有时觉得自己好像不存在或与现实脱离？' },
  { id: 7, text: '你是否曾有冲动行为，如暴食、物质滥用、鲁莽驾驶等？' },
  { id: 8, text: '你是否曾有自伤行为或自杀念头？' },
  { id: 9, text: '你的自我形象或自我认同是否不稳定？' },
  { id: 10, text: '你是否难以信任他人？' },
])

const answers = ref<Record<number, number>>({})
const showResult = ref(false)
const result = ref<any>(null)

const answeredCount = computed(() => questions.value.filter(q => answers.value[q.id] !== undefined).length)
const totalScore = computed(() => questions.value.reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0))

const getScoreClass = (score: number) => {
  if (score === 0) return 'score-none'
  return 'score-yes'
}

const calculateResult = () => {
  const score = totalScore.value
  // MSI-BPD 阈值：≥7 高风险
  
  if (score <= 2) {
    result.value = {
      level: '低风险',
      color: '#52b788',
      description: '你的边缘型人格障碍风险很低，属于正常情绪调节范围。',
      analysis: 'MSI-BPD 得分 ≤2 分表明你的情绪调节和人际关系模式基本健康。你不太可能出现边缘型人格障碍。',
      suggestions: ['继续保持健康的情绪调节方式', '如未来出现情绪困扰，可重新评估', '学习情绪管理和人际沟通技巧'],
    }
  } else if (score <= 4) {
    result.value = {
      level: '中等风险',
      color: '#f48c06',
      description: '你有一些边缘型特征，值得关注但可能未达到障碍水平。',
      analysis: 'MSI-BPD 得分 3-4 分表明存在一些边缘型特征。你可能在情绪调节或人际关系方面遇到一些挑战，但尚未构成障碍。',
      suggestions: ['学习正念和情绪调节技巧', '记录情绪波动和触发因素', '考虑心理咨询改善人际关系', '阅读辩证行为疗法（DBT）自助书籍'],
    }
  } else if (score <= 6) {
    result.value = {
      level: '高风险',
      color: '#ff8c42',
      description: '你的边缘型特征表现较高，建议寻求专业人格障碍评估。',
      analysis: 'MSI-BPD 得分 5-6 分达到高风险范围。在这个水平，你很可能存在显著的情绪调节和人际关系困难。边缘型人格障碍是可通过专门治疗（如DBT）有效改善的障碍。',
      suggestions: ['建议预约精神科医生或心理治疗师', '了解辩证行为疗法（DBT）的治疗原理', '寻找人格障碍专科治疗师', '参加DBT技能训练小组'],
    }
  } else {
    result.value = {
      level: '极高风险',
      color: '#ef233c',
      description: '你的边缘型特征表现非常高，很可能符合边缘型人格障碍诊断，建议立即寻求专业帮助。',
      analysis: 'MSI-BPD 得分 ≥7 分属于极高风险范围。在这个水平，边缘型人格障碍的可能性很高。边缘型人格障碍是严重但可治疗的精神障碍，通过系统的DBT治疗通常能够显著改善功能和生活质量。',
      suggestions: ['请尽快就诊精神科或人格障碍专科', '如实告诉医生你的症状严重程度和自伤风险', '考虑住院治疗或强化门诊治疗选项', '危机时刻请拨打心理危机干预热线 400-161-9995'],
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
/* 边缘型人格障碍测试主色调：深紫色 */
.bpd-page {
  min-height: 100vh;
  --test-accent: #7b2cbf;
  --test-accent-rgb: 123, 44, 191;
}
.test-hero-sub { color: #7b2cbf; }
</style>