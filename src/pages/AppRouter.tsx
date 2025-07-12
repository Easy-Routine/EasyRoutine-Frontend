import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import PageTemplate from "components/box/PageTemplate/PageTemplate";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
import ROUTES from "constants/routes";

import {Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";

const ErrorFallback = ({error}: {error: Error}) => (
    <div style={{padding: 24}}>
        <h2>예기치 못한 오류가 발생했습니다.</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>새로고침</button>
    </div>
);

const AppRouter = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense
                fallback={
                    <DefferredComponent>
                        <CommonLoading />
                    </DefferredComponent>
                }
            >
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route
                            path={ROUTES.LOGIN.PATH}
                            element={<ROUTES.LOGIN.COMPONENT />}
                        />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route
                            path={ROUTES.MY.PATH}
                            element={<ROUTES.MY.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.CONFIG.CREATE.PATH}
                            element={<ROUTES.CONFIG.CREATE.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.CONFIG.DETAIL.PATH(":routineId")}
                            element={<ROUTES.CONFIG.DETAIL.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.CONFIG.LIST.PATH}
                            element={<ROUTES.CONFIG.LIST.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.PROGRESS.PATH(":routineId")}
                            element={<ROUTES.PROGRESS.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.RECORD.CALENDAR.PATH}
                            element={<ROUTES.RECORD.CALENDAR.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.RECORD.CHART.PATH}
                            element={<ROUTES.RECORD.CHART.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.RECORD.DETAIL.PATH(
                                ":routineHistoryId",
                            )}
                            element={<ROUTES.RECORD.DETAIL.COMPONENT />}
                        />
                        <Route
                            path={ROUTES.LIBRARY.PATH}
                            element={<ROUTES.LIBRARY.COMPONENT />}
                        />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <Navigate to={ROUTES.CONFIG.LIST.PATH} replace />
                        }
                    />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRouter;
