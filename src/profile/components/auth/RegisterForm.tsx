import Card from "../../../components/Card"
import TextField from "../../../components/input/TextInput"
import { useAuthVM } from "../../AuthVM"
import { useRegisterForm } from "./RegisterVM"

export default function RegisterForm() {
  const authVM = useAuthVM()
  const {
    mail,username,password,
    mailError,passwordError,usernameError,
    setMail,setPassword,setUsername,
    submit
  } = useRegisterForm()
  
  return (
    <div>
      <Card className="rounded-b-none mb-0">
        <form className="flex flex-col px-40 pt-10">

          <div className="mt-6 mx-6">
            <TextField 
              value={username} 
              onChange={setUsername}
              label="Имя пользователя:" 
              type="text"
              error={usernameError ?? undefined}
            />
          </div>

          <div className="mt-6 mx-6">
            <TextField 
              value={mail} 
              onChange={setMail}
              label="Почта:" 
              type="text"
              error={mailError ?? undefined}
            />
          </div>

          <div className="mt-6 mx-6">
            <TextField 
              label="Пароль:" 
              value={password} 
              onChange={setPassword} 
              type="password"
              error={passwordError ?? undefined}
            />
          </div>

          <button 
            className="bg-mauve text-surface0 text-xl hover:bg-green transition-colors mt-6 mb-10 rounded-md py-4 mx-6 font-bold"
            onClick={(e) => {
              e.preventDefault()
              submit()
            }}>
            Подтвердить
          </button>

        </form>
      </Card>

      <Card className="mt-0 py-6 bg-surface0 rounded-t-none flex flex-row justify-center space-y-3 ">
        <h1 className="text-text self-center">Уже зарегестрированы?</h1>
        <button
          className="border-4 border-green text-lg py-2 px-4 mx-4 rounded-lg" 
          onClick={() => authVM.swap()}
        >Войти</button>
      </Card>
    </div>
  )
}
