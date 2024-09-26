import ConfigDetailPage from "pages/ConfigDetailPage";
import ConfigListPage from "pages/ConfigListPage";
import LibraryPage from "pages/LibraryPage";
import LoginPage from "pages/LoginPage";
import MyPage from "pages/MyPage";
import ProgressPage from "pages/ProgressPage";
import RecordDetailPage from "pages/RecordDetailPage";
import RecordListPage from "pages/RecordListPage";

const ROUTES = {
    LOGIN: {
        PATH: "/login",
        COMPONENT: LoginPage,
    },
    CONFIG: {
        LIST: {
            PATH: "/config/list",
            COMPONENT: ConfigListPage,
        },
        DETAIL: {
            PATH: "/config/:routineConfigId",
            COMPONENT: ConfigDetailPage,
        },
    },
    RECORD: {
        LIST: {
            PATH: "/record/list",
            COMPONENT: RecordListPage,
        },
        DETAIL: {
            PATH: "/record/:routineConfigId",
            COMPONENT: RecordDetailPage,
        },
    },
    PROGRESS: {
        PATH: "/progress/:routineConfigId",
        COMPONENT: ProgressPage,
    },
    LIBRARY: {
        PATH: "/library",
        COMPONENT: LibraryPage,
    },
    MY: {
        PATH: "/my",
        COMPONENT: MyPage,
    },
} as const;

export default ROUTES;
