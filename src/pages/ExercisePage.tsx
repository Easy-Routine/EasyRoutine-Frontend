// import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
// import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
// import NavigationBottomBar from "components/business/NavigationBottomBar";
// import ExerciseListView from "components/business/workout-library/ExerciseListView";
// import CommonLoading from "components/content/CommonLoading/CommonLoading";
// import Logo from "components/content/Logo/Logo";
// import PageHeader from "components/content/PageHeader/PageHeader";
// import ToolTip from "components/content/ToolTip/ToolTip";
// import ROUTES from "constants/routes";
// import {Suspense} from "react";
// import styled from "styled-components";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
// `;
// const Flex = styled.div`
//     display: flex;
//     width: 100%;
//     justify-content: space-between;
// `;

// const ExercisePage = () => {
//     return (
//         <Container>
//             <PageHeader>
//                 <Flex>
//                     <Logo />
//                     <ToolTip
//                         text="삭제를 원하시면 2~3초 동안 운동 종목을 길게 눌러주세요."
//                         toolTipPosition="left"
//                     />
//                 </Flex>
//             </PageHeader>
//             <ErrorBoundary>
//                 <Suspense
//                     fallback={
//                         <DefferredComponent>
//                             <CommonLoading />
//                         </DefferredComponent>
//                     }
//                 >
//                     <ExerciseListView />
//                 </Suspense>
//             </ErrorBoundary>

//             <NavigationBottomBar defaultValue={ROUTES.LIBRARY.PATH} />
//         </Container>
//     );
// };

// export default ExercisePage;
import React from "react";

const ExercisePage = () => {
    return <div>ExercisePage</div>;
};

export default ExercisePage;
