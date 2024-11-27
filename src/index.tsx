import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import ThemeProvider from "context/ThemeContext";
import { GlobalStyle } from "style/GlobalStyle";
import ToastProvider from "context/ToastContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "style/GlobalFont.css";
import { RecoilRoot } from "recoil";
import APIProvider from "context/APIProvider";

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
                        <App />
                    </APIProvider>
                </ToastProvider>
            </ThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>
);
