import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import ThemeProvider from 'context/ThemeContext';
import { GlobalStyle } from 'style/GlobalStyle';
import ToastProvider from 'context/ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        <ToastProvider>
            <GlobalStyle />
            <App />
        </ToastProvider>
    </ThemeProvider>
);
