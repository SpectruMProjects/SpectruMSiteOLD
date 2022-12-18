import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface InputThemeProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  theme: boolean;
}
