import styled from "styled-components";
import WorkoutLibraryBottomSheet from "components/business/WorkoutLibraryBottomSheet";
import RoutineConfigDetailView from "components/business/RoutineConfigDetailView";
import ReturnPageHeader from "components/business/ReturnPageHeader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailPage = () => {
    return (
        <Container>
            <ReturnPageHeader pageTitleText="루틴 생성" />
            <RoutineConfigDetailView />
            <WorkoutLibraryBottomSheet />
        </Container>
    );
};

export default RoutineConfigDetailPage;
