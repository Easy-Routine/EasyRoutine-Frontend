export const commonTheme = {
    primaryColor: "#40E0D0",
    warningColor: "#FF0000",
    subTextColor100: "#C7C7C7",
    subTextColor200: "#A8A8A8",
    subTextColor300: "#7D7D7D",
    borderRadius: "16px",
    boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
};

export const lightTheme = {
    backgroundColor: "#FFFFFF",
    mainTextColor: "#000000",
    ...commonTheme,
};

export const darkTheme = {
    backgroundColor: "#202124",
    mainTextColor: "#FFFFFF",
    ...commonTheme,
};
