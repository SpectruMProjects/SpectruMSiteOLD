import { useRef } from 'react'

//хук для дебаунса на случай важный переговоров
// eslint-disable-next-line
export function useDebounce<T extends (...args: any) => void>(func: T, delayMs: number) {
  const intervalRef = useRef<NodeJS.Timeout>()

  return function (...args: Parameters<T>) {
    if (intervalRef.current) clearTimeout(intervalRef.current)
    intervalRef.current = setTimeout(() => func.apply(null, [...args]), delayMs)
  }
}
