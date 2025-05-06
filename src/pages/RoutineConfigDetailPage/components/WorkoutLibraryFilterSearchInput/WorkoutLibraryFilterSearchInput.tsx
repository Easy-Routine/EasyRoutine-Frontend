import SearchInput from "headful/SearchInput/SearchInput";
import React, {ChangeEventHandler} from "react";
import {useWorkoutLibraryAllGetParams} from "../WorkoutLibraryAllProvider/WorkoutLibraryAllProvider";

const WorkoutLibraryFilterSearchInput = () => {
    const {name, setName} = useWorkoutLibraryAllGetParams();

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
