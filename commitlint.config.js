export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
      '提交类型不能为空：新功能 feat、fix 修复、docs 文档、style 格式、refactor 重构、test 测试、chore 构建/杂项',
    ],
    'subject-empty': [2, 'never', '提交主题不能为空'],
    'type-empty': [2, 'never', '提交类型不能为空'],
  },
}
