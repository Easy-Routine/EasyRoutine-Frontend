import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import useUpdateRoutineConfigColorMutation from "hooks/server/useUpdateRoutineConfigColorMutation";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Color } from "type/Color";

type RoutineConfigColorTabBottomBarProps = {
    defaultValue: string;
};

const RoutineConfigColorTabBottomBar = ({
    defaultValue,
}: RoutineConfigColorTabBottomBarProps) => {
    const { routineConfigId } = useParams();

    const { selectedValue, setSelectedValue, handleTabClick } =
        useTab(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue, setSelectedValue]);

    const { mutateAsync: updateRoutineConfigColor } =
        useUpdateRoutineConfigColorMutation();

    const handleColorTabClick = async (
        routineConfigId: string,
        value: Color
    ) => {
        await updateRoutineConfigColor({ routineConfigId, value });

        handleTabClick(value);
    };

    return (
        <BottomBar>
            <ColorTab>
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value={Color.VIOLET}
                    backgroundColor={Color.VIOLET}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value={Color.ORANGE}
                    backgroundColor={Color.ORANGE}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value={Color.GREEN}
                    backgroundColor={Color.GREEN}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value={Color.BLUE}
                    backgroundColor={Color.BLUE}
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value={Color.PINK}
                    backgroundColor={Color.PINK}
                />
            </ColorTab>
        </BottomBar>
    );
};

export default RoutineConfigColorTabBottomBar;
