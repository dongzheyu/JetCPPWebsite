---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JetCPP's Blog"
  text: "Tech Sharing & Insights"
  tagline: "Exploring the programming world, recording the learning journey"
  actions:
    - theme: brand
      text: Blog Home
      link: /en/
    - theme: alt
      text: C++ Complete Guide
      link: /en/cpp-guide
    - theme: alt
      text: C# From Beginner to Master
      link: /en/csharp-guide
    - theme: alt
      text: XAML From Beginner to Master
      link: /en/xaml-guide

features:
  - title: C++ Guide
    icon: 📘
    details: Deep dive into C++ programming language features and best practices
    link: /en/cpp-guide
  - title: Tech Sharing
    icon: 💡
    details: Sharing programming tips, development experience, and solutions
  - title: Code Practice
    icon: 🔧
    details: Code examples and practical guides from real projects

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

## Latest Articles

- [C++ Complete Guide: From Hello World to Structs](/en/cpp-guide)
  <span class="date">2026-12-28</span>

- [C# From Beginner to Master (Zero to Advanced)](/en/csharp-guide)
  <span class="date">2026-03-04</span>

- [XAML From Beginner to Master (Zero to Advanced)](/en/xaml-guide)
  <span class="date">2026-03-04</span>

</div>
