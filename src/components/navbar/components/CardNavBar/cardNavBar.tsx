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
}: cardNavBardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(styles.wrapperCardMenu, {
        [styles.wrapperMenuOn]: selected,
      })}
      key={text}
      onClick={() => navigate(to)}
    >
      {icon}
      <h1 className={styles.wrapperText}>{text}</h1>
      <span
        className={cn(styles.radiusMenu, {
          [styles.radiusMenuOn]: selected,
        })}
      ></span>
    </div>
  );
};
