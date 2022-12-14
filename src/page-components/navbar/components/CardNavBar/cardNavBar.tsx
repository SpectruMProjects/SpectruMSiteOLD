import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { cardNavBardProps } from "./cardNavBar.props";
import styles from "./cardNavBar.module.scss";

export const CardNavBar = ({
  selected,
  text,
  icon,
  to,
  activeMenu,
  index,
  setNumberTop,
  setTop,
}: cardNavBardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(styles.wrapperCardMenu, {
        [styles.wrapperCardMenuOn]: activeMenu,
        [styles.wrapperCardMenuSelect]: selected,
      })}
      key={text}
      onClick={() => {
        setNumberTop(index);
        setTop(0);
        navigate(to);
      }}
    >
      <span
        className={cn(styles.iconWrap, {
          [styles.iconOn]: selected,
          [styles.iconActive]: selected && activeMenu,
        })}
      >
        {icon}
      </span>
      <p
        className={cn(styles.wrapperText, {
          [styles.wrapperTextOn]: activeMenu,
        })}
      >
        {text}
      </p>
    </div>
  );
};
