export interface RegisterDto {
  mail: string
  username: string
  password: string
}

export type RegisterFormFieldErrorCode = 
  'mail.notMail'      | 
  'username.empty'    | 'usename.incorrect' |
  'password.tooShort' | 'password.incorrect'

export type RegisterResponse = 
{
  code: 'ok'
} | {
  code: 'form',
  codes: RegisterFormFieldErrorCode[]
} | {
  code: 'error'
} | {
  code: 'auth.error.tooManyRegRequests'
} | {
  code: 'auth.error.userWithSameUsernameOrEmailExists'
}