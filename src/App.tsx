import DataSyncModal from "components/business/DataSyncModal";
import SideBanner from "components/content/SideBanner/SideBanner";
import SplashScrren from "components/content/SplashScreen/SplashScreen";
import { db } from "db";
import useModal from "hooks/client/useModal";
import useToast from "hooks/useToast";
import moment from "moment";
import AppRouter from "pages/AppRouter";
import { useEffect, useState } from "react";
import { checkAccessToken, getBaseWorkout } from "services";
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

    const isSplashScreenShown = !!sessionStorage.getItem("isSplashScreenShown");
    const { isOpen: isSplashScreenOpen, handleCloseModal: closeSplashScreen } =
        useModal(isSplashScreenShown ? false : true);

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

    const getBaseWorkoutAPI = async () => {
        const hasBaseWorkout = localStorage.getItem("hasBaseWorkout");
        console.log(hasBaseWorkout, "hasBaseWorkout");
        if (!hasBaseWorkout) {
            const baseWorkoutLibraries = await getBaseWorkout();
            localStorage.setItem("hasBaseWorkout", "true");
            console.log(baseWorkoutLibraries);
            await db.workoutLibraries.bulkPut(baseWorkoutLibraries);
        }
    };

    // handleAppMounted
    useEffect(() => {
        let timer: NodeJS.Timer;

        (async () => {
            let modalOpenTimeout;

            // 스크린이 열려있고, 스크린이 열렸던 적이 없으면 => 스크린이 열렸던적이 잇음 => 안닫힘
            if (isSplashScreenOpen) {
                timer = setTimeout(() => {
                    sessionStorage.setItem("isSplashScreenShown", "true");
                    closeSplashScreen();
                }, 3000);
            } else {
                try {
                    const isAccessTokenFresh = await checkAccessToken();
                    await getBaseWorkoutAPI();
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
                }
                closeDataSyncModal(); // 모달 닫기
            }
        })();

        return () => clearTimeout(timer);
    }, [isSplashScreenOpen]);

    return (
        <MaxWidthWrapper id="wrap">
            {isSplashScreenOpen && <SplashScrren />}
            <AppRouter />
            <DataSyncModal isOpen={isDataSyncModalOpen} />
            <SideBanner />
        </MaxWidthWrapper>
    );
};

export default App;
