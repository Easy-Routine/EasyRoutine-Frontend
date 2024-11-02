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
import { db } from "db";
import { APIContext, APIContextType } from "context/APIProvider";
import useToast from "hooks/useToast";
import { AxiosError } from "axios";

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

    const { api } = useContext(APIContext) as APIContextType;

    const handleToggleButtonClick = () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
    };

    const handleTest = async () => {
        const routineConfigs = await db.routineConfigs.toArray();
        const routineRecords = await db.routineRecords.toArray();
        const workoutLibraries = await db.workoutLibraries.toArray();

        const data = { routineConfigs, routineRecords, workoutLibraries };
        try {
            const response = await api.post("/sync", data);

            const { routineConfigs, routineRecords, workoutLibraries } =
                response.data;

            console.log(response);

            // IndexedDB에 저장
            // await db.routineConfigs.bulkPut(routineConfigs);
            // await db.routineRecords.bulkPut(routineRecords);
            // await db.workoutLibraries.bulkPut(workoutLibraries);
        } catch (e) {
            showToast("로그인이 만료되었습니다.", "error");
        }
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

            <button onClick={handleTest}>동기화테스트</button>
        </Container>
    );
};

export default MyPage;
