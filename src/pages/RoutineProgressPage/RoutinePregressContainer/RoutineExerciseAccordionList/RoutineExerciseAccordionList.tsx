import RoutineExerciseAccordion from "pages/RoutineDetailPage/components/RoutineExerciseAccordion/RoutineExerciseAccordion";
import {RoutineExercise} from "types/model";

type RoutineExerciseAccordionListProps = {
    routineExercises: RoutineExercise[];
    routineId: string;
};

const RoutineExerciseAccordionList = ({
    routineExercises,
    routineId,
}: RoutineExerciseAccordionListProps) => {
    return (
        <>
            {routineExercises.map(routineExercise => (
                <RoutineExerciseAccordion
                    key={routineExercise.id}
                    // routineId={routineId}
                    routineExercise={routineExercise}
                >
                    뭐가꼬인거지
                </RoutineExerciseAccordion>
            ))}
        </>
    );
};

export default RoutineExerciseAccordionList;
