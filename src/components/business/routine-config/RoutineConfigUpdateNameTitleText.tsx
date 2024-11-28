import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import useInput from "hooks/client/useInput";
import useThrowError from "hooks/client/useThrowError";
import useUpdateRoutineConfigFieldMutation from "hooks/server/useUpdateRoutineConfigFieldMutation";

import { ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";

const RoutineConfigUpdateNameTitleText = ({
    defaultValue,
}: {
    defaultValue: string;
}) => {
    const { routineConfigId } = useParams();
    const { value, setValue, handleInputChange } = useInput(defaultValue);
    const { throwError } = useThrowError();

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue, setValue]);

    const { mutateAsync: updateRoutineConfigFieldMutate } =
        useUpdateRoutineConfigFieldMutation();

    const handleTitleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        handleInputChange(e);
        await throwError({
            fetchFn: async () =>
                await updateRoutineConfigFieldMutate({
                    routineConfigId: routineConfigId as string,
                    key: "name",
                    value: newValue,
                }),
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

export default RoutineConfigUpdateNameTitleText;
