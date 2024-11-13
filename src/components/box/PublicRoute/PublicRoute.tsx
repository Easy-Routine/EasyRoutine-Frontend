import ROUTES from "constants/routes";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type PublicRouteProps = {
    children: React.ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAccessTokenChange = () => {
            const accessToken = localStorage.getItem("accessToken");

            if (accessToken) {
                navigate(ROUTES.CONFIG.LIST.PATH);
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({ accessToken })
                );
            }
        };
        // 상황1: 로그인이 된 상태에서, 검색창에 직접 로그인페이지를 쳐서 들어감
        handleAccessTokenChange();

        // 상황1: 로그인에 성공해 토큰이 저장되어 로컬스토리지가 업데이트됨
        window.addEventListener("accessTokenChanged", handleAccessTokenChange);

        return () => {
            window.removeEventListener(
                "accessTokenChanged",
                handleAccessTokenChange
            ); // 정리
        };
    }, [navigate]);

    return <>{children}</>;
};

export default PublicRoute;
