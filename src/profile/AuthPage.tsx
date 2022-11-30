import { useState } from "react"
import { useSubject } from "../utils/rxjs/subscribe"
import { AuthVM, AuthVMContext } from "./AuthVM"
import LoginForm from "./components/auth/LoginForm"
import { LoginVM, LoginVMContext } from "./components/auth/LoginVM"
import RegisterForm from "./components/auth/RegisterForm"
import { RegisterVM, RegisterVMContext } from "./components/auth/RegisterVM"
import { useProfileService } from "./ProfileService"

export default function AuthPage() {
  const [vm] = useState(new AuthVM())
  const currentState = useSubject(vm.currentState, 'login')

  const profileService = useProfileService()
  const [loginVM] = useState(new LoginVM(profileService))
  const [registerVM] = useState(new RegisterVM(profileService))

  return (
    <AuthVMContext.Provider value={vm}>
    <LoginVMContext.Provider value={loginVM}>
    <RegisterVMContext.Provider value={registerVM}>
    <div className="flex-1 flex justify-center align-middle">
      <div className="self-center">
        {currentState === 'login' ? <LoginForm/> : <RegisterForm/>}
      </div>
    </div>
    </RegisterVMContext.Provider>
    </LoginVMContext.Provider>
    </AuthVMContext.Provider>
  )
}
