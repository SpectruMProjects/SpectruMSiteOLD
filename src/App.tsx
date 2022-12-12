import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HomePage,
  LauncherPage,
  PassPage,
  ProfilePage,
  AuthPage,
  MainPage,
} from "pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path='launcher' element={<LauncherPage />} />
          <Route path='pass' element={<PassPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='auth' element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
