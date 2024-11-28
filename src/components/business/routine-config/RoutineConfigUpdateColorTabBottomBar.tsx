import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import useThrowError from "hooks/client/useThrowError";
import useUpdateRoutineConfigFieldMutation from "hooks/server/useUpdateRoutineConfigFieldMutation";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Color } from "types/enum";

type RoutineConfigColorTabBottomBarProps = {
    defaultValue: Color;
};

const RoutineConfigColorTabBottomBar = ({
    defaultValue,
}: RoutineConfigColorTabBottomBarProps) => {
    const { routineConfigId } = useParams();

    const { selectedValue, setSelectedValue, handleTabClick } =
        useTab(defaultValue);
    const { throwError } = useThrowError();

    const { mutateAsync: updateRoutineConfigColor } =
        useUpdateRoutineConfigFieldMutation();

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue, setSelectedValue]);

    const handleColorTabClick = async (
        routineConfigId: string,
        value: Color
    ) => {
        await throwError({
            fetchFn: async () =>
                await updateRoutineConfigColor({
                    routineConfigId,
                    key: "color",
                    value,
                }),
            onSuccess: () => {
                handleTabClick(value);
            },
        });
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
