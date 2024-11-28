import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode; // 자식 요소 타입 정의
}

interface ErrorBoundaryState {
    hasError: boolean; // 에러 발생 여부를 나타내는 상태
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.log();
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error logged:", error, errorInfo);
    }

    render() {
        console.log("hasError", this.state.hasError);
        if (this.state.hasError) {
            return <h1>무언가 잘못되었습니다.</h1>;
        } else {
            return this.props.children;
        }

        // 에러가 없으면 자식 요소를 렌더링
    }
}

export default ErrorBoundary;
