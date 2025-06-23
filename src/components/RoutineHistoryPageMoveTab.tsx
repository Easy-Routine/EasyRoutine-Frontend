import ROUTES from "constants/routes";
import LineTabGroup from "headful/LineTabGroup/LineTabGroup";
import {TabValue} from "headless/TabGroup/TabGroup";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

const RoutineHistoryPageMoveTab = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTabClick = (value: TabValue) => {
        navigate(value as string);
    };

    return (
        <LineTabGroup defaultValue={location.pathname}>
            <LineTabGroup.Item
                value={ROUTES.RECORD.CALENDAR.PATH}
                onTabGroupItemClick={handleTabClick}
            >
                캘린더
            </LineTabGroup.Item>
            <LineTabGroup.Item
                value={ROUTES.RECORD.CHART.PATH}
                onTabGroupItemClick={handleTabClick}
            >
                차트
            </LineTabGroup.Item>
        </LineTabGroup>
    );
};

export default RoutineHistoryPageMoveTab;
