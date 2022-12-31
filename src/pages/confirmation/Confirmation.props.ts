import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface confiirmationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'account' | 'password'
}
