import {lazy} from "react";

const LoginPage = lazy(() => import("pages/LoginPage"));
const MyPage = lazy(() => import("pages/MyPage"));
const RoutineConfigDetailPage = lazy(
    () => import("pages/RoutineConfigDetailPage/RoutineConfigDetailPage"),
);
const RoutineConfigListPage = lazy(
    () => import("pages/RoutineConfigListPage/RoutineConfigListPage"),
);
const RoutineConfigOneProgressPage = lazy(
    () => import("pages/RoutineConfigOneProgressPage"),
);
const RoutineRecordDetailPage = lazy(
    () => import("pages/RoutineRecordDetailPage"),
);
const RoutineRecordListPage = lazy(() => import("pages/RoutineRecordListPage"));
const WorkoutLibraryPage = lazy(() => import("pages/WorkoutLibraryPage"));

const ROUTES = {
    LOGIN: {
        PATH: "/login",
        COMPONENT: LoginPage,
    },
    CONFIG: {
        LIST: {
            PATH: "/",
            COMPONENT: RoutineConfigListPage,
        },
        DETAIL: {
            PATH: (routineConfigId: string) =>
                `/routine-config/${routineConfigId}`,
            COMPONENT: RoutineConfigDetailPage,
        },
    },
    RECORD: {
        LIST: {
            PATH: "/routine-record/list",
            COMPONENT: RoutineRecordListPage,
        },
        DETAIL: {
            PATH: (routineRecordId: string) =>
                `/routine-record/${routineRecordId}`,
            COMPONENT: RoutineRecordDetailPage,
        },
    },
    PROGRESS: {
        PATH: (routineRecordId: string) =>
            `/routine-progress/${routineRecordId}`,
        COMPONENT: RoutineConfigOneProgressPage,
    },
    LIBRARY: {
        PATH: "/workout-library",
        COMPONENT: WorkoutLibraryPage,
    },
    MY: {
        PATH: "/my",
        COMPONENT: MyPage,
    },
} as const;

export default ROUTES;
