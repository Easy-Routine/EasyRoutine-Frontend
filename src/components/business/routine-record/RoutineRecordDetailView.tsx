import styled from "styled-components";
import Box from "components/box/Box/Box";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import Accordion from "components/box/Accordion/Accordion";
import {RoutineExercise} from "types/model";
import {useNavigate, useParams} from "react-router-dom";
import SummaryBox from "components/content/Summary/SummaryBox";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import useGetRoutineHistoryOneQuery from "hooks/server/useGetRoutineHistoryOneMutation";
import RoutineExerciseDetailAccordion from "../workout-record/WorkoutRecordDetailAccordion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineHistoryDetailView = () => {
    const {routineHistoryId} = useParams();

    const {data: routineHistoryDetail} = useGetRoutineHistoryOneQuery(
        routineHistoryId as string,
    );

    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            navigate(-1);
        },
        dependencies: [],
    });

    const totalWeight = routineHistoryDetail!.routineExercises.reduce(
        (innerAcc: number, routineExercise: RoutineExercise) => {
            return (
                innerAcc +
                routineExercise.sets.reduce((setAcc, set) => {
                    return setAcc + (set.weight * set.rep || 0); // weight를 합산
                }, 0)
            );
        },
        0,
    );

    return (
        <Container>
            <Box>
                <TitleTextInput value={routineHistoryDetail!.name} />
            </Box>
            <SummaryBox
                seconds={routineHistoryDetail!.workoutTime}
                weight={totalWeight}
            />
            <Accordion.List
                data={routineHistoryDetail!.routineExercises}
                render={(routineExercise: RoutineExercise) => (
                    <RoutineExerciseDetailAccordion
                        key={routineExercise.id}
                        data={routineExercise}
                    />
                )}
            />
        </Container>
    );
};

export default RoutineHistoryDetailView;
