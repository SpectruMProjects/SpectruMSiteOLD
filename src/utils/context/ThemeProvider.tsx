import React, { ReactNode, useContext } from "react";

import { changeThemeFunction } from "utils/helpers";

const ThemeContext = React.createContext<{
  changeTheme: Function;
} | null>(null);

export const ThemeProvider = ({
  children,
  ...props
}: {
  children: ReactNode;
}): JSX.Element => {
  const changeTheme = (name: string) => {
    changeThemeFunction(name);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
