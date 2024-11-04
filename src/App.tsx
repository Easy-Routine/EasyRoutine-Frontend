import DataSyncModal from "components/business/DataSyncModal";
import useModal from "hooks/client/useModal";
import useToast from "hooks/useToast";
import moment from "moment";
import AppRouter from "pages/AppRouter";
import { useEffect } from "react";
import { checkAccessToken } from "services";
import styled from "styled-components";
import syncData from "utils/syncData";

const MaxWidthWrapper = styled.div`
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

const App = () => {
    const {
        isOpen: isDataSyncModalOpen,
        handleOpenModal: openDataSyncModal,
        handleCloseModal: closeDataSyncModal,
    } = useModal();
    const { showToast } = useToast();

    const syncDataPeriodically = async () => {
        try {
            const lastUpdateDate = localStorage.getItem("lastUpdateDate");
            const syncMode = localStorage.getItem("syncMode");

            if (syncMode === "on") {
                if (!lastUpdateDate) {
                    await syncData();
                    localStorage.setItem(
                        "lastUpdateDate",
                        moment().toISOString()
                    );
                    showToast("데이터를 동기화했습니다.", "success");
                    return;
                }
                const hasUpdateDatePassed = moment(lastUpdateDate).isBefore(
                    moment().subtract(7, "days")
                );
                if (hasUpdateDatePassed) {
                    await syncData();
                    localStorage.setItem(
                        "lastUpdateDate",
                        moment().toISOString()
                    );
                    showToast("데이터를 동기화했습니다.", "success");
                }
            }
        } catch (e) {
            showToast("데이터 동기화에 실패 했습니다.", "error");
        }
    };

    // handleAppMounted
    useEffect(() => {
        (async () => {
            let modalOpenTimeout;
            try {
                const isAccessTokenFresh = await checkAccessToken();

                if (isAccessTokenFresh) {
                    const syncPromise = syncDataPeriodically();

                    modalOpenTimeout = setTimeout(() => {
                        openDataSyncModal();
                    }, 1000);

                    await syncPromise;
                }
            } catch (e) {
            } finally {
                clearTimeout(modalOpenTimeout); // 모달 열기 타이머를 클리어
                closeDataSyncModal(); // 모달 닫기
            }
        })();
    }, []);

    return (
        <MaxWidthWrapper id="wrap">
            <AppRouter />
            <DataSyncModal isOpen={isDataSyncModalOpen} />
        </MaxWidthWrapper>
    );
};

export default App;
