import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import UnderlineBox from "components/content/UnderlineBox/UnderlineBox";
import ROUTES from "constants/routes";
import styled, { useTheme } from "styled-components";
import { ReactComponent as MoonIcon } from "assets/image/moon.svg";
import { ReactComponent as HumanIcon } from "assets/image/human2.svg";
import Toggle from "components/content/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const UnderlineBoxWrapper = styled.div``;

const MyPage = () => {
    const { themeMode, setThemeMode } = useContext(
        ThemeContext
    ) as ThemeContextType;

    const handleToggleButtonClick = () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
    };

    return (
        <Container>
            <Logo />
            <NavigationBottomBar defaultValue={ROUTES.MY.PATH} />

            <UnderlineBoxWrapper>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MoonIcon />
                        다크모드 설정
                    </UnderlineBox.TitleWrapper>
                    <Toggle
                        defaultValue={themeMode === "dark"}
                        onToggleChange={handleToggleButtonClick}
                    />
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <HumanIcon />
                        문의 사항
                    </UnderlineBox.TitleWrapper>
                </UnderlineBox>
            </UnderlineBoxWrapper>
        </Container>
    );
};

export default MyPage;
