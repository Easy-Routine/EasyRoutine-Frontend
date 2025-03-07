import FlexBox from "headful/FlexBox/FlexBox";
import useGetWorkoutLibraryAllQuery from "hooks/server/useGetWorkoutLibraryAllQuery";
import {ChangeEventHandler, useState} from "react";
import SearchInput from "headful/SearchInput/SearchInput";
import ChipTabGroup from "headful/ChipTabGroup/ChipTabGroup";
import {Category} from "types/enum";
import WorkoutConfigCreateCheckBoxGroup from "../WorkoutConfigCreateCheckBoxGroup/WorkoutConfigCreateCheckBoxGroup";

type WorkoutLibraryGetContainerProps = {
    routineConfigId: string;
};

const WorkoutLibraryGetContainer = ({
    routineConfigId,
}: WorkoutLibraryGetContainerProps) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState(Category.ALL);

    const {data: workoutLibraryAllData} = useGetWorkoutLibraryAllQuery(
        name,
        category,
    );

    const workoutLibraries = workoutLibraryAllData ?? [];

    const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        setName(e.target.value);
    };
    const handleSearchInputClear = () => {
        setName("");
    };

    const handleChipTabGroupItemClick = (value: string) => {
        setCategory(value as Category);
    };

    return (
        <FlexBox flexDirection="column" gap={20}>
            <SearchInput
                value={name}
                onInputChange={handleSearchInputChange}
                onInputClear={handleSearchInputClear}
            />
            <ChipTabGroup defaultValue={category}>
                <ChipTabGroup.Item
                    value={Category.ALL}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    전체
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.CHEST}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    가슴
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.BACK}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    등
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.SHOULDER}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    어깨
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.LEG}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    하체
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.ARM}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    팔
                </ChipTabGroup.Item>
                <ChipTabGroup.Item
                    value={Category.ETC}
                    onTabGroupItemClick={handleChipTabGroupItemClick}
                >
                    기타
                </ChipTabGroup.Item>
            </ChipTabGroup>
            <WorkoutConfigCreateCheckBoxGroup
                workoutLibraries={workoutLibraries}
                routineConfigId={routineConfigId}
            />
        </FlexBox>
    );
};

export default WorkoutLibraryGetContainer;
