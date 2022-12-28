import { IUser } from 'processes/interface'
import { MinecraftDeathReason } from './minecraftDeathReason.types'

export type ActivateRegCodeResponse =
  | {
      code: 'ok'
      user: IUser
      accessToken: string
      refreshToken: string
    }
  | {
      code: 'error'
    }
  | {
      code: 'userWithSameUsernameOrEmailExists'
    }
  | {
      code: 'invalideCode'
    }

export type LoginFormFieldErrorCode = 'login.empty'

export type LoginReponse =
  | {
      code: 'ok'
      user: IUser
      refreshToken: string
      accessToken: string
    }
  | {
      code: 'incorrectPassword'
    }
  | {
      code: 'form'
      codes: LoginFormFieldErrorCode[]
    }
  | {
      code: 'userWithSameUsernameOrEmailNotExists'
    }
  | {
      code: 'error'
    }

export type RegisterFormFieldErrorCode =
  | 'mail.notMail'
  | 'username.empty'
  | 'usename.incorrect'
  | 'password.tooShort'
  | 'password.incorrect'

export type RegisterResponse =
  | {
      code: 'ok'
    }
  | {
      code: 'form'
      codes: RegisterFormFieldErrorCode[]
    }
  | {
      code: 'error'
    }
  | {
      code: 'tooManyRegRequests'
    }
  | {
      code: 'userWithSameUsernameOrEmailExists'
    }
  | {
      code: 'usernameNotExistsInMojang'
    }

export type ChangePassResponse =
  | {
      code: 'ok'
    }
  | {
      code: 'error'
    }
  | {
      code: 'userWithSameEmailNotExists'
    }
  | {
      code: 'tooManyChangePassRequests'
    } 
  | {
      code: 'incorrectForm'
    }

export type ActivateChangePassReponse =
  | {
      code: 'error'
    }
  | {
      code: 'ok'
      user: IUser
      refreshToken: string
      accessToken: string
    }
  | {
      code: 'tokenExpired'
    }
  | {
      code: 'userNotFound'
    }

export type GetWhiteListResponse =
  | {
      code: 'error'
    }
  | {
      code: 'ok'
      users: Omit<IUser, 'id,mail'>[]
    }
  | {
      code: 'serverNotFound'
    }

export type GetWhiteListUserStatusResponse =
  | {
      code: 'error'
    }
  | {
      code: 'ok'
      status: 'active' | 'notActive'
    }
  | {
      code: 'serverNotFound'
    }

export type GetHardcoreStatResponse =
  | {
      code: 'error'
    }
  | {
      code: 'ok'
      deaths: {
        at: number
        reason?: {
          reason: MinecraftDeathReason
          from?: string
        }
      }[]
      loginTime: number
      deathTime: number
      respawnTime: number
    }
  | {
      code: 'notFound'
    }

export type GetUserByIdResponse =
  | {
      code: 'ok'
      user: {
        id: string
        username: string
        skin?: string
        cape?: string
      }
    }
  | {
      code: 'error'
    }
  | {
      code: 'notFound'
    }

export type HasUserPassResponse =
  | {
      code: 'ok'
    }
  | {
      code: 'error'
    }
  | {
      code: 'noPass'
    }

export type RolesResponse =
  | {
      code: 'ok'
      roles: string[]
    }
  | {
      code: 'notAllowed'
    }
  | {
      code: 'error'
    }

export type UserRolesResponse =
  | {
      code: 'ok'
      roles: string[]
    }
  | {
      code: 'notAllowed'
    }
  | {
      code: 'error'
    }
  | {
      code: 'notFound'
    }

export type AuthReponse =
  | {
      code: 'ok'
      user: IUser
    }
  | {
      code: 'error'
    }
