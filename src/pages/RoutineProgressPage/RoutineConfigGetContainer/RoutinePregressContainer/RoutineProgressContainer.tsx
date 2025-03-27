import FlexBox from "headful/Flex/Flex";
import {useEffect} from "react";
import {RoutineRecord, WorkoutConfig} from "types/model";
import List from "components/box/Accordion/List";
import WorkoutProgressAccordion from "./WorkoutProgressAccordion/WorkoutProgressAccordion";
import useCreateRoutineRecordOneMutation from "hooks/server/useCreateRoutineRecordOneMutation";
import BottomBoxPortal from "components/BottomBoxPortal/BottomBoxPortal";
import Flex from "headful/Flex/Flex";
import WorkoutRestSecTimer from "./WorkoutRestSecTimer/WorkoutRestSecTimer";
import BasicButton from "headful/BasicButton/BasicButton";
import TimerModalTrigger from "./TimerModalTrigger/TimerModalTrigger";
import {useRoutineProgress} from "./RoutineProgressProvider";

type RoutineProgressContainerProps = {};

const RoutineProgressContainer = ({}: RoutineProgressContainerProps) => {
    const {routineProgress, setRoutineRecord, setCurrentWorkoutId} =
        useRoutineProgress();

    return (
        <>
            <FlexBox flexDirection="column" gap={20}>
                <List<WorkoutConfig>
                    data={routineProgress.workoutConfigs}
                    render={workoutConfig => (
                        <WorkoutProgressAccordion
                            workoutConfig={workoutConfig}
                        />
                    )}
                />
            </FlexBox>
            <BottomBoxPortal>
                <Flex width="100%" justifyContent="space-between" gap={16}>
                    {/* <TimerModalTrigger remainingTime={remainingTime}>
                        <WorkoutRestSecTimer remainingTime={remainingTime} />
                    </TimerModalTrigger> */}

                    <BasicButton>루틴완료</BasicButton>
                </Flex>
            </BottomBoxPortal>
        </>
    );
};

export default RoutineProgressContainer;
