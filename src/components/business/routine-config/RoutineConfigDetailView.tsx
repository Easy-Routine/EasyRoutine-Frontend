import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import TitleText from "components/content/TitleText/TitleText";
import RoutineConfigColorTabBottomBar from "./RoutineConfigUpdateColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "../workout-config/WorkoutConfigDetailAccordion";
import { useParams } from "react-router-dom";
import useRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import { RoutineConfig } from "db";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const initialRoutineConfigDetail: RoutineConfig = {
    id: "",
    name: "",
    color: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
    workoutConfigs: [],
};

const RoutineConfigDetailView = () => {
    const { routineConfigId } = useParams();
    const { data: routineConfigDetailData } = useRoutineConfigOneQuery(
        routineConfigId as string
    );

    const routineConfigDetail =
        routineConfigDetailData ?? initialRoutineConfigDetail;

    return (
        <Container>
            <Box>
                <TitleText>{routineConfigDetail.name}</TitleText>
            </Box>
            <Accordion.List
                data={routineConfigDetail.workoutConfigs}
                render={(workoutConfig) => (
                    <WorkoutConfigDetailAccordion data={workoutConfig} />
                )}
            />
            <RoutineConfigColorTabBottomBar
                defaultValue={routineConfigDetail.color}
            />
        </Container>
    );
};

export default RoutineConfigDetailView;
