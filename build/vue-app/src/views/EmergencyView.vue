<template>
  <div class="emergency-page">
    <!-- Hero 区域 -->
    <section class="emergency-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <h1 class="emergency-title mb-3">{{ t('emergency.title') }}</h1>
            <p class="emergency-subtitle mb-2">{{ t('emergency.subtitle') }}</p>
            <p class="emergency-desc">
              {{ t('emergency.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 紧急联系卡片 -->
    <section class="emergency-section">
      <div class="container">
        <h2 class="section-title mb-4">{{ t('emergency.phoneTitle') }}</h2>
        <p class="section-subtitle mb-5">{{ t('emergency.phoneSubtitle') }}</p>
        
        <!-- 紧急联系电话 accordion -->
        <div class="accordion mb-5" id="emergencyPhoneAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePhoneList">
                <i class="bi bi-telephone me-3"></i> {{ t('emergency.phoneList') }}
              </button>
            </h2>
            <div id="collapsePhoneList" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <div class="row g-4">
                  <!-- 报警电话 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card police-card">
                      <div class="card-icon">
                        <i class="bi bi-telephone"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.police.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">110</span>
                        <span class="number-label">{{ t('emergency.police.label') }}</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.police.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.police.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.police.tip1') }}</li>
                          <li>{{ t('emergency.police.tip2') }}</li>
                          <li>{{ t('emergency.police.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 急救电话 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card medical-card">
                      <div class="card-icon">
                        <i class="bi bi-heart-pulse"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.medical.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">120</span>
                        <span class="number-label">{{ t('emergency.medical.label') }}</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.medical.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.medical.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.medical.tip1') }}</li>
                          <li>{{ t('emergency.medical.tip2') }}</li>
                          <li>{{ t('emergency.medical.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 火警电话 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card fire-card">
                      <div class="card-icon">
                        <i class="bi bi-fire"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.fire.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">119</span>
                        <span class="number-label">{{ t('emergency.fire.label') }}</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.fire.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.fire.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.fire.tip1') }}</li>
                          <li>{{ t('emergency.fire.tip2') }}</li>
                          <li>{{ t('emergency.fire.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 交通事故报警 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card traffic-card">
                      <div class="card-icon">
                        <i class="bi bi-car-front"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.traffic.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">122</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.traffic.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.traffic.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.traffic.tip1') }}</li>
                          <li>{{ t('emergency.traffic.tip2') }}</li>
                          <li>{{ t('emergency.traffic.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 短信报警 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card sms-card">
                      <div class="card-icon">
                        <i class="bi bi-chat-dots"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.sms.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12110</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.sms.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.sms.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.sms.tip1') }}</li>
                          <li>{{ t('emergency.sms.tip2') }}</li>
                          <li>{{ t('emergency.sms.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 水上遇险求救 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card water-card">
                      <div class="card-icon">
                        <i class="bi bi-droplet"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.water.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12395</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.water.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.water.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.water.tip1') }}</li>
                          <li>{{ t('emergency.water.tip2') }}</li>
                          <li>{{ t('emergency.water.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 森林火警报警 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card forest-card">
                      <div class="card-icon">
                        <i class="bi bi-tree"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.forest.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12119</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.forest.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.forest.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.forest.tip1') }}</li>
                          <li>{{ t('emergency.forest.tip2') }}</li>
                          <li>{{ t('emergency.forest.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 红十字会急救台 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card redcross-card">
                      <div class="card-icon">
                        <i class="bi bi-shield-heart"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.redCross.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">999</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.redCross.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.redCross.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.redCross.tip1') }}</li>
                          <li>{{ t('emergency.redCross.tip2') }}</li>
                          <li>{{ t('emergency.redCross.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 紧急呼叫中心 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card sos-card">
                      <div class="card-icon">
                        <i class="bi bi-telephone-fill"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.sos.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">112</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.sos.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.sos.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.sos.tip1') }}</li>
                          <li>{{ t('emergency.sos.tip2') }}</li>
                          <li>{{ t('emergency.sos.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 天气预报 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card weather-card">
                      <div class="card-icon">
                        <i class="bi bi-cloud-sun"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.weather.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12121</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.weather.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.weather.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.weather.tip1') }}</li>
                          <li>{{ t('emergency.weather.tip2') }}</li>
                          <li>{{ t('emergency.weather.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 报时服务 -->
                  <div class="col-lg-4 col-md-6">
                    <div class="emergency-card time-card">
                      <div class="card-icon">
                        <i class="bi bi-clock"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.time.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12117</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.time.desc') }}
                      </p>
                      <div class="card-tips">
                        <strong>{{ t('emergency.time.tips') }}</strong>
                        <ul>
                          <li>{{ t('emergency.time.tip1') }}</li>
                          <li>{{ t('emergency.time.tip2') }}</li>
                          <li>{{ t('emergency.time.tip3') }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 心理援助 -->
                  <div class="col-lg-6">
                    <div class="emergency-card mental-card">
                      <div class="card-icon">
                        <i class="bi bi-heart"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.mental.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12320</span>
                        <span class="number-label">{{ t('emergency.mental.label') }}</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.mental.desc') }}
                      </p>
                      <div class="additional-numbers">
                        <div class="additional-number">
                          <span class="add-number">400-161-9995</span>
                          <span class="add-label">{{ t('emergency.mental.hope24') }}</span>
                        </div>
                        <div class="additional-number">
                          <span class="add-number">010-82951332</span>
                          <span class="add-label">{{ t('emergency.mental.beijing') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 妇女儿童保护 -->
                  <div class="col-lg-6">
                    <div class="emergency-card women-card">
                      <div class="card-icon">
                        <i class="bi bi-person-heart"></i>
                      </div>
                      <h3 class="card-title">{{ t('emergency.women.title') }}</h3>
                      <div class="phone-number">
                        <span class="number-display">12338</span>
                        <span class="number-label">{{ t('emergency.women.label') }}</span>
                      </div>
                      <p class="card-desc">
                        {{ t('emergency.women.desc') }}
                      </p>
                      <div class="additional-numbers">
                        <div class="additional-number">
                          <span class="add-number">12355</span>
                          <span class="add-label">{{ t('emergency.women.youth') }}</span>
                        </div>
                        <div class="additional-number">
                          <span class="add-number">12309</span>
                          <span class="add-label">{{ t('emergency.women.procuratorate') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 自救指南 -->
        <section class="selfhelp-section">
          <h2 class="section-title mb-4">{{ t('emergency.guideTitle') }}</h2>
          <p class="section-subtitle mb-5">{{ t('emergency.guideSubtitle') }}</p>
          
          <div class="accordion" id="selfHelpAccordion">
            <!-- 心肺复苏 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  <i class="bi bi-heart-pulse me-3"></i> {{ t('emergency.cpr.title') }}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <ol>
                    <li><strong>{{ t('emergency.cpr.step1') }}</strong> {{ t('emergency.cpr.step1Desc') }}</li>
                    <li><strong>{{ t('emergency.cpr.step2') }}</strong> {{ t('emergency.cpr.step2Desc') }}</li>
                    <li><strong>{{ t('emergency.cpr.step3') }}</strong> {{ t('emergency.cpr.step3Desc') }}</li>
                    <li><strong>{{ t('emergency.cpr.step4') }}</strong>
                      <ul>
                        <li>{{ t('emergency.cpr.step4a') }}</li>
                        <li>{{ t('emergency.cpr.step4b') }}</li>
                        <li>{{ t('emergency.cpr.step4c') }}</li>
                        <li>{{ t('emergency.cpr.step4d') }}</li>
                      </ul>
                    </li>
                    <li><strong>{{ t('emergency.cpr.step5') }}</strong> {{ t('emergency.cpr.step5Desc') }}</li>
                    <li><strong>{{ t('emergency.cpr.step6') }}</strong> {{ t('emergency.cpr.step6Desc') }}</li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- 止血方法 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  <i class="bi bi-droplet me-3"></i> {{ t('emergency.bleeding.title') }}
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h5>{{ t('emergency.bleeding.direct') }}</h5>
                      <ul>
                        <li>{{ t('emergency.bleeding.direct1') }}</li>
                        <li>{{ t('emergency.bleeding.direct2') }}</li>
                        <li>{{ t('emergency.bleeding.direct3') }}</li>
                        <li>{{ t('emergency.bleeding.direct4') }}</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <h5>{{ t('emergency.bleeding.pressure') }}</h5>
                      <ul>
                        <li>{{ t('emergency.bleeding.pressure1') }}</li>
                        <li>{{ t('emergency.bleeding.pressure2') }}</li>
                        <li>{{ t('emergency.bleeding.pressure3') }}</li>
                        <li>{{ t('emergency.bleeding.pressure4') }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 火灾逃生 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  <i class="bi bi-fire me-3"></i> {{ t('emergency.fireEscape.title') }}
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <h5>{{ t('emergency.fireEscape.basic') }}</h5>
                  <ul>
                    <li><strong>{{ t('emergency.fireEscape.basic1') }}</strong> {{ t('emergency.fireEscape.basic1Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.basic2') }}</strong> {{ t('emergency.fireEscape.basic2Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.basic3') }}</strong> {{ t('emergency.fireEscape.basic3Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.basic4') }}</strong> {{ t('emergency.fireEscape.basic4Desc') }}</li>
                  </ul>
                  <h5 class="mt-3">{{ t('emergency.fireEscape.situations') }}</h5>
                  <ul>
                    <li><strong>{{ t('emergency.fireEscape.situation1') }}</strong> {{ t('emergency.fireEscape.situation1Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.situation2') }}</strong> {{ t('emergency.fireEscape.situation2Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.situation3') }}</strong> {{ t('emergency.fireEscape.situation3Desc') }}</li>
                    <li><strong>{{ t('emergency.fireEscape.situation4') }}</strong> {{ t('emergency.fireEscape.situation4Desc') }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 心理危机应对 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  <i class="bi bi-heart me-3"></i> {{ t('emergency.mentalCrisis.title') }}
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <h5>{{ t('emergency.mentalCrisis.self') }}</h5>
                  <ul>
                    <li><strong>{{ t('emergency.mentalCrisis.self1') }}</strong> {{ t('emergency.mentalCrisis.self1Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.self2') }}</strong> {{ t('emergency.mentalCrisis.self2Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.self3') }}</strong> {{ t('emergency.mentalCrisis.self3Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.self4') }}</strong> {{ t('emergency.mentalCrisis.self4Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.self5') }}</strong> {{ t('emergency.mentalCrisis.self5Desc') }}</li>
                  </ul>
                  <h5 class="mt-3">{{ t('emergency.mentalCrisis.help') }}</h5>
                  <ul>
                    <li><strong>{{ t('emergency.mentalCrisis.help1') }}</strong> {{ t('emergency.mentalCrisis.help1Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.help2') }}</strong> {{ t('emergency.mentalCrisis.help2Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.help3') }}</strong> {{ t('emergency.mentalCrisis.help3Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.help4') }}</strong> {{ t('emergency.mentalCrisis.help4Desc') }}</li>
                    <li><strong>{{ t('emergency.mentalCrisis.help5') }}</strong> {{ t('emergency.mentalCrisis.help5Desc') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 注意事项 -->
        <section class="notice-section mt-8">
          <div class="container">
            <div class="notice-card">
              <h3 class="notice-title">{{ t('emergency.notice.title') }}</h3>
              <div class="notice-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="notice-item">
                      <i class="bi bi-exclamation-triangle"></i>
                      <h5>{{ t('emergency.notice.principle') }}</h5>
                      <p>{{ t('emergency.notice.principleDesc') }}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="notice-item">
                      <i class="bi bi-shield-check"></i>
                      <h5>{{ t('emergency.notice.info') }}</h5>
                      <p>{{ t('emergency.notice.infoDesc') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- 底部标语 -->
    <section class="emergency-footer">
      <div class="container">
        <p class="footer-slogan">{{ t('emergency.footerSlogan') }}</p>
        <p class="footer-note">{{ t('emergency.footerNote') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* 保持原有样式，确保与其他页面一致 */
</style>
