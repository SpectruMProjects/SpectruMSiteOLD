import { createRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomePage,
  LauncherPage,
  PassPage,
  ProfilePage,
  AuthPage,
  MainPage,
} from "pages";

export const routes = [
  { path: "/", element: <HomePage />, nodeRef: createRef() },
  { path: "/launcher", element: <LauncherPage />, nodeRef: createRef() },
  { path: "/pass", element: <PassPage />, nodeRef: createRef() },
  { path: "/profile", element: <ProfilePage />, nodeRef: createRef() },
  { path: "/auth", element: <AuthPage />, nodeRef: createRef() },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      ...routes.map((route) => ({
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element,
      })),
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
