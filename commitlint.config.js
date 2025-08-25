module.exports = {
  // 继承 @commitlint/config-conventional 的默认规则
  extends: ['@commitlint/config-conventional'],
  // 自定义规则 - 根据你的团队需求调整
  rules: {
    'type-enum': [ // 定义允许的提交类型
      2, // 2 表示必须遵守，否则报错
      'always', // 始终检查
      [ // 允许的 type 列表
        'feat',     // 新功能
        'fix',      // 修复 bug
        'docs',     // 文档更新
        'style',    // 代码样式调整（不影响逻辑）
        'refactor', // 代码重构
        'performance',     // 性能优化
        'test',     // 测试相关
        'chore',    // 构建过程或辅助工具变动
        'revert',   // 回退提交
        'build',    // 构建系统或外部依赖变更
      ],
    ],
    // 其他规则可以根据需要添加或覆盖
    'type-case': [0], // 0 表示不检查 type 的大小写
    'type-empty': [0], // 不检查 type 是否为空
    'scope-empty': [0], // 不检查 scope 是否为空
    'scope-case': [0], // 不检查 scope 的大小写
    'subject-full-stop': [0, 'never'], // 不检查 subject 末尾的句号
    'subject-case': [0, 'never'], // 不检查 subject 的大小写
    'header-max-length': [0, 'always', 72], // 不检查 header 的最大长度
  },
};
