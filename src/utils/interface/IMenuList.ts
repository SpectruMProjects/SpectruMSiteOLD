import { SvgIconComponent } from "@mui/icons-material";

export interface MenuListState {
  menuList: {
    text: string;
    to: string;
    icon: SvgIconComponent;
  }[];
}
