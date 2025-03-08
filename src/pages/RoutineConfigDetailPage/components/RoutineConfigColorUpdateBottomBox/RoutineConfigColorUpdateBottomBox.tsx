import BottomBox from "headful/BottomBox/BottomBox";
import ColorTabGroup from "headful/ColorTabGroup/ColorTabGroup";
import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";
import useUpdateRoutineConfigFieldMutation from "hooks/server/useUpdateRoutineConfigFieldMutation";
import {Color} from "types/enum";

type RoutineConfigColorUpdateBottomBoxProps = {
    routineConfigId: string;
};

const RoutineConfigColorUpdateBottomBox = ({
    routineConfigId,
}: RoutineConfigColorUpdateBottomBoxProps) => {
    const {data} = useRoutineConfigGetQuery(routineConfigId);

    const routineConfig = data.routineConfig!;

    const {mutateAsync: updateRoutineConfigColor} =
        useUpdateRoutineConfigFieldMutation();

    const handleColorTabItemClick = async (value: string) => {
        await updateRoutineConfigColor({
            routineConfigId,
            key: "color",
            value,
        });
    };

    return (
        <BottomBox>
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
        </BottomBox>
    );
};

export default RoutineConfigColorUpdateBottomBox;
