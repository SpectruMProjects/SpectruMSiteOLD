import React, { useEffect } from "react";
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
  setTop,
}: cardNavBardProps): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      setTop(index);
    }
  }, [index, selected, setTop]);

  return (
    <div
      className={cn(styles.wrapperCardMenu, {
        [styles.wrapperCardMenuOn]: activeMenu,
        [styles.wrapperCardMenuSelect]: selected,
      })}
      key={text}
      onClick={() => {
        setTop(index);
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
