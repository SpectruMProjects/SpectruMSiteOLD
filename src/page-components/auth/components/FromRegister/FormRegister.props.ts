import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface FormRegisterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setForm: (form: boolean) => void
}
