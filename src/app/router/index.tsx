import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from 'pages/main'

import HomePage from 'pages/home'
import LauncherPage from 'pages/launcher'
import PassPage from 'pages/pass'
import ProfilePage from 'pages/profile'
import AuthPage from 'pages/auth'
import ConfirmationPage from 'pages/confirmation'
import HardcorePage from 'pages/hardcore'
import AdminPage from 'pages/admin'
import TeamSuccessPage from 'pages/teamsuccess'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'launcher', element: <LauncherPage /> },
      { path: 'pass', element: <PassPage /> },
      { path: 'profile', element: <ProfilePage /> },
      {
        path: 'auth',
        children: [
          { element: <AuthPage />, index: true },
          {
            path: 'activate',
            children: [
              { path: 'reg/:code', element: <ConfirmationPage type={'account'} /> },
              { path: 'changePass/:code', element: <ConfirmationPage type={'password'} /> },
            ],
          },
        ],
      },
      { path: 'hardcore', element: <HardcorePage /> },
      {
        path: 'team',
        children: [{ path: 'success', element: <TeamSuccessPage /> }],
      },
    ],
  },
  { path: 'admin', element: <AdminPage /> },
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
