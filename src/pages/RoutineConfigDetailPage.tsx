import styled from "styled-components";
import RoutineConfigDetailView from "components/business/routine-config/RoutineConfigDetailView";
import ReturnPageHeader from "components/business/ReturnPageHeader";
import WorkoutLibraryListBottomSheet from "components/business/workout-library/WorkoutLibraryListBottomSheet";

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
            <WorkoutLibraryListBottomSheet />
        </Container>
    );
};

export default RoutineConfigDetailPage;
