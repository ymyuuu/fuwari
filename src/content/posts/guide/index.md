---
title: Fuwari 简单指南
published: 2024-04-01
description: "如何使用这个博客模板。"
image: "./cover.jpeg"
tags: ["Fuwari", "博客", "自定义"]
category: 指南
draft: false
---

> 封面图片来源: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

这个博客模板是基于 [Astro](https://astro.build/) 构建的。对于本指南中未提及的内容，你可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章前言

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: 前端
draft: false
---
```

| 属性         | 描述                                                                                                                                                                                                        |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`      | 文章的标题。                                                                                                                                                                                               |
| `published`  | 文章的发布日期。                                                                                                                                                                                           |
| `description`| 文章的简短描述，显示在首页上。                                                                                                                                                                               |
| `image`      | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：表示图片在 `public` 目录中<br/>3. 无前缀：相对于 Markdown 文件路径 |
| `tags`       | 文章的标签。                                                                                                                                                                                               |
| `category`   | 文章的分类。                                                                                                                                                                                               |
| `draft`      | 如果这篇文章还处于草稿状态，则不会显示。                                                                                                                                                                    |

## 将文章文件放置在哪里

你的文章文件应放置在 `src/content/posts/` 目录下。你也可以创建子目录以更好地组织文章和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
