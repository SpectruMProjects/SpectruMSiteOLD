import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface CardPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
