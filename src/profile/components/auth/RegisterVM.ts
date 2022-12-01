import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import { useSubject } from "../../../utils/rxjs/subscribe";
import { UserService } from "../../UserService";

export class RegisterVM {
  constructor(private readonly _service: UserService) {}

  readonly username = new BehaviorSubject('')
  readonly mail     = new BehaviorSubject('')
  readonly password = new BehaviorSubject('')

  readonly usernameError = new BehaviorSubject<string | null>(null)
  readonly mailError     = new BehaviorSubject<string | null>(null)
  readonly passwordError = new BehaviorSubject<string | null>(null)

  private _allOk() {
    return this.usernameError.value == null &&
           this.mailError.value     == null &&
           this.passwordError.value == null
  }

  async submit() {
    const username = this.username.value
    const mail     = this.mail.value
    const password = this.password.value
    
    this._checkUsername()
    this._checkMail()
    this._checkPassword()
    
    if (this._allOk()) {
      await this._service.register({username, password, mail})
      window.dispatchEvent(new Event('auth.register'))
    } 
  }

  private _checkUsername() {
    if (this.username.value === '') this.usernameError.next('Имя пользователя не может быть пустым')
    else this.usernameError.next(null)
  }

  private _checkMail() {
    if (this.mail.value === '') this.mailError.next('Почта не может быть пустым')
    else this.mailError.next(null)
  }

  private _checkPassword() {
    if (this.password.value === '') this.passwordError.next('Пароль не может быть пустым')
    else this.passwordError.next(null)  
  }
}

export const RegisterVMContext = createContext<RegisterVM | null>(null)
export function useReisterVM() {return useContext(RegisterVMContext)!}
export function useRegisterForm() {
  const vm = useReisterVM()

  const username = useSubject(vm.username)
  const mail = useSubject(vm.mail)
  const password = useSubject(vm.password)

  const usernameError = useSubject(vm.usernameError)
  const mailError = useSubject(vm.mailError)
  const passwordError = useSubject(vm.passwordError)

  return {
    username,mail,password,
    usernameError,mailError,passwordError,
    setUsername: (v: string) => vm.username.next(v),
    setMail: (v: string) => vm.mail.next(v),
    setPassword: (v: string) => vm.password.next(v),
    submit() {
      vm.submit()
    }
  }
}