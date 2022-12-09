import { useEffect, useState } from "react";
import { BehaviorSubject, Observable, skip } from "rxjs";

export function useSubject<T>(subject: BehaviorSubject<T>, byDefault?: T) {
  const [state, setState] = useState<T>(byDefault ?? subject.value)

  useEffect(() => {
    const subscription = subject
      .pipe(skip(1))
      .subscribe(v => {
        setState(v)
      })

    return () => {
      subscription?.unsubscribe()
    }
  }, [subject])

  return state
}

export function useObservable<T>(o: Observable<T>, byDefault: T) {
  const [state, setState] = useState<T>(byDefault)

  useEffect(() => {
    const subscription = o.subscribe(v => {
      setState(v)
    })
    
    return () => {
      subscription?.unsubscribe()
    }
  }, [o])

  return state
}