const commonTheme = {
    borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        circle: "50%",
    },
    boxShadow: `0px 2px 48px rgba(0, 0, 0, 0.12)`,
    color: {
        primary: "#40E0D0",
        warning: "#FF0000",
        background: {
            page: "",
            box: "",
        },
        gray: {
            lighter: "#F4F4F4",
            light: "#C7C7C7",
            normal: "#A8A8A8",
            dark: "#7D7D7D",
        },
        text: {
            white: "",
            black: "",
        },
    },
    fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "13px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        xxl: "24px",
        xxxl: "36px",
    },
    fontWeight: {
        bold: "700",
        semibold: "600",
        regular: "400",
    },

    zIndex: {
        header: "200",
        floatingActionButton: "300",
        backdrop: "400",
        modal: "500",
    },
};

export const lightTheme = structuredClone(commonTheme);
lightTheme.color.background.page = "#F8F9FA";
lightTheme.color.background.box = "#FFFFFF";
lightTheme.color.text.black = "#2D2D2D";
lightTheme.color.text.white = "#FFFFFF";

export const darkTheme = structuredClone(commonTheme);
darkTheme.color.background.page = "#121212";
darkTheme.color.background.box = "#1E1E1E";
darkTheme.color.text.black = "#FFFFFF";
darkTheme.color.text.white = "#2D2D2D";
