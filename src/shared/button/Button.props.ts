import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
}
