import styled from "styled-components";
import Box from "components/box/Box/Box";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import Accordion from "components/box/Accordion/Accordion";
import { Color } from "type/Color";
import { RoutineRecord, WorkoutRecord } from "db";
import useGetRoutineRecordOneQuery from "hooks/server/useGetRoutineRecordOneMutation";
import { useParams } from "react-router-dom";
import WorkoutRecordDetailAccordion from "../workout-record/WorkoutRecordDetailAccordion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const initialRoutineRecordDetail: RoutineRecord = {
    id: "",
    name: "",
    color: Color.VIOLET,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
    workoutRecords: [],
};

const RoutineRecordDetailView = () => {
    const { routineRecordId } = useParams();

    const { data: routineRecordDetailData } = useGetRoutineRecordOneQuery(
        routineRecordId as string
    );

    const routineRecordDetail =
        routineRecordDetailData ?? initialRoutineRecordDetail;

    return (
        <Container>
            <Box>
                <TitleTextInput value={routineRecordDetail.name} />
            </Box>
            <Accordion.List
                data={routineRecordDetail.workoutRecords}
                render={(workoutRecord: WorkoutRecord) => (
                    <WorkoutRecordDetailAccordion
                        key={workoutRecord.id}
                        data={workoutRecord}
                    />
                )}
            />
        </Container>
    );
};

export default RoutineRecordDetailView;
