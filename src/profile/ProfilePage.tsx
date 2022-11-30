import Profile from "./components/profile/Profile"
import { useUser } from "./ProfileVM"

export default function ProfilePage() {
  const user = useUser()

  return (
    user 
    ? <div className="flex-1 flex justify-center align-middle">
        <Profile user={user}/>
      </div> 
    : <button
        className="bg-red rounded-lg w-min h-min px-4 py-2 text-crust"
        onClick={() => {
          window.dispatchEvent(new Event('auth.needAuth'))
        }}
      >
        Нужна авторизация
      </button>
  )
}
