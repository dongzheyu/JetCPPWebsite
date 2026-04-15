import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '项目展示',
  description: '展示我的开源项目和技术作品',
  base: '/project/', // 设置基础路径为 /project/
  outDir: '../public/project', // 输出到 public/project 目录
  lang: 'zh-CN', // 设置默认语言为中文
  ignoreDeadLinks: true, // 忽略死链接检查
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '项目展示',
      description: '展示我的开源项目和技术作品'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Project Showcase',
      description: 'Showcase my open source projects and technical works'
    }
  },
  themeConfig: {
    nav: [
      { text: '项目首页', link: '/' },
      { text: '网站首页', link: 'https://jetcpp.dpdns.org/' },
    ],
    sidebar: [
      {
        items: [
          { text: 'English Listen (Qt6) - 英语听写训练工具', link: '/english-listen' },
          { text: 'English Listen WinUI - 现代化英语听写训练工具', link: '/english-listen-winui' }
        ]
      }
    ],
    locales: {
      root: {
        nav: [
          { text: '项目首页', link: '/' },
          { text: '网站首页', link: 'https://jetcpp.dpdns.org/' },
          { text: 'English', link: '/en/' }
        ],
        sidebar: [
          {
            items: [
              { text: 'English Listen (Qt6) - 英语听写训练工具', link: '/english-listen' },
              { text: 'English Listen WinUI - 现代化英语听写训练工具', link: '/english-listen-winui' }
            ]
          }
        ]
      },
      en: {
        nav: [
          { text: 'Project Home', link: '/en/' },
          { text: 'Website Home', link: 'https://jetcpp.dpdns.org/' },
          { text: '中文', link: '/' }
        ],
        sidebar: [
          {
            items: [
              { text: 'English Listen (Qt6) - English Dictation Training Tool', link: '/en/english-listen' },
              { text: 'English Listen WinUI - Modern English Dictation Training Tool', link: '/en/english-listen-winui' }
            ]
          }
        ]
      }
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
  }
})