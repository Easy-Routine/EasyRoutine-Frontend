import PageHeader from "components/content/PageHeader/PageHeader";
import styled from "styled-components";
import WorkoutLibraryBottomSheet from "components/business/WorkoutLibraryBottomSheet";
import RoutineConfigDetailView from "components/business/RoutineConfigDetailView";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailPage = () => {
    return (
        <Container>
            <PageHeader>
                <PageHeader.ReturnCircle />
                <PageHeader.PageTitle>루틴 생성</PageHeader.PageTitle>
            </PageHeader>
            <RoutineConfigDetailView />
            <WorkoutLibraryBottomSheet />
        </Container>
    );
};

export default RoutineConfigDetailPage;
