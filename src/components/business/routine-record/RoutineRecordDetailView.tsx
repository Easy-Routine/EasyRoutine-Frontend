import styled from "styled-components";
import Box from "components/box/Box/Box";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import Accordion from "components/box/Accordion/Accordion";
import {WorkoutRecord} from "types/model";
import usegetRoutineHistoryOneQuery from "hooks/server/usegetRoutineHistoryOneMutation";
import {useNavigate, useParams} from "react-router-dom";
import WorkoutRecordDetailAccordion from "../workout-record/WorkoutRecordDetailAccordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordDetailView = () => {
    const {routineRecordId} = useParams();

    const {data: routineRecordDetail} = usegetRoutineHistoryOneQuery(
        routineRecordId as string,
    );

    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            navigate(-1);
        },
        dependencies: [],
    });

    const totalWeight = routineRecordDetail!.workoutRecords.reduce(
        (innerAcc: number, workoutRecord: WorkoutRecord) => {
            return (
                innerAcc +
                workoutRecord.setRecords.reduce((setAcc, setRecord) => {
                    return setAcc + (setRecord.weight * setRecord.rep || 0); // weight를 합산
                }, 0)
            );
        },
        0,
    );

    return (
        <Container>
            <Box>
                <TitleTextInput value={routineRecordDetail!.name} />
            </Box>
            <SummaryBox
                seconds={routineRecordDetail!.workoutTime}
                weight={totalWeight}
            />
            <Accordion.List
                data={routineRecordDetail!.workoutRecords}
                render={(workoutRecord: WorkoutRecord) => (
                    <WorkoutRecordDetailAccordion
                        key={workoutRecord._id}
                        data={workoutRecord}
                    />
                )}
            />
        </Container>
    );
};

export default RoutineRecordDetailView;
