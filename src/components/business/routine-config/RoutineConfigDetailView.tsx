import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import RoutineConfigColorTabBottomBar from "./RoutineConfigUpdateColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "../workout-config/WorkoutConfigDetailAccordion";
import { useParams } from "react-router-dom";
import useRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import RoutineConfigUpdateNameTitleText from "./RoutineConfigUpdateNameTitleText";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailView = () => {
    const { routineConfigId } = useParams();
    const { data: routineConfigDetail } = useRoutineConfigOneQuery(
        routineConfigId as string
    );
    console.log("데이터터", routineConfigDetail);
    return (
        <Container>
            <Box>
                <RoutineConfigUpdateNameTitleText
                    defaultValue={routineConfigDetail!.name}
                />
            </Box>
            <Accordion.List
                data={routineConfigDetail!.workoutConfigs}
                render={(workoutConfig) => (
                    <WorkoutConfigDetailAccordion
                        data={workoutConfig}
                        key={workoutConfig._id}
                    />
                )}
            />
            <RoutineConfigColorTabBottomBar
                defaultValue={routineConfigDetail!.color}
            />
        </Container>
    );
};

export default RoutineConfigDetailView;
