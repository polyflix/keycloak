export interface ILoginForm {
  username: string
  password: string
}

export interface IRegisterForm {
  email: string
  firstName: string
  lastName: string
  password: string
  "password-confirm": string
}

export interface IRequestResetPasswordForm {
  username: string
}

export interface IResetPasswordForm {
  "password-new": string
  "password-confirm": string
}
