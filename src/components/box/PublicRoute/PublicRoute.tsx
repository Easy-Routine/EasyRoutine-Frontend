import ROUTES from "constants/routes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenStore } from "store/tokenStore";

type PublicRouteProps = {
    children: React.ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
    const [token, setToken] = useRecoilState(tokenStore);

    const navigate = useNavigate();

    useEffect(() => {
        // 상황 1: 로그인해서 token 상태가 업데이트 됨
        // 상황 2: 로그인 상태에서, 검색창에 로그인 주소를 직접 입력하여 들어옴
        if (token) {
            console.log("토큰있음", token);
            navigate(ROUTES.CONFIG.LIST.PATH);
        }
    }, [token, navigate]);

    return <>{children}</>;
};

export default PublicRoute;
