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
    const syncDataPeriodically = async () => {
        const lastUpdateDate = localStorage.getItem("lastUpdateDate");
        const syncMode = localStorage.getItem("syncMode");

        if (syncMode === "on") {
            if (!lastUpdateDate) {
                await syncData();
                localStorage.setItem("lastUpdateDate", moment().toISOString());
                return;
            }
            const hasUpdateDatePassed = moment(lastUpdateDate).isBefore(
                moment().subtract(7, "days")
            );
            if (hasUpdateDatePassed) {
                await syncData();
                localStorage.setItem("lastUpdateDate", moment().toISOString());
            }
        }
    };

    // handleAppMounted
    useEffect(() => {
        (async () => {
            const isAccessTokenFresh = await checkAccessToken();
            if (isAccessTokenFresh) {
                await syncDataPeriodically();
            }
        })();
    }, []);

    return (
        <MaxWidthWrapper id="wrap">
            <AppRouter />
        </MaxWidthWrapper>
    );
};

export default App;
