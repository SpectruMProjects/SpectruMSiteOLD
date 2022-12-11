import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*

import { HttpClient } from './http_client/HttpClient';

import { UserService, ProfileServiceContext } from './profile/service/UserService';
import { ProfileVM, ProfileVMContext } from './profile/vm/ProfileVM';

const httpClient = new HttpClient()

//Services
const userService = new UserService(httpClient)
userService.auth()

//Vm's
const profileVM = new ProfileVM(userService)

 <ProfileServiceContext.Provider value={userService}>
  <ProfileVMContext.Provider value={profileVM}>

  

  </ProfileVMContext.Provider>
  </ProfileServiceContext.Provider>



 */
