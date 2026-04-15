import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import enUS from '../locales/en-US.json'

const LANGUAGE_KEY = 'app_language'

const getInitialLocale = () => {
  const stored = localStorage.getItem(LANGUAGE_KEY)
  if (stored && ['zh-CN', 'en-US'].includes(stored)) {
    return stored
  }
  const browserLang = navigator.language
  if (browserLang.startsWith('zh')) {
    return 'zh-CN'
  }
  return 'en-US'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export const setLocale = (locale) => {
  if (['zh-CN', 'en-US'].includes(locale)) {
    i18n.global.locale.value = locale
    localStorage.setItem(LANGUAGE_KEY, locale)
    document.documentElement.lang = locale
  }
}

export const getCurrentLocale = () => {
  return i18n.global.locale.value
}

export default i18n
