import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import UnderlineBox from "components/content/UnderlineBox/UnderlineBox";
import ROUTES from "constants/routes";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "assets/image/moon.svg";
import { ReactComponent as HumanIcon } from "assets/image/human2.svg";
import Toggle from "components/content/Toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import { db } from "db";
import useToast from "hooks/useToast";
import convertDateStringsToDateObjects from "utils/convertDateStringsToDateObjects";
import api from "utils/axios";
import syncData from "utils/syncData";

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
    const { showToast } = useToast();

    const [syncMode, setSyncMode] = useState(
        localStorage.getItem("syncMode") &&
            localStorage.getItem("syncMode") === "on"
            ? true
            : false
    );

    const handleDarkModeToggleClick = () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
    };

    const handleSyncModeToggleClick = () => {
        localStorage.setItem("syncMode", syncMode ? "off" : "on");
        setSyncMode(!syncMode);
    };

    const handleSyncButtonClick = async () => {
        try {
            await syncData();
        } catch (e) {
            showToast("로그인이 만료되었습니다.", "error");
        }
    };

    const handleLogoutButtonClick = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        window.dispatchEvent(new Event("accessTokenChanged"));
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
                        onToggleChange={handleDarkModeToggleClick}
                    />
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <HumanIcon />
                        문의 사항
                    </UnderlineBox.TitleWrapper>
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MoonIcon />
                        동기화
                    </UnderlineBox.TitleWrapper>
                    <button onClick={handleSyncButtonClick}>동기화</button>
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MoonIcon />
                        자동 동기화 설정
                    </UnderlineBox.TitleWrapper>
                    <Toggle
                        defaultValue={syncMode}
                        onToggleChange={handleSyncModeToggleClick}
                    />
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MoonIcon />
                        로그아웃
                    </UnderlineBox.TitleWrapper>
                    <button onClick={handleLogoutButtonClick}>로그아웃</button>
                </UnderlineBox>
            </UnderlineBoxWrapper>
        </Container>
    );
};

export default MyPage;
