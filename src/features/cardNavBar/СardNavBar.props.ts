import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface cardNavBardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  selected: boolean
  icon: React.ReactNode
  text: string
  to: string
  activeMenu: boolean
  setTop: (top: number) => void
  index: number
  setMenu?: (val: boolean) => void
}
