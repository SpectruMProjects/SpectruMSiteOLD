import { ReactNode, useEffect, useState } from "react"
import { BehaviorSubject, skip } from "rxjs"

interface Props<T> {
  children: {
    vm: BehaviorSubject<T>

    needEffect?: (old: T, next: T) => boolean
    effect?: (state: T) => void

    needRebuild?: (old: T, next: T) => boolean
    builder: (state: T) => ReactNode,
  }
}

export default function VMBuilder<T>({ children: {
    vm,
    
    needEffect = () => true, 
    effect = () => {},
  
    needRebuild = () => true, 
    builder,
} }: Props<T>) {
  const [state, setState] = useState(vm.value)

  useEffect(() => {
    const sub = vm.pipe(skip(1)).subscribe((newState) => {
      if (needRebuild(state, newState)) setState(newState)
      if (needEffect(state, newState)) effect(newState)
    })
    
    return () => {
      sub.unsubscribe()
    }
  })
  
  return (
    <>
      {builder(state)}
    </>
  )
}
