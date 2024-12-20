import SideBanner from "components/content/SideBanner/SideBanner";
import SplashScrren from "components/content/SplashScreen/SplashScreen";
import {db} from "db";
import useModal from "hooks/client/useModal";
import AppRouter from "pages/AppRouter";
import {useEffect, useState} from "react";
import {getBaseWorkout} from "services";
import styled from "styled-components";

const MaxWidthWrapper = styled.div`
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

const App = () => {
    const isSplashScreenShown = !!sessionStorage.getItem("isSplashScreenShown");
    const {isOpen: isSplashScreenOpen, handleCloseModal: closeSplashScreen} =
        useModal(isSplashScreenShown ? false : true);

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
            if (isSplashScreenOpen) {
                timer = setTimeout(() => {
                    sessionStorage.setItem("isSplashScreenShown", "true");
                    closeSplashScreen();
                }, 3000);
            } else {
                try {
                    await getBaseWorkoutAPI();
                } catch (e) {
                } finally {
                }
            }
        })();

        return () => clearTimeout(timer);
    }, [isSplashScreenOpen]);

    return (
        <MaxWidthWrapper id="wrap">
            {isSplashScreenOpen && <SplashScrren />}
            <AppRouter />
            <SideBanner />
        </MaxWidthWrapper>
    );
};

export default App;
