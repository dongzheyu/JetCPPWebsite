# JetCPP Studio Website

个人网站与博客，基于 VitePress 构建的技术博客和项目展示平台。

## 🚀 项目概述

JetCPP Studio 是一个专注于 C++ 开发和技术分享的个人网站，包含技术博客、项目展示和个人简介等内容。

## 📁 项目结构

```
dongzheyu.github.io/
├── index.html          # 首页
├── about.html          # 关于页面
├── blog.html          # 博客首页
├── projects.html      # 项目展示页
├── assets/            # 静态资源目录
│   ├── *.js          # JavaScript 文件
│   ├── *.css         # 样式文件
│   ├── *.woff2       # 字体文件
│   └── chunks/       # 代码分割块
├── blog/              # 博客文章目录
│   ├── CPP.html      # C++ 相关文章
│   └── Jetbrains.html # Jetbrains 相关文章
├── .git/              # Git 版本控制
├── .idea/             # IDE 配置文件
├── hashmap.json       # 文件哈希映射
├── vp-icons.css       # VitePress 图标样式
└── LICENSE            # 许可证文件
```

## 🛠️ 技术栈

- **前端框架**: VitePress v1.6.4
- **构建工具**: Vite
- **样式**: CSS with VitePress 主题
- **字体**: Inter 字体家族
- **部署**: GitHub Pages / Gitee Pages

## 📚 内容分类

### 博客文章
- **C++ 开发**: C++ 编程技巧和最佳实践
- **Jetbrains**: IDE 使用技巧和插件开发
- **Minecraft 工具**: Minecraft 相关开发工具
- **技术分享**: 其他技术主题分享

### 项目展示
- 个人开发的项目案例
- 开源项目贡献
- 技术实验和原型

## 🚀 本地开发

由于项目使用 VitePress，本地开发需要安装依赖：

```bash
# 安装依赖（如果 package.json 存在）
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🌐 部署

项目部署到 GitHub Pages 或 Gitee Pages：

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 📝 内容管理

网站内容通过 Markdown 文件管理，主要包含：

- `index.md` - 首页内容
- `about.md` - 关于页面内容  
- `blog.md` - 博客首页
- `projects.md` - 项目页面
- 各分类博客文章 Markdown 文件

## 🔧 自定义配置

VitePress 配置位于主题配置中，支持：

- 暗色/亮色主题切换
- 响应式设计
- 自定义导航栏
- 社交媒体链接
- 搜索功能

## 📄 许可证

项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进网站内容和功能。

## 📞 联系

- GitHub: [dongzheyu](https://github.com/dongzheyu)
- Gitee: [jetcpp](https://gitee.com/jetcpp)

---

*© 2024-2025 JetCPP Studio. 代码重塑世界 · 创新驱动未来*