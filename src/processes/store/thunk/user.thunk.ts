import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { IUser } from 'processes/interface'
import { ActivateRegCodeResponse, LoginDto, LoginReponse } from 'processes/types'
import apiClient from 'processes/service/axios'

import { actionAddError } from '../slice'

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
  async (code: string, thunkAPI): Promise<IUser | void> => {
    const id = uuidv4()

    const res: ActivateRegCodeResponse = await axios.activateRegCode(code)

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyConfirmationError[res.code], time: 10000 }))
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
  async ({ login, password }: LoginDto, thunkAPI): Promise<IUser | void> => {
    const id = uuidv4()

    const res: LoginReponse = await axios.login({ login, password })

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyLoginError[res.code], time: 10000 }))
    }

    if (res.code === 'ok') return res.user
  },
)
