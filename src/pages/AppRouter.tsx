import PageTemplate from "components/box/PageTemplate/PageTemplate";
import ROUTES from "constants/routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PageTemplate />}>
                <Route
                    path={ROUTES.LOGIN.PATH}
                    element={<ROUTES.LOGIN.COMPONENT />}
                />
                <Route
                    path={ROUTES.CONFIG.LIST.PATH}
                    element={<ROUTES.CONFIG.LIST.COMPONENT />}
                />
                <Route
                    path={ROUTES.CONFIG.DETAIL.PATH(":routineConfigId")}
                    element={<ROUTES.CONFIG.DETAIL.COMPONENT />}
                />
                <Route
                    path={ROUTES.RECORD.LIST.PATH}
                    element={<ROUTES.RECORD.LIST.COMPONENT />}
                />
                <Route
                    path={ROUTES.RECORD.DETAIL.PATH(":routineRecordId")}
                    element={<ROUTES.RECORD.DETAIL.COMPONENT />}
                />
                <Route
                    path={ROUTES.PROGRESS.PATH(":routineConfigId")}
                    element={<ROUTES.PROGRESS.COMPONENT />}
                />
                <Route
                    path={ROUTES.LIBRARY.PATH}
                    element={<ROUTES.LIBRARY.COMPONENT />}
                />
                <Route
                    path={ROUTES.MY.PATH}
                    element={<ROUTES.MY.COMPONENT />}
                />
            </Route>
        </Routes>
    );
};

export default AppRouter;
