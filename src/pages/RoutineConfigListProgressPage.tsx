import RoutineConfigListProgressView from "components/business/routine-config/RoutineConfigListProgressView";
import PageHeader from "components/content/PageHeader/PageHeader";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListProgressPage = () => {
    return (
        <Container>
            <PageHeader>
                <PageHeader.PageTitle>운동 진행</PageHeader.PageTitle>
            </PageHeader>
            <RoutineConfigListProgressView />
        </Container>
    );
};

export default RoutineConfigListProgressPage;
