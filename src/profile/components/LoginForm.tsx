import Card from "../../components/Card";
import TextField from "../../components/input/TextInput";
import { useAuthVM } from "../vm/AuthVM";
import { useLoginVMForm } from "../vm/LoginVM";

export default function LoginForm() {
  const authVm = useAuthVM()
  const {login,password, setLogin,setPassword, loginError,passwordError, submit} = useLoginVMForm()

  return (
    <div>
      <Card className="rounded-b-none mb-0">
        <form className="flex flex-col px-40 pt-10">

          <div className="mt-6 mx-6 flex flex-col">
            <TextField 
              value={login} 
              onChange={setLogin}
              label="Логин:" 
              type="text"
              error={loginError ?? undefined}
            />
          </div>

          <div className="mt-6 mx-6 flex flex-col">
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
        <h1 className="text-text self-center">Нет аккаунта?</h1>
        <button
          className="border-4 border-green text-lg py-2 px-4 mx-4 rounded-lg" 
          onClick={() => authVm.swap()}
        >Регистрация</button>
      </Card>
    </div>
  )
}
