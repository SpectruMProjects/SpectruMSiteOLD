import { createAsyncThunk } from '@reduxjs/toolkit'

import { useNotification } from 'utils/hooks'
import { IUser } from 'utils/interface'
import { ActivateRegCodeResponse, LoginDto, LoginReponse } from 'service/types'
import apiClient from 'service/axios'

const axios = new apiClient()

const notifyConfirmationError = {
  error: { text: 'Ошибка' },
  userWithSameUsernameOrEmailExists: {
    text: 'Пользователь с таким никнеймом или почтой уже существует',
  },
  invalideCode: { text: 'Время для подтверждения закончилось!' },
}

export const fetchConfirmationAccount = createAsyncThunk(
  '@@user/confirmationAccount',
  async (code: string): Promise<IUser | void> => {
    const notification = useNotification()
    const res: ActivateRegCodeResponse = await axios.activateRegCode(code)

    if (res.code !== 'ok') {
      notification('error', notifyConfirmationError[res.code], 5000)
    }

    if (res.code === 'ok') return res.user
  },
)

const notifyLoginError = {
  error: { text: 'Ошибка' },
  userWithSameUsernameOrEmailNotExists: {
    text: 'Пользователь с таким логином или почтой не найден',
  },
  form: { text: 'Введите правильно логин или пароль!' },
  incorrectPassword: { text: 'Не верный пароль!' },
}

export const fetchLoginAccount = createAsyncThunk(
  '@@user/loginAccount',
  async ({ login, password }: LoginDto): Promise<IUser | void> => {
    const notification = useNotification()
    const res: LoginReponse = await axios.login({ login, password })

    if (res.code !== 'ok') {
      notification('error', notifyLoginError[res.code], 5000)
    }

    if (res.code === 'ok') return res.user
  },
)
