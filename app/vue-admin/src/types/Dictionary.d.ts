interface extField {
  extField1?: string // 扩展字段1
  extField2?: string // 扩展字段2
  extField3?: string // 扩展字段3
  extField4?: string // 扩展字段4
  extField5?: string // 扩展字段5
  extField6?: string // 扩展字段6
  extField7?: string // 扩展字段7
  extField8?: string // 扩展字段8
  extField9?: string // 扩展字段9
  extField10?: string // 扩展字段10
}
// 定义用户模型
interface Dictionary extends extField {
  dictionaryKey: string // 字典关键词
  name: string // 字典名称
  desc: string // 描述
}
interface DictionaryLang extends extField {
  dictionaryKey: string // 字典关键词
  lang: string // 语言标识
  dictionaryName: string // 字典名称
  desc: string // 描述
}
