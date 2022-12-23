import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from 'pages/main'

import { routes } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      ...routes.map((route) => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element(),
      })),
    ],
  },
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
