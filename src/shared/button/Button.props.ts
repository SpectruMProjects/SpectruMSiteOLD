import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  color?: 'blue' | 'purple' | 'green' | 'orange'
}
