import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { ChangePassDto, RegisterDto } from 'processes/types'
import apiClient from 'processes/service/axios'
import { actionAddAction, actionAddError } from 'processes/store/slice'

const axios = new apiClient()

const notifyError = {
  error: { text: 'Неизвестная ошибка' },
  usernameNotExistsInMojang: { text: 'Имя пользователя не существует в Mojang' },
  tooManyRegRequests: { text: 'Слишком много запросов' },
  userWithSameUsernameOrEmailExists: {
    text: 'Пользователь с таким никнеймом или почтой уже существует',
  },
  form: {
    'mail.notMail': 'Такой почты нету',
    'username.empty': 'Никнейм пуст',
    'username.incorrect': 'Введите корректно никнейм',
    'password.tooShort': 'Пароль слишком короткий',
    'password.incorrect': 'Введите корректно пароль',
  },
}

export const fetchRegistrationAccount = createAsyncThunk(
  '@@notification/registrationAccount',
  async ({ mail, password, username }: RegisterDto, thunkAPI): Promise<void> => {
    const res = await axios.register({ mail, password, username })
    const id = uuidv4()

    if (res.code !== 'ok') {
      if (res.code === 'form') {
        res.codes.forEach((value) => {
          thunkAPI.dispatch(actionAddError({ id, text: notifyError.form[value], time: 5000 }))
        })
      } else {
        thunkAPI.dispatch(actionAddError({ id, ...notifyError[res.code], time: 5000 }))
      }
    }

    if (res.code === 'ok') {
      thunkAPI.dispatch(
        actionAddAction({
          id,
          text: 'Вы создали аккаунт, перейдите на почту для подтверждения',
          time: 5000,
        }),
      )
    }
  },
)

const notifyChangeError = {
  error: { text: 'Неизвестная ошибка' },
  userWithSameEmailNotExists: { text: 'Пользователя с такой почтой не существует' },
  tooManyChangePassRequests: { text: 'Слишком много запросов' },
  incorrectForm: { text: 'Некорректная форма отправки' },
}

export const fetchChangePassword = createAsyncThunk(
  '@@notification/changePassword',
  async ({ mail, newPass }: ChangePassDto, thunkAPI): Promise<void> => {
    console.log(mail)
    const res = await axios.changePass({ mail: String(mail), newPass })
    const id = uuidv4()

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyChangeError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') {
      thunkAPI.dispatch(
        actionAddAction({
          id,
          text: 'Пожалуйста подтвердите смену пароля через почту',
          time: 5000,
        }),
      )
    }
  },
)
