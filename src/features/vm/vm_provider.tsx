import React, { ReactNode, useEffect, useState } from 'react'
import { VM } from './vm'

interface props<T, This extends VM<T, This>> {
  create: () => This
  children: ReactNode
}

export default function GomnoProvider<T, This extends VM<T, This>>({
  children,
  create,
}: props<T, This>) {
  const [gomno] = useState(create())

  useEffect(() => {
    gomno.onInit()

    return () => {
      gomno.onDestroy()
    }
  })

  return <gomno.context.Provider value={gomno}>{children}</gomno.context.Provider>
}
