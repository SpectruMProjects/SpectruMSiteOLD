import { DetailedHTMLProps, HTMLAttributes } from 'react'

type texterror = 'errorpage'

export default interface ErrorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: texterror
}
