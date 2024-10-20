import { createContext, useState, useEffect, ReactNode } from "react";
import { lightTheme, darkTheme } from "theme";
import { ThemeProvider as StyledProvider } from "styled-components";

export type ThemeContextType = {
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | {}>({});

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // localStorage에서 초기 테마 모드를 가져옵니다. 없으면 'light'로 설정합니다.
    const [themeMode, setThemeMode] = useState(() => {
        const savedTheme = localStorage.getItem("themeMode");
        return savedTheme ? savedTheme : "light";
    });

    const themeObject = themeMode === "light" ? lightTheme : darkTheme;

    // 테마 모드가 변경될 때마다 localStorage에 저장합니다.
    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <StyledProvider theme={themeObject}>{children}</StyledProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
