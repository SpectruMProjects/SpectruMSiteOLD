import React, { ReactNode, useEffect, useState } from 'react'
import { BehaviorSubject, skip } from 'rxjs'

interface Props<T> {
  children: {
    vm: BehaviorSubject<T>

    needEffect?: ((old: T, next: T) => boolean) | (keyof T)[]
    effect?: (state: T) => void

    needRebuild?: ((old: T, next: T) => boolean) | (keyof T)[]
    builder: (state: T) => ReactNode
  }
}

export default function VMBuilder<T>({
  children: {
    vm,

    needEffect = () => true,
    effect = () => {},

    needRebuild = () => true,
    builder,
  },
}: Props<T>) {
  const [state, setState] = useState(vm.value)

  useEffect(() => {
    const sub = vm.pipe(skip(1)).subscribe((newState) => {
      const rebuild =
        typeof needRebuild === 'function'
          ? needRebuild(state, newState)
          : needRebuild.reduce((acc, key) => acc || state[key] !== newState[key], false)
      if (rebuild) setState(newState)

      const newEffect =
        typeof needEffect === 'function'
          ? needEffect(state, newState)
          : needEffect.reduce((acc, key) => acc || state[key] !== newState[key], false)
      if (newEffect) effect(newState)
    })

    return () => {
      sub.unsubscribe()
    }
  })

  return <>{builder(state)}</>
}
