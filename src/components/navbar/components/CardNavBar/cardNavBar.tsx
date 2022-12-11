import React from "react";
import { useNavigate } from "react-router-dom";

import { cardNavBardProps } from "./cardNavBar.props";

export const CardNavBar = ({
  selected,
  text,
  icon,
  to,
}: cardNavBardProps): JSX.Element => {
  const navigate = useNavigate();

  function slectableStyle(selected: boolean): string {
    return selected ? `text-pink font-bold` : "text-overlay0";
  }

  return (
    <div
      className={`flex flex-row w-5/6 py-6 px-4 ${slectableStyle(
        selected
      )} hover:text-rosewater hover:ml-6 transition-all`}
      key={text}
      onClick={() => navigate(to)}
    >
      {icon}
      <h1 className={`select-none flex-1 text-end`}>{text}</h1>
    </div>
  );
};
