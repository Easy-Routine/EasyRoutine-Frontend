import ReactDOM from "react-dom/client";
import App from "App";
import StyledThemeProvider from "context/ThemeContext";
import {GlobalStyle} from "style/GlobalStyle";
import ToastProvider from "context/ToastContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import "style/GlobalFont.css";
import {RecoilRoot} from "recoil";
import APIProvider from "context/APIProvider";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";
import {lightTheme} from "theme";
import GlobalStyles from "components/GlobalStyle";
import "./_theme.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient({});

root.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <StyledThemeProvider>
                <ThemeProvider theme={lightTheme}>
                    <ToastProvider>
                        <APIProvider>
                            <GlobalStyle />
                            <GlobalStyles />
                            <BrowserRouter>
                                {/* <div className="theme-light"> */}
                                    <App />
                                {/* </div> */}
                            </BrowserRouter>
                        </APIProvider>
                    </ToastProvider>
                </ThemeProvider>
            </StyledThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>,
);
