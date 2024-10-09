import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import ThemeProvider from "context/ThemeContext";
import { GlobalStyle } from "style/GlobalStyle";
import ToastProvider from "context/ToastContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <ToastProvider>
                <GlobalStyle />
                <App />
            </ToastProvider>
        </ThemeProvider>
    </QueryClientProvider>
);
