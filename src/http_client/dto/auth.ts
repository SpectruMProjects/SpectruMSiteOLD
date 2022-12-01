export type AuthReponse = 
{
  code: 'ok',
  user: {
    id: string,
    mail: string,
    username: string,
    UUID: string
  }
} | {
  code: 'error'
}