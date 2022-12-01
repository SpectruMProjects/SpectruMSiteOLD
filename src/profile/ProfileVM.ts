import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";
import { useSubject } from "../utils/rxjs/subscribe";
import { ProfileService } from "./ProfileService";
import { User } from "./User";

export class ProfileVM {
  readonly user = new BehaviorSubject<User | null>(null)

  constructor(
    private readonly _service: ProfileService
  ) {
    this._service.user.subscribe(this.user)
  }

  async login(login: string, password: string) {
    try {
      await this._service.login(login, password)      
    } catch (e) {
      throw e
    }
  }
}

export const ProfileVMContext = createContext<ProfileVM | null>(null)
export function useProfileVM() {return useContext(ProfileVMContext)!}
export function useUser() {
  const vm = useProfileVM()
  const user = useSubject(vm.user)
  return user
}