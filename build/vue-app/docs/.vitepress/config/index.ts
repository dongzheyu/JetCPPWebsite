import { defineConfig } from 'vitepress'
import { zhConfig } from './config.zh'
import { enConfig } from './config.en'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/blog/',
  outDir: '../public/blog',

  // 国际化配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...enConfig
    }
  },

  // 确保 VitePress 不会添加额外的默认样式覆盖我们的自定义样式
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    }
  },

  // 自定义 head 配置，用于语言持久化
  head: [
    ['script', {}, `
      // 语言持久化：从 Cookie 读取语言偏好并重定向
      (function() {
        const getCookie = (name) => {
          const value = '; ' + document.cookie
          const parts = value.split('; ' + name + '=')
          if (parts.length === 2) return parts.pop().split(';').shift()
          return null
        }

        const setCookie = (name, value, days) => {
          const expires = new Date(Date.now() + days * 864e5).toUTCString()
          document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
        }

        const savedLang = getCookie('nf_lang')
        const path = window.location.pathname
        const isRootPath = path === '/blog/' || path === '/blog'

        // 监听语言变化并保存到 Cookie
        const originalPushState = history.pushState
        history.pushState = function() {
          originalPushState.apply(this, arguments)
          // 检测 URL 变化并保存语言偏好
          const currentPath = window.location.pathname
          if (currentPath.startsWith('/blog/en/')) {
            setCookie('nf_lang', 'en-US', 365)
          } else if (currentPath.startsWith('/blog/') && !currentPath.startsWith('/blog/en/')) {
            setCookie('nf_lang', 'zh-CN', 365)
          }
        }

        // 页面加载时根据 Cookie 重定向
        if (savedLang && isRootPath) {
          if (savedLang === 'en-US' && !path.startsWith('/blog/en/')) {
            window.location.href = '/blog/en/'
          } else if (savedLang === 'zh-CN' && path.startsWith('/blog/en/')) {
            window.location.href = '/blog/'
          }
        }
      })()
    `]
  ]
})
