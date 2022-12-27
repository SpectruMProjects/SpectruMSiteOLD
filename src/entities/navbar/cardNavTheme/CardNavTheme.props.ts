import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardNavThemeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: React.ReactNode
  text: string
  activeMenu: boolean
  theme: boolean
}
