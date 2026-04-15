import { defineConfig } from 'vitepress'

export const enConfig = defineConfig({
  lang: 'en-US',
  title: 'My Blog',
  description: 'Recording programming journey, sharing development insights, exploring the tech world',
  themeConfig: {
    nav: [
      { text: 'Blog Home', link: '/en/' },
      { text: 'Website Home', link: 'https://jetcpp.dpdns.org/' },
    ],
    sidebar: [
      {
        items: [
          { text: 'C++ Complete Guide', link: '/en/cpp-guide' },
          { text: 'C# From Beginner to Master', link: '/en/csharp-guide' },
          { text: 'XAML From Beginner to Master', link: '/en/xaml-guide' }
        ]
      }
    ],
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    outline: {
      label: 'On this page'
    },
    lastUpdated: {
      text: 'Last updated on'
    },
    langMenuLabel: 'Languages',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme'
  }
})
