import ROUTES from "constants/routes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userContextStore } from "store/userContextStore";

type PublicRouteProps = {
    children: React.ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
    const [userContext, setUserContext] = useRecoilState(userContextStore);

    const navigate = useNavigate();

    useEffect(() => {
        // 상황 1: 로그인해서 token 상태가 업데이트 됨
        // 상황 2: 로그인 상태에서, 검색창에 로그인 주소를 직접 입력하여 들어옴
        if (userContext.accessToken) {
            console.log("토큰있음", userContext.accessToken);
            navigate(ROUTES.CONFIG.LIST.PATH);
        }
    }, [userContext, navigate]);

    return <>{children}</>;
};

export default PublicRoute;
