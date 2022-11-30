import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import { useSubject } from "../../../utils/rxjs/subscribe";
import { ProfileService } from "../../ProfileService";

export class LoginVM {
  constructor(private readonly _service: ProfileService) {}

  readonly loginField = new BehaviorSubject('')
  readonly passwordField = new BehaviorSubject('')

  readonly loginFieldError = new BehaviorSubject<string | null>(null)
  readonly passwordFieldError = new BehaviorSubject<string | null>(null)

  async submit() {
    const login = this.loginField.value
    const password = this.passwordField.value

    if (login.length === 0) 
         this.loginFieldError.next('Логин не может быть пустым')
    else this.loginFieldError.next(null)
    

    if (password.length === 0)
         this.passwordFieldError.next('Пароль не может быть пустым')
    else this.passwordFieldError.next(null)

    if (
      this.loginFieldError.value === null &&
      this.passwordFieldError.value === null
    ) {
      await this._service.login(login, password)
      window.dispatchEvent(new Event('auth.login'))
    }
  }
}

export const LoginVMContext = createContext<LoginVM | null>(null)
export function useLoginVM() {return useContext(LoginVMContext)!}

export function useLoginVMForm() {
  const vm = useLoginVM()

  const login = useSubject(vm.loginField, '')
  const password = useSubject(vm.passwordField, '')

  const loginError = useSubject(vm.loginFieldError, null)
  const passwordError = useSubject(vm.passwordFieldError, null)

  return {
    login, 
    loginError,
    setLogin(v: string) {vm.loginField.next(v)},
    
    password,
    passwordError,
    setPassword(v: string) {vm.passwordField.next(v)},

    submit() {vm.submit()}
  }
}