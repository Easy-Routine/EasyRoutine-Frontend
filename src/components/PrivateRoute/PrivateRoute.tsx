import ROUTES from "constants/routes";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getContext} from "services/auth";

const PrivateRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const queryClient = useQueryClient();

    useEffect(() => {
        (async () => {
            try {
                console.log("Private Route!");
                // 'context'라는 queryKey로 데이터를 prefetch 합니다.
                await queryClient.fetchQuery({
                    queryKey: [queryKey.getContext],
                    queryFn: async () => {
                        const response = await getContext();
                        console.log("프리페치", response);
                        return response;
                    },
                });
            } catch (e) {
                // 에러 발생 시 로그인 페이지로 이동합니다.
                navigate(ROUTES.LOGIN.PATH);
            }
        })();
    }, [currentPath]);

    return <Outlet />;
};

export default PrivateRoute;
