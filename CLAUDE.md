# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Astro 的现代 Web 应用项目，集成了 React、Tailwind CSS 和 shadcn/ui 组件库。

## 常用命令

使用 pnpm 作为包管理器（根据 pnpm-lock.yaml 文件判断）：

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 运行 Astro CLI 命令
pnpm astro ...
```

## 项目架构

### 技术栈
- **Astro 5.16.5**: 主要框架，支持岛屿架构
- **React 19.2.3**: 用于交互式组件
- **Tailwind CSS 4.1.18**: 样式框架
- **shadcn/ui**: UI 组件库，基于 Radix UI
- **TypeScript**: 类型支持

### 目录结构
```
src/
├── components/          # React 组件
│   ├── ui/             # shadcn/ui 组件
│   ├── Counter.tsx     # 计数器组件（需要客户端交互）
│   └── Greet.tsx       # 静态组件（无需客户端交互）
├── pages/              # Astro 页面
│   └── index.astro     # 主页
├── styles/             # 样式文件
│   └── global.css      # Tailwind CSS 入口
└── lib/                # 工具函数
    └── utils.ts        # shadcn/ui 工具函数
```

### 配置文件
- `astro.config.mjs`: Astro 配置，包含 React 集成和 Tailwind CSS
- `components.json`: shadcn/ui 配置
- `tsconfig.json`: TypeScript 配置，包含路径别名 `@/` 指向 `src/`

## 开发指南

### React 组件使用
- 静态组件（如 Greet）可以直接使用，无需 client 指令
- 交互式组件（如 Counter、Button）需要添加 `client:load` 或其他客户端指令
- 所有 React 组件都需要从 `@/components` 导入

### shadcn/ui 组件
- 已配置完整，包括样式和工具函数
- 使用 `class-variance-authority` 管理变体
- 使用 `tailwind-merge` 合并类名
- 图标使用 `lucide-react`

### 样式系统
- 使用 Tailwind CSS v4
- CSS 变量已配置在 `src/styles/global.css`
- 基础颜色为 stone，支持深色模式

### 开发注意事项
- 使用 `@/` 前缀导入模块（已配置路径别名）
- 新增页面文件放在 `src/pages/` 目录下
- 静态资源放在 `public/` 目录下
- React 组件文件使用 `.tsx` 扩展名
- Astro 页面文件使用 `.astro` 扩展名