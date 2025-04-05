// import styled from "styled-components";
// import NavigationBottomBar from "components/business/NavigationBottomBar";
// import Logo from "components/content/Logo/Logo";
// import ROUTES from "constants/routes";
// import RoutineConfigCreateFloatingActionButton from "components/business/routine-config/RoutineConfigCreateFloatingActionButton";
// import RoutineConfigListView from "components/business/routine-config/RoutineConfigListView";
// import PageHeader from "components/content/PageHeader/PageHeader";
// import { Suspense } from "react";
// import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
// import CommonLoading from "components/content/CommonLoading/CommonLoading";
// import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
// import ToolTip from "components/content/ToolTip/ToolTip";

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

// const RoutineConfigListPage = () => {
//     return (
//         <Container>
//             <PageHeader>
//                 <Flex>
//                     <Logo />
//                     <ToolTip
//                         text="삭제를 원하시면 루틴박스를 옆으로 밀어주세요."
//                         toolTipPosition="left"
//                     />
//                 </Flex>
//             </PageHeader>
//             <ErrorBoundary>
//                 <Suspense
//                     fallback={
//                         <DefferredComponent>
//                             <DefferredComponent>
//                                 <CommonLoading />
//                             </DefferredComponent>
//                         </DefferredComponent>
//                     }
//                 >
//                     <RoutineConfigListView />
//                     <RoutineConfigCreateFloatingActionButton />
//                 </Suspense>
//             </ErrorBoundary>

//             <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
//         </Container>
//     );
// };

// export default RoutineConfigListPage;
import React from "react";

const RoutineConfigListPage = () => {
    return <div>RoutineConfigListPage</div>;
};

export default RoutineConfigListPage;
