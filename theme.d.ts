// theme.d.ts
import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        borderRadius: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            circle: string;
        };
        boxShadow: string;
        color: {
            primary: string;
            warning: string;
            background: {
                page: string;
                box: string;
            };
            gray: {
                lighter: string;
                light: string;
                normal: string;
                dark: string;
            };
            text: {
                white: string;
                black: string;
            };
        };
        fontSize: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            xxxl: string;
        };
        fontWeight: {
            bold: string;
            semibold: string;
            regular: string;
        };
        zIndex: {
            header: string;
            floatingActionButton: string;
            backdrop: string;
            modal: string;
            error: string;
        };
    }
}
