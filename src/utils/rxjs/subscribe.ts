import { useEffect, useState } from "react";
import { BehaviorSubject, skip, Subscription } from "rxjs";

export function useSubject<T>(subject: BehaviorSubject<T>, byDefault?: T) {
  const [state, setState] = useState<T>(byDefault ?? subject.value)

  useEffect(() => {
    let subscription: Subscription | null = null
    subscription = subject
      .pipe(skip(1))
      .subscribe(v => {
        setState(v)
      })
    
    return () => subscription?.unsubscribe()
  }, [])

  return state
}