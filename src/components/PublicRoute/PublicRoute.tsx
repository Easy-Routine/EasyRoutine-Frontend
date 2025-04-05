import ROUTES from "constants/routes";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getContext} from "services/auth";

const PublicRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const queryClient = useQueryClient();

    useEffect(() => {
        (async () => {
            try {
                await queryClient.fetchQuery({
                    queryKey: [queryKey.getContext],
                    queryFn: async () => {
                        const response = await getContext();
                        return response;
                    },
                });
                // context API 호출이 성공하면, 로그인 상태로 간주하여 inquiry 페이지로 이동합니다.
                navigate(ROUTES.CONFIG.LIST.PATH);
            } catch (e) {
                // 에러가 발생하면 별도 처리 없이 그대로 PublicRoute의 Outlet을 렌더링합니다.
            }
        })();
    }, [currentPath, navigate, queryClient]);

    return <Outlet />;
};

export default PublicRoute;
