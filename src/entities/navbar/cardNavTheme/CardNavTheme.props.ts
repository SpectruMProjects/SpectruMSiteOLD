import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardNavThemeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: React.ReactNode
  text: string
  activeMenu: boolean
  theme: boolean
}
