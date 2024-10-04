import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineConfigListProgressView from "components/business/RoutineConfigListProgressView";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListProgressPage = () => {
    return (
        <Container>
            <ReturnPageHeader pageTitleText="운동 진행" />
            <RoutineConfigListProgressView />
        </Container>
    );
};

export default RoutineConfigListProgressPage;
