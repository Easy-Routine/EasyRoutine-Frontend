import SearchInput from "headful/SearchInput/SearchInput";
import React, {ChangeEventHandler} from "react";
import {useExerciseAllGetProvider} from "./ExerciseAllGetProvider";

const ExerciseFilterSearchInput = () => {
    const {keyword, setKeyword} = useExerciseAllGetProvider();

    const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        setKeyword(e.target.value);
    };
    const handleSearchInputClear = () => {
        setKeyword("");
    };

    return (
        <SearchInput
            value={keyword}
            onInputChange={handleSearchInputChange}
            onInputClear={handleSearchInputClear}
        />
    );
};

export default ExerciseFilterSearchInput;
