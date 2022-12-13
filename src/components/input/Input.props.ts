import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  password?: boolean;
  setValue: (value: string) => void;
  type?: "text" | "password";
  error?: boolean;
  label: string;
}
