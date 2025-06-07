import FlexBox from "headful/Flex/Flex";
import {RoutineExercise} from "types/model";
import List from "components/box/Accordion/List";
import RoutineExerciseAccordion from "./RoutineExerciseAccordion";
import BottomBoxPortal from "components/BottomBoxPortal/BottomBoxPortal";
import Flex from "headful/Flex/Flex";
import TimerModalTrigger from "./TimerModalTrigger/TimerModalTrigger";
import {useRoutineProgress} from "./RoutineProgressProvider";
import RoutineExerciseRestSecTimer from "./RoutineExerciseRestSecTimer";
import RoutineProgressCompleteButton from "./RoutineProgressCompleteButton";

type RoutineProgressContainerProps = {};

const RoutineProgressContainer = ({}: RoutineProgressContainerProps) => {
    const {routine, remainingTime} = useRoutineProgress();

    return (
        <>
            <FlexBox direction="column" gap={20}>
                <List<RoutineExercise>
                    data={routine.routineExercises}
                    render={routineExercise => (
                        <RoutineExerciseAccordion
                            routineExercise={routineExercise}
                        >
                            왜이러지
                        </RoutineExerciseAccordion>
                    )}
                />
            </FlexBox>
            <BottomBoxPortal>
                <Flex width="100%" justify="space-between" gap={16}>
                    <TimerModalTrigger remainingTime={remainingTime}>
                        <RoutineExerciseRestSecTimer
                            remainingTime={remainingTime}
                        />
                    </TimerModalTrigger>

                    <RoutineProgressCompleteButton />
                </Flex>
            </BottomBoxPortal>
        </>
    );
};

export default RoutineProgressContainer;
