<img src="https://fastly.jsdelivr.net/gh/D-Sketon/hexo-theme-reimu@main/_screenshot/Reimu_dark.png"/>
<div align = center>
  <h1>hugo-theme-reimu</h1>
  <img alt="GitHub License" src="https://img.shields.io/github/license/D-Sketon/hugo-theme-reimu">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hugo-theme-reimu">
  <p align="center">
  💘 博麗 霊夢 💘
  </p>

[演示网站](https://d-sketon.github.io/hugo-theme-reimu)

简体中文 | [English](https://github.com/D-Sketon/hugo-theme-reimu/blob/main/README.en.md)

</div>

本人是车车人，所以制作了这样一款博丽灵梦风格的 Hugo 主题

[Hexo](https://hexo.io) 主题请参见 [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu)

[Astro](https://astro.build) 主题请参见 [astro-theme-reimu](https://github.com/D-Sketon/astro-theme-reimu)

**项目刚刚开始，欢迎提出 Issue 和 PR！**

## 特性

- 所有的博客常规功能
- 兼容 Hugo 0.116.0 及以上版本
- 响应式布局
- 代码高亮，代码粘贴
- KaTeX 展示数学公式
- Mermaid 展示流程图
- Algolia / hexo-generator-search 搜索
- valine / waline / twikoo / gitalk / giscus 评论系统
- valine / waline 文章阅读统计
- 不蒜子访客统计
- RSS
- 同时支持 iconfont 和 fontawesome
- 黑夜模式
- 图片懒加载
- 加载动画
- TOC
- 回到顶部
- 鼠标动画
- pjax
- ~~ServiceWorker~~
- live2d
- reimu 鼠标指针
- 内部提供内链/外链/友链卡片的短代码
- 文章底部版权声明
- 配置自定义 CDN 源

## 安装

```bash
cd themes
git clone --single-branch --branch main https://github.com/D-Sketon/hugo-theme-reimu.git
```

并修改 `hugo.toml` 中的 theme

```toml
theme = 'hugo-theme-reimu'
```