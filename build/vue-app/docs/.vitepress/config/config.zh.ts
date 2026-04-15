import { defineConfig } from 'vitepress'

export const zhConfig = defineConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '记录编程历程，分享开发心得，探索技术世界',
  themeConfig: {
    nav: [
      { text: '博客首页', link: '/zh/' },
      { text: '网站首页', link: 'https://jetcpp.dpdns.org/' },
    ],
    sidebar: [
      {
        items: [
          { text: 'C++完全入门指南', link: '/zh/cpp-guide' },
          { text: 'C#从入门到精通', link: '/zh/csharp-guide' },
          { text: 'XAML从入门到精通', link: '/zh/xaml-guide' }
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  }
})
