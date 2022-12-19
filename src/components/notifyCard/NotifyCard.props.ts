import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface NotifyCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
  color: "warning" | "danger" | "secondary" | "success" | "mauve";
  icon: ReactNode;
  action?: { func: Function; text: string };
  remove?: { id?: string; action: Function };
}
