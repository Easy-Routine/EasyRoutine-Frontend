import ROUTES from "constants/routes";
import {useEffect} from "react";
import {
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getContext} from "services/auth";

const PrivateRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        (async () => {
            try {
                console.log("Private Route!");

                if (searchParams.has("token")) {
                    // 토큰을 제거합니다.

                    const token = searchParams.get("token");
                    localStorage.setItem("accessToken", token as string);
                    searchParams.delete("token");
                    // 변경된 searchParams를 반영하여 URL을 업데이트합니다.
                    setSearchParams(searchParams, {replace: true});
                }

                // 'context'라는 queryKey로 데이터를 prefetch 합니다.
                // await queryClient.fetchQuery({
                //     queryKey: [queryKey.getContext],
                //     queryFn: async () => {
                //         const response = await getContext();
                //         console.log("프리페치", response);
                //         return response;
                //     },
                // });
            } catch (e) {
                // 에러 발생 시 로그인 페이지로 이동합니다.
                navigate(ROUTES.LOGIN.PATH);
            }
        })();
    }, [currentPath]);

    return <Outlet />;
};

export default PrivateRoute;
