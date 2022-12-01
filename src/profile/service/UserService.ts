import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "../../http_client/HttpClient";
import { User } from "../User";

type RegiserUser = {
  username: string,
  mail: string,
  password: string,
}

export class UserService  {
  private readonly _user = new BehaviorSubject<User | null>(null)
  get user() {return this._user.asObservable()}

  constructor(private readonly _httpClient: HttpClient) {}

  async login(login: string, password: string) {
    const res = await this._httpClient.login({ password, login })
    if (res.code !== 'ok') return res

    this._user.next(res.user)
  }

  async register({mail, password, username}: RegiserUser) {
    return await this._httpClient.register({mail, password, username})
  }

  async auth() {
    const res = await this._httpClient.auth()
    if (res.code === 'ok') {
      const {UUID,id,mail,username} = res.user
      this._user.next(new User(id, username, mail, UUID))
    }
  }
}

export const ProfileServiceContext = createContext<UserService | null>(null)
export function useProfileService() {return useContext(ProfileServiceContext)!}