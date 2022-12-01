import { useState } from "react"
import { useSubject } from "../../utils/rxjs/subscribe"
import { AuthVM, AuthVMContext } from "../vm/AuthVM"
import LoginForm from "../components/LoginForm"
import { LoginVM, LoginVMContext } from "../vm/LoginVM"
import RegisterForm from "../components/RegisterForm"
import { RegisterVM, RegisterVMContext } from "../vm/RegisterVM"
import { useProfileService } from "../service/UserService"

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
