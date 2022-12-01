export interface LoginDto {
  login: string;
  password: string;
}

export type LoginFormFieldErrorCode = 'login.empty'

export type LoginReponse = 
{
  code: 'ok',
  user: {
    id: string,
    username: string,
    mail: string,
    UUID: string,
    SFMAPIToken: string,
    ServerId: string
  },
  refreshToken: string,
  accessToken: string
} | 
{
  code: 'auth.error.incorrectPassword'
} | {
  code: 'form',
  codes: LoginFormFieldErrorCode[]
} | {
  code: 'auth.error.userWithSameUsernameOrEmailNotExists'
} | {
  code: 'error'
}