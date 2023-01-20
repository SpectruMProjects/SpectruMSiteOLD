import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { ChangePassDto, RegisterDto } from 'processes/types'
import apiClient from 'processes/service/axios'
import { actionAddAction, actionAddError } from 'processes/store/slice'

import { RootState } from '../index'

const axios = new apiClient()

export const fetchRegistrationAccount = createAsyncThunk(
  '@@notification/registrationAccount',
  async ({ mail, password, username }: RegisterDto, { dispatch, getState }): Promise<void> => {
    const res = await axios.register({ mail, password, username })
    const id = uuidv4()

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      if (res.code === 'form') {
        res.codes.forEach((value) => {
          dispatch(actionAddError({ id, text: error.notifyError.form[value], time: 5000 }))
        })
      } else {
        dispatch(actionAddError({ id, text: error.notifyError[res.code], time: 5000 }))
      }
    }

    if (res.code === 'ok') {
      dispatch(
        actionAddAction({
          id,
          text: 'Вы создали аккаунт, перейдите на почту для подтверждения',
          time: 5000,
        }),
      )
    }
  },
)

export const fetchChangePassword = createAsyncThunk(
  '@@notification/changePassword',
  async ({ mail, newPass }: ChangePassDto, { dispatch, getState }): Promise<void> => {
    console.log(mail)
    const res = await axios.changePass({ mail: String(mail), newPass })
    const id = uuidv4()

    const {
      language: {
        languageText: { error },
      },
    } = getState() as RootState

    if (res.code !== 'ok') {
      dispatch(actionAddError({ id, text: error.notifyChangeError[res.code], time: 5000 }))
    }

    if (res.code === 'ok') {
      dispatch(
        actionAddAction({
          id,
          text: 'Пожалуйста подтвердите смену пароля через почту',
          time: 5000,
        }),
      )
    }
  },
)
