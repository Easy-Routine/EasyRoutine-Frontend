import ROUTES from "constants/routes";
import {useEffect, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getContext} from "services/auth";
import CommonLoading from "components/content/CommonLoading/CommonLoading";

const PublicRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [isChecking, setIsChecking] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             await queryClient.fetchQuery({
    //                 queryKey: [queryKey.getContext],
    //                 queryFn: async () => {
    //                     const response = await getContext();
    //                     console.log("로그인 상태 확인 성공:", response);
    //                     return response;
    //                 },
    //             });

    //             // ✅ 로그인 상태일 경우 바로 루트로 이동
    //             navigate(ROUTES.CONFIG.LIST.PATH, {replace: true});
    //         } catch (e) {
    //             console.log("비로그인 상태 확인:", e);
    //             // ❌ 로그인 상태가 아닐 때는 그냥 페이지 렌더링
    //         } finally {
    //             setIsChecking(false);
    //         }
    //     })();
    // }, []);

    // if (isChecking) return <CommonLoading />;

    return <Outlet />;
};

export default PublicRoute;
