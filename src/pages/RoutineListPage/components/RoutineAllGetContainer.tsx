import useRoutineAllGetQuery from "hooks/server/useRoutineAllGetQuery";
import {Routine} from "types/model";

type RoutineAllGetContainerProps = {
    children: (routines: Routine[]) => React.ReactNode;
};

const RoutineAllGetContainer = ({children}: RoutineAllGetContainerProps) => {
    const {data} = useRoutineAllGetQuery();

    const routines = data.routines!;

    return <>{children(routines)}</>;
};

export default RoutineAllGetContainer;
