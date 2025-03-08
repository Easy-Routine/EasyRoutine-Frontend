import BottomBox from "headful/BottomBox/BottomBox";
import {ReactComponent as HomeIcon} from "assets/image/home.svg";
import {ReactComponent as GraphIcon} from "assets/image/graph.svg";
import {ReactComponent as TileIcon} from "assets/image/tile.svg";
import {ReactComponent as UserIcon} from "assets/image/user.svg";
import ROUTES from "constants/routes";
import {useNavigate} from "react-router-dom";
import IconTabGroup from "headful/IconTabGroup/IconTabGroup";

type NaviationBottomBoxProps = {
    path: string;
};

const NavigateBottomBox = ({path}: NaviationBottomBoxProps) => {
    const navigate = useNavigate();

    const handleNavigationItemClick = (value: string) => {
        navigate(value);
    };

    return (
        <BottomBox>
            <IconTabGroup defaultValue={path}>
                <IconTabGroup.Item
                    value={ROUTES.CONFIG.LIST.PATH}
                    onTabGroupItemClick={handleNavigationItemClick}
                    icon={<HomeIcon />}
                    label="홈"
                />
                <IconTabGroup.Item
                    value={ROUTES.RECORD.LIST.PATH}
                    onTabGroupItemClick={handleNavigationItemClick}
                    icon={<GraphIcon />}
                    label="기록"
                />
                <IconTabGroup.Item
                    value={ROUTES.LIBRARY.PATH}
                    onTabGroupItemClick={handleNavigationItemClick}
                    icon={<TileIcon />}
                    label="라이브러리"
                />
                <IconTabGroup.Item
                    value={ROUTES.MY.PATH}
                    onTabGroupItemClick={handleNavigationItemClick}
                    icon={<UserIcon />}
                    label="마이"
                />
            </IconTabGroup>
        </BottomBox>
    );
};

export default NavigateBottomBox;
