import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Digital Philosophy',
  description: 'Exploring the intersection of technology and human values',
  
  // Multi-language configuration
  locales: {
    root: {
      label: '繁體中文',
      lang: 'zh-TW',
      description: '探索技術與人文價值的交匯點'
    },
    en: {
      label: 'English',
      lang: 'en',
      description: 'Exploring the intersection of technology and human values'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: '探索技术与人文价值的交汇点'
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      description: '기술과 인간 가치의 교차점 탐구'
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: 'テクノロジーと人間の価値観の交差点を探る'
    }
  },
  
  markdown: {
    breaks: true,
    linkify: true
  },
  
  themeConfig: {
    logo: {
      light: '/logo1.png',
      dark: '/logo.png'
    },
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
})