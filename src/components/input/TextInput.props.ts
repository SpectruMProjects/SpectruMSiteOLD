import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  label?: string;
  className?: string;
  setValue: (value: string) => void;
  type?: "text" | "password";
  error?: boolean;
}
