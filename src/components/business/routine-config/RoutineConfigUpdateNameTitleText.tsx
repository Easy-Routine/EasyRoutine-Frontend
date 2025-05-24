import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import useInput from "hooks/client/useInput";
import useUpdateRoutineFieldMutation from "hooks/server/useUpdateRoutineFieldMutation";

import {ChangeEvent, useEffect} from "react";
import {useParams} from "react-router-dom";

const RoutineUpdateNameTitleText = ({defaultValue}: {defaultValue: string}) => {
    const {routineId} = useParams();
    const {value, setValue, handleInputChange} = useInput(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue, setValue]);

    const {mutateAsync: updateRoutineFieldMutate} =
        useUpdateRoutineFieldMutation();

    const handleTitleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        handleInputChange(e);

        await updateRoutineFieldMutate({
            routineId: routineId as string,
            key: "name",
            value: newValue,
        });
    };

    return (
        <TitleTextInput
            disabled={false}
            onTitleTextChange={handleTitleTextChange}
            value={value}
        />
    );
};

export default RoutineUpdateNameTitleText;
