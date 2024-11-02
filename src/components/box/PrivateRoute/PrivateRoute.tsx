import ROUTES from "constants/routes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userContextStore } from "store/userContextStore";

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const [userContext, setUserContext] = useRecoilState(userContextStore);

    const navigate = useNavigate();

    useEffect(() => {
        // 상황1: 토큰이 만료되어 token 상태가 업데이트됨
        // 상황2: 로그인이 되지 않은 상태에서, 검색창에 직접 인증페이지를 쳐서 들어감
        if (!userContext.accessToken) {
            navigate(ROUTES.LOGIN.PATH);
        }
    }, [userContext, navigate]);

    return <>{children}</>;
};

export default PrivateRoute;
