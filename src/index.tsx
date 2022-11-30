import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProfileService, ProfileServiceContext } from './profile/ProfileService';
import { ProfileVM, ProfileVMContext } from './profile/ProfileVM';

//Services
const profileService = new ProfileService()

//Vm's
const profileVM = new ProfileVM(profileService)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  {/* Inject dependecies */}
  <ProfileServiceContext.Provider value={profileService}>
  <ProfileVMContext.Provider value={profileVM}>

  <App/>

  </ProfileVMContext.Provider>
  </ProfileServiceContext.Provider>

  </React.StrictMode>
);
