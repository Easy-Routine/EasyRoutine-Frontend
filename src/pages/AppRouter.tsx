import PageTemplate from "components/box/PageTemplate/PageTemplate";
import ROUTES from "constants/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <PageTemplate />,
        children: [
            {
                path: ROUTES.LOGIN.PATH,
                element: <ROUTES.LOGIN.COMPONENT />,
            },
            {
                path: ROUTES.CONFIG.LIST.PATH,
                element: <ROUTES.CONFIG.LIST.COMPONENT />,
            },
            {
                path: ROUTES.CONFIG.DETAIL.PATH(":routineConfigId"),
                element: <ROUTES.CONFIG.DETAIL.COMPONENT />,
            },
            {
                path: ROUTES.RECORD.LIST.PATH,
                element: <ROUTES.RECORD.LIST.COMPONENT />,
            },
            {
                path: ROUTES.RECORD.DETAIL.PATH(":routineRecordId"),
                element: <ROUTES.RECORD.DETAIL.COMPONENT />,
            },
            {
                path: ROUTES.PROGRESS.PATH(":routineConfigId"),
                element: <ROUTES.PROGRESS.COMPONENT />,
            },
            {
                path: ROUTES.LIBRARY.PATH,
                element: <ROUTES.LIBRARY.COMPONENT />,
            },
            {
                path: ROUTES.MY.PATH,
                element: <ROUTES.MY.COMPONENT />,
            },
            {
                path: "/user/login/redirect",
                element: <ROUTES.MY.COMPONENT />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
