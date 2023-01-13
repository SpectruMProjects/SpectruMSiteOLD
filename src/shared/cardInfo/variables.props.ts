import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface CardInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  background?: 'dark-dark' | 'dark-light' | 'dark-middle' | 'blue' | 'green' | 'opacity'
}
