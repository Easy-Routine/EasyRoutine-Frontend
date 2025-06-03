import SearchInput from "headful/SearchInput/SearchInput";
import React, {ChangeEventHandler} from "react";
import {useExerciseAllGetProvider} from "./ExerciseAllGetProvider";

const ExerciseFilterSearchInput = () => {
    const {name, setName} = useExerciseAllGetProvider();

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

export default ExerciseFilterSearchInput;
