import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import useUpdateRoutineConfigColorMutation from "hooks/server/useUpdateRoutineConfigColorMutation";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

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
        value: string
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
                    value="#855CF8"
                    backgroundColor="#855CF8"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value="#F26B2C"
                    backgroundColor="#F26B2C"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value="#2DAF2D"
                    backgroundColor="#2DAF2D"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value="#455A64"
                    backgroundColor="#455A64"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={(value) =>
                        handleColorTabClick(routineConfigId as string, value)
                    }
                    value="#DD408F"
                    backgroundColor="#DD408F"
                />
            </ColorTab>
        </BottomBar>
    );
};

export default RoutineConfigColorTabBottomBar;
