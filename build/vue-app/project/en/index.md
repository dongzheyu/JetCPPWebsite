---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Project Showcase"
  text: "Open Source Works & Technical Practice"
  tagline: "Explore innovative projects, share technical achievements"
  actions:
    - theme: brand
      text: View All Projects
      link: /en/english-listen
    - theme: alt
      text: English Listen WinUI - Modern English Dictation Training
      link: /en/english-listen-winui
    - theme: alt
      text: English Listen (Qt6) - English Dictation Training Tool
      link: /en/english-listen

features:
  - title: English Listen WinUI
    icon: >-
      &#x1F3AF;
    details: Modern English dictation training tool based on WinUI 3 + C# + C++ hybrid development, MVVM architecture, Mica material, Baidu Translation integration
    link: /en/english-listen-winui
  - title: English Listen (Qt6)
    icon: >-
      &#x1F4D6;
    details: Professional English dictation training tool, modern dictation software developed based on C++ and Qt6, intelligent vocabulary management, personalized training control
    link: /en/english-listen
  - title: Open Source Spirit
    icon: >-
      &#x2B50;
    details: All projects follow the open source philosophy, welcome community participation and contributions to jointly improve the projects

---

<style>
.project-list {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.project-list h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-list ul {
  list-style: none;
  padding: 0;
}

.project-list li {
  background: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.3s ease;
}

.project-list li:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.project-list h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.project-list h3 a {
  color: #2779bd;
  text-decoration: none;
  font-size: 1.2rem;
}

.project-list h3 a:hover {
  color: #2c5282;
  text-decoration: underline;
}

.project-meta {
  margin-top: 0.5rem;
}

.project-meta .category {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.home-link-container {
  text-align: center;
  margin: 2rem 0;
}

.home-link {
  display: inline-block;
  background: #42b883;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.home-link:hover {
  background: #369870;
}
</style>