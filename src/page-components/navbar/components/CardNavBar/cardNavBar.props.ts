import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface cardNavBardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: boolean;
  icon: React.ReactNode;
  text: string;
  to: string;
}
