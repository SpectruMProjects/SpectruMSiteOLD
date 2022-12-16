//that what it change theme
export const changeThemeFunction = (theme: string) => {
  const root = document.querySelector(":root") as HTMLSelectElement;

  const cssVariable = [
    "primary",
    "primary-dark",
    "primary-light",
    "secondary",
    "text1",
    "text2",
    "text3",
    "text4",
    "background1",
    "background2",
    "background3",
    "background4",
    "primary-opacity05",
    "primary-opacity01",
    "shadow-opacity05",
    "shadow-opacity01",
  ];

  cssVariable.forEach((element) => {
    root.style.setProperty(`--${element}`, `var(--${theme}-${element})`);
  });
};
