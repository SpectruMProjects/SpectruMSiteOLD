import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage, LauncherPage, PassPage, ProfilePage, AuthPage } from "pages";
import NavBar from "components/navbar/NavBar";

export default function App() {
  return (
    <div className='bg-mantle flex flex-row text-text'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/launcher' element={<LauncherPage />} />
          <Route path='/pass' element={<PassPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}
