import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HttpClient } from './http_client/HttpClient';
import './index.css';
import { UserService, ProfileServiceContext } from './profile/service/UserService';
import { ProfileVM, ProfileVMContext } from './profile/vm/ProfileVM';

const httpClient = new HttpClient()

//Services
const userService = new UserService(httpClient)
userService.auth()

//Vm's
const profileVM = new ProfileVM(userService)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  {/* Inject dependecies */}
  <ProfileServiceContext.Provider value={userService}>
  <ProfileVMContext.Provider value={profileVM}>

  <App/>

  </ProfileVMContext.Provider>
  </ProfileServiceContext.Provider>

  </React.StrictMode>
);
