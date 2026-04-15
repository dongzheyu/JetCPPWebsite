<template>
  <div class="ptsd-page">
    <section class="test-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.ptsd.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.ptsd.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.ptsd.description') }}
              {{ t('tests.ptsd.instruction') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid px-4 test-body">
      <div v-if="!showResult">
        <p class="freq-instruction mb-5" style="padding-left: 5%;">{{ t('tests.ptsd.questionInstruction') }}</p>
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

        <div class="answer-review mb-5">
          <h3 class="review-title">{{ t('tests.scoreDetails') }}</h3>
          <div class="review-grid">
            <div v-for="(q, index) in questions" :key="q.id" class="review-item">
              <div class="review-q-num">Q{{ index + 1 }}</div>
              <div class="review-q-text">{{ q.text }}</div>
              <div class="review-score" :class="getScoreClass(answers[q.id])">
                {{ freqOptions.find(o => o.value === answers[q.id])?.label }}
                <span class="review-score-num">+{{ answers[q.id] }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="dimension-section mb-5">
          <h3 class="review-title">{{ t('tests.ptsd.symptomClusterAnalysis') }}</h3>
          <div class="dimension-grid">
            <div class="dim-card">
              <div class="dim-icon"><i class="bi bi-eye-fill"></i></div>
              <div class="dim-content">
                <h4 class="dim-title">{{ t('tests.ptsd.reexperiencingSymptoms') }}</h4>
                <p class="dim-score">{{ clusterB }} / 20</p>
                <p class="dim-desc">{{ t('tests.ptsd.reexperiencingDesc') }}</p>
              </div>
            </div>
            <div class="dim-card">
              <div class="dim-icon"><i class="bi bi-slash-circle-fill"></i></div>
              <div class="dim-content">
                <h4 class="dim-title">{{ t('tests.ptsd.avoidanceSymptoms') }}</h4>
                <p class="dim-score">{{ clusterC }} / 8</p>
                <p class="dim-desc">{{ t('tests.ptsd.avoidanceDesc') }}</p>
              </div>
            </div>
            <div class="dim-card">
              <div class="dim-icon"><i class="bi bi-lightning-fill"></i></div>
              <div class="dim-content">
                <h4 class="dim-title">{{ t('tests.ptsd.negativeCognition') }}</h4>
                <p class="dim-score">{{ clusterD }} / 28</p>
                <p class="dim-desc">{{ t('tests.ptsd.negativeCognitionDesc') }}</p>
              </div>
            </div>
            <div class="dim-card">
              <div class="dim-icon"><i class="bi bi-activity"></i></div>
              <div class="dim-content">
                <h4 class="dim-title">{{ t('tests.ptsd.hyperarousal') }}</h4>
                <p class="dim-score">{{ clusterE }} / 24</p>
                <p class="dim-desc">{{ t('tests.ptsd.hyperarousalDesc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="impairment-section mb-5">
          <h3 class="review-title">{{ t('tests.ptsd.detailAnalysis') }}</h3>
          <div class="detail-grid">
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.ptsd.testExplanation') }}</h4>
              <p class="detail-block-text">{{ result.analysis }}</p>
            </div>
            <div class="detail-block">
              <h4 class="detail-block-title">{{ t('tests.ptsd.suggestedActions') }}</h4>
              <ul class="detail-list">
                <li v-for="s in result.suggestions" :key="s">{{ s }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="important-notice mb-5">
          <i class="bi bi-exclamation-triangle notice-icon"></i>
          <div>
            <strong>{{ t('tests.ptsd.importantNotice') }}</strong>
            <p>{{ t('tests.ptsd.noticeText') }}</p>
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
  { value: 0, label: '一点也没有' },
  { value: 1, label: '有一点' },
  { value: 2, label: '中等程度' },
  { value: 3, label: '相当严重' },
  { value: 4, label: '极其严重' },
]

const questions = ref([
  { id: 1, text: t('tests.ptsd.questions.0'), cluster: 'B' },
  { id: 2, text: t('tests.ptsd.questions.1'), cluster: 'B' },
  { id: 3, text: t('tests.ptsd.questions.2'), cluster: 'B' },
  { id: 4, text: t('tests.ptsd.questions.3'), cluster: 'B' },
  { id: 5, text: t('tests.ptsd.questions.4'), cluster: 'B' },
  { id: 6, text: t('tests.ptsd.questions.5'), cluster: 'C' },
  { id: 7, text: t('tests.ptsd.questions.6'), cluster: 'C' },
  { id: 8, text: t('tests.ptsd.questions.7'), cluster: 'D' },
  { id: 9, text: t('tests.ptsd.questions.8'), cluster: 'D' },
  { id: 10, text: t('tests.ptsd.questions.9'), cluster: 'D' },
  { id: 11, text: t('tests.ptsd.questions.10'), cluster: 'D' },
  { id: 12, text: t('tests.ptsd.questions.11'), cluster: 'D' },
  { id: 13, text: t('tests.ptsd.questions.12'), cluster: 'D' },
  { id: 14, text: t('tests.ptsd.questions.13'), cluster: 'D' },
  { id: 15, text: t('tests.ptsd.questions.14'), cluster: 'E' },
  { id: 16, text: t('tests.ptsd.questions.15'), cluster: 'E' },
  { id: 17, text: t('tests.ptsd.questions.16'), cluster: 'E' },
  { id: 18, text: t('tests.ptsd.questions.17'), cluster: 'E' },
  { id: 19, text: t('tests.ptsd.questions.18'), cluster: 'E' },
  { id: 20, text: t('tests.ptsd.questions.19'), cluster: 'E' },
])

const answers = ref<Record<number, number>>({})
const showResult = ref(false)
const result = ref<any>(null)

const answeredCount = computed(() => questions.value.filter(q => answers.value[q.id] !== undefined).length)
const totalScore = computed(() => questions.value.reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0))

const clusterB = computed(() => {
  return questions.value.filter(q => q.cluster === 'B')
    .reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0)
})

const clusterC = computed(() => {
  return questions.value.filter(q => q.cluster === 'C')
    .reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0)
})

const clusterD = computed(() => {
  return questions.value.filter(q => q.cluster === 'D')
    .reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0)
})

const clusterE = computed(() => {
  return questions.value.filter(q => q.cluster === 'E')
    .reduce((sum, q) => sum + (answers.value[q.id] ?? 0), 0)
})

const getScoreClass = (score: number) => {
  if (score === 0) return 'score-none'
  if (score <= 1) return 'score-low'
  if (score === 2) return 'score-mid'
  return 'score-high'
}

const calculateResult = () => {
  const score = totalScore.value
  
  // PCL-5 筛查阈值：≥31–33（取决于研究）
  const isPositive = score >= 31
  
  // DSM-5 诊断算法：B≥1, C≥1, D≥2, E≥2
  const meetsDSM5 = clusterB.value >= 1 && clusterC.value >= 1 && clusterD.value >= 2 && clusterE.value >= 2
  
  if (score <= 20) {
    result.value = {
      level: '极轻微症状',
      color: '#52b788',
      description: '你的PTSD症状水平很低，创伤事件可能未对你造成持久影响。',
      analysis: '总得分 ≤20 分表明创伤后应激症状极轻微。许多人经历创伤事件后会自然恢复，你的得分显示你可能已经较好地适应或处理了创伤经历。',
      suggestions: ['继续保持现有的应对策略', '保持与支持系统的联系', '如未来症状加重，可重新评估', '了解创伤后正常反应与病理反应的界限'],
    }
  } else if (score <= 30) {
    result.value = {
      level: '轻度症状',
      color: '#f48c06',
      description: '你存在一定程度的创伤后症状，但可能未达到PTSD的诊断标准。',
      analysis: '总得分 21–30 分属于轻度症状范围。你可能体验到一些创伤相关困扰，但尚未严重到符合PTSD的诊断阈值。这些症状仍值得关注，因为它们可能影响生活质量。',
      suggestions: ['学习创伤知情自我照顾技巧', '考虑与心理咨询师讨论创伤经历', '练习正念和接地技术', '避免通过物质使用来缓解症状'],
    }
  } else if (score <= 50) {
    result.value = {
      level: '中度症状',
      color: '#ff8c42',
      description: '你的PTSD症状已达到临床显著水平，建议寻求专业评估。',
      analysis: '总得分 31–50 分达到PTSD筛查阳性标准。在这个水平，创伤后症状很可能已经影响你的日常生活功能。PTSD是可通过循证治疗（如EMDR、CPT、PE）有效治疗的障碍。',
      suggestions: ['建议预约精神科医生或心理治疗师', '询问关于EMDR或认知加工疗法的信息', '寻找创伤知情治疗师', '与信任的人分享你的经历'],
    }
  } else {
    result.value = {
      level: '重度症状',
      color: '#ef233c',
      description: '你的PTSD症状非常严重，很可能显著损害你的功能，建议立即寻求专业帮助。',
      analysis: '总得分 ≥51 分属于重度PTSD症状范围。在这个水平，症状可能导致严重的功能障碍、生活质量下降和共病风险增高。重度PTSD需要系统、专业的治疗干预。',
      suggestions: ['请尽快就诊精神科或创伤专科', '如实告诉医生你的症状严重程度和持续时间', '考虑住院治疗或强化门诊治疗选项', '危机时刻请拨打心理援助热线 400-161-9995'],
    }
  }
  
  // 补充DSM-5算法信息
  if (meetsDSM5) {
    result.value.analysis += ' 你的症状模式符合DSM-5 PTSD诊断算法（B≥1, C≥1, D≥2, E≥2）。'
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
/* PTSD测试主色调：深红色系 */
.ptsd-page {
  min-height: 100vh;
  --test-accent: #9d0208;
  --test-accent-rgb: 157, 2, 8;
}
.test-hero-sub { color: #9d0208; }
</style>