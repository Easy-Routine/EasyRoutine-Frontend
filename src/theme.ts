const commonTheme = {
    borderRadius: "16px",
    boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
    color: {
        primary: "#40E0D0",
        warning: "#FF0000",
        background: "",
        text: {
            main: "",
            light: "#C7C7C7",
            normal: "#A8A8A8",
            dark: "#7D7D7D",
        },
    },
    fontSize: {
        xs: "12px",
        sm: "13px",
        md: "14px",
        lg: "16px",
        xl: "18px",
    },
    fontWeight: {
        bold: "700",
        semibold: "600",
        regular: "400",
    },
};

export const lightTheme = structuredClone(commonTheme);
lightTheme.color.background = "#FFFFFF";
lightTheme.color.text.main = "#000000";

export const darkTheme = structuredClone(commonTheme);
darkTheme.color.background = "#202124";
darkTheme.color.text.main = "#FFFFFF";
