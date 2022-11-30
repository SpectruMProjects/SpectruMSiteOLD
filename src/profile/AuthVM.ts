import { createContext, useContext } from "react";
import { BehaviorSubject } from "rxjs";

export class AuthVM {
  readonly currentState = new BehaviorSubject<'register' | 'login'>('login')

  swap() {
    const state = this.currentState.value
    this.currentState.next(state === 'register' ? 'login' : 'register')
  }
}

export const AuthVMContext = createContext<AuthVM | null>(null)
export function useAuthVM() {
  return useContext(AuthVMContext)!
}