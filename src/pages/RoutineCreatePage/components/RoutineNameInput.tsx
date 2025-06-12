import BasicInput from "headful/BasicInput/BasicInput";
import {useRoutineCreate} from "./RoutineCreateProvider";

const RoutineNameInput = () => {
    const {routine, setRoutine} = useRoutineCreate();
    const {name} = routine;

    const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRoutine = structuredClone(routine);
        newRoutine.name = e.target.value;
        setRoutine(newRoutine);
    };

    return <BasicInput value={name} onChange={handleInputChnage} />;
};

export default RoutineNameInput;
