import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import RoutineConfigColorTabBottomBar from "./RoutineConfigUpdateColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "../workout-config/WorkoutConfigDetailAccordion";
import { useParams } from "react-router-dom";
import useRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import RoutineConfigUpdateNameTitleText from "./RoutineConfigUpdateNameTitleText";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";

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
    return (
        <Container>
            <Box>
                <ErrorBoundary>
                    <RoutineConfigUpdateNameTitleText
                        defaultValue={routineConfigDetail!.name}
                    />
                </ErrorBoundary>
            </Box>

            <ErrorBoundary>
                <Accordion.List
                    data={routineConfigDetail!.workoutConfigs}
                    render={(workoutConfig) => (
                        <WorkoutConfigDetailAccordion
                            data={workoutConfig}
                            key={workoutConfig._id}
                        />
                    )}
                />
            </ErrorBoundary>

            <ErrorBoundary>
                <RoutineConfigColorTabBottomBar
                    defaultValue={routineConfigDetail!.color}
                />
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigDetailView;
