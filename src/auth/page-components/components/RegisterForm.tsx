import { Card } from "components/card";
import { TextField } from "components/input";
import { useState } from "react";

export function RegisterForm() {
  const [data, setData] = useState({
    username: "",
    usernameError: false,
    mail: "",
    mailError: false,
    password: "",
    passwordError: false,
  });
  const { username, usernameError, mail, mailError, password, passwordError } =
    data;

  return (
    <div>
      <Card className='rounded-b-none mb-0'>
        <form className='flex flex-col px-40 pt-10'>
          <div className='mt-6 mx-6'>
            <TextField
              value={username}
              setValue={(username) => setData({ ...data, username })}
              label='Имя пользователя:'
              type='text'
              error={usernameError}
            />
          </div>

          <div className='mt-6 mx-6'>
            <TextField
              value={mail}
              setValue={(mail) => setData({ ...data, mail })}
              label='Почта:'
              type='text'
              error={mailError}
            />
          </div>

          <div className='mt-6 mx-6'>
            <TextField
              label='Пароль:'
              value={password}
              setValue={(password) => setData({ ...data, password })}
              type='password'
              error={passwordError}
            />
          </div>

          <button
            className='bg-mauve text-surface0 text-xl hover:bg-green transition-colors mt-6 mb-10 rounded-md py-4 mx-6 font-bold'
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Подтвердить
          </button>
        </form>
      </Card>

      <Card className='mt-0 py-6 bg-surface0 rounded-t-none flex flex-row justify-center space-y-3 '>
        <h1 className='text-text self-center'>Уже зарегестрированы?</h1>
        <button
          className='border-4 border-green text-lg py-2 px-4 mx-4 rounded-lg'
          onClick={() => {}}
        >
          Войти
        </button>
      </Card>
    </div>
  );
}
