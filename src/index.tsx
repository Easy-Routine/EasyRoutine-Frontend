import ReactDOM from "react-dom/client";
import App from "App";
import ThemeProvider from "context/ThemeContext";
import { GlobalStyle } from "style/GlobalStyle";
import ToastProvider from "context/ToastContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "style/GlobalFont.css";
import { RecoilRoot } from "recoil";
import APIProvider from "context/APIProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({});

root.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <ThemeProvider>
                <ToastProvider>
                    <APIProvider>
                        <GlobalStyle />
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                        
                    </APIProvider>
                </ToastProvider>
            </ThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>
);
