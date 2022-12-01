import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import { User } from "./User";

type RegiserUser = {
  username: string,
  mail: string,
  password: string,
}

export class UserService  {
  private readonly _user = new BehaviorSubject<User | null>(null)
  get user() {
    return this._user.asObservable()
  }

  async login(login: string, password: string) {
    this._user.next(new User(login, login, password, password))
  }

  async register({mail, password, username}: RegiserUser) {
    this._user.next(new User(username, username, mail, password))
  }
}

export const ProfileServiceContext = createContext<UserService | null>(null)
export function useProfileService() {return useContext(ProfileServiceContext)!}