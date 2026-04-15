<template>
  <div class="blog-page">
    <!-- Hero Section — 统一暖色渐变风格 -->
    <section class="blog-hero">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-lg-8" style="padding-left: 5%;">
            <h1 class="blog-title mb-4 animate-slide-up" :class="{ 'visible': isVisible }">
              {{ t('blog.title') }}
            </h1>
            <p class="blog-subtitle mb-4 animate-slide-up" :class="{ 'visible': isVisible }" style="animation-delay: 0.2s">
              {{ t('blog.description') }}
            </p>
          </div>
          <div class="col-lg-4">
            <div class="hero-illustration animate-float" :class="{ 'visible': isVisible }" style="animation-delay: 0.4s">
              <i class="bi bi-journal-text display-1" style="color: var(--color-primary); opacity: 0.3;"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="blog-section py-5">
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col-12">
            <div class="blog-post card mb-4 border-0 shadow-sm card-hover animate-slide-up" 
                 v-for="(post, index) in blogPosts" 
                 :key="post.id"
                 :class="{ 'visible': isVisible }" 
                 :style="`animation-delay: ${index * 0.15}s`">
              <div class="card-body p-4">
                <div class="blog-header mb-3">
                  <div class="blog-category-badge mb-2" :style="`background-color: ${post.color}20; color: ${post.color}`">
                    <i class="bi bi-tag-fill me-1"></i>{{ post.category }}
                  </div>
                  <h5 class="card-title fw-bold">{{ post.title }}</h5>
                </div>
                <p class="card-text text-muted mb-4">{{ post.excerpt }}</p>
                <div class="blog-footer d-flex justify-content-between align-items-center">
                  <div class="blog-meta">
                    <small class="text-muted">
                      <i class="bi bi-calendar3 me-1"></i>{{ post.date }} · 
                      <i class="bi bi-person me-1 ms-2"></i>{{ post.author }}
                    </small>
                  </div>
                  <a :href="post.link" class="btn btn-sm btn-animate" target="_blank"
                     style="border: 1.5px solid var(--color-border); color: var(--color-text);">
                    {{ t('blog.readMore') }} <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { isVisible } = useAnimations()

// 博客文章数据
const blogPosts = computed(() => [
  {
    id: 1,
    title: t('blog.posts.cppGuide.title'),
    excerpt: t('blog.posts.cppGuide.excerpt'),
    date: '2026-12-24',
    author: 'JetCPP Team',
    link: locale.value === 'en-US' ? '/blog/en/cpp-guide.html' : '/blog/cpp-guide.html',
    color: '#FF6B6B',
    category: t('blog.categories.programming')
  },
  {
    id: 2,
    title: t('blog.posts.csharpGuide.title'),
    excerpt: t('blog.posts.csharpGuide.excerpt'),
    date: '2026-03-04',
    author: 'JetCPP Team',
    link: locale.value === 'en-US' ? '/blog/en/csharp-guide.html' : '/blog/csharp-guide.html',
    color: '#dc2f02',
    category: t('blog.categories.programming')
  },
  {
    id: 3,
    title: t('blog.posts.xamlGuide.title'),
    excerpt: t('blog.posts.xamlGuide.excerpt'),
    date: '2026-03-04',
    author: 'JetCPP Team',
    link: locale.value === 'en-US' ? '/blog/en/xaml-guide.html' : '/blog/xaml-guide.html',
    color: '#52b788',
    category: t('blog.categories.programming')
  }
])
</script>
