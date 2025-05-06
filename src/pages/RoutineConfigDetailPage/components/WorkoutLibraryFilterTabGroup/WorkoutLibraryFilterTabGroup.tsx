import ChipTabGroup from "headful/ChipTabGroup/ChipTabGroup";
import React, {useState} from "react";
import {Category} from "types/enum";
import {useWorkoutLibraryAllGetParams} from "../WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";

const WorkoutLibraryFilterTabGroup = () => {
    const {category, setCategory} = useWorkoutLibraryAllGetParams();

    const handleChipTabGroupItemClick = (value: string) => {
        setCategory(value as Category);
    };

    return (
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
    );
};

export default WorkoutLibraryFilterTabGroup;
