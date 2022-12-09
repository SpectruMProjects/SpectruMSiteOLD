import { Context, ReactNode, useEffect} from "react"

export abstract class VM<T extends VM<T>> {
  onInit(): void | Promise<void> {}
  onDestroy(): void | Promise<void> {}
}


type HandlerProps<T extends VM<T>> = { 
  vm: T, 
  context: Context<T>,
  children: ReactNode
}

export function ProvideVM<T extends VM<T>>({children, context, vm}: HandlerProps<T>) {
  useEffect(() => {
    vm.onInit()

    return () => {vm.onDestroy()}
  }, [vm])
  
  return <context.Provider value={vm}>
      {children}
    </context.Provider>
}
