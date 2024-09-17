import { createContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from 'theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export type ThemeContextType = {
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | {}>({});

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [themeMode, setThemeMode] = useState('light');
    const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <StyledProvider theme={themeObject}>{children}</StyledProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
