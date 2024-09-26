import ROUTES from "constants/routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={ROUTES.LOGIN.PATH}
                element={<ROUTES.LOGIN.COMPONENT />}
            />
            <Route
                path={ROUTES.CONFIG.LIST.PATH}
                element={<ROUTES.CONFIG.LIST.COMPONENT />}
            />
            <Route
                path={ROUTES.CONFIG.DETAIL.PATH}
                element={<ROUTES.CONFIG.DETAIL.COMPONENT />}
            />
            <Route
                path={ROUTES.RECORD.LIST.PATH}
                element={<ROUTES.RECORD.LIST.COMPONENT />}
            />
            <Route
                path={ROUTES.RECORD.DETAIL.PATH}
                element={<ROUTES.RECORD.DETAIL.COMPONENT />}
            />
            <Route
                path={ROUTES.PROGRESS.PATH}
                element={<ROUTES.PROGRESS.COMPONENT />}
            />
            <Route
                path={ROUTES.LIBRARY.PATH}
                element={<ROUTES.LIBRARY.COMPONENT />}
            />
            <Route path={ROUTES.MY.PATH} element={<ROUTES.MY.COMPONENT />} />
        </Routes>
    );
};

export default AppRouter;
