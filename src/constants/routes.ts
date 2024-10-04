import LoginPage from "pages/LoginPage";
import MyPage from "pages/MyPage";
import RoutineConfigDetailPage from "pages/RoutineConfigDetailPage";
import RoutineConfigListPage from "pages/RoutineConfigListPage";
import RoutineConfigListProgressPage from "pages/RoutineConfigListProgressPage";
import RoutineRecordDetailPage from "pages/RoutineRecordDetailPage";
import RoutineRecordListPage from "pages/RoutineRecordListPage";
import WorkoutLibraryPage from "pages/WorkoutLibraryPage";

const ROUTES = {
    LOGIN: {
        PATH: "/login",
        COMPONENT: LoginPage,
    },
    CONFIG: {
        LIST: {
            PATH: "/routine-config/list",
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
        COMPONENT: RoutineConfigListProgressPage,
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
