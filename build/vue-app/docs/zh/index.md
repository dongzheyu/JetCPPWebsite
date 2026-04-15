---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JetCPP's Blog"
  text: "技术分享与思考"
  tagline: "探索编程世界，记录学习历程"
  actions:
    - theme: brand
      text: 博客主页
      link: /zh/
    - theme: alt
      text: C++完全入门指南
      link: /zh/cpp-guide
    - theme: alt
      text: C#从入门到精通
      link: /zh/csharp-guide
    - theme: alt
      text: XAML从入门到精通
      link: /zh/xaml-guide

features:
  - title: C++ 指南
    icon: 📘
    details: 深入学习C++编程语言的各种特性和最佳实践
    link: /zh/cpp-guide
  - title: 技术分享
    icon: 💡
    details: 分享编程技巧、开发经验和解决方案
  - title: 代码实践
    icon: 🔧
    details: 实际项目中的代码示例和实践指南

---
<style>
.blog-list {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.blog-list h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.blog-list ul {
  list-style: none;
  padding: 0;
}

.blog-list li {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #42b883;
  transition: transform 0.2s, box-shadow 0.2s;
}

.blog-list li:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.blog-list a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  display: block;
}

.blog-list a:hover {
  color: #42b883;
}

.blog-list .date {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>

<div class="blog-list">

## 最新文章

- [C++完全入门指南：从Hello World到结构体](/zh/cpp-guide)
  <span class="date">2026-12-28</span>

- [C#从入门到精通（零基础到进阶）](/zh/csharp-guide)
  <span class="date">2026-03-04</span>

- [XAML从入门到精通（零基础到进阶）](/zh/xaml-guide)
  <span class="date">2026-03-04</span>

</div>
