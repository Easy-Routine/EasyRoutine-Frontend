import {lazy} from "react";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const MyPage = lazy(() => import("pages/MyPage/MyPage"));
const RoutineConfigDetailPage = lazy(
    () => import("pages/RoutineConfigDetailPage/RoutineConfigDetailPage"),
);
const RoutineConfigListPage = lazy(
    () => import("pages/RoutineConfigListPage/RoutineConfigListPage"),
);
const RoutineProgressPage = lazy(
    () => import("pages/RoutineProgressPage/RoutineProgressPage"),
);
const RoutineRecordCalendarPage = lazy(
    () => import("pages/RoutineRecordCalendarPage/RoutineRecordCalendarPage"),
);
const RoutineRecordChartPage = lazy(
    () => import("pages/RoutineRecordChartPage/RoutineRecordChartPage"),
);
const RoutineRecordDetailPage = lazy(
    () => import("pages/RoutineRecordDetailPage/RoutineRecordDetailPage"),
);
const WorkoutLibraryPage = lazy(
    () => import("pages/WorkoutLibraryPage/WorkoutLibraryPage"),
);

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
            COMPONENT: RoutineConfigListPage,
        },
        CREATE: {
            PATH: `/routine-config/create`,
            COMPONENT: RoutineConfigDetailPage,
        },
        DETAIL: {
            PATH: (routineConfigId: string) =>
                `/routine-config/${routineConfigId}`,
            COMPONENT: RoutineConfigDetailPage,
        },
    },
    PROGRESS: {
        PATH: (routineRecordId: string) =>
            `/routine-progress/${routineRecordId}`,
        COMPONENT: RoutineProgressPage,
    },
    RECORD: {
        CALENDAR: {
            PATH: "/routine-record/calendar",
            COMPONENT: RoutineRecordCalendarPage,
        },
        CHART: {
            PATH: "/routine-record/chart",
            COMPONENT: RoutineRecordChartPage,
        },
        DETAIL: {
            PATH: (routineRecordId: string) =>
                `/routine-record/${routineRecordId}`,
            COMPONENT: RoutineRecordDetailPage,
        },
    },
    LIBRARY: {
        PATH: "/workout-library",
        COMPONENT: WorkoutLibraryPage,
    },
} as const;

export default ROUTES;
