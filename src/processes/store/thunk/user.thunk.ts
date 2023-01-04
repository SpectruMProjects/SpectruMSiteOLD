import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { IUser } from 'processes/interface'
import { LoginDto } from 'processes/types'
import apiClient from 'processes/service/axios'

import { actionAddError } from '../slice'

const axios = new apiClient()

const notifyConfirmationError = {
  error: { text: 'Неизвестная ошибка' },
  userWithSameUsernameOrEmailExists: {
    text: 'Пользователь с таким никнеймом или почтой уже существует',
  },
  invalideCode: { text: 'Время для подтверждения закончилось!' },
}

export const fetchConfirmationAccount = createAsyncThunk(
  '@@user/confirmationAccount',
  async (code: string, thunkAPI): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.activateRegCode(code)

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyConfirmationError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') return res.user
  },
)

const notifyLoginError = {
  error: { text: 'Неизвестная ошибка' },
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

    const res = await axios.login({ login, password })

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...notifyLoginError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') return res.user
  },
)

const getUser = {
  error: { text: 'Неизвестная ошибка' },
}

export const fetchGetUser = createAsyncThunk(
  '@@user/getUser',
  async (_, thunkAPI): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.auth()

    if (res.code !== 'ok') {
      thunkAPI.dispatch(actionAddError({ id, ...getUser[res.code], time: 5000 }))
    }

    if (res.code === 'ok') return res.user
  },
)

const notifyConfirmationPassError = {
  error: { text: 'Неизвестная ошибка' },
  userNotFound: {
    text: 'Пользователь не найден',
  },
  tokenExpired: { text: 'Время для подтверждения закончилось!' },
}

export const fetchConfirmationPassAccount = createAsyncThunk(
  '@@user/confirmationAccount',
  async (code: string, thunkAPI): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.activateChangePassCode(code)

    if (res.code !== 'ok') {
      thunkAPI.dispatch(
        actionAddError({ id, ...notifyConfirmationPassError[res.code], time: 5000 }),
      )
    }

    if (res.code === 'ok') return res.user
  },
)

const notifyConfirmationRolesError = {
  error: { text: 'Неизвестная ошибка' },
  notAllowed: {
    text: 'Не найдено',
  },
}

export const fetchConfirmationRoles = createAsyncThunk(
  '@@user/confirmationRoles',
  async (_, thunkAPI): Promise<string[] | void> => {
    const id = uuidv4()

    const res = await axios.roles()

    if (res.code !== 'ok') {
      thunkAPI.dispatch(
        actionAddError({ id, ...notifyConfirmationRolesError[res.code], time: 5000 }),
      )
    }

    if (res.code === 'ok') return res.roles
  },
)
