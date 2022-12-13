import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IUser } from "utils/interface";

export interface profileInformationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: IUser;
}
