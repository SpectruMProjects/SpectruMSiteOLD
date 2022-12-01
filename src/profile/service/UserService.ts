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
    return await this._httpClient.login({ password, login })
  }

  async register({mail, password, username}: RegiserUser) {
    return await this._httpClient.register({mail, password, username})
  }
}

export const ProfileServiceContext = createContext<UserService | null>(null)
export function useProfileService() {return useContext(ProfileServiceContext)!}