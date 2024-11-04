import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import UnderlineBox from "components/content/UnderlineBox/UnderlineBox";
import ROUTES from "constants/routes";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "assets/image/moon.svg";
import { ReactComponent as HumanIcon } from "assets/image/human2.svg";
import Toggle from "components/content/Toggle/Toggle";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeContextType } from "context/ThemeContext";
import { db } from "db";
import useToast from "hooks/useToast";
import convertDateStringsToDateObjects from "utils/convertDateStringsToDateObjects";
import api from "utils/axios";
import syncData from "utils/syncData";
import useGetUserOneQuery from "hooks/server/useGetUserOneQuery";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;
const UserName = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;
const LogoutButton = styled.button`
    width: 102px;
    height: 26px;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.color.background.box};
    border: 1px solid ${({ theme }) => theme.color.gray.light};
    color: ${({ theme }) => theme.color.text.black};
`;

const UnderlineBoxWrapper = styled.div``;

const MyPage = () => {
    const { themeMode, setThemeMode } = useContext(
        ThemeContext
    ) as ThemeContextType;
    const { showToast } = useToast();

    const { data: userOne, isLoading } = useGetUserOneQuery();

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
            {isLoading
                ? null
                : userOne && (
                      <ProfileBox>
                          <ProfileImage src={userOne.profileImage} />
                          <UserName>{userOne.name}</UserName>
                          <LogoutButton onClick={handleLogoutButtonClick}>
                              로그아웃
                          </LogoutButton>
                      </ProfileBox>
                  )}

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
            </UnderlineBoxWrapper>
        </Container>
    );
};

export default MyPage;
