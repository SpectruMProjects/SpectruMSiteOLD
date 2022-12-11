import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, LauncherPage, PassPage, ProfilePage, AuthPage } from "pages";
import { NavBar } from "page-components/navbar";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/launcher", element: <LauncherPage /> },
    { path: "/pass", element: <PassPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/auth", element: <AuthPage /> },
  ]);

  return (
    <div className='bg-mantle flex flex-row text-text'>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}
