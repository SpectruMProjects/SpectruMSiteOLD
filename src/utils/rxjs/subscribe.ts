import { useEffect, useLayoutEffect, useState } from "react";
import { BehaviorSubject, skip, Subscription } from "rxjs";

export function useSubject<T>(subject: BehaviorSubject<T>, byDefault?: T) {
  const [state, setState] = useState<T>(byDefault ?? subject.value)

  let subscription: Subscription | null = null

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    subscription = subject
      .pipe(skip(1))
      .subscribe(v => {
        setState(v)
      })
  }, [])

  useLayoutEffect(() => {
    subscription?.unsubscribe()
  })

  return state
}