// import BottomBar from "components/box/BottomBar/BottomBar";
// import ColorTab from "components/box/BottomBar/ColorTab";
// import NavigationTab from "components/box/BottomBar/NavigationTab";
// import { ReactComponent as HomeIcon } from "assets/image/home.svg";
// import { ReactComponent as GraphIcon } from "assets/image/graph.svg";
// import { ReactComponent as TileIcon } from "assets/image/tile.svg";
// import { ReactComponent as UserIcon } from "assets/image/user.svg";
// import useTab from "hooks/client/useTab";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "constants/routes";

// type NavigationBottomBarProps = {
//     defaultValue: string;
// };

// const NavigationBottomBar = ({ defaultValue }: NavigationBottomBarProps) => {
//     const { selectedValue, handleTabClick } = useTab(defaultValue);
//     const navigate = useNavigate();

//     const handleNavigationTabClick = (value: string) => {
//         handleTabClick(value);
//         navigate(value);
//     };

//     return (
//         <BottomBar>
//             <NavigationTab>
//                 <NavigationTab.NavItem
//                     value={ROUTES.CONFIG.LIST.PATH}
//                     selectedValue={selectedValue}
//                     onTabClick={handleNavigationTabClick}
//                 >
//                     <HomeIcon />홈
//                 </NavigationTab.NavItem>
//                 <NavigationTab.NavItem
//                     value={ROUTES.RECORD.LIST.PATH}
//                     selectedValue={selectedValue}
//                     onTabClick={handleNavigationTabClick}
//                 >
//                     <GraphIcon />
//                     기록
//                 </NavigationTab.NavItem>
//                 <NavigationTab.NavItem
//                     value={ROUTES.LIBRARY.PATH}
//                     selectedValue={selectedValue}
//                     onTabClick={handleNavigationTabClick}
//                 >
//                     <TileIcon />
//                     라이브러리
//                 </NavigationTab.NavItem>
//                 <NavigationTab.NavItem
//                     value={ROUTES.MY.PATH}
//                     selectedValue={selectedValue}
//                     onTabClick={handleNavigationTabClick}
//                 >
//                     <UserIcon />
//                     마이
//                 </NavigationTab.NavItem>
//             </NavigationTab>
//         </BottomBar>
//     );
// };

// export default NavigationBottomBar;
import React from "react";

const NavigationBottomBar = () => {
    return <div>NavigationBottomBar</div>;
};

export default NavigationBottomBar;
