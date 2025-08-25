export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
    'subject-empty': [2, 'never', '提交主题不能为空'],
    'type-empty': [2, 'never', '提交类型不能为空'],
  },
}
