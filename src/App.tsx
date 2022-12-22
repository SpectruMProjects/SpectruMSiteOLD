import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomePage,
  LauncherPage,
  PassPage,
  ProfilePage,
  AuthPage,
  MainPage,
  ConfirmationPage,
  HardcorePage
} from "pages";
import { AdminPage } from "features/admin";

export const routes = [
  { path: "/", element: () => <HomePage /> },
  { path: "launcher", element: () =>  <LauncherPage /> },
  { path: "pass", element: () => <PassPage /> },
  { path: "profile", element: () => <ProfilePage /> },
  { path: "auth", element: () => <AuthPage /> },
  { path: "auth/activate/reg/:code", element: () => <ConfirmationPage /> },
  { path: "hardcore", element: () => <HardcorePage/> },
  { path: "admin", element: () => <AdminPage/> }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      ...routes.map((route) => ({
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element(),
      })),
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
