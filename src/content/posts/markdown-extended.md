---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '在 Fuwari 中了解更多关于 Markdown 功能的信息'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
你可以添加动态卡片来链接 GitHub 仓库，在页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
强调用户即使浏览时也应注意的信息。
:::

:::tip
辅助信息，帮助用户取得更大的成功。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险，需要用户立即关注的关键信息。
:::

:::caution
操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
强调用户即使浏览时也应注意的信息。
:::

:::tip
辅助信息，帮助用户取得更大的成功。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个具有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个具有自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也受支持。

```
> [!NOTE]
> GitHub 语法也受支持。

> [!TIP]
> GitHub 语法也受支持。
```
