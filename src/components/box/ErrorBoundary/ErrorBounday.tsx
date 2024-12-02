import ErrorScrren from "components/content/ErrorScreen/ErrorScreen";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ErrorBoundaryProps {
    children: React.ReactNode; // 자식 요소 타입 정의
    navigate: (path: string, options?: any) => void; // navigate 함수 타입 정의
}

interface ErrorBoundaryState {
    hasError: boolean; // 에러 발생 여부를 나타내는 상태
    error?: Error; // 에러 객체를 저장할 수 있는 상태
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: undefined };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }; // 에러 객체를 상태에 저장
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error logged:", error, errorInfo);
    }

    resetError = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return <ErrorScrren onReset={this.resetError} />;
        } else {
            return this.props.children;
        }
    }
}

// withRouter를 사용하여 navigate를 props로 전달
const ErrorBoundaryWithRouter = (props: any) => {
    const navigate = useNavigate();
    return <ErrorBoundary {...props} navigate={navigate} />;
};

export default ErrorBoundaryWithRouter;
