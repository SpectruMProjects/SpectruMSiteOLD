import React from 'react'

import HomePage from 'pages/home'
import LauncherPage from 'pages/launcher'
import PassPage from 'pages/pass'
import ProfilePage from 'pages/profile'
import AuthPage from 'pages/auth'
import ConfirmationPage from 'pages/confirmation'
import HardcorePage from 'pages/hardcore'

export const routes = [
  { path: '/', element: () => <HomePage /> },
  { path: 'launcher', element: () => <LauncherPage /> },
  { path: 'pass', element: () => <PassPage /> },
  { path: 'profile', element: () => <ProfilePage /> },
  { path: 'auth', element: () => <AuthPage /> },
  { path: 'auth/activate/reg/:code', element: () => <ConfirmationPage type={'account'} /> },
  { path: 'auth/activate/changePass/:code', element: () => <ConfirmationPage type={'password'} /> },
  { path: 'hardcore', element: () => <HardcorePage /> },
  //{ path: 'admin', element: () => <AdminPage /> },
]
