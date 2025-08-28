export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [ // 定义允许的提交类型
      2, // 2 表示必须遵守，否则报错
      'always', // 始终检查
      [ // 允许的 type 列表
        'feat',         // 新功能
        'fix',          // 修复 bug
        'chore',        // 删除、下线已有功能
        'refactor',     // 代码重构
        'style',        // 代码样式调整（不影响逻辑）
        'docs',         // 文档更新
        'perf',         // 性能优化
        'test',         // 测试相关
        'revert',       // 回退提交
        'lint',         // 代码检查、代码格式化、提交规则相关配置
        'build',        // 构建系统或外部依赖变更
        'ci',           // 持续集成变更
        'hotfix',       // 紧急修复
        'release',      // 发布版本
      ],
    ],
    // 其他规则可以根据需要添加或覆盖
    'type-case': [0], // 0 表示不检查 type 的大小写
    'type-empty': [0], // 不检查 type 是否为空
    'scope-empty': [0], // 不检查 scope 是否为空
    'scope-case': [0], // 不检查 scope 的大小写
    'subject-full-stop': [0, 'never'], // 不检查 subject 末尾的句号
    'subject-case': [0, 'never'], // 不检查 subject 的大小写
    // 'header-max-length': [0, 'always', 72], // 不检查 header 的最大长度
    'body-max-line-length': [2, 'always', 300], // 不检查 body 每一行的最大长度
    // 'footer-max-line-length': [2, 'always', 200], // 不检查 footer 每一行的最大长度
  },
}
