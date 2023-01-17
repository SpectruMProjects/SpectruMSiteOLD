import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardNavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: React.ReactNode
  activeMenu: boolean
  children: React.ReactNode
}
