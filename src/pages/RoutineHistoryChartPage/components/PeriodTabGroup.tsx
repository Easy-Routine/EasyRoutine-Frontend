import BoxTabGroup from "headful/BoxTabGroup/BoxTabGroup";
import {Period} from "types/enum";
import {TabValue} from "headless/TabGroup/TabGroup";
import {useRoutineHistoryChartGet} from "./RoutineHistoryChartGetProvider";

const PeriodTabGroup = () => {
    const {period, setPeriod} = useRoutineHistoryChartGet();

    const handleBoxTabGroupItemClick = (value: TabValue) => {
        setPeriod(value as Period);
    };

    return (
        <BoxTabGroup defaultValue={period}>
            <BoxTabGroup.Item
                value={Period.WEEK}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                1주일
            </BoxTabGroup.Item>
            <BoxTabGroup.Item
                value={Period.MONTH}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                1개월
            </BoxTabGroup.Item>
            <BoxTabGroup.Item
                value={Period.QUARTER}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                3개월
            </BoxTabGroup.Item>
            <BoxTabGroup.Item
                value={Period.HALF}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                6개월
            </BoxTabGroup.Item>
            <BoxTabGroup.Item
                value={Period.YEAR}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                1년
            </BoxTabGroup.Item>
            <BoxTabGroup.Item
                value={Period.ALL}
                onTabGroupItemClick={handleBoxTabGroupItemClick}
            >
                전체
            </BoxTabGroup.Item>
        </BoxTabGroup>
    );
};

export default PeriodTabGroup;
