import Card from "../../components/Card"
import { User } from "../User"
import Skin from "./Skin"

type ProfileProps = {
  user: User
}

export default function Profile({user}: ProfileProps) {
  return (
    <Card className="h-4/5 w-3/4 self-center p-10">
      <div className="flex flex-row">
        <Skin/>
        <div className="ml-10 mt-5">
          <h1 className="font-extrabold text-4xl">{user.username}</h1>
          <h1 className="font-extrabold text-4xl">{user.mail}</h1>
        </div>
      </div>

      <div>
        Здесь будет разная статистика и информация о группах, друзьях, странах и т.д.
      </div>
    </Card>
  )
}
