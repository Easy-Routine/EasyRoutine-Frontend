import Tab from "components/content/Tab/Tab";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import RoutineRecordListCalendarView from "./routine-record/RoutineRecordListCalendarView";
import RoutineRecordListGraphView from "./routine-record/RoutineRecordListGraphView";
import { Suspense } from "react";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// viewMapper의 타입 정의
type ViewMapper = {
    calendar: () => JSX.Element;
    graph: () => JSX.Element;
};

const RoutineRecordTabView = () => {
    const viewMapper: ViewMapper = {
        calendar: RoutineRecordListCalendarView,
        graph: RoutineRecordListGraphView, // TODO: Add Graph View component here
    };

    const { selectedValue, handleTabClick } = useTab("calendar");

    // 렌더링할 컴포넌트를 선택
    const SelectedView = viewMapper[selectedValue as keyof ViewMapper];

    return (
        <Container>
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <Tab>
                        <Tab.Button
                            value="calendar"
                            selectedValue={selectedValue}
                            onButtonClick={handleTabClick}
                        >
                            캘린더
                        </Tab.Button>
                        <Tab.Button
                            value="graph"
                            selectedValue={selectedValue}
                            onButtonClick={handleTabClick}
                        >
                            통계
                        </Tab.Button>
                    </Tab>
                    <SelectedView />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineRecordTabView;
