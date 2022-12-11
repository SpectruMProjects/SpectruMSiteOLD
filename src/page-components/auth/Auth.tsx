import { LoginForm, RegisterForm } from "./components";

export const Auth = (): JSX.Element => {
  return (
    <div className='flex-1 flex justify-center align-middle'>
      <div className='self-center'>
        {"login" === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
