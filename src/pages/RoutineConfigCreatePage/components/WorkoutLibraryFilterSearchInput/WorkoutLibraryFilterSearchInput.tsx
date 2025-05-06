import SearchInput from "headful/SearchInput/SearchInput";
import React, {ChangeEventHandler} from "react";
import {useWorkoutLibraryAll} from "../WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";

const WorkoutLibraryFilterSearchInput = () => {
    const {name, setName} = useWorkoutLibraryAll();

    const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        setName(e.target.value);
    };
    const handleSearchInputClear = () => {
        setName("");
    };

    return (
        <SearchInput
            value={name}
            onInputChange={handleSearchInputChange}
            onInputClear={handleSearchInputClear}
        />
    );
};

export default WorkoutLibraryFilterSearchInput;
