import { ReactNode } from "react"

type CardProps = {
  children: ReactNode,
  className?: string
}

export default function Card({children, className}: CardProps) {
  return (
    <div className={(className ?? '') + " bg-base m-4 p-4 rounded-lg"}>
      {children}
    </div>
  )
}
