import SearchInput from "headful/SearchInput/SearchInput";
import React, {ChangeEventHandler} from "react";
import {useExerciseAll} from "../ExerciseAllProvider/ExerciseAllProvider";

const ExerciseFilterSearchInput = () => {
    const {name, setName} = useExerciseAll();

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
