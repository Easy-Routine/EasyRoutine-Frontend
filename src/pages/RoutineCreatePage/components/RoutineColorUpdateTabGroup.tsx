import ColorTabGroup from "headful/ColorTabGroup/ColorTabGroup";
import {Color} from "types/enum";
import {TabValue} from "headless/TabGroup/TabGroup";
import {useRoutineCreate} from "./RoutineCreateProvider";

type RoutineColorUpdateTabGroupProps = {};

const RoutineColorUpdateTabGroup = ({}: RoutineColorUpdateTabGroupProps) => {
    const {routine, setRoutine} = useRoutineCreate();

    const handleColorTabItemClick = (value: TabValue) => {
        const newRoutine = structuredClone(routine);
        newRoutine.color = value as Color;
        setRoutine(newRoutine);
    };

    return (
        <ColorTabGroup defaultValue={routine.color}>
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

export default RoutineColorUpdateTabGroup;
