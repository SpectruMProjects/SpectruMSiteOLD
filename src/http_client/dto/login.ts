export interface LoginDto {
  login: string;
  password: string;
}

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
  code: 'error'
}