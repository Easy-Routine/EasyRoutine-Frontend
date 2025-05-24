import {lazy} from "react";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const MyPage = lazy(() => import("pages/MyPage/MyPage"));

const RoutineCreatePage = lazy(
    () => import("pages/RoutineCreatePage/RoutineCreatePage"),
);
const RoutineDetailPage = lazy(
    () => import("pages/RoutineDetailPage/RoutineDetailPage"),
);
const RoutineListPage = lazy(
    () => import("pages/RoutineListPage/RoutineListPage"),
);
const RoutineProgressPage = lazy(
    () => import("pages/RoutineProgressPage/RoutineProgressPage"),
);
const RoutineHistoryCalendarPage = lazy(
    () => import("pages/RoutineHistoryCalendarPage/RoutineHistoryCalendarPage"),
);
const RoutineHistoryChartPage = lazy(
    () => import("pages/RoutineHistoryChartPage/RoutineHistoryChartPage"),
);
const RoutineHistoryDetailPage = lazy(
    () => import("pages/RoutineHistoryDetailPage/RoutineHistoryDetailPage"),
);
const ExercisePage = lazy(() => import("pages/ExercisePage/ExercisePage"));

const ROUTES = {
    LOGIN: {
        PATH: "/login",
        COMPONENT: LoginPage,
    },
    MY: {
        PATH: "/my",
        COMPONENT: MyPage,
    },
    CONFIG: {
        LIST: {
            PATH: "/",
            COMPONENT: RoutineListPage,
        },
        CREATE: {
            PATH: `/routine-config/create`,
            COMPONENT: RoutineCreatePage,
        },
        DETAIL: {
            PATH: (routineId: string) => `/routine-config/${routineId}`,
            COMPONENT: RoutineDetailPage,
        },
    },
    PROGRESS: {
        PATH: (routineHistoryId: string) =>
            `/routine-progress/${routineHistoryId}`,
        COMPONENT: RoutineProgressPage,
    },
    RECORD: {
        CALENDAR: {
            PATH: "/routine-record/calendar",
            COMPONENT: RoutineHistoryCalendarPage,
        },
        CHART: {
            PATH: "/routine-record/chart",
            COMPONENT: RoutineHistoryChartPage,
        },
        DETAIL: {
            PATH: (routineHistoryId: string) =>
                `/routine-record/${routineHistoryId}`,
            COMPONENT: RoutineHistoryDetailPage,
        },
    },
    LIBRARY: {
        PATH: "/workout-library",
        COMPONENT: ExercisePage,
    },
} as const;

export default ROUTES;
