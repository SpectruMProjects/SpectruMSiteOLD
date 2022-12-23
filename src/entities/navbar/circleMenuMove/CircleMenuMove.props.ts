import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CircleMenuMoveProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  top: number
  activeMenu: boolean
  menuOff: boolean
}
