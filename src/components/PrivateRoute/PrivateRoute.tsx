import ROUTES from "constants/routes";
import {useEffect, useState} from "react";
import {
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getContext} from "services/auth";
import CommonLoading from "components/content/CommonLoading/CommonLoading";

const PrivateRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isVerified, setIsVerified] = useState(false);
    const [isChecking, setIsChecking] = useState(true); // ✅ 상태 분리: 인증 중 여부

    useEffect(() => {
        (async () => {
            try {
                if (searchParams.has("token")) {
                    const token = searchParams.get("token");
                    localStorage.setItem("accessToken", token as string);
                    searchParams.delete("token");
                    setSearchParams(searchParams, {replace: true});
                }

                await queryClient.fetchQuery({
                    queryKey: [queryKey.getContext],
                    queryFn: async () => {
                        const response = await getContext();
                        console.log("프리페치 성공:", response);
                        return response;
                    },
                });
                // throw Error
                setIsVerified(true);
            } catch (e) {
                console.error("인증 실패:", e);
                navigate(ROUTES.LOGIN.PATH, {replace: true});
            } finally {
                setIsChecking(false);
            }
        })();
    }, [currentPath]);

    // ✅ 인증 중인 상태에서 로딩 표시
    if (isChecking) return <CommonLoading />;

    // ✅ 인증 실패 시 navigate로 이동하고 이 라인은 실행 안됨
    if (!isVerified) return null;

    return <Outlet />;
};

export default PrivateRoute;
