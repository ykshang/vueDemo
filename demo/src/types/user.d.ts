export interface UserInterface {
  id?: number
  name?: string
  email?: string
}
// 定义注册表单的数据类型
export interface RegisterForm {
  userName: string;
  password: string;
  email: string;
}

export interface Response<T> {
  code: number;
  result: {
    msg: string;
    data: T;
  }
}
