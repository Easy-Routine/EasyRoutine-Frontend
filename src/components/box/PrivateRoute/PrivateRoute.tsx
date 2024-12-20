import DataSyncModal from "components/business/DataSyncModal";
import ROUTES from "constants/routes";
import useModal from "hooks/client/useModal";
import useToast from "hooks/useToast";
import moment from "moment";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import syncData from "utils/syncData";

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute = ({children}: PrivateRouteProps) => {
    const navigate = useNavigate();
    const {showToast} = useToast();

    const {
        isOpen: isDataSyncModalOpen,
        handleOpenModal: openDataSyncModal,
        handleCloseModal: closeDataSyncModal,
    } = useModal();

    const syncDataPeriodically = async () => {
        try {
            const lastUpdateDate = localStorage.getItem("lastUpdateDate");
            const syncMode = localStorage.getItem("syncMode");

            if (syncMode === "on") {
                if (!lastUpdateDate) {
                    await syncData();
                    localStorage.setItem(
                        "lastUpdateDate",
                        moment().toISOString(),
                    );
                    showToast("데이터를 동기화했습니다.", "success");
                    return;
                }
                const hasUpdateDatePassed = moment(lastUpdateDate).isBefore(
                    moment().subtract(7, "days"),
                );
                if (hasUpdateDatePassed) {
                    await syncData();
                    localStorage.setItem(
                        "lastUpdateDate",
                        moment().toISOString(),
                    );
                    showToast("데이터를 동기화했습니다.", "success");
                }
            }
        } catch (e) {
            showToast("데이터 동기화에 실패 했습니다.", "error");
        }
    };

    useEffect(() => {
        const handleAccessTokenChange = () => {
            const accessToken = localStorage.getItem("accessToken");
            console.log("privateRoute: " + accessToken);

            if (!accessToken) {
                navigate(ROUTES.LOGIN.PATH);
            }
            // 토큰이 존재한다면 데이터 동기화를 진행한다.
            (async () => {
                let modalOpenTimeout;
                try {
                    const syncPromise = syncDataPeriodically();

                    modalOpenTimeout = setTimeout(() => {
                        openDataSyncModal();
                    }, 1000);

                    await syncPromise;
                } catch (e) {
                } finally {
                    clearTimeout(modalOpenTimeout);
                }
                closeDataSyncModal();
            })();
        };
        // 상황1: 로그인이 되지 않은 상태에서, 검색창에 직접 인증페이지를 쳐서 들어감
        handleAccessTokenChange();

        // 상황1: 토큰이 만료되어 로컬스토리지가 업데이트됨
        window.addEventListener("accessTokenChanged", handleAccessTokenChange);

        return () => {
            window.removeEventListener(
                "accessTokenChanged",
                handleAccessTokenChange,
            ); // 정리
        };
    }, [navigate]);

    return (
        <>
            {children}
            <DataSyncModal isOpen={isDataSyncModalOpen} />
        </>
    );
};

export default PrivateRoute;
