import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import useUpdateRoutineFieldMutation from "hooks/server/useUpdateRoutineFieldMutation";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Color} from "types/enum";

type RoutineColorTabBottomBarProps = {
    defaultValue: Color;
};

const RoutineColorTabBottomBar = ({
    defaultValue,
}: RoutineColorTabBottomBarProps) => {
    const {routineId} = useParams();

    const {selectedValue, setSelectedValue, handleTabClick} =
        useTab(defaultValue);

    const {mutateAsync: updateRoutineColor} = useUpdateRoutineFieldMutation();

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue, setSelectedValue]);

    const handleColorTabClick = async (routineId: string, value: Color) => {
        await updateRoutineColor({
            routineId,
            key: "color",
            value,
        });
        handleTabClick(value);
    };

    return (
        <BottomBar>
            <ColorTab>
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={value =>
                        handleColorTabClick(routineId as string, value)
                    }
                    value={Color.VIOLET}
                    backgroundColor={Color.VIOLET}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={value =>
                        handleColorTabClick(routineId as string, value)
                    }
                    value={Color.ORANGE}
                    backgroundColor={Color.ORANGE}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={value =>
                        handleColorTabClick(routineId as string, value)
                    }
                    value={Color.GREEN}
                    backgroundColor={Color.GREEN}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={value =>
                        handleColorTabClick(routineId as string, value)
                    }
                    value={Color.BLUE}
                    backgroundColor={Color.BLUE}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={value =>
                        handleColorTabClick(routineId as string, value)
                    }
                    value={Color.PINK}
                    backgroundColor={Color.PINK}
                />
            </ColorTab>
        </BottomBar>
    );
};

export default RoutineColorTabBottomBar;
