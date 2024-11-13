import ROUTES from "constants/routes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAccessTokenChange = () => {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                navigate(ROUTES.LOGIN.PATH);
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({ accessToken: "" })
                );
            }
        };
        // 상황1: 로그인이 되지 않은 상태에서, 검색창에 직접 인증페이지를 쳐서 들어감
        handleAccessTokenChange();

        // 상황1: 토큰이 만료되어 로컬스토리지가 업데이트됨
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

export default PrivateRoute;
