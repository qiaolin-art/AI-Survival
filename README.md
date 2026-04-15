# AI-Survival

一个微信小程序测试项目，主题是 "AI 时代生存力测评"。  
当前包含两套测试内容：

- 末日生存测试：`AI 控制世界后，你的存活概率`
- 职场生存测试：`AI 来了，你的工作还能保得住吗`

项目适合用于创意互动、轻量心理测试、H5/小程序玩法原型参考。

## 功能简介

- 双测试入口大厅（首页）
- 场景题目作答流程（单题切换、进度展示）
- 多维度评分与结果页展示
- 组件化页面结构（选项卡、进度条、雷达图、角色卡等）
- 支持微信分享（好友/朋友圈文案）

## 项目结构

```text
miniprogram/
  app.js
  app.json
  pages/
    home/              # 测试大厅页
    index/             # 测试1介绍页
    question/          # 测试1答题页
    result/            # 测试1结果页
    quiz2-intro/       # 测试2介绍页
    quiz2-question/    # 测试2答题页
    quiz2-result/      # 测试2结果页
  components/
    option-card/
    progress-bar/
    radar-chart/
    role-card/
  utils/
    questions.js
    scoring.js
    results.js
    quiz2-questions.js
    quiz2-scoring.js
    quiz2-results.js
```

## 本地运行（微信开发者工具）

### 1. 准备环境

- 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 准备一个微信小程序 AppID（没有也可以先用测试号体验）

### 2. 导入项目

1. 打开微信开发者工具
2. 选择 "导入项目"
3. 目录选择当前仓库根目录（本项目）
4. AppID 使用你自己的小程序 AppID（或测试号）
5. 点击导入

### 3. 编译运行

- 在模拟器中预览首页 `pages/home/home`
- 点击不同测试卡片进入对应测评流程
- 完成答题后查看结果页

## 发布与分享

- 仓库地址：<https://github.com/qiaolin-art/AI-Survival>
- 你可以直接分享仓库链接给他人查看源码
- 如需让用户在微信中使用，需要在你自己的小程序主体下完成上传、审核和发布

## 开发说明

- 页面路由定义在 `miniprogram/app.json`
- 全局答题状态在 `miniprogram/app.js` 的 `globalData`
- 测试数据和评分逻辑集中在 `miniprogram/utils/`
- UI 样式主要在各页面 `.wxss` 和 `miniprogram/styles/theme.wxss`

## 许可证

当前未设置开源许可证。  
如果你希望允许他人复用，建议添加 MIT License。
