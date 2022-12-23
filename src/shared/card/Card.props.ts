import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  className?: string
}
