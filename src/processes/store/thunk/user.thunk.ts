import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { IUser } from 'processes/interface'
import { LoginDto } from 'processes/types'
import apiClient from 'processes/service/axios'

import { actionAddError } from '../slice'
import { RootState } from '../index'

const axios = new apiClient()

export const fetchConfirmationAccount = createAsyncThunk(
  '@@user/confirmationAccount',
  async (code: string, { dispatch, getState }): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.activateRegCode(code)

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(actionAddError({ id, text: error.notifyConfirmationError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') return res.user
  },
)

export const fetchLoginAccount = createAsyncThunk(
  '@@user/loginAccount',
  async ({ login, password }: LoginDto, { dispatch, getState }): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.login({ login, password })

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(actionAddError({ id, text: error.notifyLoginError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') {
      return res.user
    }
  },
)

export const fetchGetUser = createAsyncThunk(
  '@@user/getUser',
  async (_, { dispatch, getState }): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.auth()

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(actionAddError({ id, text: error.getUserError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') return res.user
  },
)

export const fetchConfirmationPassAccount = createAsyncThunk(
  '@@user/confirmationAccount',
  async (code: string, { dispatch, getState }): Promise<IUser | void> => {
    const id = uuidv4()

    const res = await axios.activateChangePassCode(code)

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(
        actionAddError({ id, text: error.notifyConfirmationPassError[res.code], time: 5000 }),
      )
    }

    if (res.code === 'ok') return res.user
  },
)

export const fetchConfirmationRoles = createAsyncThunk(
  '@@user/confirmationRoles',
  async (_, { dispatch, getState }): Promise<string[] | void> => {
    const id = uuidv4()

    const res = await axios.roles()

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(
        actionAddError({
          id,
          text: error.notifyConfirmationRolesError[res.code],
          time: 5000,
        }),
      )
    }

    if (res.code === 'ok') return res.roles
  },
)
