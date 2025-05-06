import ColorTabGroup from "headful/ColorTabGroup/ColorTabGroup";
import {Color} from "types/enum";
import {useRoutineConfigUpdateParams} from "../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";
import {TabValue} from "headless/TabGroup/TabGroup";

type RoutineConfigColorUpdateTabGroupProps = {};

const RoutineConfigColorUpdateTabGroup =
    ({}: RoutineConfigColorUpdateTabGroupProps) => {
        const {routineConfig, setRoutineConfig} =
            useRoutineConfigUpdateParams();

        const handleColorTabItemClick = (value: TabValue) => {
            const newRoutineConfig = structuredClone(routineConfig);
            newRoutineConfig.color = value as Color;
            setRoutineConfig(newRoutineConfig);
        };

        return (
            <ColorTabGroup defaultValue={routineConfig.color}>
                <ColorTabGroup.Item
                    value={Color.VIOLET}
                    onTabGroupItemClick={handleColorTabItemClick}
                />
                <ColorTabGroup.Item
                    value={Color.ORANGE}
                    onTabGroupItemClick={handleColorTabItemClick}
                />
                <ColorTabGroup.Item
                    value={Color.GREEN}
                    onTabGroupItemClick={handleColorTabItemClick}
                />
                <ColorTabGroup.Item
                    value={Color.BLUE}
                    onTabGroupItemClick={handleColorTabItemClick}
                />
                <ColorTabGroup.Item
                    value={Color.PINK}
                    onTabGroupItemClick={handleColorTabItemClick}
                />
            </ColorTabGroup>
        );
    };

export default RoutineConfigColorUpdateTabGroup;
