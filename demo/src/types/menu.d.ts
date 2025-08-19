export interface OperationMenu {
  index: string
  title: string
  icon?: string | component
  subMenu?: OperationMenuItem[]
}
export interface OperationMenuItem extends OperationMenu {
  router?: string
}
