import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RegisterDto, RegisterResponse } from 'processes/types'
import { IError } from 'processes/interface'
import apiClient from 'processes/service/axios'
import { actionAddAction, actionAddError } from 'processes/store/slice'

const axios = new apiClient()

const notifyError = {
  error: { text: 'Error' },
  usernameNotExistsInMojang: { text: 'Имя пользователя не существует в Mojang' },
  tooManyRegRequests: { text: 'Слишком много запросов' },
  userWithSameUsernameOrEmailExists: {
    text: 'Пользователь с таким никнеймом или почтой уже существует',
  },
  form: { text: 'Заполните корректно поля' },
}

export const fetchRegistrationAccount = createAsyncThunk(
  '@@notification/registrationAccount',
  async ({ mail, password, username }: RegisterDto, thunkAPI): Promise<IError | void> => {
    const res: RegisterResponse = await axios.register({ mail, password, username })
    const id = uuidv4()

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyError[res.code], time: 10000 }))
    }

    if (res.code === 'ok') {
      thunkAPI.dispatch(
        actionAddAction({
          id,
          text: 'Вы создали аккаунт, перейдие на почту для подтверждения.',
          time: 10000,
        }),
      )
    }
  },
)
