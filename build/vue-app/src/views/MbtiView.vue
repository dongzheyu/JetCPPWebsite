<template>
  <div class="mbti-page">
    <!-- Hero -->
    <section class="test-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <RouterLink to="/tests" class="back-link mb-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-arrow-left"></i> {{ t('tests.backToList') }}
            </RouterLink>
            <h1 class="test-hero-title mb-3">{{ t('tests.mbti.title') }}</h1>
            <p class="test-hero-sub mb-2">{{ t('tests.mbti.subtitle') }}</p>
            <p class="test-hero-desc">
              {{ t('tests.mbti.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid px-4 test-body">

      <!-- 进度条 -->
      <div v-if="!showResult" class="progress-section mb-5" style="padding-left: 5%;">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="progress-label">{{ t('tests.progress') }}</span>
          <span class="progress-count">{{ answeredCount }} / {{ questions.length }}</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" :style="`width: ${(answeredCount / questions.length) * 100}%`"></div>
        </div>
      </div>

      <!-- 测试题目 -->
      <div v-if="!showResult">
        <div
          v-for="(q, index) in questions"
          :key="q.id"
          class="question-card mb-4"
          :class="{ answered: answers[q.id] !== undefined }"
        >
          <div class="question-number">{{ index + 1 }}</div>
          <p class="question-text">{{ q.text }}</p>
          <div class="options-row">
            <button
              v-for="opt in q.options"
              :key="opt.value"
              class="option-btn"
              :class="{ selected: answers[q.id] === opt.value }"
              @click="selectAnswer(q.id, opt.value, q.dimension)"
            >
              {{ opt.label }}
            </button>
          </div>
          <div class="dimension-hint">{{ t('tests.dimension') }}：{{ dimensionLabel(q.dimension) }}</div>
        </div>

        <div class="submit-section">
          <p v-if="answeredCount < questions.length" class="submit-hint">
            {{ t('tests.remainingQuestions', { count: questions.length - answeredCount }) }}
          </p>
          <button
            class="btn btn-primary btn-animate btn-lg"
            :disabled="answeredCount < questions.length"
            @click="calculateResult"
          >
            {{ t('tests.viewResult') }}
          </button>
        </div>
      </div>

      <!-- 结果 -->
      <div v-if="showResult" class="result-section">
        <div class="result-type-card mb-6">
          <div class="result-type-badge">{{ result.type }}</div>
          <h2 class="result-type-name">{{ result.name }}</h2>
          <p class="result-type-tagline">{{ result.tagline }}</p>

          <!-- 四维度得分 -->
          <div class="dimension-scores mt-4">
            <div v-for="dim in dimensionScores" :key="dim.key" class="dim-score-row">
              <div class="dim-labels">
                <span class="dim-left" :class="{ dominant: dim.leftDominant }">{{ dim.left }}</span>
                <span class="dim-right" :class="{ dominant: !dim.leftDominant }">{{ dim.right }}</span>
              </div>
              <div class="dim-bar-wrap">
                <div
                  class="dim-bar-fill"
                  :style="`width: ${dim.leftPercent}%; background: var(--color-primary)`"
                ></div>
              </div>
              <div class="dim-percent">{{ dim.leftDominant ? dim.left : dim.right }} {{ dim.dominantPercent }}%</div>
            </div>
          </div>
        </div>

        <!-- 详细分析 -->
        <div class="result-detail-grid">
          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.coreFeatures') }}</h3>
            <p class="result-block-text">{{ result.overview }}</p>
          </div>

          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.strengths') }}</h3>
            <ul class="result-list">
              <li v-for="s in result.strengths" :key="s">{{ s }}</li>
            </ul>
          </div>

          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.weaknesses') }}</h3>
            <ul class="result-list">
              <li v-for="w in result.weaknesses" :key="w">{{ w }}</li>
            </ul>
          </div>

          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.relationships') }}</h3>
            <p class="result-block-text">{{ result.relationships }}</p>
          </div>

          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.career') }}</h3>
            <p class="result-block-text">{{ result.career }}</p>
          </div>

          <div class="result-block">
            <h3 class="result-block-title">{{ t('tests.result.growth') }}</h3>
            <p class="result-block-text">{{ result.growth }}</p>
          </div>
        </div>

        <div class="result-disclaimer mt-5">
          {{ t('tests.result.disclaimer') }}
        </div>

        <div class="text-center mt-5">
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

// ---- 题目数据 ----
// dimension: EI | SN | TF | JP
const questions = ref([
  // E/I 维度 (24题)
  { id: 1,  dimension: 'EI', text: t('tests.mbti.questions.q1'), options: [{ label: t('tests.mbti.options.e1'), value: 'E' }, { label: t('tests.mbti.options.i1'), value: 'I' }] },
  { id: 2,  dimension: 'EI', text: t('tests.mbti.questions.q2'), options: [{ label: t('tests.mbti.options.e2'), value: 'E' }, { label: t('tests.mbti.options.i2'), value: 'I' }] },
  { id: 3,  dimension: 'EI', text: t('tests.mbti.questions.q3'), options: [{ label: t('tests.mbti.options.e3'), value: 'E' }, { label: t('tests.mbti.options.i3'), value: 'I' }] },
  { id: 4,  dimension: 'EI', text: t('tests.mbti.questions.q4'), options: [{ label: t('tests.mbti.options.e4'), value: 'E' }, { label: t('tests.mbti.options.i4'), value: 'I' }] },
  { id: 5,  dimension: 'EI', text: t('tests.mbti.questions.q5'), options: [{ label: t('tests.mbti.options.e5'), value: 'E' }, { label: t('tests.mbti.options.i5'), value: 'I' }] },
  { id: 6,  dimension: 'EI', text: t('tests.mbti.questions.q6'), options: [{ label: t('tests.mbti.options.e6'), value: 'E' }, { label: t('tests.mbti.options.i6'), value: 'I' }] },
  { id: 7,  dimension: 'EI', text: t('tests.mbti.questions.q7'), options: [{ label: t('tests.mbti.options.e7'), value: 'E' }, { label: t('tests.mbti.options.i7'), value: 'I' }] },
  { id: 8,  dimension: 'EI', text: t('tests.mbti.questions.q8'), options: [{ label: t('tests.mbti.options.e8'), value: 'E' }, { label: t('tests.mbti.options.i8'), value: 'I' }] },
  { id: 9,  dimension: 'EI', text: t('tests.mbti.questions.q9'), options: [{ label: t('tests.mbti.options.e9'), value: 'E' }, { label: t('tests.mbti.options.i9'), value: 'I' }] },
  { id: 10, dimension: 'EI', text: t('tests.mbti.questions.q10'), options: [{ label: t('tests.mbti.options.e10'), value: 'E' }, { label: t('tests.mbti.options.i10'), value: 'I' }] },
  { id: 11, dimension: 'EI', text: t('tests.mbti.questions.q11'), options: [{ label: t('tests.mbti.options.e11'), value: 'E' }, { label: t('tests.mbti.options.i11'), value: 'I' }] },
  { id: 12, dimension: 'EI', text: t('tests.mbti.questions.q12'), options: [{ label: t('tests.mbti.options.e12'), value: 'E' }, { label: t('tests.mbti.options.i12'), value: 'I' }] },
  { id: 13, dimension: 'EI', text: t('tests.mbti.questions.q13'), options: [{ label: t('tests.mbti.options.e13'), value: 'E' }, { label: t('tests.mbti.options.i13'), value: 'I' }] },
  { id: 14, dimension: 'EI', text: t('tests.mbti.questions.q14'), options: [{ label: t('tests.mbti.options.e14'), value: 'E' }, { label: t('tests.mbti.options.i14'), value: 'I' }] },
  { id: 15, dimension: 'EI', text: t('tests.mbti.questions.q15'), options: [{ label: t('tests.mbti.options.e15'), value: 'E' }, { label: t('tests.mbti.options.i15'), value: 'I' }] },
  { id: 16, dimension: 'EI', text: t('tests.mbti.questions.q16'), options: [{ label: t('tests.mbti.options.e16'), value: 'E' }, { label: t('tests.mbti.options.i16'), value: 'I' }] },
  { id: 17, dimension: 'EI', text: t('tests.mbti.questions.q17'), options: [{ label: t('tests.mbti.options.e17'), value: 'E' }, { label: t('tests.mbti.options.i17'), value: 'I' }] },
  { id: 18, dimension: 'EI', text: t('tests.mbti.questions.q18'), options: [{ label: t('tests.mbti.options.e18'), value: 'E' }, { label: t('tests.mbti.options.i18'), value: 'I' }] },
  { id: 19, dimension: 'EI', text: t('tests.mbti.questions.q19'), options: [{ label: t('tests.mbti.options.e19'), value: 'E' }, { label: t('tests.mbti.options.i19'), value: 'I' }] },
  { id: 20, dimension: 'EI', text: t('tests.mbti.questions.q20'), options: [{ label: t('tests.mbti.options.e20'), value: 'E' }, { label: t('tests.mbti.options.i20'), value: 'I' }] },
  { id: 21, dimension: 'EI', text: t('tests.mbti.questions.q21'), options: [{ label: t('tests.mbti.options.e21'), value: 'E' }, { label: t('tests.mbti.options.i21'), value: 'I' }] },
  { id: 22, dimension: 'EI', text: t('tests.mbti.questions.q22'), options: [{ label: t('tests.mbti.options.e22'), value: 'E' }, { label: t('tests.mbti.options.i22'), value: 'I' }] },
  { id: 23, dimension: 'EI', text: t('tests.mbti.questions.q23'), options: [{ label: t('tests.mbti.options.e23'), value: 'E' }, { label: t('tests.mbti.options.i23'), value: 'I' }] },
  { id: 24, dimension: 'EI', text: t('tests.mbti.questions.q24'), options: [{ label: t('tests.mbti.options.e24'), value: 'E' }, { label: t('tests.mbti.options.i24'), value: 'I' }] },

  // S/N 维度 (24题)
  { id: 25, dimension: 'SN', text: t('tests.mbti.questions.q25'), options: [{ label: t('tests.mbti.options.s1'), value: 'S' }, { label: t('tests.mbti.options.n1'), value: 'N' }] },
  { id: 26, dimension: 'SN', text: t('tests.mbti.questions.q26'), options: [{ label: t('tests.mbti.options.s2'), value: 'S' }, { label: t('tests.mbti.options.n2'), value: 'N' }] },
  { id: 27, dimension: 'SN', text: t('tests.mbti.questions.q27'), options: [{ label: t('tests.mbti.options.s3'), value: 'S' }, { label: t('tests.mbti.options.n3'), value: 'N' }] },
  { id: 28, dimension: 'SN', text: t('tests.mbti.questions.q28'), options: [{ label: t('tests.mbti.options.s4'), value: 'S' }, { label: t('tests.mbti.options.n4'), value: 'N' }] },
  { id: 29, dimension: 'SN', text: t('tests.mbti.questions.q29'), options: [{ label: t('tests.mbti.options.s5'), value: 'S' }, { label: t('tests.mbti.options.n5'), value: 'N' }] },
  { id: 30, dimension: 'SN', text: t('tests.mbti.questions.q30'), options: [{ label: t('tests.mbti.options.s6'), value: 'S' }, { label: t('tests.mbti.options.n6'), value: 'N' }] },
  { id: 31, dimension: 'SN', text: t('tests.mbti.questions.q31'), options: [{ label: t('tests.mbti.options.s7'), value: 'S' }, { label: t('tests.mbti.options.n7'), value: 'N' }] },
  { id: 32, dimension: 'SN', text: t('tests.mbti.questions.q32'), options: [{ label: t('tests.mbti.options.s8'), value: 'S' }, { label: t('tests.mbti.options.n8'), value: 'N' }] },
  { id: 33, dimension: 'SN', text: t('tests.mbti.questions.q33'), options: [{ label: t('tests.mbti.options.s9'), value: 'S' }, { label: t('tests.mbti.options.n9'), value: 'N' }] },
  { id: 34, dimension: 'SN', text: t('tests.mbti.questions.q34'), options: [{ label: t('tests.mbti.options.s10'), value: 'S' }, { label: t('tests.mbti.options.n10'), value: 'N' }] },
  { id: 35, dimension: 'SN', text: t('tests.mbti.questions.q35'), options: [{ label: t('tests.mbti.options.s11'), value: 'S' }, { label: t('tests.mbti.options.n11'), value: 'N' }] },
  { id: 36, dimension: 'SN', text: t('tests.mbti.questions.q36'), options: [{ label: t('tests.mbti.options.s12'), value: 'S' }, { label: t('tests.mbti.options.n12'), value: 'N' }] },
  { id: 37, dimension: 'SN', text: t('tests.mbti.questions.q37'), options: [{ label: t('tests.mbti.options.s13'), value: 'S' }, { label: t('tests.mbti.options.n13'), value: 'N' }] },
  { id: 38, dimension: 'SN', text: t('tests.mbti.questions.q38'), options: [{ label: t('tests.mbti.options.s14'), value: 'S' }, { label: t('tests.mbti.options.n14'), value: 'N' }] },
  { id: 39, dimension: 'SN', text: t('tests.mbti.questions.q39'), options: [{ label: t('tests.mbti.options.s15'), value: 'S' }, { label: t('tests.mbti.options.n15'), value: 'N' }] },
  { id: 40, dimension: 'SN', text: t('tests.mbti.questions.q40'), options: [{ label: t('tests.mbti.options.s16'), value: 'S' }, { label: t('tests.mbti.options.n16'), value: 'N' }] },
  { id: 41, dimension: 'SN', text: t('tests.mbti.questions.q41'), options: [{ label: t('tests.mbti.options.s17'), value: 'S' }, { label: t('tests.mbti.options.n17'), value: 'N' }] },
  { id: 42, dimension: 'SN', text: t('tests.mbti.questions.q42'), options: [{ label: t('tests.mbti.options.s18'), value: 'S' }, { label: t('tests.mbti.options.n18'), value: 'N' }] },
  { id: 43, dimension: 'SN', text: t('tests.mbti.questions.q43'), options: [{ label: t('tests.mbti.options.s19'), value: 'S' }, { label: t('tests.mbti.options.n19'), value: 'N' }] },
  { id: 44, dimension: 'SN', text: t('tests.mbti.questions.q44'), options: [{ label: t('tests.mbti.options.s20'), value: 'S' }, { label: t('tests.mbti.options.n20'), value: 'N' }] },
  { id: 45, dimension: 'SN', text: t('tests.mbti.questions.q45'), options: [{ label: t('tests.mbti.options.s21'), value: 'S' }, { label: t('tests.mbti.options.n21'), value: 'N' }] },
  { id: 46, dimension: 'SN', text: t('tests.mbti.questions.q46'), options: [{ label: t('tests.mbti.options.s22'), value: 'S' }, { label: t('tests.mbti.options.n22'), value: 'N' }] },
  { id: 47, dimension: 'SN', text: t('tests.mbti.questions.q47'), options: [{ label: t('tests.mbti.options.s23'), value: 'S' }, { label: t('tests.mbti.options.n23'), value: 'N' }] },
  { id: 48, dimension: 'SN', text: t('tests.mbti.questions.q48'), options: [{ label: t('tests.mbti.options.s24'), value: 'S' }, { label: t('tests.mbti.options.n24'), value: 'N' }] },

  // T/F 维度 (24题)
  { id: 49, dimension: 'TF', text: t('tests.mbti.questions.q49'), options: [{ label: t('tests.mbti.options.t1'), value: 'T' }, { label: t('tests.mbti.options.f1'), value: 'F' }] },
  { id: 50, dimension: 'TF', text: t('tests.mbti.questions.q50'), options: [{ label: t('tests.mbti.options.t2'), value: 'T' }, { label: t('tests.mbti.options.f2'), value: 'F' }] },
  { id: 51, dimension: 'TF', text: t('tests.mbti.questions.q51'), options: [{ label: t('tests.mbti.options.t3'), value: 'T' }, { label: t('tests.mbti.options.f3'), value: 'F' }] },
  { id: 52, dimension: 'TF', text: t('tests.mbti.questions.q52'), options: [{ label: t('tests.mbti.options.t4'), value: 'T' }, { label: t('tests.mbti.options.f4'), value: 'F' }] },
  { id: 53, dimension: 'TF', text: t('tests.mbti.questions.q53'), options: [{ label: t('tests.mbti.options.t5'), value: 'T' }, { label: t('tests.mbti.options.f5'), value: 'F' }] },
  { id: 54, dimension: 'TF', text: t('tests.mbti.questions.q54'), options: [{ label: t('tests.mbti.options.t6'), value: 'T' }, { label: t('tests.mbti.options.f6'), value: 'F' }] },
  { id: 55, dimension: 'TF', text: t('tests.mbti.questions.q55'), options: [{ label: t('tests.mbti.options.t7'), value: 'T' }, { label: t('tests.mbti.options.f7'), value: 'F' }] },
  { id: 56, dimension: 'TF', text: t('tests.mbti.questions.q56'), options: [{ label: t('tests.mbti.options.t8'), value: 'T' }, { label: t('tests.mbti.options.f8'), value: 'F' }] },
  { id: 57, dimension: 'TF', text: t('tests.mbti.questions.q57'), options: [{ label: t('tests.mbti.options.t9'), value: 'T' }, { label: t('tests.mbti.options.f9'), value: 'F' }] },
  { id: 58, dimension: 'TF', text: t('tests.mbti.questions.q58'), options: [{ label: t('tests.mbti.options.t10'), value: 'T' }, { label: t('tests.mbti.options.f10'), value: 'F' }] },
  { id: 59, dimension: 'TF', text: t('tests.mbti.questions.q59'), options: [{ label: t('tests.mbti.options.t11'), value: 'T' }, { label: t('tests.mbti.options.f11'), value: 'F' }] },
  { id: 60, dimension: 'TF', text: t('tests.mbti.questions.q60'), options: [{ label: t('tests.mbti.options.t12'), value: 'T' }, { label: t('tests.mbti.options.f12'), value: 'F' }] },
  { id: 61, dimension: 'TF', text: t('tests.mbti.questions.q61'), options: [{ label: t('tests.mbti.options.t13'), value: 'T' }, { label: t('tests.mbti.options.f13'), value: 'F' }] },
  { id: 62, dimension: 'TF', text: t('tests.mbti.questions.q62'), options: [{ label: t('tests.mbti.options.t14'), value: 'T' }, { label: t('tests.mbti.options.f14'), value: 'F' }] },
  { id: 63, dimension: 'TF', text: t('tests.mbti.questions.q63'), options: [{ label: t('tests.mbti.options.t15'), value: 'T' }, { label: t('tests.mbti.options.f15'), value: 'F' }] },
  { id: 64, dimension: 'TF', text: t('tests.mbti.questions.q64'), options: [{ label: t('tests.mbti.options.t16'), value: 'T' }, { label: t('tests.mbti.options.f16'), value: 'F' }] },
  { id: 65, dimension: 'TF', text: t('tests.mbti.questions.q65'), options: [{ label: t('tests.mbti.options.t17'), value: 'T' }, { label: t('tests.mbti.options.f17'), value: 'F' }] },
  { id: 66, dimension: 'TF', text: t('tests.mbti.questions.q66'), options: [{ label: t('tests.mbti.options.t18'), value: 'T' }, { label: t('tests.mbti.options.f18'), value: 'F' }] },
  { id: 67, dimension: 'TF', text: t('tests.mbti.questions.q67'), options: [{ label: t('tests.mbti.options.t19'), value: 'T' }, { label: t('tests.mbti.options.f19'), value: 'F' }] },
  { id: 68, dimension: 'TF', text: t('tests.mbti.questions.q68'), options: [{ label: t('tests.mbti.options.t20'), value: 'T' }, { label: t('tests.mbti.options.f20'), value: 'F' }] },
  { id: 69, dimension: 'TF', text: t('tests.mbti.questions.q69'), options: [{ label: t('tests.mbti.options.t21'), value: 'T' }, { label: t('tests.mbti.options.f21'), value: 'F' }] },
  { id: 70, dimension: 'TF', text: t('tests.mbti.questions.q70'), options: [{ label: t('tests.mbti.options.t22'), value: 'T' }, { label: t('tests.mbti.options.f22'), value: 'F' }] },
  { id: 71, dimension: 'TF', text: t('tests.mbti.questions.q71'), options: [{ label: t('tests.mbti.options.t23'), value: 'T' }, { label: t('tests.mbti.options.f23'), value: 'F' }] },
  { id: 72, dimension: 'TF', text: t('tests.mbti.questions.q72'), options: [{ label: t('tests.mbti.options.t24'), value: 'T' }, { label: t('tests.mbti.options.f24'), value: 'F' }] },

  // J/P 维度 (21题)
  { id: 73, dimension: 'JP', text: t('tests.mbti.questions.q73'), options: [{ label: t('tests.mbti.options.j1'), value: 'J' }, { label: t('tests.mbti.options.p1'), value: 'P' }] },
  { id: 74, dimension: 'JP', text: t('tests.mbti.questions.q74'), options: [{ label: t('tests.mbti.options.j2'), value: 'J' }, { label: t('tests.mbti.options.p2'), value: 'P' }] },
  { id: 75, dimension: 'JP', text: t('tests.mbti.questions.q75'), options: [{ label: t('tests.mbti.options.j3'), value: 'J' }, { label: t('tests.mbti.options.p3'), value: 'P' }] },
  { id: 76, dimension: 'JP', text: t('tests.mbti.questions.q76'), options: [{ label: t('tests.mbti.options.j4'), value: 'J' }, { label: t('tests.mbti.options.p4'), value: 'P' }] },
  { id: 77, dimension: 'JP', text: t('tests.mbti.questions.q77'), options: [{ label: t('tests.mbti.options.j5'), value: 'J' }, { label: t('tests.mbti.options.p5'), value: 'P' }] },
  { id: 78, dimension: 'JP', text: t('tests.mbti.questions.q78'), options: [{ label: t('tests.mbti.options.j6'), value: 'J' }, { label: t('tests.mbti.options.p6'), value: 'P' }] },
  { id: 79, dimension: 'JP', text: t('tests.mbti.questions.q79'), options: [{ label: t('tests.mbti.options.j7'), value: 'J' }, { label: t('tests.mbti.options.p7'), value: 'P' }] },
  { id: 80, dimension: 'JP', text: t('tests.mbti.questions.q80'), options: [{ label: t('tests.mbti.options.j8'), value: 'J' }, { label: t('tests.mbti.options.p8'), value: 'P' }] },
  { id: 81, dimension: 'JP', text: t('tests.mbti.questions.q81'), options: [{ label: t('tests.mbti.options.j9'), value: 'J' }, { label: t('tests.mbti.options.p9'), value: 'P' }] },
  { id: 82, dimension: 'JP', text: t('tests.mbti.questions.q82'), options: [{ label: t('tests.mbti.options.j10'), value: 'J' }, { label: t('tests.mbti.options.p10'), value: 'P' }] },
  { id: 83, dimension: 'JP', text: t('tests.mbti.questions.q83'), options: [{ label: t('tests.mbti.options.j11'), value: 'J' }, { label: t('tests.mbti.options.p11'), value: 'P' }] },
  { id: 84, dimension: 'JP', text: t('tests.mbti.questions.q84'), options: [{ label: t('tests.mbti.options.j12'), value: 'J' }, { label: t('tests.mbti.options.p12'), value: 'P' }] },
  { id: 85, dimension: 'JP', text: t('tests.mbti.questions.q85'), options: [{ label: t('tests.mbti.options.j13'), value: 'J' }, { label: t('tests.mbti.options.p13'), value: 'P' }] },
  { id: 86, dimension: 'JP', text: t('tests.mbti.questions.q86'), options: [{ label: t('tests.mbti.options.j14'), value: 'J' }, { label: t('tests.mbti.options.p14'), value: 'P' }] },
  { id: 87, dimension: 'JP', text: t('tests.mbti.questions.q87'), options: [{ label: t('tests.mbti.options.j15'), value: 'J' }, { label: t('tests.mbti.options.p15'), value: 'P' }] },
  { id: 88, dimension: 'JP', text: t('tests.mbti.questions.q88'), options: [{ label: t('tests.mbti.options.j16'), value: 'J' }, { label: t('tests.mbti.options.p16'), value: 'P' }] },
  { id: 89, dimension: 'JP', text: t('tests.mbti.questions.q89'), options: [{ label: t('tests.mbti.options.j17'), value: 'J' }, { label: t('tests.mbti.options.p17'), value: 'P' }] },
  { id: 90, dimension: 'JP', text: t('tests.mbti.questions.q90'), options: [{ label: t('tests.mbti.options.j18'), value: 'J' }, { label: t('tests.mbti.options.p18'), value: 'P' }] },
  { id: 91, dimension: 'JP', text: t('tests.mbti.questions.q91'), options: [{ label: t('tests.mbti.options.j19'), value: 'J' }, { label: t('tests.mbti.options.p19'), value: 'P' }] },
  { id: 92, dimension: 'JP', text: t('tests.mbti.questions.q92'), options: [{ label: t('tests.mbti.options.j20'), value: 'J' }, { label: t('tests.mbti.options.p20'), value: 'P' }] },
  { id: 93, dimension: 'JP', text: t('tests.mbti.questions.q93'), options: [{ label: t('tests.mbti.options.j21'), value: 'J' }, { label: t('tests.mbti.options.p21'), value: 'P' }] },
])

// ---- 状态 ----
const answers = ref<Record<number, string>>({})
const dimensionMap = ref<Record<number, string>>({})
const showResult = ref(false)

// 初始化 dimensionMap
questions.value.forEach(q => {
  dimensionMap.value[q.id] = q.dimension
})

const answeredCount = computed(() =>
  Object.keys(answers.value).filter(id => answers.value[parseInt(id)] !== undefined).length
)

const selectAnswer = (id: number, value: string, dimension: string) => {
  answers.value[id] = value
  answers.value = { ...answers.value }
}

const dimensionLabel = (dim: string) => {
  const map: Record<string, string> = { 
    EI: t('tests.mbti.dimensions.EI'), 
    SN: t('tests.mbti.dimensions.SN'), 
    TF: t('tests.mbti.dimensions.TF'), 
    JP: t('tests.mbti.dimensions.JP') 
  }
  return map[dim] || dim
}

// ---- 计算结果 ----
const result = ref<any>(null)
const dimensionScores = ref<any[]>([])

const calculateResult = () => {
  const scores: Record<string, Record<string, number>> = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  }

  questions.value.forEach(q => {
    const ans = answers.value[q.id]
    if (ans) scores[q.dimension][ans]++
  })

  const type =
    (scores.EI.E >= scores.EI.I ? 'E' : 'I') +
    (scores.SN.S >= scores.SN.N ? 'S' : 'N') +
    (scores.TF.T >= scores.TF.F ? 'T' : 'F') +
    (scores.JP.J >= scores.JP.P ? 'J' : 'P')

  // 维度分数
  const dims = [
    { key: 'EI', left: 'E', right: 'I', leftCount: scores.EI.E, rightCount: scores.EI.I },
    { key: 'SN', left: 'S', right: 'N', leftCount: scores.SN.S, rightCount: scores.SN.N },
    { key: 'TF', left: 'T', right: 'F', leftCount: scores.TF.T, rightCount: scores.TF.F },
    { key: 'JP', left: 'J', right: 'P', leftCount: scores.JP.J, rightCount: scores.JP.P },
  ]

  dimensionScores.value = dims.map(d => {
    const total = d.leftCount + d.rightCount
    const leftPercent = Math.round((d.leftCount / total) * 100)
    const leftDominant = d.leftCount >= d.rightCount
    return {
      ...d,
      leftPercent,
      leftDominant,
      dominantPercent: leftDominant ? leftPercent : 100 - leftPercent,
    }
  })

  result.value = mbtiProfiles[type] || mbtiProfiles['INFP']
  result.value = { ...result.value, type }
  showResult.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetTest = () => {
  answers.value = {}
  showResult.value = false
  result.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ---- 16型详细描述 ----
const mbtiProfiles: Record<string, any> = {
  INTJ: {
    name: '策略家',
    tagline: '独立、理性、远见卓著的建筑师',
    overview: 'INTJ 是所有类型中最独立的思考者之一。你拥有强大的内在驱动力和清晰的长远目标，喜欢把复杂系统分解并重构为更高效的形式。你的思维具有高度系统性，不喜欢浅尝辄止，倾向于深入钻研每一个感兴趣的领域。在他人眼中，你有时显得疏离和难以接近，但那只是因为你将大量精力投注于内心的思考世界。',
    strengths: ['极强的战略眼光与规划能力', '高度自律，目标驱动', '善于识别模式、预测趋势', '在复杂环境中保持冷静判断', '知识渊博，持续自我提升'],
    weaknesses: ['有时过于苛求完美，对自己和他人要求过高', '在情感表达上较为保守', '对"低效率"和"不合逻辑"的行为缺乏耐心', '有时显得傲慢或过于批判'],
    relationships: '在感情中，INTJ 忠诚而深情，但不善于主动表达情绪。你需要一个能跟上你思维节奏、尊重你独处需求的伴侣。你对肤浅的社交感到疲倦，更渴望真正的智识连接。',
    career: '适合需要战略思维和独立判断的领域，如工程师、科学家、分析师、建筑师、项目经理、战略顾问、技术创始人等。',
    growth: '尝试在坚持逻辑的同时，更多地关注他人的情感需求。学习接受"足够好"而非追求完美。在人际关系中主动表达欣赏和感激，这会让你的社会连接更加深厚。'
  },
  INTP: {
    name: '逻辑学家',
    tagline: '创新、好奇、永远在质疑的思想家',
    overview: 'INTP 拥有旺盛的求知欲和卓越的理论分析能力。你享受探索抽象概念和理论体系，热衷于找出规律的本质。你的思维高度灵活，能从不同角度审视问题，喜欢挑战既有假设。日常生活中你可能显得心不在焉，因为你的大脑始终在某个理论宇宙中漫游。',
    strengths: ['超强的逻辑分析与推理能力', '开放思维，善于质疑权威', '独立思考，不受他人意见左右', '对复杂系统有天然的理解力', '创造力强，善于跨领域联想'],
    weaknesses: ['容易陷入过度分析导致拖延', '对日常琐事缺乏兴趣', '有时说话过于直白，显得冷漠', '不擅长执行和跟进'],
    relationships: '你重视智识上的深度连接，但在情感表达上较为含蓄。你需要一个能接受你长时间"消失在思维世界"的伴侣，并且欣赏你偶尔爆发的奇思妙想。',
    career: '适合软件工程师、数学家、哲学家、研究员、数据科学家、系统架构师等需要深度思维的职业。',
    growth: '培养将想法付诸实践的执行力。在与人交流时，多注意情感层面的回应。给自己设定小的可执行目标，避免永远停在构想阶段。'
  },
  ENTJ: {
    name: '指挥官',
    tagline: '果断、高效、天生的领导者',
    overview: 'ENTJ 是最具领导气质的类型之一。你有清晰的目标，知道如何调动资源达成目的。你擅长从宏观层面分析局面，制定策略，并且有强大的执行力。在组织中，你天然地承担领导角色，因为你能看到别人看不到的机会和障碍。',
    strengths: ['天然的领导力和影响力', '决策果断，执行力强', '战略思维，善于布局', '高效能驱动，目标明确', '能激励他人迈向更高目标'],
    weaknesses: ['有时过于强势，难以接受不同意见', '对效率低下的人缺乏耐心', '情感层面不够细腻', '工作狂倾向，容易忽视休息'],
    relationships: '你在感情中同样展现出主导性，需要一个有自己主见、不会被你压倒的伴侣。你给予伴侣支持的方式是实际行动和解决问题，而非情感倾诉。',
    career: '高管、创业者、律师、顾问、军事指挥官、项目总监等，任何需要决策和组织能力的领域。',
    growth: '学会倾听，给予他人表达的空间。情感智力的提升能让你成为更具人格魅力的领导者，而非只是高效的执行机器。'
  },
  ENTP: {
    name: '辩论家',
    tagline: '机智、创新、热爱挑战极限的思想家',
    overview: 'ENTP 对一切都充满好奇，善于快速抓住问题核心，并能从多个角度即兴发挥。你享受智识上的交锋，视辩论为一种游戏和探索，而非冲突。你充满创意，能够将看似不相关的概念连接起来，产生全新的洞见。',
    strengths: ['思维敏捷，反应极快', '富有创造力，思想开放', '擅长辩论和说服他人', '能在多变环境中快速适应', '兴趣广泛，知识面宽'],
    weaknesses: ['容易轻易放弃已有的计划', '对细节和常规工作缺乏耐心', '有时为了辩论而辩论，无实际目的', '难以长时间专注同一件事'],
    relationships: '你需要一个能和你保持思维碰撞的伴侣，关系中充满活力和创意。但你需要注意，不要把伴侣当作辩论对象，情感连接同样需要用心维护。',
    career: '企业家、律师、顾问、市场策略师、记者、创意总监等，需要快速思维和创新能力的岗位。',
    growth: '学会将精彩的想法转化为具体执行，收敛而非散漫。在人际关系中减少"反驳模式"，更多地给予情感上的认可和支持。'
  },
  INFJ: {
    name: '提倡者',
    tagline: '有远见、有同理心、有原则的理想主义者',
    overview: 'INFJ 是最稀有的人格类型之一，兼具深刻的洞察力和强烈的同理心。你能直觉性地感知他人的情绪和动机，并以此为基础建立深厚的人际关系。你拥有强烈的价值观和对世界的远景，愿意为自己相信的事情付出长久的努力。表面上你安静内敛，内心却有着强大的信念。',
    strengths: ['超强的直觉和洞察力', '高度的同理心和情感智力', '有清晰的个人价值体系', '能激励他人，有感染力', '坚持理想，不轻易妥协'],
    weaknesses: ['容易过度理想化，对现实感到失望', '在帮助他人时容易耗尽自己', '难以接受建设性批评', '有时过于封闭，不愿分享内心'],
    relationships: '你对感情非常认真，希望建立深刻且有意义的连接。你在关系中细心体贴，但需要注意为自己保留空间，避免将他人的需求凌驾于自己之上。',
    career: '心理咨询师、作家、教师、社会工作者、艺术家、公益倡导者等，需要洞察人心和表达价值的职业。',
    growth: '学会为自己设立边界，不把所有人的问题都揽到自己身上。接受现实并非完美，在理想与现实间找到平衡点。'
  },
  INFP: {
    name: '调停者',
    tagline: '理想主义、富有创意、追求真实自我',
    overview: 'INFP 拥有丰富的内心世界和强烈的个人价值观。你对真实性的追求胜过一切，不愿意在关系和工作中妥协自我。你有深刻的创造力，善于通过艺术、写作或其他形式表达内心世界。你对世界充满关怀，渴望自己的存在能产生正向的影响。',
    strengths: ['丰富的创造力和想象力', '深刻的同理心', '忠诚且有原则', '善于倾听，给人安全感', '在逆境中保持内心的稳定性'],
    weaknesses: ['有时难以接受现实，沉浸在理想中', '决策时容易陷入过多自我怀疑', '对批评较为敏感', '在实际执行和组织上较为薄弱'],
    relationships: '你在感情中全情投入，但需要对方同样尊重你的内心世界。你享受深入的精神交流，胜过日常的表面互动。',
    career: '作家、诗人、心理咨询师、艺术家、社会工作者、教育工作者等与人文和创意相关的领域。',
    growth: '培养将创意付诸行动的能力，不要让想法只停留在内心。增强面对冲突的勇气，在适当的时候表达真实需求。'
  },
  ENFJ: {
    name: '主人公',
    tagline: '魅力四射、充满感染力的天生领袖',
    overview: 'ENFJ 天然具有影响他人的能力，你能感知每个人的潜力，并帮助他们发挥出来。你具有高度的情感智力，擅长在团队中构建和谐氛围，是公认的精神领袖。你对他人的关怀是真诚而持久的，但你也需要注意不要在给予中耗尽自己。',
    strengths: ['出色的沟通和影响力', '高度的同理心', '善于激励和帮助他人成长', '在团队中制造凝聚力', '有明确的价值观和道德感'],
    weaknesses: ['容易过度承担他人的情绪', '难以对他人说"不"', '对批评较为敏感', '有时将他人的需求放在自己之前'],
    relationships: '你是极为用心的伴侣，善于关注对方的需求。但需要提醒自己，健康的关系是双向的，你自身的需求同样值得被满足。',
    career: '教师、人力资源专家、心理咨询师、公关、领导教练、政治家、公益机构负责人等。',
    growth: '学会优先照顾自己的需求，建立健康的个人边界。接受不是所有问题都需要你去解决，有时候放手也是一种关怀。'
  },
  ENFP: {
    name: '竞选者',
    tagline: '热情洋溢、创意无限、活在当下',
    overview: 'ENFP 充满热情和感染力，对生活中的每一个新可能都感到兴奋。你有强烈的直觉，擅长与人建立连接，且真诚地关心他人。你的创造力和热情会感染周围的人，让平淡的事物也变得有趣。',
    strengths: ['极强的感染力和社交能力', '创造力和灵感丰富', '对人真诚，善于建立连接', '在多元环境中快速适应', '充满活力和热情'],
    weaknesses: ['注意力容易分散，难以长期坚持', '有时过于感情用事', '对细节和常规工作感到厌倦', '有时承诺多于执行'],
    relationships: '你在关系中投入大量热情和创意，但需要注意保持持久的深度，而不仅仅是新鲜感。一旦建立深厚的情感连接，你是极为忠诚的伴侣。',
    career: '创意行业、公关、咨询、教育、社会工作、表演、心理咨询师等，任何能让你与人互动并施展创意的工作。',
    growth: '培养执行力，将热情转化为持续的行动。设立优先级，避免同时追求太多目标导致精力分散。'
  },
  ISTJ: {
    name: '检查者',
    tagline: '可靠、负责、一丝不苟的传统守护者',
    overview: 'ISTJ 是最可靠的人格类型之一。你尽职尽责，重视传统和规则，做事有条不紊。你对承诺极为认真，一旦答应的事就一定会完成。你不喜欢不必要的变化，更偏好在熟悉的体系中发挥自己的力量。',
    strengths: ['极强的责任心和可靠性', '做事系统有序，注重细节', '诚实守信，言出必行', '在稳定环境中表现卓越', '逻辑清晰，实事求是'],
    weaknesses: ['对变化和新方法持保守态度', '有时过于固执', '情感表达不足', '对没有经过验证的方法缺乏信心'],
    relationships: '你在关系中稳定而可靠，以行动表达关爱。你不善于浪漫化，但你会用实际行动证明你的忠诚和投入。',
    career: '会计师、律师、工程师、行政管理、军事、公务员、医生等，任何需要精准和责任心的职业。',
    growth: '尝试以更开放的心态接纳新方法和变化。在情感表达上多一些主动，让身边的人知道你的感受和欣赏。'
  },
  ISFJ: {
    name: '守护者',
    tagline: '温暖、细心、无私的守护者',
    overview: 'ISFJ 是最无私的类型之一，你以他人的需求为先，默默付出而很少要求回报。你有出色的记忆力，特别擅长记住他人的喜好和需求。你的存在让周围的人感到被关注和被照顾。',
    strengths: ['体贴入微，善于照顾他人需求', '超强的细节记忆力', '工作认真，尽职尽责', '稳定可靠，创造安全感', '耐心和同理心'],
    weaknesses: ['容易过度奉献，忽略自己的需求', '不擅长拒绝他人', '对变化和冲突感到不安', '有时压抑自己的情感'],
    relationships: '你是最温柔的伴侣之一，细心体贴，善于照顾对方。但你需要学习表达自己的需求，而不仅仅是满足他人。',
    career: '护士、社会工作者、教师、行政助理、图书管理员、家庭医生等，需要关怀和细心的职业。',
    growth: '练习表达自己的需求，建立合理的边界。记住，照顾好自己才能更好地照顾他人。'
  },
  ESTJ: {
    name: '总监',
    tagline: '高效、果断、管理有序的执行者',
    overview: 'ESTJ 是天生的组织者和管理者，你擅长建立结构、明确规则，并确保每个人都按计划执行。你对效率有近乎偏执的追求，视混乱和无序为最大的敌人。你的可靠性和执行力让你在团队中不可或缺。',
    strengths: ['极强的组织和管理能力', '果断，善于快速作决策', '可靠，言出必行', '擅长建立高效系统', '忠于传统和既有价值'],
    weaknesses: ['有时过于强势，难以接受不同意见', '在执行规则上缺乏灵活性', '情感细腻度不足', '对创新方案持保守态度'],
    relationships: '你在关系中可靠而稳定，以实际行动表达爱意。需要注意给伴侣更多的自由空间，以及表达更多情感层面的温柔。',
    career: '管理者、公务员、法官、银行家、军官、运营总监等，任何需要组织和领导的岗位。',
    growth: '培养倾听和接纳不同观点的能力。在坚持效率的同时，给予他人更多的情感关注。'
  },
  ESFJ: {
    name: '执政官',
    tagline: '热情、体贴、注重和谐的社交达人',
    overview: 'ESFJ 以其热情和关怀著称，你天然地关注他人的需求，并努力创造和谐、温暖的环境。你是很多圈子里的"粘合剂"，能感知每个人的情绪并做出恰当的回应。你的责任心和对社会规范的重视，让你成为可靠的团队成员和朋友。',
    strengths: ['高度的社交智力和情感感知', '责任心强，乐于助人', '擅长创造和谐的社交氛围', '在团队中充当连接者', '忠诚可靠的朋友和伴侣'],
    weaknesses: ['对批评和冲突极为敏感', '有时过于在意他人的看法', '难以接受自己的决定被否定', '忽视自身需求'],
    relationships: '你是充满爱意的伴侣，善于体察对方情绪，主动维护关系的和谐。需要学习在冲突中保持自我，而非为了和平而妥协。',
    career: '医护人员、教师、人力资源、客服、活动策划、社区工作者等，需要关怀和人际技能的职业。',
    growth: '学习在他人批评面前保持内心稳定，不让外界评价过度影响自我价值感。明确个人边界，照顾好自己。'
  },
  ISTP: {
    name: '鉴赏家',
    tagline: '冷静、灵活、精通实践的工匠',
    overview: 'ISTP 是务实的观察者，你天然地理解事物的工作原理，并有能力用最简洁的方式解决问题。你在危机中保持冷静，面对挑战时展现出令人惊叹的应变能力。你享受探索物质世界，偏好实际操作胜过理论讨论。',
    strengths: ['冷静理性，危机处理能力强', '实践操作能力出众', '逻辑清晰，解决问题高效', '灵活应变，不被情绪左右', '独立自主，不依赖他人认可'],
    weaknesses: ['情感表达有限，有时显得冷漠', '不擅长长期规划', '对社交礼仪和情感需求较不敏感', '有时冒险行为过于鲁莽'],
    relationships: '你用行动而非语言表达爱。你需要一个尊重你独立空间的伴侣，能接受你不善于"甜言蜜语"的特质。',
    career: '工程师、技术人员、飞行员、医生（外科）、运动员、消防员等，需要冷静和实操技能的职业。',
    growth: '培养情感表达的能力，主动关心伴侣和朋友的情绪需求。学习一定的长期规划，为未来做更充分的准备。'
  },
  ISFP: {
    name: '探险家',
    tagline: '温柔、有艺术感、活在当下的冒险家',
    overview: 'ISFP 是温柔而充满感性的灵魂，你通过感官体验世界，热爱美、艺术和自然。你重视个人自由，不喜欢被规则束缚。你在行动上低调，但有着强烈的内心感受和个人价值观，通常以作品或行动表达自我，而非言语。',
    strengths: ['强烈的审美感知力', '真诚而不做作', '对新体验保持开放', '在实际行动中体现价值观', '对他人温柔体贴'],
    weaknesses: ['难以长期规划和坚持', '对批评和冲突非常敏感', '有时过于追求当下，忽略长远', '自我表达时显得犹豫'],
    relationships: '你以真诚和体贴著称，在关系中给予伴侣充分的自由和尊重。你需要一个能理解你内心感受、不强迫你改变的伴侣。',
    career: '艺术家、设计师、音乐家、摄影师、厨师、护士、治疗师等，与创作和感知相关的职业。',
    growth: '尝试建立更长期的计划，给自己的创意和感受找到稳定的表达渠道。在遭受批评时，练习以更客观的方式看待反馈。'
  },
  ESTP: {
    name: '企业家',
    tagline: '活力充沛、大胆冒险、活在当下',
    overview: 'ESTP 是行动派中的行动派，你精力充沛，喜欢置身于实际行动中。你善于在快速变化的环境中做出决策，天然地被风险和挑战所吸引。你的观察力敏锐，能迅速读懂他人和局势，是天生的问题解决者。',
    strengths: ['行动力和执行力极强', '在危机和混乱中保持冷静', '善于察言观色，读懂他人', '充满感染力和活力', '思维灵活，快速应变'],
    weaknesses: ['缺乏耐心，不善于长期规划', '有时过于冒险，忽视后果', '情感敏感度较低', '难以遵守规则和常规'],
    relationships: '你在关系中充满活力和惊喜，但需要注意给伴侣足够的情感关注。你倾向于活在当下，需要努力建立长期承诺感。',
    career: '销售、创业者、运动员、急救人员、警察、经纪人、活动策划者等，需要快速反应和行动力的职业。',
    growth: '培养延迟满足感和长期规划能力。在重要决策前多考虑潜在的风险和对他人的影响。'
  },
  ESFP: {
    name: '表演者',
    tagline: '热情奔放、善于社交、天生的表演者',
    overview: 'ESFP 是最能享受生活的类型之一，你天然地带给身边的人欢乐和活力。你有极强的现场感知力，总能捕捉到让当下更有趣的方式。你的感染力、幽默感和真诚的关怀，让你在任何社交场合都如鱼得水。',
    strengths: ['极强的社交能力和感染力', '真诚热情，善于表达关怀', '对当下的感知和享受能力', '灵活应对各种社交情境', '乐观积极，带给他人快乐'],
    weaknesses: ['难以专注于长期目标', '回避冲突，有时逃避问题', '对枯燥和重复的工作缺乏耐心', '过于注重当下，忽视未来'],
    relationships: '你在关系中充满温情和活力，让对方感受到被珍视。你需要一个能跟上你节奏、同样享受生活的伴侣。',
    career: '表演者、服务业、销售、教练、护理人员、活动策划等，需要热情和人际互动的职业。',
    growth: '培养面对困难和冲突的勇气，而非回避。为自己建立更清晰的长期目标，将活力导向持续的成就感。'
  }
}
</script>

<style scoped>
/* MBTI 测试主色调：炽橙 */
.mbti-page {
  min-height: 100vh;
  --test-accent: var(--color-primary);
  --test-accent-rgb: 255, 140, 66;
}
.test-hero-sub { color: var(--color-primary); }

/* 进度条 */
.progress-label, .progress-count { font-size: 0.82rem; color: var(--color-text-muted); }
.progress-bar-wrap { height: 4px; background: var(--color-bg-mute); border-radius: 2px; overflow: hidden; max-width: 600px; }
.progress-bar-fill { height: 100%; background: var(--gradient-primary); border-radius: 2px; transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }

/* 选项按钮（MBTI 用两个文字选项，非频率按钮） */
.options-row { display: flex; flex-direction: column; gap: 8px; }
.option-btn { background: var(--color-bg-soft); border: 1px solid var(--color-border); color: var(--color-text-secondary); padding: 10px 16px; border-radius: 7px; text-align: left; font-size: 0.88rem; cursor: pointer; transition: all 0.18s ease; }
.option-btn:hover { border-color: var(--color-border-hover); color: var(--color-text); background: var(--color-bg-elevated); }
.option-btn.selected { border-color: var(--color-primary); background: rgba(255,140,66,0.1); color: var(--color-primary); font-weight: 600; }
.dimension-hint { font-size: 0.72rem; color: var(--color-text-muted); margin-top: 10px; }

/* 结果类型大卡片 */
.result-type-card { background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 14px; padding: 40px; text-align: center; }
.result-type-badge { display: inline-block; font-size: 2.5rem; font-weight: 900; letter-spacing: 0.15em; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px; }
.result-type-name { font-size: 1.6rem; font-weight: 800; color: var(--color-heading); margin-bottom: 6px; }
.result-type-tagline { font-size: 0.95rem; color: var(--color-text-secondary); }

/* 维度比例条 */
.dimension-scores { max-width: 480px; margin: 0 auto; }
.dim-score-row { margin-bottom: 14px; }
.dim-labels { display: flex; justify-content: space-between; margin-bottom: 5px; }
.dim-left, .dim-right { font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted); letter-spacing: 0.05em; }
.dim-left.dominant, .dim-right.dominant { color: var(--color-primary); }
.dim-bar-wrap { height: 6px; background: var(--color-bg-mute); border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
.dim-bar-fill { height: 100%; border-radius: 3px; transition: width 0.8s cubic-bezier(0.34,1.56,0.64,1); }
.dim-percent { font-size: 0.75rem; color: var(--color-text-muted); text-align: right; }

/* 结果详情 */
.result-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
@media (max-width: 640px) { .result-detail-grid { grid-template-columns: 1fr; } }
.result-block { background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 22px 24px; }
.result-block-title { font-size: 0.85rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
.result-block-text { font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.7; margin: 0; }
.result-list { list-style: none; padding: 0; margin: 0; }
.result-list li { font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; padding: 4px 0 4px 14px; position: relative; }
.result-list li::before { content: '—'; position: absolute; left: 0; color: var(--color-primary); font-weight: 700; }
.result-disclaimer { font-size: 0.82rem; color: var(--color-text-muted); text-align: center; padding: 16px 24px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-bg-soft); line-height: 1.65; }
.mb-6 { margin-bottom: 2rem; }
</style>
